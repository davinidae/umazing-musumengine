import axios from 'axios';
import { RequestResult, StepData, UmaResponse } from '../../models';
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
    throw new Error('failed to decode response payload');
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
  protected getHeaders() {
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
  protected getBody() {
    return {
      ...this.getRequestBody(),
      ...this.stepData.base,
    };
  }

  /** Execute the upstream HTTP request and return decoded response + diagnostics. */
  protected async request() {
    const endpoint = this.endpoint;
    const body = this.getBody();
    const requestB64 = encodeUmaRequestB64(this.stepData.header, body);
    const headers = this.getHeaders();
    const res = await axios.post<string>(`${this.stepData.baseUrl}${endpoint}`, requestB64, {
      headers,
      responseType: 'text',
      transformResponse: (v) => {
        return v;
      },
      validateStatus: () => {
        return true;
      },
    });
    const bodyB64 = res.data;
    const decrypted = decompressResponse(bodyB64, this.stepData.header.udid);
    const decoded = decodeUmaResponsePayload<UmaResponse<TRes>>(decrypted);
    if (decoded.data_headers?.sid) {
      this.stepData.umaclient.updateSessionId(
        new SessionId(saltedMd5(Buffer.from(decoded.data_headers.sid, 'utf8'))),
      );
    }
    this.stepData.header.rerandomize();
    return {
      decoded,
      body,
      headers,
    };
  }

  /** Optional hook executed after `request()` and before returning from `execute()`. */
  protected async afterExecute(_result: RequestResult<TRes>): Promise<void> {
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
