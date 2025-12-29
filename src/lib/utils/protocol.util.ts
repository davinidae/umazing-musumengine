import { encode } from '@msgpack/msgpack';
import { COMMON_HEADER, DETERMINISTIC_ENC_SECRET } from '../../constants';
import { deriveIvFromUdidString } from './udid.util';
import { buildLengthPrefixedPayload } from './framing.util';
import { pkcs7Pad } from './decrypt.util';
import { encryptAes256Cbc } from './encrypt.util';
import { decryptBlob2 } from '../decrypt/utils/blob.util';
import crypto from 'crypto';

/**
 * Uma request/response wire-format helpers.
 *
 * This module centralizes:
 * - blob1 parsing/building
 * - request encoding (Base64)
 * - response decrypt+extract (Base64)
 * - session/udid helpers used by both API flows and CLI tooling
 */

/**
 * SESSION_ID_BYTES.
 * @remarks Type: `16`.
 * @defaultValue `16`
 */
const SESSION_ID_BYTES = 16;
/**
 * UDID_RAW_BYTES.
 * @remarks Type: `16`.
 * @defaultValue `16`
 */
const UDID_RAW_BYTES = 16;
/**
 * RESPONSE_KEY_BYTES.
 * @remarks Type: `32`.
 * @defaultValue `32`
 */
const RESPONSE_KEY_BYTES = 32;
/**
 * AUTH_KEY_BYTES.
 * @remarks Type: `48`.
 * @defaultValue `48`
 */
const AUTH_KEY_BYTES = 48;

type Blob1Header = {
  prefix: Buffer;
  session_id: Buffer;
  udid_raw: Buffer;
  response_key: Buffer;
  auth_key: Buffer;
  viewer_id: number;
};

type ParsedRequest = {
  blob1Buffer: Buffer;
  blob2: Buffer;
  blob1: Blob1Header;
};

/**
 * splitBlob1PrefixAndTail.
 * @param blob1 - Type: `Buffer<ArrayBufferLike>`.
 * @returns Type: `{ prefix: Buffer<ArrayBufferLike>; tail: Buffer<ArrayBufferLike>; hasAuth: boolean; }`.
 */
function splitBlob1PrefixAndTail(blob1: Buffer): {
  prefix: Buffer;
  tail: Buffer;
  hasAuth: boolean;
} {
  /**
   * fixedWithoutAuth.
   * @remarks Type: `number`.
   * @defaultValue `SESSION_ID_BYTES + UDID_RAW_BYTES + RESPONSE_KEY_BYTES`
   */
  const fixedWithoutAuth = SESSION_ID_BYTES + UDID_RAW_BYTES + RESPONSE_KEY_BYTES;
  /**
   * fixedWithAuth.
   * @remarks Type: `number`.
   * @defaultValue `fixedWithoutAuth + AUTH_KEY_BYTES`
   */
  const fixedWithAuth = fixedWithoutAuth + AUTH_KEY_BYTES;
  if (blob1.length < fixedWithoutAuth) {
    throw new Error(
      `blob1 too short: need at least ${fixedWithoutAuth} bytes, got ${blob1.length}`,
    );
  }
  /**
   * hasAuth.
   * @remarks Type: `boolean`.
   * @defaultValue `blob1.length >= fixedWithAuth`
   */
  const hasAuth = blob1.length >= fixedWithAuth;
  /**
   * fixed.
   * @remarks Type: `number`.
   * @defaultValue `hasAuth ? fixedWithAuth : fixedWithoutAuth`
   */
  const fixed = hasAuth ? fixedWithAuth : fixedWithoutAuth;
  return {
    prefix: blob1.subarray(0, blob1.length - fixed),
    tail: blob1.subarray(blob1.length - fixed),
    hasAuth,
  };
}

/**
 * readBlob1LengthPrefix.
 * @param raw - Type: `Buffer<ArrayBufferLike>`.
 * @returns Type: `number`.
 */
