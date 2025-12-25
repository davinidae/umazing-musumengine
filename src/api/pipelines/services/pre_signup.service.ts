import { FramingMode } from '../../../lib';
import { StepService } from './step.service';

/**
 * tool/pre_signup: Send initial client device/environment data.
 * Uses kv-stream framing to build a (key,value,...) sequence.
 */
export class PreSignupService extends StepService {
  override readonly name = 'pre_signup';
  override readonly endpoint = 'tool/pre_signup';
  override readonly framing = FramingMode.KvStream;
  override readonly isSignupStep = true;

  protected override omitViewerId = true;

  /**
   * Build payload from base client data; no viewer_id required for pre-signup.
   */
  getPayload(): Record<string, unknown> {
    return {
      ...this.ctx.clientData,
    };
  }
}
