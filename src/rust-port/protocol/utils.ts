import crypto from 'crypto';
import { encode } from '@msgpack/msgpack';
import { COMMON_HEADER, SALT } from './constants';

function u32le(value: number): Uint8Array {
  const out = new Uint8Array(4);
  out[0] = value & 0xff;
  out[1] = (value >>> 8) & 0xff;
  out[2] = (value >>> 16) & 0xff;
  out[3] = (value >>> 24) & 0xff;
  return out;
}

function concatBytes(...parts: Array<Uint8Array>): Uint8Array {
  const total = parts.reduce((sum, p) => sum + p.byteLength, 0);
  const out = new Uint8Array(total);
  let offset = 0;
  for (const part of parts) {
    out.set(part, offset);
    offset += part.byteLength;
  }
  return out;
}

export function hexToBytes(hex: string): Uint8Array {
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

export function bytesToHex(bytes: Uint8Array): string {
  return Buffer.from(bytes).toString('hex');
}

export function genKey(): Uint8Array {
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

export function saltedMd5(data: Uint8Array): Uint8Array {
  const hash = crypto.createHash('md5');
  hash.update(data);
  hash.update(Buffer.from(SALT, 'utf8'));
  return Uint8Array.from(hash.digest());
}

export class SessionId {
  public constructor(public readonly bytes: Uint8Array) {
    if (bytes.byteLength !== 16) {
      throw new Error('SessionId must be 16 bytes');
    }
  }

  public asHex(): string {
    return bytesToHex(this.bytes);
  }
}

export class Udid {
  public constructor(public readonly uuid: string) {}

  public simpleRepresentation(): string {
    return this.uuid.replace(/-/g, '').toLowerCase();
  }

  public rawBytes(): Uint8Array {
    return hexToBytes(this.simpleRepresentation());
  }

  public ivRepresentation(): Uint8Array {
    // Rust parity: ASCII bytes of first 16 chars of UUID (no hyphens).
    const simple = this.simpleRepresentation();
    const ascii = Buffer.from(simple, 'utf8');
    return Uint8Array.from(ascii.subarray(0, 16));
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
    const parts: Uint8Array[] = [
      this.commonHeader,
      this.sessionId.bytes,
      this.udid.rawBytes(),
      this.randomBytes,
    ];
    if (this.authKey) {
      parts.push(this.authKey.bytes);
    }
    const out = concatBytes(...parts);
    if (out.byteLength !== this.encodedSize()) {
      throw new Error('encoded size mismatch');
    }
    return out;
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
    const ivBytes = iv.ivRepresentation();
    const plaintext = concatBytes(u32le(this.data.byteLength), this.data);
    const cipher = crypto.createCipheriv(
      'aes-256-cbc',
      Buffer.from(this.key),
      Buffer.from(ivBytes),
    );
    const encrypted = Buffer.concat([cipher.update(Buffer.from(plaintext)), cipher.final()]);
    return Uint8Array.from(Buffer.concat([encrypted, Buffer.from(this.key)]));
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
    const headerLen = u32le(encodedHeader.byteLength);
    const out = concatBytes(headerLen, encodedHeader, encryptedBody);
    return Buffer.from(out).toString('base64');
  }

  public static build(header: UmaReqHeader, body: unknown): UmaRequest {
    const data = encode(body);
    const key = genKey();
    return new UmaRequest(header, new UmaReqBody(data, key));
  }
}

export function decompressResponse(sourceB64: string, udid: Udid): Uint8Array {
  const source = Buffer.from(sourceB64, 'base64');
  if (source.byteLength < 32) {
    throw new Error('response too short');
  }
  const key = source.subarray(source.byteLength - 32);
  const ciphertext = source.subarray(0, source.byteLength - 32);
  const ivBytes = udid.ivRepresentation();
  const decipher = crypto.createDecipheriv('aes-256-cbc', key, Buffer.from(ivBytes));
  const decrypted = Buffer.concat([decipher.update(ciphertext), decipher.final()]);
  if (decrypted.byteLength < 4) {
    throw new Error('message too short');
  }
  const len = decrypted.readUInt32LE(0);
  const payload = decrypted.subarray(4);
  if (len > payload.byteLength) {
    throw new Error('message too short');
  }
  return Uint8Array.from(payload.subarray(0, len));
}
