/**
 * Unpacker strategies: a small pipeline of heuristics to decode plaintext that may
 * or may not be length-prefixed msgpack. Each strategy either returns a parsed
 * value or throws/returns undefined. The Unpacker catches errors and falls through
 * until one succeeds. This keeps the core decoding resilient to real-world quirks.
 */
import { decode, decodeMulti } from '@msgpack/msgpack';
import { STR16, STR32, STR8 } from '../../../constants';
import { UnpackStrategy } from '../../utils';

/**
 * First try: classic length-prefixed msgpack [4B LE len][msgpack].
 * This strategy intentionally throws on malformed inputs so unit tests can assert
 * error conditions. The Unpacker will catch and try other strategies afterwards.
 */
/**
 * LengthPrefixedStrategy.
 * @remarks Extends/implements: `extends UnpackStrategy`.
 */
export class LengthPrefixedStrategy extends UnpackStrategy {
  /**
   * @param data Decrypted plaintext buffer.
   * @returns Decoded value if valid; otherwise throws on malformed prefix/length.
   * @throws If the buffer is too short or the declared length is inconsistent with data.
   */
  /**
   * execute.
   * @param data - Type: `Buffer<ArrayBufferLike>`.
   * @returns Type: `unknown`.
   */
  execute(data: Buffer): unknown | undefined {
    if (data.byteLength < 4) {
      throw new Error(`message too short: need at least 4 bytes, got ${data.byteLength}`);
    }
    /**
     * len.
     * @remarks Type: `number`.
     * @defaultValue `data[0]! | (data[1]! << 8) | (data[2]! << 16) | (data[3]! << 24)`
     */
    const len = data[0]! | (data[1]! << 8) | (data[2]! << 16) | (data[3]! << 24);
    /**
     * payloadLen.
     * @remarks Type: `number`.
     * @defaultValue `len >>> 0`
     */
    const payloadLen = len >>> 0;
    if (payloadLen > data.byteLength - 4) {
      throw new Error(
        `message too short: length prefix (${payloadLen}) exceeds available bytes (${data.byteLength - 4})`,
      );
    }
    /**
     * decoded.
     * @remarks Type: `unknown`.
     * @defaultValue `decode(data.subarray(4, 4 + payloadLen))`
     */
    const decoded = decode(data.subarray(4, 4 + payloadLen));
    return this.normalizeResponseShape(decoded);
  }
}

/**
 * Second try: treat the entire buffer as a single msgpack document.
 * Useful when the server omits the length prefix for small payloads.
 */
/**
 * RawMsgpackStrategy.
 * @remarks Extends/implements: `extends UnpackStrategy`.
 */
export class RawMsgpackStrategy extends UnpackStrategy {
  /**
   * @param buf Decrypted plaintext buffer.
   * @returns Decoded single msgpack value, or undefined if not decodable.
   */
  /**
   * execute.
   * @param buf - Type: `Buffer<ArrayBufferLike>`.
   * @returns Type: `unknown`.
   */
  execute(buf: Buffer): unknown | undefined {
    try {
      return this.normalizeResponseShape(decode(buf));
    } catch {
      return undefined;
    }
  }
}

/**
 * Heuristic: scan for a plausible map header inside the buffer and decode from there.
 * Looks for likely keys (viewer_id, device, ...) or sufficient string key density.
 */
/**
 * MapHeaderScanStrategy.
 * @remarks Extends/implements: `extends UnpackStrategy`.
 */
export class MapHeaderScanStrategy extends UnpackStrategy {
  /**
   * isPlausibleMapHeaderMarker.
   * @param marker - Type: `number | undefined`.
   * @returns Type: `boolean`.
   */
  private isPlausibleMapHeaderMarker(marker: number | undefined): boolean {
    if (typeof marker !== 'number') {
      return false;
    }
    return (marker >= 0x80 && marker <= 0x8f) || marker === 0xde || marker === 0xdf;
  }

