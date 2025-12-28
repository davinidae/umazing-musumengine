import { heuristicDecode } from '../msgpack';
import axios from 'axios';
import {
  AuthKey,
  saltedMd5,
  decompressResponse,
  newSessionId,
  SessionId,
  UmaReqHeader,
  UmaRequest,
  Udid,
} from '../protocol';
import {
  RequestBase,
  SignupData,
  SignupRequest,
  StartSessionRequest,
  StartSessionResponse,
  UmaResponse,
} from './model';

export class UmaClient {
  public resVer = '10002800';
  public baseUrl = 'https://api.games.umamusume.com/umamusume/';

  public constructor(
    public header: UmaReqHeader,
    public base: RequestBase,
  ) {
    //
  }

  public static create(udid: Udid, authKey: AuthKey | undefined, base: RequestBase): UmaClient {
    const sessionId = newSessionId(udid, BigInt(base.viewer_id));
    const header = new UmaReqHeader(sessionId, udid, authKey);
    return new UmaClient(header, base);
  }

  public regenSessionId(): void {
    this.header.sessionId = newSessionId(this.header.udid, BigInt(this.base.viewer_id));
  }

  public async signup(): Promise<UmaResponse<SignupData>> {
    await this.request<Record<string, never>, unknown>('tool/pre_signup', {});
    this.regenSessionId();
    const res = await this.request<SignupRequest, SignupData>('tool/signup', {
      error_code: 0,
      error_message: '',
      attestation_type: 0,
      optin_user_birth: 199801,
      dma_state: 0,
      country: 'Canada',
      credential: '',
    });
    if (res.data) {
      this.base.viewer_id = res.data.viewer_id;
      this.header.authKey = new AuthKey(Uint8Array.from(Buffer.from(res.data.auth_key, 'base64')));
    }
    return res;
  }

  public async startSession(attestationType: number): Promise<UmaResponse<StartSessionResponse>> {
    const res = await this.request<StartSessionRequest, StartSessionResponse>(
      'tool/start_session',
      { attestation_type: attestationType, device_token: null },
    );
    if (res.data?.resource_version) {
      this.resVer = res.data.resource_version;
    }
    return res;
  }

  public async loadIndex(): Promise<UmaResponse<unknown>> {
    return this.request<Record<string, string>, unknown>('load/index', {});
  }

  public async request<TReq extends object, TRes>(
    endpoint: string,
    req: TReq,
  ): Promise<UmaResponse<TRes>> {
    const wrapped = { ...req, ...this.base };
    const request = UmaRequest.build(this.header, wrapped);
    const res = await axios.post<string>(`${this.baseUrl}${endpoint}`, request.encode(), {
      headers: {
        SID: this.header.sessionId.asHex(),
        Device: String(this.base.device),
        ViewerID: String(this.base.viewer_id),
        'X-Unity-Version': '2022.3.62f2',
        'APP-VER': '1.20.11',
        'RES-VER': this.resVer,
        Accept: '*/*',
        'Content-Type': 'application/x-msgpack',
      },
      responseType: 'text',
      transformResponse: (v) => v,
      validateStatus: () => true,
    });
    const bodyB64 = res.data;
    const decrypted = decompressResponse(bodyB64, this.header.udid);
    const decoded = heuristicDecode<UmaResponse<TRes>>(decrypted);
    if (decoded.data_headers?.sid) {
      this.header.sessionId = new SessionId(
        saltedMd5(Buffer.from(decoded.data_headers.sid, 'utf8')),
      );
    }
    this.header.rerandomize();
    return decoded;
  }
}
