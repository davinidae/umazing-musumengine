import { FramingMode } from '../../../lib';
import { StepService } from './step.service';

/**
 * tool/start_session: Establishes a server session for the viewer.
 * Skips execution if a valid viewer_id is not available.
 */
export class StartSessionService extends StepService {
  readonly name = 'start_session';
  readonly endpoint = 'tool/start_session';
  readonly framing = FramingMode.LengthPrefixed;

  getPayload(viewer_id: number) {
    return {
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
  }
}
