/**
 * Encryption helpers.
 */
import { createCipheriv } from 'crypto';

/**
 * AES-256-CBC encrypt without auto-PKCS#7 padding (data must already be padded).
 * @param dataPadded Input data with PKCS#7 padding applied.
 * @param key 32-byte AES key.
 * @param iv 16-byte initialization vector.
 * @returns Ciphertext Buffer.
 */
export function encryptAes256Cbc(dataPadded: Buffer, key: Buffer, iv: Buffer): Buffer {
  const cipher = createCipheriv('aes-256-cbc', key, iv);
  cipher.setAutoPadding(false);
  return Buffer.concat([cipher.update(dataPadded), cipher.final()]);
}
