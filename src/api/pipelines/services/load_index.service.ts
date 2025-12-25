import { FramingMode } from '../../../lib';
import { StepService } from './step.service';

/**
 * load/index: Retrieves the main screen data for the session.
 * Requires a valid viewer_id; skips otherwise.
 */
export class LoadIndexService extends StepService {
  override readonly name = 'load_index';
  override readonly endpoint = 'load/index';
  override readonly framing = FramingMode.LengthPrefixed;

  /**
   * Build payload for `load/index` using `viewer_id` and client metadata.
   */
  getPayload(viewer_id: number) {
    return {
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
