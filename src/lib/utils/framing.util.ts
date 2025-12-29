/** Build a length-prefixed buffer: `[u32le(payload.length)][payload]`. */
export function buildLengthPrefixedPayload(payload: Uint8Array): Buffer {
  const payloadBuf = Buffer.from(payload);
  if (payloadBuf.length > 0xffffffff) {
    throw new Error(`payload too large for u32 length prefix: ${payloadBuf.length}`);
  }
  const header = Buffer.alloc(4);
  header.writeUInt32LE(payloadBuf.length, 0);
  return Buffer.concat([header, payloadBuf]);
}
