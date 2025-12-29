import crypto from 'crypto';
import { encode } from '@msgpack/msgpack';
import { COMMON_HEADER, DETERMINISTIC_ENC_SECRET } from '../../constants';
import { buildLengthPrefixedPayload, encryptAes256Cbc, pkcs7Pad } from '../utils';
import { deriveIvFromUdidString } from '../utils/udid.util';
import { decryptBlob2 } from '../decrypt/utils';
import { buildBlob1Buffer } from '../models';

export function saltedMd5(data: Uint8Array): Uint8Array {
  const hash = crypto.createHash('md5');
  hash.update(data);
  hash.update(Buffer.from(DETERMINISTIC_ENC_SECRET, 'utf8'));
  return Uint8Array.from(hash.digest());
}

export class SessionId {
  public constructor(public readonly bytes: Uint8Array) {
    if (bytes.byteLength !== 16) {
      throw new Error('SessionId must be 16 bytes');
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
    if (normalized.length % 2 !== 0) {
      throw new Error('invalid hex');
    }
    const out = new Uint8Array(normalized.length / 2);
    for (let i = 0; i < out.length; i++) {
      const byte = Number.parseInt(normalized.slice(i * 2, i * 2 + 2), 16);
      if (!Number.isFinite(byte)) {
        throw new Error('invalid hex');
      }
      out[i] = byte;
    }
    return out;
  }

  public ivRepresentation(): Uint8Array {
    // Rust parity: ASCII bytes of first 16 chars of UUID (no hyphens).
    return Uint8Array.from(deriveIvFromUdidString(this.uuid));
  }
}

export class AuthKey {
  public constructor(public readonly bytes: Uint8Array) {}
}

export function newSessionId(udid: Udid, viewerId: bigint): SessionId {
  // Rust parity: md5( ("{viewerId}{uuid-with-hyphens}") + salt )
  const s = `${viewerId.toString()}${udid.uuid}`;
  return new SessionId(saltedMd5(Buffer.from(s, 'utf8')));
}

export class UmaReqHeader {
  public commonHeader: Uint8Array = COMMON_HEADER;
  public randomBytes: Uint8Array;

  public constructor(
    public sessionId: SessionId,
    public udid: Udid,
    public authKey?: AuthKey,
  ) {
    this.randomBytes = crypto.randomBytes(32);
  }

  public rerandomize(): void {
    this.randomBytes = crypto.randomBytes(32);
  }

  public encodedSize(): number {
    return this.commonHeader.byteLength + 16 + 16 + 32 + (this.authKey?.bytes.byteLength ?? 0);
  }

  public encode(): Uint8Array {
    const out = buildBlob1Buffer({
      prefix: Buffer.from(this.commonHeader),
      sessionId: Buffer.from(this.sessionId.bytes),
      udidRaw: Buffer.from(this.udid.rawBytes()),
      responseKey: Buffer.from(this.randomBytes),
      authKey: this.authKey ? Buffer.from(this.authKey.bytes) : undefined,
    });
    if (out.byteLength !== this.encodedSize()) {
      throw new Error('encoded size mismatch');
    }
    return Uint8Array.from(out);
  }
}

export class UmaReqBody {
  public constructor(
    public readonly data: Uint8Array,
    public readonly key: Uint8Array,
  ) {
    if (key.byteLength !== 32) {
      throw new Error('key must be 32 bytes');
    }
  }

  public encrypt(iv: Udid): Uint8Array {
    const ivBytes = Buffer.from(iv.ivRepresentation());
    const key = Buffer.from(this.key);

    const plaintext = buildLengthPrefixedPayload(this.data);
    const padded = pkcs7Pad(plaintext, 16);
    const encrypted = encryptAes256Cbc(padded, key, ivBytes);

    return Uint8Array.from(Buffer.concat([encrypted, key]));
  }
}

export class UmaRequest {
  public constructor(
    public readonly header: UmaReqHeader,
    public readonly body: UmaReqBody,
  ) {}

  public encode(): string {
    const encryptedBody = this.body.encrypt(this.header.udid);
    const encodedHeader = this.header.encode();
    const headerLen = new Uint8Array(4);
    headerLen[0] = encodedHeader.byteLength & 0xff;
    headerLen[1] = (encodedHeader.byteLength >>> 8) & 0xff;
    headerLen[2] = (encodedHeader.byteLength >>> 16) & 0xff;
    headerLen[3] = (encodedHeader.byteLength >>> 24) & 0xff;
    const parts = [headerLen, encodedHeader, encryptedBody];
    const total = parts.reduce((sum, p) => sum + p.byteLength, 0);
    const out = new Uint8Array(total);
    let offset = 0;
    for (const part of parts) {
      out.set(part, offset);
      offset += part.byteLength;
    }
    return Buffer.from(out).toString('base64');
  }
}

export function genUmaRequestKey(): Uint8Array {
  // Rust parity: builds a 32-byte key by concatenating ASCII hex of random u16s
  // until length >= 32, then truncating to 32 bytes.
  const out: number[] = [];
  while (out.length < 32) {
    const randomNum = crypto.randomBytes(2).readUInt16LE(0);
    const hex = randomNum.toString(16); // no zero-padding
    for (let i = 0; i < hex.length; i++) {
      out.push(hex.charCodeAt(i));
    }
  }
  return Uint8Array.from(out.slice(0, 32));
}

export function buildUmaRequest(header: UmaReqHeader, body: unknown): UmaRequest {
  const data = encode(body);
  const key = genUmaRequestKey();
  return new UmaRequest(header, new UmaReqBody(data, key));
}

export function decompressResponse(sourceB64: string, udid: Udid): Uint8Array {
  const source = Buffer.from(sourceB64, 'base64');
  if (source.byteLength < 32) {
    throw new Error('response too short');
  }
  const ivBytes = Buffer.from(udid.ivRepresentation());
  const { plaintext: decrypted } = decryptBlob2(source, ivBytes);
  if (decrypted.length < 4) {
    throw new Error('message too short');
  }
  const len = decrypted.readUInt32LE(0);
  const payload = decrypted.subarray(4);
  if (len > payload.length) {
    throw new Error('message too short');
  }
  const extracted = payload.subarray(0, len);
  return Uint8Array.from(extracted);
}
