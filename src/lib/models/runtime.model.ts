/**
 * Payload framing modes supported by the wire protocol.
 * - length-prefixed: [4B LE len][msgpack]
 * - kv-stream: concatenated msgpack docs [k1][v1][k2][v2]...
 */
export type FramingMode = 'length-prefixed' | 'kv-stream';

/** Input parameters for building a request. */
export interface EncodeRequestInput {
  blob1: {
    /** Free-form prefix; echoed back by the server. */
    prefix_hex: string;
    /** Raw 16-byte UDID in hex; alternative to udid_canonical. */
    udid_raw_hex?: string;
    /** Canonical UDID string (with dashes); alternative to udid_raw_hex. */
    udid_canonical?: string;
    /** 16-byte session identifier (hex). */
    session_id_hex: string;
    /** 32-byte response key (hex); echoed back and used by the server. */
    response_key_hex: string;
    /** 48-byte auth key (hex); contents are opaque for our purposes. */
    auth_key_hex: string;
    /** Optional framing hint for the payload. Defaults to length-prefixed. */
    framing?: FramingMode;
  };
  payload: any;
}

export interface EncodeRequestOutput {
  requestB64: string;
}

export interface DecodeResponseInput {
  /** Matching request (Base64) — used to obtain UDID and derive IV. */
  requestB64: string;
  responseB64: string;
}

export interface DecodeResponseOutput {
  payload: any;
}
