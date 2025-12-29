/** Build a length-prefixed buffer: `[u32le(payload.length)][payload]`. */
/**
 * buildLengthPrefixedPayload.
 * @param payload - Type: `Uint8Array<ArrayBufferLike>`.
 * @returns Type: `Buffer<ArrayBufferLike>`.
 */
export function buildLengthPrefixedPayload(payload: Uint8Array): Buffer {
  /**
   * payloadBuf.
   * @remarks Type: `Buffer<ArrayBuffer>`.
   * @defaultValue `Buffer.from(payload)`
   */
  const payloadBuf = Buffer.from(payload);
  if (payloadBuf.length > 0xffffffff) {
    throw new Error(`payload too large for u32 length prefix: ${payloadBuf.length}`);
  }
  /**
   * header.
   * @remarks Type: `Buffer<ArrayBuffer>`.
   * @defaultValue `Buffer.alloc(4)`
   */
  const header = Buffer.alloc(4);
  header.writeUInt32LE(payloadBuf.length, 0);
  return Buffer.concat([header, payloadBuf]);
}
