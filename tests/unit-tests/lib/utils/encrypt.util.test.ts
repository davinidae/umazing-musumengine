import { createDecipheriv } from 'crypto';
import { describe, expect, test } from 'vitest';
import { encryptAes256Cbc } from '../../../../src';

describe('encrypt.util', () => {
  test('encryptAes256Cbc throws on invalid key length', () => {
    expect(() => encryptAes256Cbc(Buffer.alloc(16), Buffer.alloc(31), Buffer.alloc(16))).toThrow();
    expect(() => encryptAes256Cbc(Buffer.alloc(16), Buffer.alloc(33), Buffer.alloc(16))).toThrow();
  });

  test('encryptAes256Cbc throws on invalid iv length', () => {
    expect(() => encryptAes256Cbc(Buffer.alloc(16), Buffer.alloc(32), Buffer.alloc(15))).toThrow();
    expect(() => encryptAes256Cbc(Buffer.alloc(16), Buffer.alloc(32), Buffer.alloc(17))).toThrow();
  });

  test('encryptAes256Cbc throws when data is not block-aligned', () => {
    expect(() => encryptAes256Cbc(Buffer.alloc(15), Buffer.alloc(32), Buffer.alloc(16))).toThrow();
    expect(() => encryptAes256Cbc(Buffer.alloc(17), Buffer.alloc(32), Buffer.alloc(16))).toThrow();
  });

  test('encryptAes256Cbc roundtrips with Node decipher (no autopadding)', () => {
    const key = Buffer.alloc(32, 0x11);
    const iv = Buffer.alloc(16, 0x22);
    const dataPadded = Buffer.from(
      '00112233445566778899aabbccddeeff00112233445566778899aabbccddeeff',
      'hex',
    );

    const ciphertext = encryptAes256Cbc(dataPadded, key, iv);

    const decipher = createDecipheriv('aes-256-cbc', key, iv);
    decipher.setAutoPadding(false);
    const decrypted = Buffer.concat([decipher.update(ciphertext), decipher.final()]);

    expect(decrypted).toEqual(dataPadded);
  });
});
