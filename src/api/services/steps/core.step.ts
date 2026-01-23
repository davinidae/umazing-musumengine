import axios from 'axios';
import type { RequestBase, RequestResult, UmaResponse } from '../../models';
import {
  decompressResponse,
  encodeUmaRequestB64,
  KVStreamStrategy,
  LengthPrefixedStrategy,
  saltedMd5,
  SessionId,
  Unpacker,
} from '../../../lib';
import { UmaClient } from '../uma-client.service';
import { APP_VERSION, X_UNITY_VERSION } from '../../../constants';

/**
 * apiUnpacker.
 * @remarks Type: `Unpacker`.
 * @defaultValue `new Unpacker([new LengthPrefixedStrategy(), new KVStreamStrategy()])`
 */
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
/**
 * decodeUmaResponsePayload.
 * @param data - Type: `Uint8Array<ArrayBufferLike>`.
 * @returns Type: `T`.
 */
function decodeUmaResponsePayload<T = unknown>(data: Uint8Array): T {
  /**
   * out.
   * @remarks Type: `unknown`.
   * @defaultValue `apiUnpacker.execute(Buffer.from(data))`
   */
  const out = apiUnpacker.execute(Buffer.from(data));
  if (out && typeof out === 'object' && '_unparsed_note' in out) {
    /**
     * note.
     * @remarks Type: `string`.
     * @defaultValue `String((out as { _unparsed_note?: unknown })._unparsed_note ?? 'unknown')`
     */
    const note = String((out as { _unparsed_note?: unknown })._unparsed_note ?? 'unknown');
    throw new Error(`failed to decode response payload: ${note}`);
  }
  return out as T;
}

/**
 * CoreStep.
 *
 * Base class for a single API “step”.
 *
 * A step:
 * - builds a request payload
 * - encodes it to the Uma wire format (Base64)
 * - posts it to the upstream endpoint
 * - decrypts + decodes the response
 * - optionally updates session state
 *
 * @remarks Type: `CoreStep<TReq, TRes>`.
 */
export abstract class CoreStep<TReq extends object, TRes> {
  /**
   * endpoint.
   * @remarks Type: `string`.
   */
  abstract endpoint: string;
  /**
   * getRequestBody.
   * @returns Type: `TReq`.
   * @remarks Source: `abstract getRequestBody(): TReq;`.
   */
  abstract getRequestBody(): TReq;

  /**
   * constructor.
   * @param umaClient - Type: `UmaClient`.
   * @param _extra - Type: `any[]`.
   * @returns Type: `CoreStep<TReq, TRes>`.
   */
  constructor(
    protected readonly umaClient: UmaClient,
    ..._extra: any[]
  ) {
    //
  }

  /**
   * getHeaders.
   *
   * Build upstream headers expected by the game API.
   *
   * @returns Type: `Record<string, string>`.
   */
  protected getHeaders(): Record<string, string> {
    return {
      SID: this.umaClient.header.sessionId.asHex(),
      Device: String(this.umaClient.userSession.device),
      ViewerID: String(this.umaClient.userSession.viewer_id),
      'X-Unity-Version': X_UNITY_VERSION,
      'APP-VER': APP_VERSION,
      'RES-VER': this.umaClient.userSession.resVer,
      Accept: '*/*',
      'Content-Type': 'application/x-msgpack',
    };
  }

  /**
   * getBody.
   *
   * Combine the step-specific body with common request fields from StepData.
   *
   * @returns Type: `Record<string, unknown>`.
   */
  protected getBody(): RequestBase & TReq {
    return {
      ...this.getRequestBody(),
      viewer_id: this.umaClient.userSession.viewer_id,
      carrier: this.umaClient.userSession.carrier,
      device: this.umaClient.userSession.device,
      device_id: this.umaClient.userSession.device_id,
      keychain: this.umaClient.userSession.keychain,
      locale: this.umaClient.userSession.locale,
      dmm_onetime_token: this.umaClient.userSession.dmm_onetime_token,
      dmm_viewer_id: this.umaClient.userSession.dmm_viewer_id,
      device_name: this.umaClient.userSession.device_name,
      graphics_device_name: this.umaClient.userSession.graphics_device_name,
      ip_address: this.umaClient.userSession.ip_address,
      platform_os_version: this.umaClient.userSession.platform_os_version,
      steam_id: this.umaClient.userSession.steam_id,
      steam_session_ticket: this.umaClient.userSession.steam_session_ticket,
    };
  }

  /**
   * buildUpstreamUrl.
   * @returns Type: `string`.
   */
  private buildUpstreamUrl(): string {
    return `${this.umaClient.userSession.baseUrl}${this.endpoint}`;
  }

