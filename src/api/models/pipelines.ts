import { RuntimeClient } from '../../lib';

/**
 * Base64-encoded buffer string. Used for request and response payloads over the wire.
 * @public
 */
export type EncodedBase64 = string;
/**
 * Minimal shape passed between pipeline steps. May be undefined for the first step.
 * Implementations may carry forward useful decoded headers (e.g., viewer_id).
 */
export interface StepPrevResult {
  name?: string;
  endpoint?: string;
  requestB64?: EncodedBase64;
  responseB64?: EncodedBase64;
  decoded?: unknown;
}

/**
 * Common fields every pipeline step should return.
 * - name: logical step/service identifier
 * - endpoint: upstream HTTP endpoint path used by the step
 * - framing: payload framing used for the request ('kv-stream' or 'length-prefixed')
 * - requestB64/responseB64: raw Base64 buffers for reproducibility/debugging
 * - decoded: best-effort decoded payload
 * - skipped: mark steps that intentionally didn’t run (preconditions not met)
 * - note: human-friendly explanation for skipped/edge cases
 * - error/errorStack: populated when a step throws; pipeline stops at first error
 */
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

/**
 * A step result augmented with execution order (1-based).
 */
export interface StepResult extends StepResultBase {
  order: number;
}

/**
 * Execution context for pipeline services. Lives in server-side session state.
 * - runtime: encoder/decoder utilities
 * - upstreamBase: base URL for remote UmaMusume API
 * - blob1: header fields used when constructing requests
 * - clientData: device/environment fields included in payloads
 */
export interface PipelineContext {
  runtime: RuntimeClient;
  upstreamBase: string;
  // Common header pieces
  blob1: {
    /** Free-form prefix echoed back by server (hex). */
    prefix_hex: string;
    /** 16-byte device UDID (hex). */
    udid_raw_hex: string;
    /** 16-byte session identifier (hex). */
    session_id_hex: string;
    /** 32-byte response key (hex). */
    response_key_hex: string;
    /** 48-byte auth key (hex). */
    auth_key_hex: string;
  };
  // Base client fields used to build payloads
  clientData: {
    /** Set by upstream after signup/start_session. */
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