  /**
   * looksLikeUsefulObject.
   * @param value - Type: `unknown`.
   * @param likelyKeys - Type: `string[]`.
   * @returns Type: `boolean`.
   */
  private looksLikeUsefulObject(value: unknown, likelyKeys: string[]): boolean {
    if (!value || typeof value !== 'object' || Array.isArray(value)) {
      return false;
    }
    /**
     * keys.
     * @remarks Type: `string[]`.
     * @defaultValue `Object.keys(value)`
     */
    const keys = Object.keys(value);
    /**
     * hasKnown.
     * @remarks Type: `boolean`.
     * @defaultValue `likelyKeys.some((k) => keys.includes(k))`
     */
    const hasKnown = likelyKeys.some((k) => keys.includes(k));
    /**
     * stringKeyCount.
     * @remarks Type: `number`.
     * @defaultValue `keys.filter((k) => typeof k === 'string').length`
     */
    const stringKeyCount = keys.filter((k) => typeof k === 'string').length;
    return hasKnown || stringKeyCount >= 3;
  }

  /**
   * @param buf Decrypted plaintext buffer.
   * @returns Decoded object if a plausible map header is found; otherwise undefined.
   */
  /**
   * execute.
   * @param buf - Type: `Buffer<ArrayBufferLike>`.
   * @returns Type: `unknown`.
   */
  execute(buf: Buffer): unknown | undefined {
    /**
     * likelyKeys.
     * @remarks Type: `string[]`.
     * @defaultValue `['viewer_id', 'device', 'device_id', 'device_name']`
     */
    const likelyKeys = ['viewer_id', 'device', 'device_id', 'device_name'];
    /**
     * maxScan.
     * @remarks Type: `number`.
     * @defaultValue `Math.min(256, buf.length)`
     */
    const maxScan = Math.min(256, buf.length);
    /**
     * i.
     * @remarks Type: `number`.
     * @defaultValue `0`
     */
    for (let i = 0; i < maxScan; i++) {
      if (this.isPlausibleMapHeaderMarker(buf[i])) {
        try {
          /**
           * obj.
           * @remarks Type: `unknown`.
           * @defaultValue `decode(buf.subarray(i))`
           */
          const obj = decode(buf.subarray(i));
          if (this.looksLikeUsefulObject(obj, likelyKeys)) {
            return this.normalizeResponseShape(obj);
          }
        } catch (_e) {
          /**
           * catch (_e).
           * @remarks Type: `unknown`.
           */
          /* ignore: heuristic probe */
        }
      }
    }
    return undefined;
  }
}

/**
 * Heuristic: decode a concatenated (key, value, ...) msgpack stream into an object.
 * This matches some tool endpoints that stream key/value pairs without a surrounding map.
 */
/**
 * KVStreamStrategy.
 * @remarks Extends/implements: `extends UnpackStrategy`.
 */
export class KVStreamStrategy extends UnpackStrategy {
  /**
   * isStringMarker.
   * @param marker - Type: `number`.
   * @returns Type: `boolean`.
   */
  private isStringMarker(marker: number): boolean {
    // FixStr: 0xa0..0xbf
    return (
      (marker >= 0xa0 && marker <= 0xbf) || marker === STR8 || marker === STR16 || marker === STR32
    );
  }

  /**
   * findFirstStringMarkerIndex.
   * @param buf - Type: `Buffer<ArrayBufferLike>`.
   * @returns Type: `number`.
   */
  private findFirstStringMarkerIndex(buf: Buffer): number {
    /**
     * start.
     * @remarks Type: `number`.
     * @defaultValue `0`
     */
    let start = 0;
    while (start < buf.byteLength && !this.isStringMarker(buf[start]!)) {
      start += 1;
    }
    return start;
  }

  /**
   * decodeStreamToObject.
   * @param values - Type: `unknown[]`.
   * @returns Type: `Record<string, unknown>`.
   */
  private decodeStreamToObject(values: unknown[]): Record<string, unknown> {
    if (values.length % 2 !== 0) {
      throw new Error('failed to read string key');
    }
    /**
     * obj.
     * @remarks Type: `Record<string, unknown>`.
     * @defaultValue `{}`
     */
    const obj: Record<string, unknown> = {};
    /**
     * i.
     * @remarks Type: `number`.
     * @defaultValue `0`
     */
    for (let i = 0; i < values.length; i += 2) {
      /**
       * key.
       * @remarks Type: `unknown`.
       * @defaultValue `values[i]`
       */
      const key = values[i];
      if (typeof key !== 'string') {
        throw new Error('failed to read string key');
      }
      obj[key] = values[i + 1] as unknown;
    }
    return obj;
  }

