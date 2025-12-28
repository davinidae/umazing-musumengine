import { FramingMode } from '../../../lib';
import { StepService } from './step.service';

/**
 * tool/signup: Registers or fetches a viewer account based on device info.
 * Carries viewer_id forward when available from previous step.
 * Uses kv-stream framing.
 */
export class UserChangeSexService extends StepService {
  override readonly name = 'change_sex';
  override readonly endpoint = 'user/change_sex';
  override readonly framing = FramingMode.LengthPrefixed;

  /**
   * Build payload including `viewer_id` (if available) along with client data.
   */
  getPayload() {
    return {
      ...this.getBasePayload(),
      sex: 1, // ?
    };
  }

  getHeaders() {
    return {
      ...this.getBaseHeaders(),
    };
  }
}
