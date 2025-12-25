import { FramingMode } from '../../../lib';
import { StepService } from './step.service';

/**
 * tool/signup: Registers or fetches a viewer account based on device info.
 * Carries viewer_id forward when available from previous step.
 * Uses kv-stream framing.
 */
export class SignupService extends StepService {
  override readonly name = 'signup';
  override readonly endpoint = 'tool/signup';
  override readonly framing = FramingMode.KvStream;
  override readonly isSignupStep = true;

  /**
   * Build payload including `viewer_id` (if available) along with client data.
   */
  getPayload(viewer_id: number): Record<string, unknown> {
    return {
      ...this.ctx.clientData,
      viewer_id,
    };
  }
}
