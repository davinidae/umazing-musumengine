import { describe, test, expect } from 'vitest';
import {
  parseRequest,
  parseHeaderBlob1,
  udidRawToCanonicalString,
  deriveIvFromUdidString,
} from '../../../../src';

export function buildRequest(prefixHex: string): Buffer {
  const prefix = Buffer.from(prefixHex, 'hex');
  const session = Buffer.from('11'.repeat(16), 'hex');
  const udid = Buffer.from('22'.repeat(16), 'hex');
  const respKey = Buffer.from('33'.repeat(32), 'hex');
  const auth = Buffer.from('44'.repeat(48), 'hex');
  const blob1 = Buffer.concat([prefix, session, udid, respKey, auth]);
  const key = Buffer.from('55'.repeat(32), 'hex');
  const blob2 = Buffer.concat([Buffer.alloc(0), key]);
  const raw = Buffer.concat([Buffer.alloc(4), blob1, blob2]);
  raw.writeUInt32LE(blob1.length, 0);
  return raw;
}

describe('protocol.util', () => {
  test('parseRequest splits header and blob2; parseHeaderBlob1 slices fields', () => {
    const raw = buildRequest('aabb');
    const [blob1, blob2] = parseRequest(raw);
    const h = parseHeaderBlob1(blob1);
    expect(h.session_id.length).toEqual(16);
    expect(h.udid_raw.length).toEqual(16);
    expect(h.response_key.length).toEqual(32);
    expect(h.auth_key.length).toEqual(48);
    expect(blob2.length).toEqual(32); // only key appended
  });

  test('udidRawToCanonicalString and deriveIvFromUdidString', () => {
    const raw = Buffer.from('00112233445566778899aabbccddeeff', 'hex');
    const canon = udidRawToCanonicalString(raw);
    expect(canon).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/);
    const iv = deriveIvFromUdidString(canon);
    expect(iv.length).toEqual(16);
  });

  test('deriveIvFromUdidString throws on too-short UDID', () => {
    expect(() => deriveIvFromUdidString('abcd-ef')).toThrow();
  });

  test('parseRequest errors on short buffers', () => {
    expect(() => parseRequest(Buffer.alloc(2))).toThrow();
  });
});
