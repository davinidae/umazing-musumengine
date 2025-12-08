import { FramingMode } from '../../../lib';
import { StepService } from './step.service';

/**
 * tool/pre_signup: Send initial client device/environment data.
 * Uses kv-stream framing to build a (key,value,...) sequence.
 */
export class PreSignupService extends StepService {
  readonly name = 'pre_signup';
  readonly endpoint = 'tool/pre_signup';
  readonly framing = FramingMode.KvStream;

  protected override omitViewerId = true;

  getPayload(): Record<string, unknown> {
    return {
      ...this.ctx.clientData,
    };
  }
}
