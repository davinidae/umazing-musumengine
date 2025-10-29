import { createDecipheriv } from 'node:crypto';

/**
 * Decrypts blob2 using the 32B key appended at its end and the provided IV (AES-256-CBC).
 * Returns the unpadded plaintext and the key used.
 */
export function decryptBlob2(blob2: Buffer, iv: Buffer): { plaintext: Buffer; keyUsed: Buffer } {
  const key = blob2.subarray(blob2.length - 32);
  const ciphertext = blob2.subarray(0, blob2.length - 32);
  const decipher = createDecipheriv('aes-256-cbc', key, iv);
  decipher.setAutoPadding(true);
  const plaintext = Buffer.concat([decipher.update(ciphertext), decipher.final()]);
  return {
    plaintext,
    keyUsed: key,
  };
}
