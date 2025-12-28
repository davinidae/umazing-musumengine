import { FramingMode } from '../../../lib';
import { StepService } from './step.service';

/**
 * tool/signup: Registers or fetches a viewer account based on device info.
 * Carries viewer_id forward when available from previous step.
 * Uses kv-stream framing.
 */
export class TutorialSkipService extends StepService {
  override readonly name = 'tutorial_skip';
  override readonly endpoint = 'tutorial/skip';
  override readonly framing = FramingMode.LengthPrefixed;

  /**
   * Build payload including `viewer_id` (if available) along with client data.
   */
  getPayload() {
    return {
      ...this.getBasePayload(),
    };
  }

  getHeaders() {
    return {
      ...this.getBaseHeaders(),
    };
  }
}