  /**
   * isEmptyObject.
   * @param value - Type: `unknown`.
   * @returns Type: `boolean`.
   */
  private isEmptyObject(value: unknown): boolean {
    if (value === null || value === undefined) {
      return false;
    }
    if (typeof value !== 'object') {
      return false;
    }
    if (Array.isArray(value)) {
      return false;
    }
    return Object.keys(value).length === 0;
  }

  /**
   * @param buf Decrypted plaintext buffer.
   * @returns Object reconstructed from (key, value, ...) stream, or undefined.
   */
  /**
   * execute.
   * @param buf - Type: `Buffer<ArrayBufferLike>`.
   * @returns Type: `unknown`.
   */
  execute(buf: Buffer): unknown | undefined {
    try {
      /**
       * start.
       * @remarks Type: `number`.
       * @defaultValue `this.findFirstStringMarkerIndex(buf)`
       */
      const start = this.findFirstStringMarkerIndex(buf);
      /**
       * values.
       * @remarks Type: `unknown[]`.
       * @defaultValue `Array.from(decodeMulti(buf.subarray(start)))`
       */
      const values = Array.from(decodeMulti(buf.subarray(start)));
      /**
       * obj.
       * @remarks Type: `Record<string, unknown>`.
       * @defaultValue `this.decodeStreamToObject(values)`
       */
      const obj = this.decodeStreamToObject(values);
      // Preserve previous Unpacker behavior: don't accept an empty decode as a valid parse.
      if (this.isEmptyObject(obj)) {
        return undefined;
      }
      return this.normalizeResponseShape(obj);
    } catch {
      return undefined;
    }
  }
}

/**
 * Targeted heuristic: anchor on the 'data_headers' key often present in tool responses
 * and reconstruct a map from the surrounding key/value sequence.
 */
/**
 * AnchorDataHeadersStrategy.
 * @remarks Extends/implements: `extends UnpackStrategy`.
 */
export class AnchorDataHeadersStrategy extends UnpackStrategy {
  /**
   * buildKeyEncodings.
   * @param key - Type: `string`.
   * @returns Type: `Buffer<ArrayBufferLike>[]`.
   */
  private buildKeyEncodings(key: string): Buffer[] {
    /**
     * keyBuf.
     * @remarks Type: `Buffer<ArrayBuffer>`.
     * @defaultValue `Buffer.from(key, 'utf-8')`
     */
    const keyBuf = Buffer.from(key, 'utf-8');
    /**
     * encs.
     * @remarks Type: `Buffer<ArrayBufferLike>[]`.
     * @defaultValue `[]`
     */
    const encs: Buffer[] = [];
    // fixstr
    if (keyBuf.length <= 31) {
      encs.push(Buffer.concat([Buffer.from([0xa0 + keyBuf.length]), keyBuf]));
    }
    // str8
    if (keyBuf.length <= 0xff) {
      encs.push(Buffer.concat([Buffer.from([0xd9, keyBuf.length]), keyBuf]));
    }
    // str16
    encs.push(
      Buffer.concat([
        Buffer.from([0xda, (keyBuf.length >> 8) & 0xff, keyBuf.length & 0xff]),
        keyBuf,
      ]),
    );
    // str32 (coarse)
    encs.push(Buffer.concat([Buffer.from([0xdb, 0x00, 0x00, 0x00, keyBuf.length & 0xff]), keyBuf]));
    return encs;
  }

  /**
   * findFirstPatternIndex.
   * @param buf - Type: `Buffer<ArrayBufferLike>`.
   * @param patterns - Type: `Buffer<ArrayBufferLike>[]`.
   * @returns Type: `number`.
   */
  private findFirstPatternIndex(buf: Buffer, patterns: Buffer[]): number {
    /**
     * pat.
     * @remarks Type: `Buffer<ArrayBufferLike>`.
     */
    for (const pat of patterns) {
      /**
       * idx.
       * @remarks Type: `number`.
       * @defaultValue `buf.indexOf(pat)`
       */
      const idx = buf.indexOf(pat);
      if (idx !== -1) {
        return idx;
      }
    }
    return -1;
  }