function readBlob1LengthPrefix(raw: Buffer): number {
  if (raw.length < 4) {
    throw new Error('Request buffer too short: missing 4-byte blob1 length prefix');
  }
  /**
   * headerLen.
   * @remarks Type: `number`.
   * @defaultValue `raw.readUInt32LE(0)`
   */
  const headerLen = raw.readUInt32LE(0);
  if (raw.length < 4 + headerLen) {
    throw new Error(
      `Request buffer too short: blob1 length prefix (${headerLen}) exceeds available bytes (${raw.length - 4})`,
    );
  }
  return headerLen;
}

/**
 * Parse a blob1 Buffer into a Blob1Header instance.
 * @throws If required field sizes are not present.
 */
/**
 * parseHeaderBlob1.
 * @param blob1 - Type: `Buffer<ArrayBufferLike>`.
 * @returns Type: `Blob1Header`.
 */
export function parseHeaderBlob1(blob1: Buffer): Blob1Header {
  /**
   * { prefix, tail, hasAuth }.
   * @remarks Type: `{ prefix: Buffer<ArrayBufferLike>; tail: Buffer<ArrayBufferLike>; hasAuth: boolean; }`.
   * @defaultValue `splitBlob1PrefixAndTail(blob1)`
   */
  const { prefix, tail, hasAuth } = splitBlob1PrefixAndTail(blob1);
  /**
   * session_id.
   * @remarks Type: `Buffer<ArrayBufferLike>`.
   * @defaultValue `tail.subarray(0, SESSION_ID_BYTES)`
   */
  const session_id = tail.subarray(0, SESSION_ID_BYTES);
  /**
   * udid_raw.
   * @remarks Type: `Buffer<ArrayBufferLike>`.
   * @defaultValue `tail.subarray(SESSION_ID_BYTES, SESSION_ID_BYTES + UDID_RAW_BYTES)`
   */
  const udid_raw = tail.subarray(SESSION_ID_BYTES, SESSION_ID_BYTES + UDID_RAW_BYTES);
  /**
   * response_key.
   * @remarks Type: `Buffer<ArrayBufferLike>`.
   * @defaultValue `tail.subarray( SESSION_ID_BYTES + UDID_RAW_BYTES, SESSION_ID_BYTES + UDID_RAW_BYTES + RESPONSE_KEY_BYTES, )`
   */
  const response_key = tail.subarray(
    SESSION_ID_BYTES + UDID_RAW_BYTES,
    SESSION_ID_BYTES + UDID_RAW_BYTES + RESPONSE_KEY_BYTES,
  );
  /**
   * auth_key.
   * @remarks Type: `Buffer<ArrayBufferLike>`.
   * @defaultValue `hasAuth ? tail.subarray(SESSION_ID_BYTES + UDID_RAW_BYTES + RESPONSE_KEY_BYTES) : Buffer.alloc(0)`
   */
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

/**
 * Parse a full request buffer into a ParsedRequest.
 * @throws If the buffer is too short or sizes are inconsistent.
 */
/**
 * parseParsedRequest.
 * @param raw - Type: `Buffer<ArrayBufferLike>`.
 * @returns Type: `ParsedRequest`.
 */
export function parseParsedRequest(raw: Buffer): ParsedRequest {
  /**
   * headerLen.
   * @remarks Type: `number`.
   * @defaultValue `readBlob1LengthPrefix(raw)`
   */
  const headerLen = readBlob1LengthPrefix(raw);
  /**
   * blob1.
   * @remarks Type: `Buffer<ArrayBufferLike>`.
   * @defaultValue `raw.subarray(4, 4 + headerLen)`
   */
  const blob1 = raw.subarray(4, 4 + headerLen);
  /**
   * blob2.
   * @remarks Type: `Buffer<ArrayBufferLike>`.
   * @defaultValue `raw.subarray(4 + headerLen)`
   */
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

/**
 * Legacy helper: parse a full request buffer into `[blob1, blob2]`.
 * Kept for backwards compatibility with older tests/consumers.
 */
/**
 * parseRequest.
 * @param raw - Type: `Buffer<ArrayBufferLike>`.
 * @returns Type: `[Buffer<ArrayBufferLike>, Buffer<ArrayBufferLike>]`.
 */
export function parseRequest(raw: Buffer): [Buffer, Buffer] {
  /**
   * parsed.
   * @remarks Type: `ParsedRequest`.
   * @defaultValue `parseParsedRequest(raw)`
   */
  const parsed = parseParsedRequest(raw);
  return [parsed.blob1Buffer, parsed.blob2];
}

/**
 * Build a blob1 buffer with the canonical layout:
 * [prefix][session_id(16)][udid_raw(16)][response_key(32)][auth_key(0|48)].
 */
/**
 * buildBlob1Buffer.
 * @param input - Type: `{ prefix: Buffer<ArrayBufferLike>; sessionId: Buffer<ArrayBufferLike>; udidRaw: Buffer<ArrayBufferLike>; responseKey: Buffer<ArrayBufferLike>; authKey?: Buffer<ArrayBufferLike> | undefined; }`.
 * @returns Type: `Buffer<ArrayBufferLike>`.
 */
export function buildBlob1Buffer(input: {
  prefix: Buffer;
  sessionId: Buffer;
  udidRaw: Buffer;
  responseKey: Buffer;
  authKey?: Buffer;
}): Buffer {
  /**
   * { prefix, sessionId, udidRaw, responseKey }.
   * @remarks Type: `{ prefix: Buffer<ArrayBufferLike>; sessionId: Buffer<ArrayBufferLike>; udidRaw: Buffer<ArrayBufferLike>; responseKey: Buffer<ArrayBufferLike>; authKey?: Buffer<ArrayBufferLike> | undefined; }`.
   * @defaultValue `input`
   */
  const { prefix, sessionId, udidRaw, responseKey } = input;
  /**
   * authKey.
   * @remarks Type: `Buffer<ArrayBufferLike>`.
   * @defaultValue `input.authKey ?? Buffer.alloc(0)`
   */
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

/**
 * MD5(data || DETERMINISTIC_ENC_SECRET).
 * Used to derive session identifiers consistent with the upstream behavior.
 */
/**
 * saltedMd5.
 * @param data - Type: `Uint8Array<ArrayBufferLike>`.
 * @returns Type: `Uint8Array<ArrayBufferLike>`.
 */
export function saltedMd5(data: Uint8Array): Uint8Array {
  /**
   * hash.
   * @remarks Type: `Hash`.
   * @defaultValue `crypto.createHash('md5')`
   */
  const hash = crypto.createHash('md5');
  hash.update(data);
  hash.update(Buffer.from(DETERMINISTIC_ENC_SECRET, 'utf8'));
  return Uint8Array.from(hash.digest());
}

/** A 16-byte session identifier. */
/**
 * SessionId.
 */
export class SessionId {
  /**
   * constructor.
   * @param bytes - Type: `Uint8Array<ArrayBufferLike>`.
   * @returns Type: `SessionId`.
   */
  public constructor(public readonly bytes: Uint8Array) {
    if (bytes.byteLength !== SESSION_ID_BYTES) {
      throw new Error(`SessionId must be ${SESSION_ID_BYTES} bytes`);
    }
  }

  /**
   * asHex.
   * @returns Type: `string`.
   */
  public asHex(): string {
    return Buffer.from(this.bytes).toString('hex');
  }
}

/** Device UDID wrapper with helpers to compute IV inputs and raw bytes. */
/**
 * Udid.
 */
export class Udid {
  /**
   * constructor.
   * @param uuid - Type: `string`.
   * @returns Type: `Udid`.
   */
  public constructor(public readonly uuid: string) {}

  /**
   * simpleRepresentation.
   * @returns Type: `string`.
   */
  public simpleRepresentation(): string {
    return this.uuid.replace(/-/g, '').toLowerCase();
  }

  /**
   * rawBytes.
   * @returns Type: `Uint8Array<ArrayBufferLike>`.
   */
  public rawBytes(): Uint8Array {
    /**
     * hex.
     * @remarks Type: `string`.
     * @defaultValue `this.simpleRepresentation()`
     */
    const hex = this.simpleRepresentation();
    /**
     * normalized.
     * @remarks Type: `string`.
     * @defaultValue `hex.trim().toLowerCase()`
     */
    const normalized = hex.trim().toLowerCase();
    if (normalized.length !== UDID_RAW_BYTES * 2) {
      throw new Error(
        `UDID must be ${UDID_RAW_BYTES} bytes (${UDID_RAW_BYTES * 2} hex chars) after removing dashes`,
      );
    }
    if (normalized.length % 2 !== 0) {
      throw new Error('UDID hex must have an even number of characters');
    }
    /**
     * out.
     * @remarks Type: `Uint8Array<ArrayBuffer>`.
     * @defaultValue `new Uint8Array(normalized.length / 2)`
     */
    const out = new Uint8Array(normalized.length / 2);
    /**
     * i.
     * @remarks Type: `number`.
     * @defaultValue `0`
     */
    for (let i = 0; i < out.length; i++) {
      /**
       * byte.
       * @remarks Type: `number`.
       * @defaultValue `Number.parseInt(normalized.slice(i * 2, i * 2 + 2), 16)`
       */
      const byte = Number.parseInt(normalized.slice(i * 2, i * 2 + 2), 16);
      if (!Number.isFinite(byte) || Number.isNaN(byte)) {
        throw new Error('UDID contains non-hex characters');
      }
      out[i] = byte;
    }
    return out;
  }

  /**
   * ivRepresentation.
   * @returns Type: `Uint8Array<ArrayBufferLike>`.
   */
  public ivRepresentation(): Uint8Array {
    // Rust parity: ASCII bytes of first 16 chars of UUID (no hyphens).
    return Uint8Array.from(deriveIvFromUdidString(this.uuid));
  }
}

/** Auth key wrapper (48 bytes when present). */
/**
 * AuthKey.
 */
export class AuthKey {
  /**
   * constructor.
   * @param bytes - Type: `Uint8Array<ArrayBufferLike>`.
   * @returns Type: `AuthKey`.
   */
  public constructor(public readonly bytes: Uint8Array) {
    if (bytes.byteLength !== AUTH_KEY_BYTES) {
      throw new Error(`AuthKey must be ${AUTH_KEY_BYTES} bytes`);
    }
  }
}

/**
 * Derive a new session id from UDID and viewer id.
 * Parity with Rust implementation: md5( "{viewerId}{uuid}" || salt )
 */
/**
 * newSessionId.
 * @param udid - Type: `Udid`.
 * @param viewerId - Type: `bigint`.
 * @returns Type: `SessionId`.
 */
export function newSessionId(udid: Udid, viewerId: bigint): SessionId {
  /**
   * s.
   *
   * Rust parity: md5( ("{viewerId}{uuid-with-hyphens}") + salt )
   *
   * @remarks Type: `string`.
   * @defaultValue ``${viewerId.toString()}${udid.uuid}``
   */
  const s = `${viewerId.toString()}${udid.uuid}`;
  return new SessionId(saltedMd5(Buffer.from(s, 'utf8')));
}

/**
 * Request header (blob1) builder.
 * Layout: [COMMON_HEADER][session_id(16)][udid_raw(16)][response_key(32)][auth_key(0|48)]
 */
/**
 * UmaReqHeader.
 */
export class UmaReqHeader {
  /**
   * commonHeader.
   * @remarks Type: `Uint8Array<ArrayBufferLike>`.
   * @defaultValue `COMMON_HEADER`
   */
  public commonHeader: Uint8Array = COMMON_HEADER;
  /**
   * randomBytes.
   * @remarks Type: `Uint8Array<ArrayBufferLike>`.
   */
  public randomBytes: Uint8Array;

  /**
   * constructor.
   * @param sessionId - Type: `SessionId`.
   * @param udid - Type: `Udid`.
   * @param authKey - Type: `AuthKey | undefined`.
   * @returns Type: `UmaReqHeader`.
   */
  public constructor(
    public sessionId: SessionId,
    public udid: Udid,
    public authKey?: AuthKey,
  ) {
    this.randomBytes = crypto.randomBytes(32);
  }

  /**
   * rerandomize.
   */
  public rerandomize(): void {
    this.randomBytes = crypto.randomBytes(32);
  }

  /**
   * encodedSize.
   * @returns Type: `number`.
   */
  public encodedSize(): number {
    return (
      this.commonHeader.byteLength +
      SESSION_ID_BYTES +
      UDID_RAW_BYTES +
      RESPONSE_KEY_BYTES +
      (this.authKey?.bytes.byteLength ?? 0)
    );
  }

  /**
   * encode.
   * @returns Type: `Uint8Array<ArrayBufferLike>`.
   */
  public encode(): Uint8Array {
    /**
     * out.
     * @remarks Type: `Buffer<ArrayBufferLike>`.
     * @defaultValue `buildBlob1Buffer({ prefix: Buffer.from(this.commonHeader), sessionId: Buffer.from(this.sessionId.bytes), udidRaw: Buffer.from(this.udid.raw…`
     */
    const out = buildBlob1Buffer({
      prefix: Buffer.from(this.commonHeader),
      sessionId: Buffer.from(this.sessionId.bytes),
      udidRaw: Buffer.from(this.udid.rawBytes()),
      responseKey: Buffer.from(this.randomBytes),
      authKey: this.authKey ? Buffer.from(this.authKey.bytes) : undefined,
    });
    if (out.byteLength !== this.encodedSize()) {
      throw new Error(
        `encoded size mismatch: expected ${this.encodedSize()} bytes, got ${out.byteLength}`,
      );
    }
    return Uint8Array.from(out);
  }
}

/**
 * genUmaRequestKey.
 * @returns Type: `Uint8Array<ArrayBufferLike>`.
 */
function genUmaRequestKey(): Uint8Array {
  /**
   * out.
   *
   * Rust parity: builds a 32-byte key by concatenating ASCII hex of random u16s
   * until length >= 32, then truncating to 32 bytes.
   *
   * @remarks Type: `number[]`.
   * @defaultValue `[]`
   */
  const out: number[] = [];
  while (out.length < 32) {
    /**
     * randomNum.
     * @remarks Type: `number`.
     * @defaultValue `crypto.randomBytes(2).readUInt16LE(0)`
     */
    const randomNum = crypto.randomBytes(2).readUInt16LE(0);
    /**
     * hex.
     * @remarks Type: `string`.
     * @defaultValue `randomNum.toString(16)`
     */
    const hex = randomNum.toString(16); // no zero-padding
    /**
     * i.
     * @remarks Type: `number`.
     * @defaultValue `0`
     */
    for (let i = 0; i < hex.length; i++) {
      out.push(hex.charCodeAt(i));
    }
  }
  return Uint8Array.from(out.slice(0, 32));
}

/**
 * buildEncryptedBlob2LengthPrefixed.
 * @param body - Type: `unknown`.
 * @param udid - Type: `Udid`.
 * @param key - Type: `Uint8Array<ArrayBufferLike>`.
 * @returns Type: `Buffer<ArrayBufferLike>`.
 */
function buildEncryptedBlob2LengthPrefixed(body: unknown, udid: Udid, key: Uint8Array): Buffer {
  /**
   * data.
   * @remarks Type: `Uint8Array<ArrayBufferLike>`.
   * @defaultValue `encode(body)`
   */
  const data = encode(body);
  /**
   * ivBytes.
   * @remarks Type: `Buffer<ArrayBuffer>`.
   * @defaultValue `Buffer.from(udid.ivRepresentation())`
   */
  const ivBytes = Buffer.from(udid.ivRepresentation());
  /**
   * plaintext.
   * @remarks Type: `Buffer<ArrayBufferLike>`.
   * @defaultValue `buildLengthPrefixedPayload(data)`
   */
  const plaintext = buildLengthPrefixedPayload(data);
  /**
   * padded.
   * @remarks Type: `Buffer<ArrayBufferLike>`.
   * @defaultValue `pkcs7Pad(plaintext, 16)`
   */
  const padded = pkcs7Pad(plaintext, 16);
  /**
   * encrypted.
   * @remarks Type: `Buffer<ArrayBufferLike>`.
   * @defaultValue `encryptAes256Cbc(padded, Buffer.from(key), ivBytes)`
   */
  const encrypted = encryptAes256Cbc(padded, Buffer.from(key), ivBytes);
  return Buffer.concat([encrypted, Buffer.from(key)]);
}

/**
 * extractLengthPrefixedPayload.
 * @param decrypted - Type: `Buffer<ArrayBufferLike>`.
 * @returns Type: `Uint8Array<ArrayBufferLike>`.
 */
function extractLengthPrefixedPayload(decrypted: Buffer): Uint8Array {
  if (decrypted.length < 4) {
    throw new Error('decrypted payload too short: missing 4-byte length prefix');
  }
  /**
   * len.
   * @remarks Type: `number`.
   * @defaultValue `decrypted.readUInt32LE(0)`
   */
  const len = decrypted.readUInt32LE(0);
  /**
   * payload.
   * @remarks Type: `Buffer<ArrayBufferLike>`.
   * @defaultValue `decrypted.subarray(4)`
   */
  const payload = decrypted.subarray(4);
  if (len > payload.length) {
    throw new Error(
      `decrypted payload too short: length prefix (${len}) exceeds available bytes (${payload.length})`,
    );
  }
  return Uint8Array.from(payload.subarray(0, len));
}

/**
 * Encode a full request to Base64.
 * Wire format: [4B LE blob1_len][blob1][blob2].
 */
/**
 * encodeUmaRequestB64.
 * @param header - Type: `UmaReqHeader`.
 * @param body - Type: `unknown`.
 * @returns Type: `string`.
 */
export function encodeUmaRequestB64(header: UmaReqHeader, body: unknown): string {
  /**
   * key.
   * @remarks Type: `Uint8Array<ArrayBufferLike>`.
   * @defaultValue `genUmaRequestKey()`
   */
  const key = genUmaRequestKey();
  if (key.byteLength !== RESPONSE_KEY_BYTES) {
    throw new Error(`key must be ${RESPONSE_KEY_BYTES} bytes`);
  }

  /**
   * blob2.
   * @remarks Type: `Buffer<ArrayBufferLike>`.
   * @defaultValue `buildEncryptedBlob2LengthPrefixed(body, header.udid, key)`
   */
  const blob2 = buildEncryptedBlob2LengthPrefixed(body, header.udid, key);

  /**
   * blob1.
   * @remarks Type: `Buffer<ArrayBuffer>`.
   * @defaultValue `Buffer.from(header.encode())`
   */
  const blob1 = Buffer.from(header.encode());
  /**
   * blob1Len.
   * @remarks Type: `Buffer<ArrayBuffer>`.
   * @defaultValue `Buffer.alloc(4)`
   */
  const blob1Len = Buffer.alloc(4);
  blob1Len.writeUInt32LE(blob1.length, 0);

  return Buffer.concat([blob1Len, blob1, blob2]).toString('base64');
}

/**
 * Decrypt and extract the (optionally length-prefixed) msgpack payload from a response body.
 *
 * @param sourceB64 Server response body (Base64-encoded blob2).
 * @param udid UDID used to derive the AES IV.
 */
/**
 * decompressResponse.
 * @param sourceB64 - Type: `string`.
 * @param udid - Type: `Udid`.
 * @returns Type: `Uint8Array<ArrayBufferLike>`.
 */
export function decompressResponse(sourceB64: string, udid: Udid): Uint8Array {
  /**
   * source.
   * @remarks Type: `Buffer<ArrayBuffer>`.
   * @defaultValue `Buffer.from(sourceB64, 'base64')`
   */
  const source = Buffer.from(sourceB64, 'base64');
  if (source.byteLength < RESPONSE_KEY_BYTES) {
    throw new Error(
      `response too short: expected at least ${RESPONSE_KEY_BYTES} bytes, got ${source.byteLength}`,
    );
  }
  /**
   * ivBytes.
   * @remarks Type: `Buffer<ArrayBuffer>`.
   * @defaultValue `Buffer.from(udid.ivRepresentation())`
   */
  const ivBytes = Buffer.from(udid.ivRepresentation());
  /**
   * { plaintext: decrypted }.
   * @remarks Type: `{ plaintext: Buffer<ArrayBufferLike>; keyUsed: Buffer<ArrayBufferLike>; }`.
   * @defaultValue `decryptBlob2(source, ivBytes)`
   */
  const { plaintext: decrypted } = decryptBlob2(source, ivBytes);
  return extractLengthPrefixedPayload(decrypted);
}
