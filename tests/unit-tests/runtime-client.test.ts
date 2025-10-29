import { describe, test, expect } from 'vitest';
import { RuntimeClient, parseRequest, parseHeaderBlob1 } from '../../src';

describe('RuntimeClient', () => {
  test('encodeRequest delegates to runtime and produces valid request', () => {
    const client = new RuntimeClient();
    const blob1 = {
      prefix_hex: 'deadbeef',
      udid_raw_hex: 'aa'.repeat(16),
      session_id_hex: 'bb'.repeat(16),
      response_key_hex: 'cc'.repeat(32),
      auth_key_hex: 'dd'.repeat(48),
    } as const;
    const payload = { q: 1, s: 'x' };
    const { requestB64 } = client.encodeRequest({ blob1, payload });
    const reqRaw = Buffer.from(requestB64, 'base64');
    const [blob1Raw, blob2Raw] = parseRequest(reqRaw);
    const h = parseHeaderBlob1(blob1Raw);
    expect(h.prefix.toString('hex')).toBe('deadbeef');
    expect(h.udid_raw.toString('hex')).toBe('aa'.repeat(16));
    expect(blob2Raw.length).toBeGreaterThan(32); // includes ciphertext + 32B key
  });

  test('decodeResponse delegates to runtime and decodes payload', () => {
    const client = new RuntimeClient();
    const blob1 = {
      prefix_hex: 'bead',
      udid_raw_hex: '11'.repeat(16),
      session_id_hex: '22'.repeat(16),
      response_key_hex: '33'.repeat(32),
      auth_key_hex: '44'.repeat(48),
    } as const;
    const payload = { a: 1, b: 'z' };
    const { requestB64 } = client.encodeRequest({ blob1, payload });
    const [, blob2Raw] = parseRequest(Buffer.from(requestB64, 'base64'));
    const { payload: out } = client.decodeResponse({
      requestB64,
      responseB64: blob2Raw.toString('base64'),
    });
    expect(out).toEqual(payload);
  });
});
