import axios from 'axios';
import { PipelineContext, StepPrevResult, StepResultBase } from '../../models';

/**
 * Base class for a pipeline service step.
 *
 * Responsibilities
 * - Receives a PipelineContext with runtime helpers and upstream configuration.
 * - Implements execute(prev) to build a request, call upstream, and decode the response.
 * - Provides callUpstream() helper to POST Base64 requests to the configured upstream base.
 */
export abstract class StepService {
  /**
   * Construct a step with the provided execution context.
   * @param ctx PipelineContext holding runtime, upstreamBase, blob1 and clientData.
   */
  constructor(protected readonly ctx: PipelineContext) {
    //
  }
  /**
   * POST a Base64 request to the upstream API and return the Base64 response string.
   * Builds the absolute URL from ctx.upstreamBase and the step-specific endpoint path.
   *
   * @param endpoint Relative API path like 'tool/signup' or 'load/index'.
   * @param requestB64 Base64-encoded request buffer.
   * @returns Base64-encoded response buffer.
   * @throws If upstream base is missing or the response shape is invalid.
   */
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
  /**
   * Implement the step's business logic.
   * Build request using ctx.runtime.encodeRequest, call upstream via callUpstream, then decode with ctx.runtime.decodeResponse.
   * @param prev Previous step result, if any.
   * @returns StepResultBase without the order field (runner/session will add it).
   */
  abstract execute(prev: StepPrevResult | undefined): Promise<StepResultBase>;
}

/**
 * Constructor type for StepService implementations. Used to instantiate steps with a PipelineContext at runtime.
 */
export type StepServiceCtor = new (ctx: PipelineContext) => StepService;
