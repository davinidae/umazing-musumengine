import { describe, expect, test } from 'vitest';
import { pkcs7Pad } from '../../../../src';

describe('decrypt.util', () => {
  test('pkcs7Pad throws on invalid blockSize', () => {
    expect(() => pkcs7Pad(Buffer.from([]), 0)).toThrow();
    expect(() => pkcs7Pad(Buffer.from([]), -1)).toThrow();
    expect(() => pkcs7Pad(Buffer.from([]), 256)).toThrow();
    expect(() => pkcs7Pad(Buffer.from([]), 1.5)).toThrow();
    expect(() => pkcs7Pad(Buffer.from([]), Number.NaN)).toThrow();
  });

  test('pkcs7Pad pads to blockSize and uses PKCS#7 byte values', () => {
    const out = pkcs7Pad(Buffer.from([0x01, 0x02, 0x03]), 8);
    expect(out.length).toEqual(8);
    // padLen=5, last 5 bytes should be 0x05
    expect(out.subarray(3)).toEqual(Buffer.from([0x05, 0x05, 0x05, 0x05, 0x05]));
  });

  test('pkcs7Pad adds a full block when already aligned', () => {
    const input = Buffer.alloc(16, 0xaa);
    const out = pkcs7Pad(input, 16);
    expect(out.length).toEqual(32);
    expect(out.subarray(0, 16)).toEqual(input);
    expect(out.subarray(16)).toEqual(Buffer.alloc(16, 16));
  });
});
