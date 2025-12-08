import { FramingMode } from '../../../lib';
import { StepService } from './step.service';

/**
 * tool/signup: Registers or fetches a viewer account based on device info.
 * Carries viewer_id forward when available from previous step.
 * Uses kv-stream framing.
 */
export class SignupService extends StepService {
  readonly name = 'signup';
  readonly endpoint = 'tool/signup';
  readonly framing = FramingMode.KvStream;

  getPayload(viewer_id: number): Record<string, unknown> {
    return {
      ...this.ctx.clientData,
      viewer_id,
    };
  }
}
