import { RuntimeClient } from '../../lib';
import axios from 'axios';

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

export abstract class StepService {
  constructor(protected readonly ctx: PipelineContext) {
    //
  }
  protected async callUpstream(endpoint: string, requestB64: string): Promise<string> {
    const base = this.ctx.upstreamBase;
    if (!base) {
      throw new Error('Missing UMAZING_UPSTREAM_BASE (remote API base URL)');
    }
    const url = `${String(base).replace(/\/+$/, '')}/${endpoint.replace(/^\/+/, '')}`;
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
      return data.trim();
    }
    if (data && typeof data === 'object') {
      const b64 = (data as any).response || (data as any).responseB64 || (data as any).data || '';
      if (!b64 || typeof b64 !== 'string') {
        throw new Error('Upstream JSON missing response field');
      }
      return b64.trim();
    }
    throw new Error('Invalid upstream response');
  }
  abstract execute(prev: StepPrevResult | undefined): Promise<StepResultBase>;
}
