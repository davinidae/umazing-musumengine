/**
 * Apply PKCS#7 padding to a Buffer to reach a multiple of blockSize.
 * @param data Input buffer to pad.
 * @param blockSize Block size in bytes (e.g., 16 for AES).
 * @returns New buffer with padding bytes appended.
 */
export function pkcs7Pad(data: Buffer, blockSize: number): Buffer {
  if (!Number.isInteger(blockSize) || blockSize <= 0 || blockSize > 255) {
    throw new Error(`blockSize must be an integer in [1, 255], got ${blockSize}`);
  }
  const padLen = blockSize - (data.length % blockSize);
  return Buffer.concat([data, Buffer.alloc(padLen, padLen)]);
}

export abstract class UnpackStrategy {
  abstract execute(buf: Buffer): unknown | undefined;

  /**
   * Normalize common response shape: if an object has data and flattened header-like keys,
   * wrap the headers under data_headers.
   */
  normalizeResponseShape(v: unknown): unknown {
    if (v && typeof v === 'object' && !Array.isArray(v)) {
      const o = v as Record<string, unknown>;
      const hasData = Object.prototype.hasOwnProperty.call(o, 'data');
      const hasHeaders = Object.prototype.hasOwnProperty.call(o, 'data_headers');
      const looksLikeHeaders =
        Object.prototype.hasOwnProperty.call(o, 'viewer_id') ||
        Object.prototype.hasOwnProperty.call(o, 'result_code') ||
        Object.prototype.hasOwnProperty.call(o, 'server_list') ||
        Object.prototype.hasOwnProperty.call(o, 'sid') ||
        Object.prototype.hasOwnProperty.call(o, 'servertime');
      if (hasData && !hasHeaders && looksLikeHeaders) {
        const { data, ...rest } = o;
        return {
          data_headers: rest,
          data,
        };
      }
    }
    return v;
  }
}
