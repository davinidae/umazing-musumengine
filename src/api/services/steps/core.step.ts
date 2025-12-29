import axios from 'axios';
import type { RequestResult, StepData, UmaResponse } from '../../models';
import {
  decompressResponse,
  encodeUmaRequestB64,
  KVStreamStrategy,
  LengthPrefixedStrategy,
  saltedMd5,
  SessionId,
  Unpacker,
} from '../../../lib';

const apiUnpacker = new Unpacker([new LengthPrefixedStrategy(), new KVStreamStrategy()]);

/**
 * Decode a decrypted Uma response payload.
 *
 * API behavior intentionally mirrors historical behavior:
 * - try length-prefixed msgpack
 * - else try kv-stream
 *
 * @throws When the payload cannot be decoded by the selected strategies.
 */
function decodeUmaResponsePayload<T = unknown>(data: Uint8Array): T {
  const out = apiUnpacker.execute(Buffer.from(data));
  if (out && typeof out === 'object' && '_unparsed_note' in out) {
    const note = String((out as { _unparsed_note?: unknown })._unparsed_note ?? 'unknown');
    throw new Error(`failed to decode response payload: ${note}`);
  }
  return out as T;
}

/**
 * Base class for a single API “step”.
 *
 * A step:
 * - builds a request payload
 * - encodes it to the Uma wire format (Base64)
 * - posts it to the upstream endpoint
 * - decrypts + decodes the response
 * - optionally updates session state
 */
export abstract class CoreStep<TReq extends object, TRes> {
  abstract endpoint: string;
  abstract getRequestBody(): TReq;

  constructor(protected readonly stepData: StepData) {
    //
  }

  /** Build upstream headers expected by the game API. */
  protected getHeaders(): Record<string, string> {
    return {
      SID: this.stepData.header.sessionId.asHex(),
      Device: String(this.stepData.base.device),
      ViewerID: String(this.stepData.base.viewer_id),
      'X-Unity-Version': '2022.3.62f2',
      'APP-VER': '1.20.11',
      'RES-VER': this.stepData.resVer,
      Accept: '*/*',
      'Content-Type': 'application/x-msgpack',
    };
  }

  /** Combine the step-specific body with common request fields from StepData. */
  protected getBody(): Record<string, unknown> {
    return {
      ...this.getRequestBody(),
      ...this.stepData.base,
    };
  }

  private buildUpstreamUrl(): string {
    return `${this.stepData.baseUrl}${this.endpoint}`;
  }

  private encodeRequestB64(body: Record<string, unknown>): string {
    return encodeUmaRequestB64(this.stepData.header, body);
  }

  private async postBase64(
    url: string,
    requestB64: string,
    headers: Record<string, string>,
  ): Promise<string> {
    const res = await axios.post<string>(url, requestB64, {
      headers,
      responseType: 'text',
      transformResponse: (v) => {
        return v;
      },
      validateStatus: () => {
        return true;
      },
    });

    if (typeof res.data !== 'string') {
      throw new Error('Unexpected upstream response: expected Base64 string body');
    }
    return res.data;
  }

  private decodeResponseBody(bodyB64: string): UmaResponse<TRes> {
    const decrypted = decompressResponse(bodyB64, this.stepData.header.udid);
    return decodeUmaResponsePayload<UmaResponse<TRes>>(decrypted);
  }

  private maybeUpdateSessionId(decoded: UmaResponse<TRes>): void {
    const sid = decoded.data_headers?.sid;
    if (!sid) {
      return;
    }
    this.stepData.umaclient.updateSessionId(new SessionId(saltedMd5(Buffer.from(sid, 'utf8'))));
  }

  /** Execute the upstream HTTP request and return decoded response + diagnostics. */
  protected async request(): Promise<Omit<RequestResult<TRes>, 'endpoint'>> {
    const body = this.getBody();
    const requestB64 = this.encodeRequestB64(body);
    const headers = this.getHeaders();
    const url = this.buildUpstreamUrl();
    const bodyB64 = await this.postBase64(url, requestB64, headers);
    const decoded = this.decodeResponseBody(bodyB64);
    this.maybeUpdateSessionId(decoded);
    this.stepData.header.rerandomize();
    return {
      decoded,
      body,
      headers,
    };
  }

  /** Optional hook executed after `request()` and before returning from `execute()`. */
  protected afterExecute(_result: RequestResult<TRes>): void | Promise<void> {
    //
  }

  /** Execute the step end-to-end. */
  async execute(): Promise<RequestResult<TRes>> {
    const result = {
      ...(await this.request()),
      endpoint: this.endpoint,
    };
    await this.afterExecute(result);
    return result;
  }
}
