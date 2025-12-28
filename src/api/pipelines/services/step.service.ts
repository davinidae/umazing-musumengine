import axios, { AxiosHeaders } from 'axios';
import {
  asResultCodeName,
  GallopResultCode,
  PipelineContext,
  StepPrevResult,
  StepResultBase,
} from '../../models';
import { DecodeResponseOutput, FramingMode } from '../../../lib';
import { Pipeline } from '../../session/pipeline';
import { randomUUID } from 'crypto';

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
  readonly isSignupStep: boolean = false;

  getBasePayload() {
    return {
      viewer_id: this.ctx.clientData.viewer_id ?? 0,
      device: this.ctx.clientData.device,
      device_id: this.ctx.clientData.device_id,
      device_name: this.ctx.clientData.device_name,
      graphics_device_name: this.ctx.clientData.graphics_device_name,
      ip_address: this.ctx.clientData.ip_address,
      platform_os_version: this.ctx.clientData.platform_os_version,
      carrier: this.ctx.clientData.carrier,
      keychain: this.ctx.clientData.keychain,
      locale: this.ctx.clientData.locale,
      dmm_viewer_id: this.ctx.clientData.dmm_viewer_id,
      dmm_onetime_token: this.ctx.clientData.dmm_onetime_token,
      steam_id: this.ctx.clientData.steam_id,
      steam_session_ticket: this.ctx.clientData.steam_session_ticket,
    };
  }

  getBaseHeaders() {
    return {
      sid: randomUUID(),
      device: this.ctx.clientData.device,
      viewerid: this.ctx.clientData.viewer_id ?? 0,
      'x-unity-version': '2022.3.62f2',
      'app-ver': '1.20.11',
      'res-ver': '10002800',
      accept: '*/*',
      'content-type': 'application/x-msgpack',
    };
  }

  /**
   * Construct a step with the provided execution context.
   * @param ctx PipelineContext holding runtime, upstreamBase, blob1 and clientData.
   */
  constructor(
    protected readonly ctx: PipelineContext,
    protected readonly pipeline: Pipeline,
  ) {
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
    payload: unknown,
  ): Promise<{
    responseB64: string;
    responseCode: GallopResultCode;
  }> {
    console.log('Calling upstream for endpoint:', this.endpoint);
    const base = this.ctx.upstreamBase;
    if (!base) {
      throw new Error('Missing UMAZING_UPSTREAM_BASE (remote API base URL)');
    }
    const url = [base.replace(/\/+$/, ''), this.endpoint.replace(/^\/+/, '')].join('/');
    console.log('Upstream URL:', url);
    console.log('Upstream request payload:', payload);
    console.log('Upstream request (Base64):', requestB64);
    try {
      console.log();
      const resp = await axios.post(url, requestB64, {
        headers: this.getHeaders() as AxiosHeaders,
      });
      console.log('Upstream response status:', resp.status);
      const data = resp.data;
      console.log('Upstream response data:', data);
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
    } catch (e) {
      const error = e as Error;
      console.error('Error calling upstream:', error.name, error.message, error.stack);
      throw error;
    }
  }

  /**
   * Build the request payload for this step.
   * @param viewer_id Viewer identifier propagated from previous step or context.
   * @returns Plain object serialized by the runtime encoder.
   */
  abstract getPayload(): Record<string, unknown>;

  abstract getHeaders(): Record<string, unknown>;

  private async onResponseDecoded(decodedResponse: DecodeResponseOutput): Promise<void> {
    const ctx = this.pipeline.getContext();
    if (ctx == null) {
      return;
    }
    console.log(decodedResponse);
    // ctx.blob1 = decodedResponse.blob1;
    this.pipeline.setContext(ctx);
  }

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
        const prevHeaders = prev?.decoded?.blob1;
        if (typeof prevHeaders?.viewer_id === 'number') {
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
    this.ctx.clientData.viewer_id = viewer_id;
    const payload = {
      blob1: {
        ...this.ctx.blob1,
        framing: this.framing,
        viewer_id: viewer_id,
      },
      blob2: this.getPayload(),
      isSignup: this.isSignupStep,
    };
    const encoded = this.ctx.runtime.encodeRequest(payload);
    const { requestB64, blob1, blob2 } = encoded;
    const { responseB64, responseCode } = await this.callUpstream(requestB64, { blob1, blob2 });
    const decodedResponse = this.ctx.runtime.decodeResponse({
      requestB64,
      responseB64,
    });
    await this.onResponseDecoded(decodedResponse);
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
export type StepServiceCtor = new (ctx: PipelineContext, pipeline: Pipeline) => StepService;