  /**
   * buildObjectFromKvSequence.
   * @param seq - Type: `unknown[]`.
   * @returns Type: `Record<string, unknown>`.
   */
  private buildObjectFromKvSequence(seq: unknown[]): Record<string, unknown> {
    /**
     * out.
     * @remarks Type: `Record<string, unknown>`.
     * @defaultValue `{}`
     */
    const out: Record<string, unknown> = {};
    /**
     * i.
     * @remarks Type: `number`.
     * @defaultValue `0`
     */
    for (let i = 0; i + 1 < seq.length; i += 2) {
      if (typeof seq[i] !== 'string') {
        break;
      }
      out[seq[i] as string] = seq[i + 1];
    }
    return out;
  }

  /**
   * looksAnchored.
   * @param out - Type: `Record<string, unknown>`.
   * @returns Type: `boolean`.
   */
  private looksAnchored(out: Record<string, unknown>): boolean {
    if (out.data_headers && out.data) {
      return true;
    }
    /**
     * keys.
     * @remarks Type: `string[]`.
     * @defaultValue `Object.keys(out)`
     */
    const keys = Object.keys(out);
    return keys.length >= 2 && (keys.includes('data_headers') || keys.includes('data'));
  }

  /**
   * @param buf Decrypted plaintext buffer.
   * @returns Object reconstructed when 'data_headers' anchor is present; otherwise undefined.
   */
  /**
   * execute.
   * @param buf - Type: `Buffer<ArrayBufferLike>`.
   * @returns Type: `unknown`.
   */
  execute(buf: Buffer): unknown | undefined {
    try {
      /**
       * start.
       * @remarks Type: `number`.
       * @defaultValue `this.findFirstPatternIndex(buf, this.buildKeyEncodings('data_headers'))`
       */
      const start = this.findFirstPatternIndex(buf, this.buildKeyEncodings('data_headers'));
      if (start !== -1) {
        /**
         * seq.
         * @remarks Type: `unknown[]`.
         * @defaultValue `[...decodeMulti(buf.subarray(start))]`
         */
        const seq = [...decodeMulti(buf.subarray(start))];
        /**
         * out.
         * @remarks Type: `Record<string, unknown>`.
         * @defaultValue `this.buildObjectFromKvSequence(seq)`
         */
        const out = this.buildObjectFromKvSequence(seq);
        if (this.looksAnchored(out)) {
          return this.normalizeResponseShape(out);
        }
      }
    } catch (_e) {
      /**
       * catch (_e).
       * @remarks Type: `unknown`.
       */
      /* ignore: not a streamed kv-sequence */
    }
    return undefined;
  }
}

/**
 * Fallback: decode as a sequence of msgpack documents into an array.
 * Keeps some visibility into odd payloads when object reconstruction is ambiguous.
 */
/**
 * MultiArrayStrategy.
 * @remarks Extends/implements: `extends UnpackStrategy`.
 */
export class MultiArrayStrategy extends UnpackStrategy {
  /**
   * @param buf Decrypted plaintext buffer.
   * @returns Array of decoded values via decodeMulti, or undefined.
   */
  /**
   * execute.
   * @param buf - Type: `Buffer<ArrayBufferLike>`.
   * @returns Type: `unknown`.
   */
  execute(buf: Buffer): unknown | undefined {
    try {
      /**
       * arr.
       * @remarks Type: `unknown[]`.
       * @defaultValue `[...decodeMulti(buf)]`
       */
      const arr = [...decodeMulti(buf)];
      if (arr.length > 0) {
        /**
         * allNumbers.
         *
         * Be conservative: if it looks like a trivial stream of numbers, don't treat it as a parse.
         *
         * @remarks Type: `boolean`.
         * @defaultValue `arr.every((v) => typeof v === 'number')`
         */
        const allNumbers = arr.every((v) => typeof v === 'number');
        if (!allNumbers) {
          return arr;
        }
      }
    } catch (_e) {
      /**
       * catch (_e).
       * @remarks Type: `unknown`.
       */
      /* ignore: not a multi-doc payload */
    }
    return undefined;
  }
}

/**
 * Last-resort heuristic: decode a short prefix of values and attempt to fold them
 * into an object starting at the first run of string keys. This is conservative
 * and only accepts outputs with enough (>=4) key/value pairs.
 */
/**
 * HeuristicStreamToObjectStrategy.
 * @remarks Extends/implements: `extends UnpackStrategy`.
 */
