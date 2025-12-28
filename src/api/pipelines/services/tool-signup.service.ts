import { FramingMode } from '../../../lib';
import { AttestationType } from '../../models';
import { StepService } from './step.service';

/**
 * tool/signup: Registers or fetches a viewer account based on device info.
 * Carries viewer_id forward when available from previous step.
 * Uses kv-stream framing.
 */
export class ToolSignupService extends StepService {
  override readonly name = 'signup';
  override readonly endpoint = 'tool/signup';
  override readonly framing = FramingMode.KvStream;

  /**
   * Build payload including `viewer_id` (if available) along with client data.
   */
  getPayload() {
    return {
      ...this.getBasePayload(),
      attestation_type:
        this.ctx.clientData.steam_id != null ? AttestationType.PC : AttestationType.Mobile,
      optin_user_birth: 199001, // year + month ?
      country: 'Canada', // ?
      credential: '', // ?
      dma_state: 0, // ?
      error_code: 0, // ?
      error_message: '', // ?
      device_token: null,
    };
  }

  getHeaders() {
    return {
      ...this.getBaseHeaders(),
    };
  }
}
