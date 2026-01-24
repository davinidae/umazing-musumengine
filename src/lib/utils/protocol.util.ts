import { DETERMINISTIC_ENC_SECRET } from '../../constants';
import { deriveIvFromUdidString } from './udid.util';
import { decryptBlob2 } from '../decrypt/utils/blob.util';
import { createHash, randomBytes } from 'crypto';
import { buildLengthPrefixedPayload } from './framing.util';
import { pkcs7Pad } from './decrypt.util';
import { encryptAes256Cbc } from './encrypt.util';
import { encode } from '@msgpack/msgpack';

export const SESSION_ID_BYTES = 16;
export const UDID_RAW_BYTES = 16;
export const RESPONSE_KEY_BYTES = 32;
export const AUTH_KEY_BYTES = 48;

export type Blob1Header = {
  prefix: Buffer;
  session_id: Buffer;
  udid_raw: Buffer;
  response_key: Buffer;
  auth_key: Buffer;
  viewer_id: number;
};

export type ParsedRequest = {
  blob1Buffer: Buffer;
  blob2: Buffer;
  blob1: Blob1Header;
};

export function splitBlob1PrefixAndTail(blob1: Buffer): {
  prefix: Buffer;
  tail: Buffer;
  hasAuth: boolean;
} {
  const fixedWithoutAuth = SESSION_ID_BYTES + UDID_RAW_BYTES + RESPONSE_KEY_BYTES;
  const fixedWithAuth = fixedWithoutAuth + AUTH_KEY_BYTES;
  if (blob1.length < fixedWithoutAuth) {
    throw new Error(
      `blob1 too short: need at least ${fixedWithoutAuth} bytes, got ${blob1.length}`,
    );
  }
  const hasAuth = blob1.length >= fixedWithAuth;
  const fixed = hasAuth ? fixedWithAuth : fixedWithoutAuth;
  return {
    prefix: blob1.subarray(0, blob1.length - fixed),
    tail: blob1.subarray(blob1.length - fixed),
    hasAuth,
  };
}

export function readBlob1LengthPrefix(raw: Buffer): number {
  if (raw.length < 4) {
    throw new Error('Request buffer too short: missing 4-byte blob1 length prefix');
  }
  const headerLen = raw.readUInt32LE(0);
  if (raw.length < 4 + headerLen) {
    throw new Error(
      `Request buffer too short: blob1 length prefix (${headerLen}) exceeds available bytes (${raw.length - 4})`,
    );
  }
  return headerLen;
}

export function parseHeaderBlob1(blob1: Buffer): Blob1Header {
  const { prefix, tail, hasAuth } = splitBlob1PrefixAndTail(blob1);
  const session_id = tail.subarray(0, SESSION_ID_BYTES);
  const udid_raw = tail.subarray(SESSION_ID_BYTES, SESSION_ID_BYTES + UDID_RAW_BYTES);
  const response_key = tail.subarray(
    SESSION_ID_BYTES + UDID_RAW_BYTES,
    SESSION_ID_BYTES + UDID_RAW_BYTES + RESPONSE_KEY_BYTES,
  );
  const auth_key = hasAuth
    ? tail.subarray(SESSION_ID_BYTES + UDID_RAW_BYTES + RESPONSE_KEY_BYTES)
    : Buffer.alloc(0);
  if (session_id.length !== SESSION_ID_BYTES) {
    throw new Error(`session_id must be ${SESSION_ID_BYTES} bytes`);
  }
  if (udid_raw.length !== UDID_RAW_BYTES) {
    throw new Error(`udid_raw must be ${UDID_RAW_BYTES} bytes`);
  }
  if (response_key.length !== RESPONSE_KEY_BYTES) {
    throw new Error(`response_key must be ${RESPONSE_KEY_BYTES} bytes`);
  }
  if (auth_key.length !== 0 && auth_key.length !== AUTH_KEY_BYTES) {
    throw new Error(`auth_key must be 0 or ${AUTH_KEY_BYTES} bytes`);
  }
  return {
    prefix,
    session_id,
    udid_raw,
    response_key,
    auth_key,
    viewer_id: 0,
  };
}

export function parseParsedRequest(raw: Buffer): ParsedRequest {
  const headerLen = readBlob1LengthPrefix(raw);
  const blob1 = raw.subarray(4, 4 + headerLen);
  const blob2 = raw.subarray(4 + headerLen);
  if (blob2.length < RESPONSE_KEY_BYTES) {
    throw new Error(
      `blob2 too short: need at least ${RESPONSE_KEY_BYTES} bytes (ciphertext + key), got ${blob2.length}`,
    );
  }
  return {
    blob1Buffer: blob1,
    blob2,
    blob1: parseHeaderBlob1(blob1),
  };
}

export function parseRequest(raw: Buffer): [Buffer, Buffer] {
  const parsed = parseParsedRequest(raw);
  return [parsed.blob1Buffer, parsed.blob2];
}

export function genUmaRequestKey(): Uint8Array {
  const out: number[] = [];
  while (out.length < 32) {
    const randomNum = randomBytes(2).readUInt16LE(0);
    const hex = randomNum.toString(16); // no zero-padding
    for (let i = 0; i < hex.length; i++) {
      out.push(hex.charCodeAt(i));
    }
  }
  return Uint8Array.from(out.slice(0, 32));
}

