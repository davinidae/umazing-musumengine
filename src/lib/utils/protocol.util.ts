import { encode } from '@msgpack/msgpack';
import { COMMON_HEADER, DETERMINISTIC_ENC_SECRET } from '../../constants';
import { deriveIvFromUdidString } from './udid.util';
import { buildLengthPrefixedPayload } from './framing.util';
import { pkcs7Pad } from './decrypt.util';
import { decryptBlob2, encryptAes256Cbc } from '../..';
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
 * Represents the parsed blob1 header fields.
 * Layout: [prefix][session_id(16)][udid_raw(16)][response_key(32)][auth_key(0|48)].
 */
class Blob1Header {
  constructor(
    readonly prefix: Buffer,
    readonly session_id: Buffer,
    readonly udid_raw: Buffer,
    readonly response_key: Buffer,
    readonly auth_key: Buffer,
    readonly viewer_id: number = 0,
  ) {
    //
  }

  /**
   * UDID canonical dashed-format string derived from udid_raw.
   * @returns Canonical UDID string (8-4-4-4-12).
   */
  udidCanonical(): string {
    const hx = this.udid_raw.toString('hex');
    return `${hx.slice(0, 8)}-${hx.slice(8, 12)}-${hx.slice(12, 16)}-${hx.slice(16, 20)}-${hx.slice(20, 32)}`;
  }
}

/**
 * Represents a parsed full request with blob1 and blob2 sections.
 */
class ParsedRequest {
  readonly blob1Buffer: Buffer;
  readonly blob2: Buffer;
  readonly blob1: Blob1Header;

  constructor(blob1Buffer: Buffer, blob2: Buffer) {
    this.blob1Buffer = blob1Buffer;
    this.blob2 = blob2;
    this.blob1 = parseHeaderBlob1(blob1Buffer);
  }
}

/**
 * Parse a blob1 Buffer into a Blob1Header instance.
 * @throws If required field sizes are not present.
 */
export function parseHeaderBlob1(blob1: Buffer): Blob1Header {
  const FIXED_WITHOUT_AUTH = 16 + 16 + 32;
  const FIXED_WITH_AUTH = 16 + 16 + 32 + 48;
  if (blob1.length < FIXED_WITHOUT_AUTH) {
    throw new Error(`blob1 too short to contain the required ${FIXED_WITHOUT_AUTH} fixed bytes`);
  }

  const hasAuth = blob1.length >= FIXED_WITH_AUTH;
  const fixed = hasAuth ? FIXED_WITH_AUTH : FIXED_WITHOUT_AUTH;
  const prefix = blob1.subarray(0, blob1.length - fixed);
  const tail = blob1.subarray(blob1.length - fixed);
  const session_id = tail.subarray(0, 16);
  const udid_raw = tail.subarray(16, 32);
  const response_key = tail.subarray(32, 64);
  const auth_key = hasAuth ? tail.subarray(64) : Buffer.alloc(0);
  if (session_id.length !== 16) {
    throw new Error('session_id must be 16 bytes');
  }
  if (udid_raw.length !== 16) {
    throw new Error('udid_raw must be 16 bytes');
  }
  if (response_key.length !== 32) {
    throw new Error('response_key must be 32 bytes');
  }
  if (auth_key.length !== 0 && auth_key.length !== 48) {
    throw new Error('auth_key must be 0 or 48 bytes');
  }
  return new Blob1Header(prefix, session_id, udid_raw, response_key, auth_key);
}

/**
 * Parse a full request buffer into a ParsedRequest.
 * @throws If the buffer is too short or sizes are inconsistent.
 */
export function parseParsedRequest(raw: Buffer): ParsedRequest {
  if (raw.length < 4) {
    throw new Error('File too short: missing 4-byte length prefix for blob1');
  }
  const headerLen = raw.readUInt32LE(0);
  if (raw.length < 4 + headerLen) {
    throw new Error('blob1 length in header is inconsistent with actual size');
  }
  const blob1 = raw.subarray(4, 4 + headerLen);
  const blob2 = raw.subarray(4 + headerLen);
  if (blob2.length < 32) {
    throw new Error('blob2 too short: missing 32-byte AES key appended at the end');
  }
  return new ParsedRequest(blob1, blob2);
}

/**
 * Legacy helper: parse a full request buffer into `[blob1, blob2]`.
 * Kept for backwards compatibility with older tests/consumers.
 */
export function parseRequest(raw: Buffer): [Buffer, Buffer] {
  const parsed = parseParsedRequest(raw);
  return [parsed.blob1Buffer, parsed.blob2];
}

/**
 * Build a blob1 buffer with the canonical layout:
 * [prefix][session_id(16)][udid_raw(16)][response_key(32)][auth_key(0|48)].
 */
export function buildBlob1Buffer(input: {
  prefix: Buffer;
  sessionId: Buffer;
  udidRaw: Buffer;
  responseKey: Buffer;
  authKey?: Buffer;
}): Buffer {
  const { prefix, sessionId, udidRaw, responseKey } = input;
  const authKey = input.authKey ?? Buffer.alloc(0);

  if (sessionId.length !== 16) {
    throw new Error('sessionId must be 16 bytes');
  }
  if (udidRaw.length !== 16) {
    throw new Error('udidRaw must be 16 bytes');
  }
  if (responseKey.length !== 32) {
    throw new Error('responseKey must be 32 bytes');
  }
  if (authKey.length !== 0 && authKey.length !== 48) {
    throw new Error('authKey must be 0 or 48 bytes');
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
export function saltedMd5(data: Uint8Array): Uint8Array {
  const hash = crypto.createHash('md5');
  hash.update(data);
  hash.update(Buffer.from(DETERMINISTIC_ENC_SECRET, 'utf8'));
  return Uint8Array.from(hash.digest());
}

/** A 16-byte session identifier. */
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

/** Device UDID wrapper with helpers to compute IV inputs and raw bytes. */
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

/** Auth key wrapper (48 bytes when present). */
export class AuthKey {
  public constructor(public readonly bytes: Uint8Array) {}
}

/**
 * Derive a new session id from UDID and viewer id.
 * Parity with Rust implementation: md5( "{viewerId}{uuid}" || salt )
 */
export function newSessionId(udid: Udid, viewerId: bigint): SessionId {
  // Rust parity: md5( ("{viewerId}{uuid-with-hyphens}") + salt )
  const s = `${viewerId.toString()}${udid.uuid}`;
  return new SessionId(saltedMd5(Buffer.from(s, 'utf8')));
}

/**
 * Request header (blob1) builder.
 * Layout: [COMMON_HEADER][session_id(16)][udid_raw(16)][response_key(32)][auth_key(0|48)]
 */
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

function genUmaRequestKey(): Uint8Array {
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

/**
 * Encode a full request to Base64.
 * Wire format: [4B LE blob1_len][blob1][blob2].
 */
export function encodeUmaRequestB64(header: UmaReqHeader, body: unknown): string {
  const data = encode(body);
  const key = genUmaRequestKey();
  if (key.byteLength !== 32) {
    throw new Error('key must be 32 bytes');
  }

  const ivBytes = Buffer.from(header.udid.ivRepresentation());
  const plaintext = buildLengthPrefixedPayload(data);
  const padded = pkcs7Pad(plaintext, 16);
  const encrypted = encryptAes256Cbc(padded, Buffer.from(key), ivBytes);
  const blob2 = Buffer.concat([encrypted, Buffer.from(key)]);

  const blob1 = Buffer.from(header.encode());
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
