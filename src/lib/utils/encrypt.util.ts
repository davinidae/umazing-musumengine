import { createCipheriv } from 'crypto';

export function encryptAes256Cbc(dataPadded: Buffer, key: Buffer, iv: Buffer): Buffer {
  if (key.length !== 32) {
    throw new Error(`AES-256-CBC key must be 32 bytes, got ${key.length}`);
  }
  if (iv.length !== 16) {
    throw new Error(`AES-256-CBC iv must be 16 bytes, got ${iv.length}`);
  }
  if (dataPadded.length % 16 !== 0) {
    throw new Error(
      `AES-256-CBC data must be padded to a multiple of 16 bytes, got ${dataPadded.length}`,
    );
  }
  const cipher = createCipheriv('aes-256-cbc', key, iv);
  cipher.setAutoPadding(false);
  return Buffer.concat([cipher.update(dataPadded), cipher.final()]);
}
