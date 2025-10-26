import { createDecipheriv, createCipheriv } from 'node:crypto';
import { decode } from '@msgpack/msgpack';

export function decryptBlob2(blob2: Buffer, iv: Buffer): { plaintext: Buffer; keyUsed: Buffer } {
  const key = blob2.subarray(blob2.length - 32);
  const ciphertext = blob2.subarray(0, blob2.length - 32);
  const decipher = createDecipheriv('aes-256-cbc', key, iv);
  decipher.setAutoPadding(true);
  const plaintext = Buffer.concat([decipher.update(ciphertext), decipher.final()]);
  return { plaintext, keyUsed: key };
}

export function unpackLengthPrefixedMsgpack(plaintext: Buffer): unknown {
  if (plaintext.length < 4) throw new Error('Decrypted payload too short for length prefix');
  const msgLen = plaintext.readUInt32LE(0);
  if (plaintext.length < 4 + msgLen) throw new Error('Msgpack length inconsistent with data');
  const mp = plaintext.subarray(4, 4 + msgLen);
  return decode(mp);
}

export function toJsonCompatible(value: any): any {
  if (value && typeof value === 'object' && !Buffer.isBuffer(value)) {
    if (Array.isArray(value)) return value.map((v) => toJsonCompatible(v));
    const out: Record<string, any> = {};
    for (const [k, v] of Object.entries(value)) {
      out[String(toJsonCompatible(k))] = toJsonCompatible(v);
    }
    return out;
  }
  if (Buffer.isBuffer(value) || value instanceof Uint8Array) {
    const b = Buffer.from(value as Uint8Array);
    try {
      return b.toString('utf-8');
    } catch {
      return 'base64:' + b.toString('base64');
    }
  }
  return value;
}

// Utilities reused by encrypt
export function pkcs7Pad(data: Buffer, blockSize: number): Buffer {
  const padLen = blockSize - (data.length % blockSize);
  return Buffer.concat([data, Buffer.alloc(padLen, padLen)]);
}

export function encryptAes256Cbc(dataPadded: Buffer, key: Buffer, iv: Buffer): Buffer {
  const cipher = createCipheriv('aes-256-cbc', key, iv);
  cipher.setAutoPadding(false);
  return Buffer.concat([cipher.update(dataPadded), cipher.final()]);
}
