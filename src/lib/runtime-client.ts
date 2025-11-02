/**
 * Programmatic encode/decode helpers used by the CLI and tests.
 *
 * Wire format:
 * - request = [4B LE blob1_len][blob1][blob2]
 * - blob1   = [prefix][session_id(16)][udid_raw(16)][response_key(32)][auth_key(48)]
 * - blob2   = [AES-256-CBC(ciphertext)][deterministic_key(32)]
 *
 * Notes:
 * - The IV for AES is derived from the device UDID (canonical string form).
 * - The encryption key for tests is deterministic (SHA-256 of DETERMINISTIC_ENC_SECRET) to make roundtrips reproducible.
 * - Payload framing: length-prefixed ([4B LE len][msgpack]) or kv-stream (concatenated msgpack documents [k1][v1]...).
 *
 * @public
 */
import { defaultLogger } from './shared';
import { DETERMINISTIC_ENC_SECRET as DEFAULT_SECRET } from '../variables';
import { DecryptResponseService } from './decrypt';
import { EncryptPayloadService } from './encrypt';
import {
  EncodeRequestInput,
  EncodeRequestOutput,
  DecodeResponseInput,
  DecodeResponseOutput,
  RuntimeClientOptions,
  Logger,
} from './models';

export class RuntimeClient {
  /** Thin OO wrapper so consumers can inject options later (e.g., logger).
   * @param opts Runtime options including the deterministic secret and optional logger.
   */
  constructor(
    private readonly opts: RuntimeClientOptions = {
      DETERMINISTIC_ENC_SECRET: DEFAULT_SECRET,
      logger: defaultLogger,
    },
  ) {}
  private get logger(): Logger {
    return this.opts.logger ?? defaultLogger;
  }

  /**
   * Encode a request from header fields (blob1) and a JS payload.
   *
   * @param input Blob1 header pieces and the payload to serialize.
   * @returns `{ requestB64 }` the Base64-encoded request buffer.
   * @throws If mandatory fields are missing or have invalid sizes.
   */
  encodeRequest(input: EncodeRequestInput): EncodeRequestOutput {
    const { blob1, payload } = input;
    this.logger.debug?.('[runtime] encodeRequest framing=%s', blob1.framing ?? 'length-prefixed');
    const { requestB64 } = new EncryptPayloadService().buildFromParts({
      blob1,
      payload,
      DETERMINISTIC_ENC_SECRET: this.opts.DETERMINISTIC_ENC_SECRET,
    });
    return { requestB64 };
  }

  /**
   * Decode a Base64 response using the matching request for UDID/IV.
   * Extracts UDID from blob1, derives IV, decrypts blob2, and uses the heuristic Unpacker to parse the plaintext.
   *
   * @param input An object with `requestB64` and `responseB64`.
   * @returns `{ payload }` best-effort parsed and normalized payload.
   * @throws If the request blob1 is malformed and UDID cannot be extracted.
   */
  decodeResponse(input: DecodeResponseInput): DecodeResponseOutput {
    this.logger.debug?.('[runtime] decodeResponse start');
    const { requestB64, responseB64 } = input;
    if (!requestB64 || !responseB64) {
      throw new Error('Missing requestB64 or responseB64');
    }
    const result = new DecryptResponseService().decodeFromBase64(requestB64, responseB64);
    this.logger.debug?.('[runtime] decodeResponse unpacked');
    return { payload: result.blob2 };
  }
}
