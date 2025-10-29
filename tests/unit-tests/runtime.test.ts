import { describe, test, expect } from 'vitest';
import { RuntimeClient, parseRequest, parseHeaderBlob1 } from '../../src';

describe('runtime API', () => {
  test('encodeRequest + decodeResponse roundtrip (length-prefixed)', async () => {
    const blob1 = {
      prefix_hex: 'aabbcc',
      udid_raw_hex: '00'.repeat(16),
      session_id_hex: '11'.repeat(16),
      response_key_hex: '22'.repeat(32),
      auth_key_hex: '33'.repeat(48),
    };
    const payload = { x: 1, s: 'ok' };
    const runtimeClient = new RuntimeClient();
    const { requestB64 } = runtimeClient.encodeRequest({ blob1, payload });
    // sanity: header pieces are present
    const reqRaw = Buffer.from(requestB64, 'base64');
    const [blob1Raw, blob2Raw] = parseRequest(reqRaw);
    const h = parseHeaderBlob1(blob1Raw);
    expect(h.prefix.toString('hex')).toBe('aabbcc');
    expect(h.udid_raw.toString('hex')).toBe('00'.repeat(16));
    // decode using blob2 as a stand-in response
    const { payload: out } = runtimeClient.decodeResponse({
      requestB64,
      responseB64: blob2Raw.toString('base64'),
    });
    expect(out).toEqual(payload);
  });

  test('encodeRequest + decodeResponse roundtrip (kv-stream)', async () => {
    const blob1 = {
      prefix_hex: 'ccdd',
      udid_raw_hex: '44'.repeat(16),
      session_id_hex: '55'.repeat(16),
      response_key_hex: '66'.repeat(32),
      auth_key_hex: '77'.repeat(48),
      framing: 'kv-stream' as const,
    };
    const payload = { a: 1, b: 'z' };
    const runtimeClient = new RuntimeClient();
    const { requestB64 } = runtimeClient.encodeRequest({ blob1, payload });
    const [, _blob2Raw] = parseRequest(Buffer.from(requestB64, 'base64'));
    const { payload: out } = runtimeClient.decodeResponse({
      requestB64,
      responseB64: _blob2Raw.toString('base64'),
    });
    expect(out).toEqual(payload);
  });
});
