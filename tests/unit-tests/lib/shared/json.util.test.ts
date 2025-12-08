import { describe, test, expect } from 'vitest';
import { fromJsonFriendly, toJsonCompatible } from '../../../../src';

describe('json.util', () => {
  test('fromJsonFriendly restores Buffers from base64: prefix', () => {
    const buf = Buffer.from('hello');
    const input = {
      a: 'base64:' + buf.toString('base64'),
      b: ['base64:' + buf.toString('base64')],
    };
    const out = fromJsonFriendly(input) as {
      a: Buffer;
      b: Buffer[];
    };
    expect(Buffer.isBuffer(out.a)).toBe(true);
    expect(Buffer.isBuffer(out.b[0])).toBe(true);
    expect((out.a as Buffer).toString('utf-8')).toBe('hello');
  });

  test('toJsonCompatible stringifies buffers as utf-8 when possible', () => {
    const val = { a: Buffer.from('hi'), b: [Buffer.from('x')] };
    const out = toJsonCompatible(val);
    expect(out).toEqual({ a: 'hi', b: ['x'] });
  });

  test('toJsonCompatible falls back to base64: for binary', () => {
    const val = Buffer.from([0xff, 0x00, 0xfe]);
    const out = toJsonCompatible({ k: val }) as { k: string };
    expect(typeof out.k).toBe('string');
    expect((out.k as string).startsWith('base64:')).toBe(true);
  });
});