  /**
   * encodeRequestB64.
   * @param body - Type: `Record<string, unknown>`.
   * @returns Type: `string`.
   */
  private encodeRequestB64(body: Record<string, unknown>): string {
    return encodeUmaRequestB64(this.umaClient.header, body);
  }

  /**
   * postBase64 (async).
   * @param url - Type: `string`.
   * @param requestB64 - Type: `string`.
   * @param headers - Type: `Record<string, string>`.
   * @returns Type: `Promise<string>`.
   */
  private async postBase64(
    url: string,
    requestB64: string,
    headers: Record<string, string>,
  ): Promise<string> {
    /**
     * res.
     * @remarks Type: `AxiosResponse<string, any, {}>`.
     * @defaultValue `await axios.post<string>(url, requestB64, { headers, responseType: 'text', transformResponse: (v) => { return v; }, validateStatus: () => {…`
     */
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

  /**
   * decodeResponseBody.
   * @param bodyB64 - Type: `string`.
   * @returns Type: `UmaResponse<TRes>`.
   */
  private decodeResponseBody(bodyB64: string): UmaResponse<TRes> {
    /**
     * decrypted.
     * @remarks Type: `Uint8Array<ArrayBufferLike>`.
     * @defaultValue `decompressResponse(bodyB64, this.umaClient.header.udid)`
     */
    const decrypted = decompressResponse(bodyB64, this.umaClient.header.udid);
    return decodeUmaResponsePayload<UmaResponse<TRes>>(decrypted);
  }

  /**
   * maybeUpdateSessionId.
   * @param decoded - Type: `UmaResponse<TRes>`.
   */
  private maybeUpdateSessionId(decoded: UmaResponse<TRes>): void {
    /**
     * sid.
     * @remarks Type: `string`.
     * @defaultValue `decoded.data_headers?.sid`
     */
    const sid = decoded.data_headers?.sid;
    if (!sid) {
      return;
    }
    this.umaClient.updateSessionId(new SessionId(saltedMd5(Buffer.from(sid, 'utf8'))));
  }

  /** Execute the upstream HTTP request and return decoded response + diagnostics. */
  /**
   * request (async).
   * @returns Type: `Promise<Omit<RequestResult<TRes>, "name" | "endpoint">>`.
   */
  protected async request(): Promise<Omit<RequestResult<TRes>, 'endpoint' | 'name'>> {
    /**
     * body.
     * @remarks Type: `Record<string, unknown>`.
     * @defaultValue `this.getBody()`
     */
    const body = this.getBody();
    /**
     * requestB64.
     * @remarks Type: `string`.
     * @defaultValue `this.encodeRequestB64(body)`
     */
    const requestB64 = this.encodeRequestB64(body);
    /**
     * headers.
     * @remarks Type: `Record<string, string>`.
     * @defaultValue `this.getHeaders()`
     */
    const headers = this.getHeaders();
    /**
     * url.
     * @remarks Type: `string`.
     * @defaultValue `this.buildUpstreamUrl()`
     */
    const url = this.buildUpstreamUrl();
    /**
     * bodyB64.
     * @remarks Type: `string`.
     * @defaultValue `await this.postBase64(url, requestB64, headers)`
     */
    const bodyB64 = await this.postBase64(url, requestB64, headers);
    /**
     * decoded.
     * @remarks Type: `UmaResponse<TRes>`.
     * @defaultValue `this.decodeResponseBody(bodyB64)`
     */
    const decoded = this.decodeResponseBody(bodyB64);
    this.maybeUpdateSessionId(decoded);
    this.umaClient.header.rerandomize();
    return {
      decoded,
      body,
      headers,
    };
  }

  /** Optional hook executed after `request()` and before returning from `execute()`. */
  /**
   * afterExecute.
   * @param _result - Type: `RequestResult<TRes>`.
   * @returns Type: `void | Promise<void>`.
   */
  protected afterExecute(_result: RequestResult<TRes>): void | Promise<void> {
    //
  }

  /** Execute the step end-to-end. */
  /**
   * execute (async).
   * @returns Type: `Promise<RequestResult<TRes>>`.
   */
  async execute(): Promise<RequestResult<TRes>> {
    /**
     * result.
     * @remarks Type: `RequestResult<TRes>`.
     * @defaultValue `{ ...(await this.request()), endpoint: this.endpoint, name: this.constructor.name, }`
     */
    const result: RequestResult<TRes> = {
      ...(await this.request()),
      endpoint: this.endpoint,
      name: this.constructor.name,
    };
    await this.afterExecute(result);
    return result;
  }
}
