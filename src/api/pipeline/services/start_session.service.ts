import { StepService, StepPrevResult, StepResultBase } from '../types';

export class StartSessionService extends StepService {
  readonly name = 'start_session';
  readonly endpoint = 'tool/start_session';

  async execute(prev: StepPrevResult | undefined): Promise<StepResultBase> {
    // Extract viewer_id from previous result if present
    let viewer_id = this.ctx.clientData.viewer_id ?? 0;
    try {
      const prevHeaders: any = (prev as any)?.decoded?.data_headers ?? {};
      if (typeof prevHeaders.viewer_id === 'number') {
        viewer_id = prevHeaders.viewer_id;
      }
    } catch {
      // ignore
    }

    if (!(typeof viewer_id === 'number' && Number.isFinite(viewer_id) && viewer_id > 0)) {
      return {
        name: this.name,
        endpoint: this.endpoint,
        framing: 'length-prefixed',
        skipped: true,
        note: 'viewer_id not available; skipping start_session',
      } as StepResultBase;
    }

    const payload = {
      attestation_type: 0,
      device_token: null,
      viewer_id,
      device: this.ctx.clientData.device,
      device_id: this.ctx.clientData.device_id,
      device_name: this.ctx.clientData.device_name,
      graphics_device_name: this.ctx.clientData.graphics_device_name,
      ip_address: this.ctx.clientData.ip_address,
      platform_os_version: this.ctx.clientData.platform_os_version,
      carrier: this.ctx.clientData.carrier,
      keychain: this.ctx.clientData.keychain,
      locale: this.ctx.clientData.locale,
      dmm_viewer_id: this.ctx.clientData.dmm_viewer_id,
      dmm_onetime_token: this.ctx.clientData.dmm_onetime_token,
      steam_id: this.ctx.clientData.steam_id,
      steam_session_ticket: this.ctx.clientData.steam_session_ticket,
    };

    const encoded = this.ctx.runtime.encodeRequest({
      blob1: {
        ...this.ctx.blob1,
      },
      payload,
    });
    const requestB64 = encoded.requestB64;

    const responseB64 = await this.callUpstream(this.endpoint, requestB64);

    const decodedResponse = this.ctx.runtime.decodeResponse({
      requestB64,
      responseB64,
    });
    const decoded = decodedResponse.payload;

    return {
      name: this.name,
      endpoint: this.endpoint,
      framing: 'length-prefixed',
      requestB64,
      responseB64,
      decoded,
    };
  }
}
