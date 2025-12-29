import { createDecipheriv } from 'crypto';

/**
 * Decrypts blob2 using the 32B key appended at its end and the provided IV (AES-256-CBC).
 * Returns the unpadded plaintext and the key used.
 */
/**
 * decryptBlob2.
 * @param blob2 - Type: `Buffer<ArrayBufferLike>`.
 * @param iv - Type: `Buffer<ArrayBufferLike>`.
 * @returns Type: `{ plaintext: Buffer<ArrayBufferLike>; keyUsed: Buffer<ArrayBufferLike>; }`.
 */
export function decryptBlob2(
  blob2: Buffer,
  iv: Buffer,
): {
  plaintext: Buffer;
  keyUsed: Buffer;
} {
  if (iv.length !== 16) {
    throw new Error(`IV must be 16 bytes for AES-256-CBC, got ${iv.length}`);
  }
  if (blob2.length < 32) {
    throw new Error(`blob2 too short: need at least 32 bytes (key), got ${blob2.length}`);
  }
  /**
   * key.
   * @remarks Type: `Buffer<ArrayBufferLike>`.
   * @defaultValue `blob2.subarray(blob2.length - 32)`
   */
  const key = blob2.subarray(blob2.length - 32);
  /**
   * ciphertext.
   * @remarks Type: `Buffer<ArrayBufferLike>`.
   * @defaultValue `blob2.subarray(0, blob2.length - 32)`
   */
  const ciphertext = blob2.subarray(0, blob2.length - 32);
  /**
   * decipher.
   * @remarks Type: `Decipher`.
   * @defaultValue `createDecipheriv('aes-256-cbc', key, iv)`
   */
  const decipher = createDecipheriv('aes-256-cbc', key, iv);
  decipher.setAutoPadding(true);
  /**
   * plaintext.
   * @remarks Type: `Buffer<ArrayBuffer>`.
   * @defaultValue `Buffer.concat([decipher.update(ciphertext), decipher.final()])`
   */
  const plaintext = Buffer.concat([decipher.update(ciphertext), decipher.final()]);
  return {
    plaintext,
    keyUsed: key,
  };
}
