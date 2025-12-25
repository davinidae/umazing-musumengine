/**
 * Represents the parsed blob1 header fields.
 * Layout: [prefix][session_id(16)][udid_raw(16)][response_key(32)][auth_key(48)].
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
    if (blob1.length < 112) {
      throw new Error('blob1 too short to contain the required 112 fixed bytes');
    }
    const prefix = blob1.subarray(0, blob1.length - 112);
    const session_id = blob1.subarray(blob1.length - 112, blob1.length - 96);
    const udid_raw = blob1.subarray(blob1.length - 96, blob1.length - 80);
    const response_key = blob1.subarray(blob1.length - 80, blob1.length - 48);
    const auth_key = blob1.subarray(blob1.length - 48);
    if (session_id.length !== 16) {
      throw new Error('session_id must be 16 bytes');
    }
    if (udid_raw.length !== 16) {
      throw new Error('udid_raw must be 16 bytes');
    }
    if (response_key.length !== 32) {
      throw new Error('response_key must be 32 bytes');
    }
    if (auth_key.length !== 48) {
      throw new Error('auth_key must be 48 bytes');
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
