import { AttestationType } from '../../models';
import { StepService } from './step.service';

/**
 * tool/start_session: Establishes a server session for the viewer.
 * Skips execution if a valid viewer_id is not available.
 */
export class ToolStartSessionService extends StepService {
  override readonly name = 'start_session';
  override readonly endpoint = 'tool/start_session';

  /**
   * Build payload required by `tool/start_session` including device and platform metadata.
   */
  getPayload() {
    return {
      ...this.getBasePayload(),
      attestation_type:
        this.ctx.clientData.steam_id != null ? AttestationType.PC : AttestationType.Mobile,
      device_token: null,
    };
  }

  getHeaders() {
    return {
      ...this.getBaseHeaders(),
    };
  }
}
