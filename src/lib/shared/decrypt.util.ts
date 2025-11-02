/**
 * Apply PKCS#7 padding to a Buffer to reach a multiple of blockSize.
 * @param data Input buffer to pad.
 * @param blockSize Block size in bytes (e.g., 16 for AES).
 * @returns New buffer with padding bytes appended.
 */
export function pkcs7Pad(data: Buffer, blockSize: number): Buffer {
  const padLen = blockSize - (data.length % blockSize);
  return Buffer.concat([data, Buffer.alloc(padLen, padLen)]);
}
