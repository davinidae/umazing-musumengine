import type { AttestationType, DeviceType } from '../../api/models';
import type { AuthKey, Udid, UmaReqHeader } from '../../lib';
import type { UmaClient } from '../services/uma-client.service';

export type RequestBase = {
  carrier: string;
  device: number;
  device_id: string;
  device_name: string;
  dmm_onetime_token: null;
  dmm_viewer_id: null;
  graphics_device_name: string;
  ip_address: string;
  keychain: number;
  locale: string;
  platform_os_version: string;
  viewer_id: number;
  steam_id: string | null;
  steam_session_ticket: string | null;
};

export type UmaResponse<T> = {
  response_code: number;
  data_headers: {
    viewer_id: number;
    sid: string;
    servertime: number;
    result_code: number;
    [k: string]: unknown;
  };
} & Partial<{
  data: T;
}>;

export type ClientConfig = Partial<{
  udid: Udid;
  authKey: AuthKey;
  base: RequestBase;
}>;

export enum AuthModeKind {
  STEAM = 'steam',
  MOBILE = 'mobile',
}

export type AuthMode =
  | {
      kind: AuthModeKind.STEAM;
      username: string;
      password: string;
    }
  | {
      kind: AuthModeKind.MOBILE;
      deviceType: DeviceType;
      attestationType: AttestationType;
    };

export type RequestResult<T = unknown> = {
  decoded: UmaResponse<T>;
  endpoint: string;
  name: string;
  body: Record<string, unknown>;
  headers: Record<string, string>;
};

export type StepData = {
  umaclient: UmaClient;
};

export type UmaClientData = {
  header: UmaReqHeader;
  base: RequestBase;
  resVer: string;
  baseUrl: string;
};
