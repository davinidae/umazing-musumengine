import { createCipheriv } from 'crypto';
import { describe, expect, test } from 'vitest';
import { decryptBlob2 } from '../../../../../src';

describe('decrypt/blob.util (unit)', () => {
  test('decryptBlob2 throws when IV is not 16 bytes', () => {
    const iv = Buffer.alloc(15);
    const blob2 = Buffer.alloc(32);
    expect(() => decryptBlob2(blob2, iv)).toThrow(/IV must be 16 bytes/i);
  });

  test('decryptBlob2 throws when blob2 is shorter than 32 bytes', () => {
    const iv = Buffer.alloc(16);
    const blob2 = Buffer.alloc(31);
    expect(() => decryptBlob2(blob2, iv)).toThrow(/blob2 too short/i);
  });

  test('decryptBlob2 returns plaintext and keyUsed for valid ciphertext+key', () => {
    const key = Buffer.alloc(32, 0x11);
    const iv = Buffer.alloc(16, 0x22);
    const plaintext = Buffer.from('hello world', 'utf8');

    const cipher = createCipheriv('aes-256-cbc', key, iv);
    const ciphertext = Buffer.concat([cipher.update(plaintext), cipher.final()]);

    const blob2 = Buffer.concat([ciphertext, key]);
    const out = decryptBlob2(blob2, iv);
    expect(out.keyUsed).toEqual(key);
    expect(out.plaintext).toEqual(plaintext);
  });

  test('decryptBlob2 throws when ciphertext is not block-aligned', () => {
    const key = Buffer.alloc(32, 0x11);
    const iv = Buffer.alloc(16, 0x22);

    const ciphertext = Buffer.from([0x01]);
    const blob2 = Buffer.concat([ciphertext, key]);

    expect(() => decryptBlob2(blob2, iv)).toThrow();
  });
});
