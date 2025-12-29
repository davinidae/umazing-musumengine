import { KVStreamStrategy, LengthPrefixedStrategy, Unpacker } from '../../lib/decrypt/utils';

/**
 * Preferred API decoder.
 * Preserves the API decode logic:
 * - try length-prefixed msgpack
 * - else try kv-stream decoding
 *
 * Internally uses the library `Unpacker` so decoding behavior stays centralized.
 * Throws when decoding fails to preserve existing API flow semantics.
 */
export class UmaResponseDecoder {
  private readonly unpacker: Unpacker;

  constructor() {
    // Keep API logic to only these two strategies.
    this.unpacker = new Unpacker([new LengthPrefixedStrategy(), new KVStreamStrategy()]);
  }

  decode<T = unknown>(data: Uint8Array): T {
    const out = this.unpacker.execute(Buffer.from(data));
    if (out && typeof out === 'object' && '_unparsed_note' in out) {
      throw new Error('failed to decode response payload');
    }
    return out as T;
  }
}
