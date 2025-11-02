import axios from 'axios';
import { PipelineContext, StepPrevResult, StepResultBase } from '../../models';

export abstract class StepService {
  constructor(protected readonly ctx: PipelineContext) {
    //
  }
  protected async callUpstream(endpoint: string, requestB64: string): Promise<string> {
    const base = this.ctx.upstreamBase;
    if (!base) {
      throw new Error('Missing UMAZING_UPSTREAM_BASE (remote API base URL)');
    }
    const url = `${String(base).replace(/\/+$/, '')}/${endpoint.replace(/^\/+/, '')}`;
    const resp = await axios.post(
      url,
      {
        request: requestB64,
      },
      {
        headers: {
          'content-type': 'application/json',
        },
      },
    );
    const data = resp.data;
    if (typeof data === 'string') {
      return data.trim();
    }
    if (data && typeof data === 'object') {
      const b64 = (data as any).response || (data as any).responseB64 || (data as any).data || '';
      if (!b64 || typeof b64 !== 'string') {
        throw new Error('Upstream JSON missing response field');
      }
      return b64.trim();
    }
    throw new Error('Invalid upstream response');
  }
  abstract execute(prev: StepPrevResult | undefined): Promise<StepResultBase>;
}

export type StepServiceCtor = new (ctx: PipelineContext) => StepService;
