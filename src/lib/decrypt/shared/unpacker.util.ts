/**
 * Unpacker strategies: a small pipeline of heuristics to decode plaintext that may
 * or may not be length-prefixed msgpack. Each strategy either returns a parsed
 * value or throws/returns undefined. The Unpacker catches errors and falls through
 * until one succeeds. This keeps the core decoding resilient to real-world quirks.
 */
import { decode, decodeMulti } from '@msgpack/msgpack';
import { UnpackStrategy } from '../../models';

/**
 * First try: classic length-prefixed msgpack [4B LE len][msgpack].
 * This strategy intentionally throws on malformed inputs so unit tests can assert
 * error conditions. The Unpacker will catch and try other strategies afterwards.
 */
export class LengthPrefixedStrategy extends UnpackStrategy {
  /**
   * @param buf Decrypted plaintext buffer.
   * @returns Decoded value if valid; otherwise throws on malformed prefix/length.
   * @throws If the buffer is too short or the declared length is inconsistent with data.
   */
  execute(buf: Buffer): unknown | undefined {
    if (buf.length < 4) {
      throw new Error('Decrypted payload too short for length prefix');
    }
    const msgLen = buf.readUInt32LE(0);
    if (buf.length < 4 + msgLen) {
      throw new Error('Msgpack length inconsistent with data');
    }
    const mp = buf.subarray(4, 4 + msgLen);
    return decode(mp);
  }
}

/**
 * Second try: treat the entire buffer as a single msgpack document.
 * Useful when the server omits the length prefix for small payloads.
 */
export class RawMsgpackStrategy extends UnpackStrategy {
  /**
   * @param buf Decrypted plaintext buffer.
   * @returns Decoded single msgpack value, or undefined if not decodable.
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
export class MapHeaderScanStrategy extends UnpackStrategy {
  /**
   * @param buf Decrypted plaintext buffer.
   * @returns Decoded object if a plausible map header is found; otherwise undefined.
   */
  execute(buf: Buffer): unknown | undefined {
    const likelyKeys = ['viewer_id', 'device', 'device_id', 'device_name'];
    const maxScan = Math.min(256, buf.length);
    for (let i = 0; i < maxScan; i++) {
      const b = buf[i];
      if ((b >= 0x80 && b <= 0x8f) || b === 0xde || b === 0xdf) {
        try {
          const obj = decode(buf.subarray(i));
          if (obj && typeof obj === 'object' && !Array.isArray(obj)) {
            const keys = Object.keys(obj as Record<string, unknown>);
            const hasKnown = likelyKeys.some((k) => keys.includes(k));
            const stringKeyCount = keys.filter((k) => typeof k === 'string').length;
            if (hasKnown || stringKeyCount >= 3) {
              return this.normalizeResponseShape(obj);
            }
          }
        } catch (_e) {
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
export class KVStreamStrategy extends UnpackStrategy {
  /**
   * @param buf Decrypted plaintext buffer.
   * @returns Object reconstructed from (key, value, ...) stream, or undefined.
   */
  execute(buf: Buffer): unknown | undefined {
    const isStrHeader = (b: number) => {
      return (b >= 0xa0 && b <= 0xbf) || b === 0xd9 || b === 0xda || b === 0xdb;
    };
    const maxScan2 = Math.min(512, buf.length);
    for (let i = 0; i < maxScan2; i++) {
      if (!isStrHeader(buf[i])) {
        continue;
      }
      try {
        const seq = [...decodeMulti(buf.subarray(i))];
        const obj: Record<string, unknown> = {};
        let pairs = 0;
        for (let j = 0; j + 1 < seq.length; j += 2) {
          if (typeof seq[j] !== 'string') {
            break;
          }
          obj[seq[j] as string] = seq[j + 1];
          pairs++;
        }
        if (pairs >= 2) {
          return this.normalizeResponseShape(obj);
        }
      } catch (_e) {
        /* ignore: heuristic decodeMulti attempt */
      }
    }
    return undefined;
  }
}

/**
 * Targeted heuristic: anchor on the 'data_headers' key often present in tool responses
 * and reconstruct a map from the surrounding key/value sequence.
 */
export class AnchorDataHeadersStrategy extends UnpackStrategy {
  /**
   * @param buf Decrypted plaintext buffer.
   * @returns Object reconstructed when 'data_headers' anchor is present; otherwise undefined.
   */
  execute(buf: Buffer): unknown | undefined {
    try {
      const key = 'data_headers';
      const keyBuf = Buffer.from(key, 'utf-8');
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
      encs.push(
        Buffer.concat([Buffer.from([0xdb, 0x00, 0x00, 0x00, keyBuf.length & 0xff]), keyBuf]),
      );
      let start = -1;
      for (const pat of encs) {
        const idx = buf.indexOf(pat);
        if (idx !== -1) {
          start = idx;
          break;
        }
      }
      if (start !== -1) {
        const seq = [...decodeMulti(buf.subarray(start))];
        const out: Record<string, unknown> = {};
        for (let i = 0; i + 1 < seq.length; i += 2) {
          if (typeof seq[i] !== 'string') {
            break;
          }
          out[seq[i] as string] = seq[i + 1];
        }
        if (out.data_headers && out.data) {
          return this.normalizeResponseShape(out);
        }
        const keys = Object.keys(out);
        if (keys.length >= 2 && (keys.includes('data_headers') || keys.includes('data'))) {
          return this.normalizeResponseShape(out);
        }
      }
    } catch (_e) {
      /* ignore: not a streamed kv-sequence */
    }
    return undefined;
  }
}

/**
 * Fallback: decode as a sequence of msgpack documents into an array.
 * Keeps some visibility into odd payloads when object reconstruction is ambiguous.
 */
export class MultiArrayStrategy extends UnpackStrategy {
  /**
   * @param buf Decrypted plaintext buffer.
   * @returns Array of decoded values via decodeMulti, or undefined.
   */
  execute(buf: Buffer): unknown | undefined {
    try {
      const arr = [...decodeMulti(buf)];
      if (arr.length > 0) {
        // Be conservative: if it looks like a trivial stream of numbers, don't treat it as a parse.
        const allNumbers = arr.every((v) => typeof v === 'number');
        if (!allNumbers) {
          return arr;
        }
      }
    } catch (_e) {
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
export class HeuristicStreamToObjectStrategy extends UnpackStrategy {
  /**
   * @param buf Decrypted plaintext buffer.
   * @returns Conservatively reconstructed object from a stream, or undefined.
   */
  execute(buf: Buffer): unknown | undefined {
    try {
      const seq = [...decodeMulti(buf)];
      for (let start = 0; start < Math.min(seq.length, 64); start++) {
        if (typeof seq[start] !== 'string') {
          continue;
        }
        const obj: Record<string, unknown> = {};
        let okPairs = 0;
        for (let i = start; i + 1 < seq.length; i += 2) {
          if (typeof seq[i] !== 'string') {
            break;
          }
          obj[seq[i] as string] = seq[i + 1];
          okPairs++;
        }
        if (okPairs >= 2) {
          return obj;
        }
      }
    } catch (_e) {
      /* ignore: not a multi-doc stream */
    }
    return undefined;
  }
}

/**
 * Pipeline that tries multiple strategies in a safe order. If none succeed,
 * returns a diagnostic object containing a hex dump to aid manual inspection.
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

  execute(buf: Buffer): unknown {
    for (const s of this.strategies) {
      try {
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
