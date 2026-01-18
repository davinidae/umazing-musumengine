import { describe, test, expect } from 'vitest';
import {
  EncryptPayloadService,
  DETERMINISTIC_ENC_SECRET,
  parseRequest,
  DecryptResponseService,
} from '../../../../src';

describe('DecryptResponseService (unit)', () => {
  test('decodes response blob2 using matching request', () => {
    const enc = new EncryptPayloadService();
    const blob1 = {
      viewer_id: 123456789,
      prefix: 'aa55',
      udid: '00'.repeat(16),
      session_id: '11'.repeat(16),
      response_key: '22'.repeat(32),
      auth_key: '33'.repeat(48),
      prefix_b64: 'aabbccdd',
      session_id_b64: '11'.repeat(16),
      response_key_b64: '22'.repeat(32),
      auth_key_b64: '33'.repeat(48),
    };
    const blob2 = { v: 123, s: 'ok' };
    const { requestB64 } = enc.build({ blob1, blob2, DETERMINISTIC_ENC_SECRET });
    const raw = Buffer.from(requestB64, 'base64');
    const [, blob2Parsed] = parseRequest(raw);
    const responseB64 = Buffer.from(blob2Parsed).toString('base64');

    const respSvc = new DecryptResponseService();
    const respOut = respSvc.decodeFromBase64(requestB64, responseB64);
    expect(respOut.blob2).toEqual(blob2);
  });

  test('throws when requestB64 is missing', () => {
    const respSvc = new DecryptResponseService();
    const responseB64 = Buffer.from('abcd', 'utf8').toString('base64');
    expect(() => respSvc.decodeFromBase64('', responseB64)).toThrow(/requestB64 is required/i);
  });

  test('throws when response blob2 is too short to contain key', () => {
    const enc = new EncryptPayloadService();
    const blob1 = {
      viewer_id: 123456789,
      prefix: 'aa55',
      udid: '00'.repeat(16),
      session_id: '11'.repeat(16),
      response_key: '22'.repeat(32),
      auth_key: '33'.repeat(48),
      prefix_b64: 'aabbccdd',
      session_id_b64: '11'.repeat(16),
      response_key_b64: '22'.repeat(32),
      auth_key_b64: '33'.repeat(48),
    };
    const blob2 = { v: 123, s: 'ok' };
    const { requestB64 } = enc.build({ blob1, blob2, DETERMINISTIC_ENC_SECRET });

    // decryptBlob2 requires >= 32 bytes; provide less.
    const tooShortResponseB64 = Buffer.alloc(8).toString('base64');
    const respSvc = new DecryptResponseService();
    expect(() => respSvc.decodeFromBase64(requestB64, tooShortResponseB64)).toThrow(
      /blob2 too short/i,
    );
  });
});
