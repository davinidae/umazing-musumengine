import { describe, test, expect } from 'vitest';
import { encode } from '@msgpack/msgpack';
import {
  decryptBlob2,
  encryptAes256Cbc,
  pkcs7Pad,
  toJsonCompatible,
  unpackLengthPrefixedMsgpack,
} from '../../src/decrypt/common';

describe('decrypt/common exports', () => {
  test('pkcs7Pad pads to full block when already aligned', () => {
    const data = Buffer.alloc(16, 0x00);
    const padded = pkcs7Pad(data, 16);
    expect(padded.length).toBe(32);
    // last 16 bytes should be 0x10
    expect(Array.from(padded.subarray(16)).every((b) => b === 0x10)).toBe(true);
  });

  test('encryptAes256Cbc + decryptBlob2 roundtrips with chosen key/iv', () => {
    const payload = Buffer.from('hello world');
    const prefixed = Buffer.concat([Buffer.alloc(4), payload]);
    prefixed.writeUInt32LE(payload.length, 0);
    const key = Buffer.alloc(32, 0x2a); // 32B of 0x2a
    const iv = Buffer.from('000102030405060708090a0b0c0d0e0f', 'hex');
    const padded = pkcs7Pad(prefixed, 16);
    const ciphertext = encryptAes256Cbc(padded, key, iv);
    const blob2 = Buffer.concat([ciphertext, key]);
    const { plaintext, keyUsed } = decryptBlob2(blob2, iv);
    expect(keyUsed.equals(key)).toBe(true);
    // decryptBlob2 returns data with PKCS7 removed
    expect(plaintext.equals(prefixed)).toBe(true);
  });

  test('unpackLengthPrefixedMsgpack decodes payload and throws on malformed inputs', () => {
    const obj = { a: 1, s: 'ok' };
    const enc = Buffer.from(encode(obj));
    const ok = Buffer.concat([Buffer.alloc(4), enc]);
    ok.writeUInt32LE(enc.length, 0);
    expect(unpackLengthPrefixedMsgpack(ok)).toEqual(obj);

    // too short
    expect(() => unpackLengthPrefixedMsgpack(Buffer.alloc(3))).toThrow();

    // inconsistent length
    const bad = Buffer.concat([Buffer.alloc(4), enc.subarray(0, enc.length - 1)]);
    bad.writeUInt32LE(enc.length, 0);
    expect(() => unpackLengthPrefixedMsgpack(bad)).toThrow();
  });

  test('toJsonCompatible converts Buffers and nested structures', () => {
    const buf = Buffer.from('abc', 'utf-8');
    expect(toJsonCompatible(buf)).toBe('abc');

    const nested = {
      key: Buffer.from('xyz'),
      inner: { arr: [Buffer.from('qq'), 2] },
      // buffer key becomes a string key
      [Buffer.from('kk') as unknown as any]: 5,
    } as any;
    const out = toJsonCompatible(nested) as any;
    expect(out.key).toBe('xyz');
    expect(out.inner.arr[0]).toBe('qq');
    expect(out.kk).toBe(5);
  });
});
