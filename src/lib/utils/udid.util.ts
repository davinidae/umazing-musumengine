/**
 * UDID utilities.
 */

/**
 * Convert a 16-byte raw UDID into canonical dashed string form.
 */
/**
 * udidRawToCanonicalString.
 * @param udidRaw - Type: `Uint8Array<ArrayBufferLike>`.
 * @returns Type: `string`.
 */
export function udidRawToCanonicalString(udidRaw: Uint8Array): string {
  if (udidRaw.byteLength !== 16) {
    throw new Error(`udidRaw must be 16 bytes, got ${udidRaw.byteLength}`);
  }
  /**
   * hx.
   * @remarks Type: `string`.
   * @defaultValue `Buffer.from(udidRaw).toString('hex')`
   */
  const hx = Buffer.from(udidRaw).toString('hex');
  return `${hx.slice(0, 8)}-${hx.slice(8, 12)}-${hx.slice(12, 16)}-${hx.slice(16, 20)}-${hx.slice(20, 32)}`;
}

/**
 * Derive a 16-byte IV from a canonical UDID string (first 16 ASCII chars, hyphens stripped).
 */
/**
 * deriveIvFromUdidString.
 * @param udidString - Type: `string`.
 * @returns Type: `Buffer<ArrayBufferLike>`.
 */
export function deriveIvFromUdidString(udidString: string): Buffer {
  if (!udidString) {
    throw new Error('udidString is required');
  }
  /**
   * udidNoHyphens.
   * @remarks Type: `string`.
   * @defaultValue `udidString.replace(/-/g, '').toLowerCase()`
   */
  const udidNoHyphens = udidString.replace(/-/g, '').toLowerCase();
  /**
   * ivAscii16.
   * @remarks Type: `string`.
   * @defaultValue `udidNoHyphens.slice(0, 16)`
   */
  const ivAscii16 = udidNoHyphens.slice(0, 16);
  if (ivAscii16.length !== 16) {
    throw new Error(
      `Unexpected UDID: could not derive 16-byte IV (got ${udidNoHyphens.length} chars after stripping '-')`,
    );
  }
  return Buffer.from(ivAscii16, 'utf-8');
}