export function buildEncryptedBlob2LengthPrefixed(
  body: unknown,
  udid: Udid,
  key: Uint8Array,
): Buffer {
  const data = encode(body);
  const ivBytes = Buffer.from(udid.ivRepresentation());
  const plaintext = buildLengthPrefixedPayload(data);
  const padded = pkcs7Pad(plaintext, 16);
  const encrypted = encryptAes256Cbc(padded, Buffer.from(key), ivBytes);
  return Buffer.concat([encrypted, Buffer.from(key)]);
}

export function buildBlob1Buffer(input: {
  prefix: Buffer;
  sessionId: Buffer;
  udidRaw: Buffer;
  responseKey: Buffer;
  authKey?: Buffer;
}): Buffer {
  const { prefix, sessionId, udidRaw, responseKey } = input;
  const authKey = input.authKey ?? Buffer.alloc(0);
  if (sessionId.length !== SESSION_ID_BYTES) {
    throw new Error(`sessionId must be ${SESSION_ID_BYTES} bytes`);
  }
  if (udidRaw.length !== UDID_RAW_BYTES) {
    throw new Error(`udidRaw must be ${UDID_RAW_BYTES} bytes`);
  }
  if (responseKey.length !== RESPONSE_KEY_BYTES) {
    throw new Error(`responseKey must be ${RESPONSE_KEY_BYTES} bytes`);
  }
  if (authKey.length !== 0 && authKey.length !== AUTH_KEY_BYTES) {
    throw new Error(`authKey must be 0 or ${AUTH_KEY_BYTES} bytes`);
  }
  return Buffer.concat([
    prefix,
    sessionId,
    udidRaw,
    responseKey,
    ...(authKey.length ? [authKey] : []),
  ]);
}

export function saltedMd5(data: Uint8Array): Uint8Array {
  const hash = createHash('md5');
  hash.update(data);
  hash.update(Buffer.from(DETERMINISTIC_ENC_SECRET, 'utf8'));
  return Uint8Array.from(hash.digest());
}

export class SessionId {
  public constructor(public readonly bytes: Uint8Array) {
    if (bytes.byteLength !== SESSION_ID_BYTES) {
      throw new Error(`SessionId must be ${SESSION_ID_BYTES} bytes`);
    }
  }

  public asHex(): string {
    return Buffer.from(this.bytes).toString('hex');
  }
}

export class Udid {
  public constructor(public readonly uuid: string) {}

  public simpleRepresentation(): string {
    return this.uuid.replace(/-/g, '').toLowerCase();
  }

  public rawBytes(): Uint8Array {
    const hex = this.simpleRepresentation();
    const normalized = hex.trim().toLowerCase();
    if (normalized.length !== UDID_RAW_BYTES * 2) {
      throw new Error(
        `UDID must be ${UDID_RAW_BYTES} bytes (${UDID_RAW_BYTES * 2} hex chars) after removing dashes`,
      );
    }
    if (normalized.length % 2 !== 0) {
      throw new Error('UDID hex must have an even number of characters');
    }
    const out = new Uint8Array(normalized.length / 2);
    for (let i = 0; i < out.length; i++) {
      const byte = Number.parseInt(normalized.slice(i * 2, i * 2 + 2), 16);
      if (!Number.isFinite(byte) || Number.isNaN(byte)) {
        throw new Error('UDID contains non-hex characters');
      }
      out[i] = byte;
    }
    return out;
  }

  public ivRepresentation(): Uint8Array {
    return Uint8Array.from(deriveIvFromUdidString(this.uuid));
  }
}

export class AuthKey {
  public constructor(public readonly bytes: Uint8Array) {
    if (bytes.byteLength !== AUTH_KEY_BYTES) {
      throw new Error(`AuthKey must be ${AUTH_KEY_BYTES} bytes`);
    }
  }
}

export function newSessionId(udid: Udid, viewerId: number): SessionId {
  return new SessionId(saltedMd5(Buffer.from([viewerId.toString(), udid.uuid].join(''), 'utf8')));
}

export function extractLengthPrefixedPayload(decrypted: Buffer): Uint8Array {
  if (decrypted.length < 4) {
    throw new Error('decrypted payload too short: missing 4-byte length prefix');
  }
  const len = decrypted.readUInt32LE(0);
  const payload = decrypted.subarray(4);
  if (len > payload.length) {
    throw new Error(
      `decrypted payload too short: length prefix (${len}) exceeds available bytes (${payload.length})`,
    );
  }
  return Uint8Array.from(payload.subarray(0, len));
}

export function decompressResponse(sourceB64: string, udid: Udid): Uint8Array {
  const source = Buffer.from(sourceB64, 'base64');
  if (source.byteLength < RESPONSE_KEY_BYTES) {
    throw new Error(
      `response too short: expected at least ${RESPONSE_KEY_BYTES} bytes, got ${source.byteLength}`,
    );
  }
  const ivBytes = Buffer.from(udid.ivRepresentation());
  const { plaintext: decrypted } = decryptBlob2(source, ivBytes);
  return extractLengthPrefixedPayload(decrypted);
}
