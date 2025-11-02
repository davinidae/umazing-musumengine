import { RuntimeClient } from '../../lib';

export type EncodedBase64 = string;

export interface StepPrevResult {
  name?: string;
  endpoint?: string;
  requestB64?: EncodedBase64;
  responseB64?: EncodedBase64;
  decoded?: unknown;
}

export interface StepResultBase {
  name: string;
  endpoint: string;
  framing: 'kv-stream' | 'length-prefixed';
  requestB64?: EncodedBase64;
  responseB64?: EncodedBase64;
  decoded?: unknown;
  skipped?: boolean;
  note?: string;
  error?: string;
  errorStack?: string;
}

export interface StepResult extends StepResultBase {
  order: number;
}

export interface PipelineContext {
  runtime: RuntimeClient;
  upstreamBase: string;
  // Common header pieces
  blob1: {
    prefix_hex: string;
    udid_raw_hex: string;
    session_id_hex: string;
    response_key_hex: string;
    auth_key_hex: string;
  };
  // Base client fields used to build payloads
  clientData: {
    viewer_id: number;
    device: number;
    device_id: string;
    device_name: string;
    graphics_device_name: string;
    ip_address: string;
    platform_os_version: string;
    carrier: string;
    keychain: number;
    locale: string;
    dmm_viewer_id: number | null;
    dmm_onetime_token: string | null;
    steam_id: string;
    steam_session_ticket: string;
  };
}
