import { StepPrevResult, StepResultBase } from '../../models';
import { StepService } from './step.service';

export class SignupService extends StepService {
  readonly name = 'signup';
  readonly endpoint = 'tool/signup';

  async execute(prev: StepPrevResult | undefined): Promise<StepResultBase> {
    // Carry viewer_id from previous decoded headers if present
    let viewer_id = this.ctx.clientData.viewer_id ?? 0;
    try {
      const prevHeaders: any = (prev as any)?.decoded?.data_headers ?? {};
      if (typeof prevHeaders.viewer_id === 'number') {
        viewer_id = prevHeaders.viewer_id;
      }
    } catch {
      // ignore, fallback to default viewer_id
    }

    const payload = {
      ...this.ctx.clientData,
      viewer_id,
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
