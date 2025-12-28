import { FramingMode } from '../../../lib';
import { StepService } from './step.service';

/**
 * tool/pre_signup: Send initial client device/environment data.
 * Uses kv-stream framing to build a (key,value,...) sequence.
 */
export class ToolPreSignupService extends StepService {
  override readonly name = 'pre_signup';
  override readonly endpoint = 'tool/pre_signup';
  override readonly framing = FramingMode.KvStream;

  /**
   * Build payload from base client data; no viewer_id required for pre-signup.
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
