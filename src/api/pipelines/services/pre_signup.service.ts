import { StepPrevResult, StepResultBase } from '../../models';
import { StepService } from './step.service';

/**
 * tool/pre_signup: Send initial client device/environment data.
 * Uses kv-stream framing to build a (key,value,...) sequence.
 */
export class PreSignupService extends StepService {
  readonly name = 'pre_signup';
  readonly endpoint = 'tool/pre_signup';

  async execute(_prev: StepPrevResult | undefined): Promise<StepResultBase> {
    const payload = {
      ...this.ctx.clientData,
    };

    const encoded = this.ctx.runtime.encodeRequest({
      blob1: {
        ...this.ctx.blob1,
        framing: 'kv-stream',
      },
      payload,
    });
    const requestB64 = encoded.requestB64;

    const responseB64 = await this.callUpstream(this.endpoint, requestB64);

    const decodedResponse = this.ctx.runtime.decodeResponse({
      requestB64,
      responseB64,
    });
    const decoded = decodedResponse.payload;

    return {
      name: this.name,
      endpoint: this.endpoint,
      framing: 'kv-stream',
      requestB64,
      responseB64,
      decoded,
    };
  }
}
