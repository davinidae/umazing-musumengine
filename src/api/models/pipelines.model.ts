import { DecodeResponseOutput, FramingMode, RuntimeClient } from '../../lib';
import { GallopResultCode } from './result_codes.model';

/**
 * Base64-encoded buffer string. Used for request and response payloads over the wire.
 * @public
 */
export type EncodedBase64 = string;
/**
 * Minimal shape passed between pipeline steps.
 * May be `undefined` for the first step. Implementations can carry forward useful
 * decoded headers (e.g., `viewer_id`) via the `decoded` field.
 * @public
 */
export type StepPrevResult = Partial<{
  name: string;
  endpoint: string;
  requestB64: EncodedBase64;
  responseB64: EncodedBase64;
  decoded: DecodeResponseOutput;
}>;

/**
 * Common fields every pipeline step should return.
 *
 * - `name`: logical step/service identifier
 * - `endpoint`: upstream HTTP endpoint path used by the step
 * - `framing`: payload framing used for the request (`kv-stream` or `length-prefixed`)
 * - `requestB64`/`responseB64`: raw Base64 buffers for reproducibility/debugging
 * - `decoded`: best-effort decoded payload (headers + body)
 * - `skipped`: mark steps that intentionally didn’t run (preconditions not met)
 * - `note`: human-friendly explanation for skipped/edge cases
 * - `error`/`errorStack`: populated when a step throws; pipeline stops at first error
 * - `responseCode`/`responseCodeName`: upstream HTTP status or synthetic code and its enum name
 * @public
 */
export type StepResultBase = {
  name: string;
  endpoint: string;
  framing: FramingMode;
  responseCode: GallopResultCode;
  responseCodeName: keyof typeof GallopResultCode;
} & Partial<{
  requestB64: EncodedBase64;
  responseB64: EncodedBase64;
  decoded: DecodeResponseOutput;
  skipped: boolean;
  note: string;
  error: string;
  errorStack: string;
}>;

/**
 * A step result augmented with execution order (1-based).
 * @public
 */
export type StepResult = StepResultBase & {
  order: number;
};

/**
 * Execution context for pipeline services. Lives in server-side session state.
 * - runtime: encoder/decoder utilities
 * - upstreamBase: base URL for remote UmaMusume API
 * - blob1: header fields used when constructing requests
 * - clientData: device/environment fields included in payloads
 */
export type PipelineContext = {
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
    /** Platform/device id enum value. */
    device: number;
    /** Device identifier string. */
    device_id: string;
    /** Human-readable device name. */
    device_name: string;
    /** GPU/graphics device name. */
    graphics_device_name: string;
    /** Client IP address (string). */
    ip_address: string;
    /** OS version string. */
    platform_os_version: string;
    /** Carrier name (if applicable). */
    carrier: string;
    /** Keychain flag (numeric). */
    keychain: number;
    /** Locale code (e.g., 'en'). */
    locale: string;
    /** DMM viewer id (nullable). */
    dmm_viewer_id: number | null;
    /** One-time DMM token (nullable). */
    dmm_onetime_token: string | null;
  } & Partial<{
    /** Steam identifier. */
    steam_id: string;
    /** Steam session ticket. */
    steam_session_ticket: string;
  }>;
};
