import { randomUUID } from 'crypto';
import { DETERMINISTIC_ENC_SECRET, RuntimeClient } from '../../../../../src';
import { PipelineContext } from '../../../../../src/api/models';
import { UserChangeNameService } from '../../../../../src/api/pipelines/services/user-change_name.service';
import { Pipeline } from '../../../../../src/api/session/pipeline';

const ctx: PipelineContext = {
  runtime: new RuntimeClient({
    DETERMINISTIC_ENC_SECRET: DETERMINISTIC_ENC_SECRET,
    logger: console,
  }),
  upstreamBase: 'https://example.com',
  blob1: {
    prefix_hex: '',
    udid_raw_hex: '',
    session_id_hex: '',
    response_key_hex: '',
    auth_key_hex: '',
  },
  clientData: {
    viewer_id: 0,
    device: 0,
    device_id: '',
    device_name: '',
    graphics_device_name: '',
    ip_address: '',
    platform_os_version: '',
    carrier: '',
    keychain: 0,
    locale: '',
    dmm_viewer_id: null,
    dmm_onetime_token: null,
  },
};
const pipeline = new Pipeline(randomUUID(), Date.now(), undefined, ctx);

describe('UserChangeNameService', () => {
  test('should create payload with generated name', () => {
    const service = new UserChangeNameService(ctx, pipeline);
    const payload = service.getPayload();
    expect(payload).toHaveProperty('name');
    expect(typeof payload.name).toBe('string');
    expect(payload.name.length).toBeGreaterThan(0);
    expect(payload.name).toMatch(/^UMA\d+$/);
  });
});
