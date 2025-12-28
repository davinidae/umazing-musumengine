import axios from 'axios';
import { RequestResult, StepData, UmaResponse } from '../../models';
import { decompressResponse, heuristicDecode, saltedMd5, SessionId, UmaRequest } from '../../utils';

export abstract class CoreStep<TReq extends object, TRes> {
  abstract endpoint: string;
  abstract getRequestBody(): TReq;

  constructor(protected readonly stepData: StepData) {
    //
  }

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

  protected getBody() {
    return {
      ...this.getRequestBody(),
      ...this.stepData.base,
    };
  }

  protected async request() {
    const endpoint = this.endpoint;
    const body = this.getBody();
    const request = UmaRequest.build(this.stepData.header, body);
    const headers = this.getHeaders();
    const res = await axios.post<string>(`${this.stepData.baseUrl}${endpoint}`, request.encode(), {
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
    const decoded = heuristicDecode<UmaResponse<TRes>>(decrypted);
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

  protected async afterExecute(_result: RequestResult<TRes>): Promise<void> {
    //
  }

  async execute(): Promise<RequestResult<TRes>> {
    const result = {
      ...(await this.request()),
      endpoint: this.endpoint,
    };
    await this.afterExecute(result);
    return result;
  }
}
