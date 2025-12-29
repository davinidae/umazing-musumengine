import { describe, expect, test } from 'vitest';
import { deriveIvFromUdidString, udidRawToCanonicalString } from '../../../../src';

describe('udid.util', () => {
  test('udidRawToCanonicalString throws when input is not 16 bytes', () => {
    expect(() => udidRawToCanonicalString(Uint8Array.from([]))).toThrow();
    expect(() => udidRawToCanonicalString(Uint8Array.from([1, 2, 3]))).toThrow();
    expect(() => udidRawToCanonicalString(Uint8Array.from(new Array(15).fill(0)))).toThrow();
    expect(() => udidRawToCanonicalString(Uint8Array.from(new Array(17).fill(0)))).toThrow();
  });

  test('deriveIvFromUdidString returns ASCII bytes of first 16 chars (hyphens stripped)', () => {
    const canon = '00112233-4455-6677-8899-aabbccddeeff';
    const iv = deriveIvFromUdidString(canon);
    expect(iv.length).toEqual(16);
    expect(iv).toEqual(Buffer.from('0011223344556677', 'utf8'));
  });

  test('deriveIvFromUdidString throws on empty or too-short inputs', () => {
    expect(() => deriveIvFromUdidString('')).toThrow();
    expect(() => deriveIvFromUdidString('abcd-ef')).toThrow();
  });
});
