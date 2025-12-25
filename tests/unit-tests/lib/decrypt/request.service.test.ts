import { describe, test, expect } from 'vitest';
import { EncryptPayloadService, DETERMINISTIC_ENC_SECRET } from '../../../../src';
import { DecryptRequestService } from '../../../../src';

describe('DecryptRequestService (unit)', () => {
  test('decodes requestB64 and returns original payload', () => {
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
    const { requestB64 } = enc.buildFromParts({ blob1, blob2, DETERMINISTIC_ENC_SECRET });

    const reqSvc = new DecryptRequestService();
    const reqOut = reqSvc.decodeFromBase64(requestB64);
    expect(reqOut.blob2).toEqual(blob2);
  });
});
