/**
 * Represents the parsed blob1 header fields.
 * Layout: [prefix][session_id(16)][udid_raw(16)][response_key(32)][auth_key(0|48)].
 */
export class Blob1Header {
  private constructor(
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
   * Parse a blob1 Buffer into a Blob1Header instance.
   * @param blob1 Header section buffer.
   * @returns Parsed Blob1Header.
   * @throws If required field sizes are not present.
   */
  static fromBuffer(blob1: Buffer): Blob1Header {
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
export class ParsedRequest {
  readonly blob1Buffer: Buffer;
  readonly blob2: Buffer;
  readonly blob1: Blob1Header;

  private constructor(blob1Buffer: Buffer, blob2: Buffer) {
    this.blob1Buffer = blob1Buffer;
    this.blob2 = blob2;
    this.blob1 = Blob1Header.fromBuffer(blob1Buffer);
  }

  /**
   * Parse a full request buffer into a ParsedRequest.
   * @param raw Full request buffer.
   * @returns Parsed request with blob1 header object and blob2 bytes.
   * @throws If the buffer is too short or sizes are inconsistent.
   */
  static parse(raw: Buffer): ParsedRequest {
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
}

/**
 * Legacy helper: parse a full request buffer into `[blob1, blob2]`.
 * Kept for backwards compatibility with older tests/consumers.
 */
export function parseRequest(raw: Buffer): [Buffer, Buffer] {
  const parsed = ParsedRequest.parse(raw);
  return [parsed.blob1Buffer, parsed.blob2];
}

/**
 * Legacy helper: parse blob1 buffer into a `Blob1Header`.
 * Kept for backwards compatibility with older tests/consumers.
 */
export function parseHeaderBlob1(blob1: Buffer): Blob1Header {
  return Blob1Header.fromBuffer(blob1);
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
