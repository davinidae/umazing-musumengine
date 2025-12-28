/**
 * Protocol-related utilities: base64 file reading, request parsing, UDID helpers.
 */
import fs from 'node:fs';

/**
 * Read a text file containing Base64 (possibly with whitespace) and return its bytes.
 * @param path Absolute or relative file path.
 * @returns Buffer with decoded bytes.
 */
export function readBase64File(path: string): Buffer {
  const text = fs.readFileSync(path, {
    encoding: 'utf-8',
  });
  const compact = text.split(/\s+/).join('');
  const padding = (4 - (compact.length % 4)) % 4;
  const padded = padding ? compact + '='.repeat(padding) : compact;
  return Buffer.from(padded, 'base64');
}

/**
 * Parse a request buffer into (blob1, blob2) parts.
 * @param raw Full request buffer.
 * @returns Tuple [blob1, blob2].
 * @throws If the buffer is too short or sizes are inconsistent.
 */
export function parseRequest(raw: Buffer): [Buffer, Buffer] {
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
  return [blob1, blob2];
}

/**
 * Parse the blob1 header into its constituent fields.
 * @param blob1 Blob1 buffer section.
 * @returns An object with prefix, session_id, udid_raw, response_key, and auth_key.
 * @throws If blob1 is too short to contain required fields.
 */
export function parseHeaderBlob1(blob1: Buffer): {
  prefix: Buffer;
  session_id: Buffer;
  udid_raw: Buffer;
  response_key: Buffer;
  auth_key: Buffer;
} {
  if (blob1.length < 112) {
    throw new Error(
      `blob1 too short to contain the required 112 fixed bytes, ${blob1.length} found`,
    );
  }
  return {
    prefix: blob1.subarray(0, blob1.length - 112),
    session_id: blob1.subarray(blob1.length - 112, blob1.length - 96),
    udid_raw: blob1.subarray(blob1.length - 96, blob1.length - 80),
    response_key: blob1.subarray(blob1.length - 80, blob1.length - 48),
    auth_key: blob1.subarray(blob1.length - 48),
  };
}

/**
 * Convert a 16-byte raw UDID into canonical dashed string form.
 * @param udidRaw Raw UDID bytes.
 * @returns Canonical string form (8-4-4-4-12 hex groups).
 */
export function udidRawToCanonicalString(udidRaw: Buffer): string {
  const hx = udidRaw.toString('hex');
  return `${hx.slice(0, 8)}-${hx.slice(8, 12)}-${hx.slice(12, 16)}-${hx.slice(
    16,
    20,
  )}-${hx.slice(20, 32)}`;
}

/**
 * Derive a 16-byte IV from a canonical UDID string (first 16 ASCII chars, hyphens stripped).
 * @param udidString Canonical UDID string with hyphens.
 * @returns 16-byte IV as a Buffer.
 * @throws If the UDID does not yield 16 characters after stripping hyphens.
 */
export function deriveIvFromUdidString(udidString: string): Buffer {
  const udidNoHyphens = udidString.replace(/-/g, '');
  const ivAscii16 = udidNoHyphens.slice(0, 16);
  if (ivAscii16.length !== 16) {
    throw new Error('Unexpected UDID: could not derive 16-byte IV');
  }
  return Buffer.from(ivAscii16, 'utf-8');
}
