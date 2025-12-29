import { describe, expect, test } from 'vitest';
import { buildLengthPrefixedPayload } from '../../../../src';

describe('framing.util', () => {
  test('buildLengthPrefixedPayload builds [u32le(len)][payload]', () => {
    const payload = Uint8Array.from([1, 2, 3]);
    const out = buildLengthPrefixedPayload(payload);

    expect(out.length).toEqual(4 + payload.length);
    expect(out.readUInt32LE(0)).toEqual(3);
    expect(out.subarray(4)).toEqual(Buffer.from([1, 2, 3]));
  });
});
