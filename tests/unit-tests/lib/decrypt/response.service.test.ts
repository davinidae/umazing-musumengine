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
      prefix_hex: 'aa55',
      udid_raw_hex: '00'.repeat(16),
      session_id_hex: '11'.repeat(16),
      response_key_hex: '22'.repeat(32),
      auth_key_hex: '33'.repeat(48),
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
});