export class HeuristicStreamToObjectStrategy extends UnpackStrategy {
  /**
   * foldFromFirstStringRun.
   * @param seq - Type: `unknown[]`.
   * @param maxStarts - Type: `number`.
   * @param minPairs - Type: `number`.
   * @returns Type: `Record<string, unknown> | undefined`.
   */
  private foldFromFirstStringRun(
    seq: unknown[],
    maxStarts: number,
    minPairs: number,
  ): Record<string, unknown> | undefined {
    /**
     * start.
     * @remarks Type: `number`.
     * @defaultValue `0`
     */
    for (let start = 0; start < Math.min(seq.length, maxStarts); start++) {
      if (typeof seq[start] !== 'string') {
        continue;
      }
      /**
       * obj.
       * @remarks Type: `Record<string, unknown>`.
       * @defaultValue `{}`
       */
      const obj: Record<string, unknown> = {};
      /**
       * okPairs.
       * @remarks Type: `number`.
       * @defaultValue `0`
       */
      let okPairs = 0;
      /**
       * i.
       * @remarks Type: `number`.
       * @defaultValue `start`
       */
      for (let i = start; i + 1 < seq.length; i += 2) {
        if (typeof seq[i] !== 'string') {
          break;
        }
        obj[seq[i] as string] = seq[i + 1];
        okPairs++;
      }
      if (okPairs >= minPairs) {
        return obj;
      }
    }
    return undefined;
  }

  /**
   * @param buf Decrypted plaintext buffer.
   * @returns Conservatively reconstructed object from a stream, or undefined.
   */
  /**
   * execute.
   * @param buf - Type: `Buffer<ArrayBufferLike>`.
   * @returns Type: `unknown`.
   */
  execute(buf: Buffer): unknown | undefined {
    try {
      /**
       * seq.
       * @remarks Type: `unknown[]`.
       * @defaultValue `[...decodeMulti(buf)]`
       */
      const seq = [...decodeMulti(buf)];
      /**
       * obj.
       * @remarks Type: `Record<string, unknown> | undefined`.
       * @defaultValue `this.foldFromFirstStringRun(seq, 64, 2)`
       */
      const obj = this.foldFromFirstStringRun(seq, 64, 2);
      if (obj) {
        return obj;
      }
    } catch (_e) {
      /**
       * catch (_e).
       * @remarks Type: `unknown`.
       */
      /* ignore: not a multi-doc stream */
    }
    return undefined;
  }
}

/**
 * Pipeline that tries multiple strategies in a safe order. If none succeed,
 * returns a diagnostic object containing a hex dump to aid manual inspection.
 */
/**
 * Unpacker.
 */
export class Unpacker {
  /**
   * Heuristic unpacker for payloads that may not be length-prefixed. It tries, in order:
   * 1) Standard length-prefixed msgpack
   * 2) Raw single msgpack document
   * 3) Scan for map header and decode if plausible
   * 4) Scan for a streamed KV sequence (key,value,...) and reconstruct an object
   *    - Includes a targeted 'data_headers' anchor for tool responses
   * 5) decodeMulti to array as a last resort
   * If none succeed, returns a small diagnostic object with hex dump.
   */
  /**
   * constructor.
   * @param strategies - Type: `UnpackStrategy[]`.
   * @returns Type: `Unpacker`.
   */
  constructor(
    private readonly strategies: UnpackStrategy[] = [
      new LengthPrefixedStrategy(),
      new RawMsgpackStrategy(),
      new MapHeaderScanStrategy(),
      new KVStreamStrategy(),
      new AnchorDataHeadersStrategy(),
      new MultiArrayStrategy(),
      new HeuristicStreamToObjectStrategy(),
    ],
  ) {
    //
  }

  /**
   * execute.
   * @param buf - Type: `Buffer<ArrayBufferLike>`.
   * @returns Type: `unknown`.
   */
  execute(buf: Buffer): unknown {
    /**
     * s.
     * @remarks Type: `UnpackStrategy`.
     */
    for (const s of this.strategies) {
      try {
        /**
         * v.
         * @remarks Type: `unknown`.
         * @defaultValue `s.execute(buf)`
         */
        const v = s.execute(buf);
        if (v !== undefined) {
          return v;
        }
      } catch {
        // Ignore strategy errors to allow fallthrough to other strategies
      }
    }
    // Give up gracefully with a helpful dump
    return {
      _unparsed_note:
        'Could not parse payload as length-prefixed or raw msgpack. Dumping hex for manual inspection.',
      _raw_hex: buf.toString('hex'),
    };
  }
}
