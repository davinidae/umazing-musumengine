import axios from 'axios';
import {
  asResultCodeName,
  GallopResultCode,
  PipelineContext,
  StepPrevResult,
  StepResultBase,
} from '../../models';
import { FramingMode } from '../../../lib';

/**
 * Base class for a pipeline service step.
 *
 * Responsibilities
 * - Receives a PipelineContext with runtime helpers and upstream configuration.
 * - Implements execute(prev) to build a request, call upstream, and decode the response.
 * - Provides callUpstream() helper to POST Base64 requests to the configured upstream base.
 */
export abstract class StepService {
  abstract readonly name: string;
  abstract readonly endpoint: string;
  abstract readonly framing: FramingMode;

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
  /**
   * POST a Base64 request to the upstream API and return the Base64 response string with a result code.
   *
   * @param requestB64 Base64-encoded request buffer.
   * @returns `{ responseB64, responseCode }` where `responseCode` is the HTTP status or synthesized.
   * @throws If upstream base is missing or the response shape is invalid.
   */
  protected async callUpstream(
    requestB64: string,
  ): Promise<{ responseB64: string; responseCode: GallopResultCode }> {
    const base = this.ctx.upstreamBase;
    if (!base) {
      throw new Error('Missing UMAZING_UPSTREAM_BASE (remote API base URL)');
    }
    const url = `${String(base).replace(/\/+$/, '')}/${this.endpoint.replace(/^\/+/, '')}`;
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
      return {
        responseB64: data.trim(),
        responseCode: resp.status as GallopResultCode,
      };
    }
    if (data && typeof data === 'object') {
      const b64 = data.response || data.responseB64 || data.data || '';
      if (!b64 || typeof b64 !== 'string') {
        throw new Error('Upstream JSON missing response field');
      }
      return {
        responseB64: b64.trim(),
        responseCode: resp.status as GallopResultCode,
      };
    }
    throw new Error('Invalid upstream response');
  }

  /**
   * Build the request payload for this step.
   * @param viewer_id Viewer identifier propagated from previous step or context.
   * @returns Plain object serialized by the runtime encoder.
   */
  abstract getPayload(viewer_id: number): Record<string, unknown>;

  /**
   * Override to `true` for steps that should not enforce `viewer_id` preconditions (e.g., `pre_signup`).
   */
  protected omitViewerId = false;

  /**
   * Implement the step's business logic.
   * Build request using ctx.runtime.encodeRequest, call upstream via callUpstream, then decode with ctx.runtime.decodeResponse.
   * @param prev Previous step result, if any.
   * @returns StepResultBase without the order field (runner/session will add it).
   */
  /**
   * Execute the step end-to-end: obtain preconditions, encode request, call upstream, and decode response.
   * @param prev Previous step result, if any.
   * @returns StepResultBase without the `order` field (assigned by the pipeline runner).
   */
  public async execute(prev: StepPrevResult | undefined): Promise<StepResultBase> {
    let viewer_id = this.ctx.clientData.viewer_id ?? 0;
    if (!this.omitViewerId) {
      // Extract viewer_id from previous result if present
      try {
        const prevHeaders = prev?.decoded?.data_headers ?? {};
        if (typeof prevHeaders.viewer_id === 'number') {
          viewer_id = prevHeaders.viewer_id;
        }
      } catch {
        // ignore, fallback to default viewer_id
      }
      if (!(typeof viewer_id === 'number' && Number.isFinite(viewer_id) && viewer_id > 0)) {
        return {
          name: this.name,
          endpoint: this.endpoint,
          framing: this.framing,
          skipped: true,
          note: 'viewer_id not available; skipping step',
          responseCode: GallopResultCode.MissingViewerId,
          responseCodeName: asResultCodeName(GallopResultCode.MissingViewerId),
        };
      }
    }
    const encoded = this.ctx.runtime.encodeRequest({
      blob1: {
        ...this.ctx.blob1,
        framing: this.framing,
      },
      payload: this.getPayload(viewer_id),
    });
    const requestB64 = encoded.requestB64;
    const { responseB64, responseCode } = await this.callUpstream(requestB64);
    const decodedResponse = this.ctx.runtime.decodeResponse({
      requestB64,
      responseB64,
    });
    return {
      name: this.name,
      endpoint: this.endpoint,
      framing: this.framing,
      requestB64,
      responseB64,
      decoded: decodedResponse,
      responseCode: responseCode,
      responseCodeName: asResultCodeName(responseCode),
    };
  }
}

/**
 * Constructor type for StepService implementations. Used to instantiate steps with a PipelineContext at runtime.
 */
export type StepServiceCtor = new (ctx: PipelineContext) => StepService;
