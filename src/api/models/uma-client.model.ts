import { AttestationType, DeviceType } from '../../api/models';
import { AuthKey, Udid } from '../utils';

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

export type DataHeaders = {
  viewer_id: number;
  sid: string;
  servertime: number;
  result_code: number;
  [k: string]: unknown;
};

export type UmaResponse<T> = {
  data_headers: DataHeaders;
} & Partial<{
  data: T;
}>;

export type SignupRequest = {
  error_code: number;
  error_message: string;
  attestation_type: number;
  optin_user_birth: number;
  dma_state: number;
  country: string;
  credential: string;
};

export type SignupData = {
  viewer_id: number;
  auth_key: string;
};

export type StartSessionRequest = {
  attestation_type: number;
  device_token: string | null;
};

export type StartSessionResponse = {
  attest: boolean;
  is_tutorial: boolean;
  nonce: string;
  resource_version: string;
  terms_updated: boolean;
};

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
