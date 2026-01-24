import { decode, decodeMulti } from '@msgpack/msgpack';
import { STR16, STR32, STR8 } from '../../../constants';
import { UnpackStrategy } from '../../utils';

export class LengthPrefixedStrategy extends UnpackStrategy {
  execute(data: Buffer): unknown | undefined {
    if (data.byteLength < 4) {
      throw new Error(`message too short: need at least 4 bytes, got ${data.byteLength}`);
    }
    const len = data[0]! | (data[1]! << 8) | (data[2]! << 16) | (data[3]! << 24);
    const payloadLen = len >>> 0;
    if (payloadLen > data.byteLength - 4) {
      throw new Error(
        `message too short: length prefix (${payloadLen}) exceeds available bytes (${data.byteLength - 4})`,
      );
    }
    const decoded = decode(data.subarray(4, 4 + payloadLen));
    return this.normalizeResponseShape(decoded);
  }
}

export class RawMsgpackStrategy extends UnpackStrategy {
  execute(buf: Buffer): unknown | undefined {
    try {
      return this.normalizeResponseShape(decode(buf));
    } catch {
      return undefined;
    }
  }
}

export class MapHeaderScanStrategy extends UnpackStrategy {
  private isPlausibleMapHeaderMarker(marker: number | undefined): boolean {
    if (typeof marker !== 'number') {
      return false;
    }
    return (marker >= 0x80 && marker <= 0x8f) || marker === 0xde || marker === 0xdf;
  }

  private looksLikeUsefulObject(value: unknown, likelyKeys: string[]): boolean {
    if (!value || typeof value !== 'object' || Array.isArray(value)) {
      return false;
    }
    const keys = Object.keys(value);
    const hasKnown = likelyKeys.some((k) => keys.includes(k));
    const stringKeyCount = keys.filter((k) => typeof k === 'string').length;
    return hasKnown || stringKeyCount >= 3;
  }

  execute(buf: Buffer): unknown | undefined {
    const likelyKeys = ['viewer_id', 'device', 'device_id', 'device_name'];
    const maxScan = Math.min(256, buf.length);
    for (let i = 0; i < maxScan; i++) {
      if (this.isPlausibleMapHeaderMarker(buf[i])) {
        try {
          const obj = decode(buf.subarray(i));
          if (this.looksLikeUsefulObject(obj, likelyKeys)) {
            return this.normalizeResponseShape(obj);
          }
        } catch (_e) {
          //
        }
      }
    }
    return undefined;
  }
}

export class KVStreamStrategy extends UnpackStrategy {
  private isStringMarker(marker: number): boolean {
    return (
      (marker >= 0xa0 && marker <= 0xbf) || marker === STR8 || marker === STR16 || marker === STR32
    );
  }

  private findFirstStringMarkerIndex(buf: Buffer): number {
    let start = 0;
    while (start < buf.byteLength && !this.isStringMarker(buf[start]!)) {
      start += 1;
    }
    return start;
  }

  private decodeStreamToObject(values: unknown[]): Record<string, unknown> {
    if (values.length % 2 !== 0) {
      throw new Error('failed to read string key');
    }
    const obj: Record<string, unknown> = {};
    for (let i = 0; i < values.length; i += 2) {
      const key = values[i];
      if (typeof key !== 'string') {
        throw new Error('failed to read string key');
      }
      obj[key] = values[i + 1] as unknown;
    }
    return obj;
  }

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

  execute(buf: Buffer): unknown | undefined {
    try {
      const start = this.findFirstStringMarkerIndex(buf);
      const values = Array.from(decodeMulti(buf.subarray(start)));
      const obj = this.decodeStreamToObject(values);
      if (this.isEmptyObject(obj)) {
        return undefined;
      }
      return this.normalizeResponseShape(obj);
    } catch {
      return undefined;
    }
  }
}

export class AnchorDataHeadersStrategy extends UnpackStrategy {
  private buildKeyEncodings(key: string): Buffer[] {
    const keyBuf = Buffer.from(key, 'utf-8');
    const encs: Buffer[] = [];
    if (keyBuf.length <= 31) {
      encs.push(Buffer.concat([Buffer.from([0xa0 + keyBuf.length]), keyBuf]));
    }
    if (keyBuf.length <= 0xff) {
      encs.push(Buffer.concat([Buffer.from([0xd9, keyBuf.length]), keyBuf]));
    }
    encs.push(
      Buffer.concat([
        Buffer.from([0xda, (keyBuf.length >> 8) & 0xff, keyBuf.length & 0xff]),
        keyBuf,
      ]),
    );
    encs.push(Buffer.concat([Buffer.from([0xdb, 0x00, 0x00, 0x00, keyBuf.length & 0xff]), keyBuf]));
    return encs;
  }

  private findFirstPatternIndex(buf: Buffer, patterns: Buffer[]): number {
    for (const pat of patterns) {
      const idx = buf.indexOf(pat);
      if (idx !== -1) {
        return idx;
      }
    }
    return -1;
  }

  private buildObjectFromKvSequence(seq: unknown[]): Record<string, unknown> {
    const out: Record<string, unknown> = {};
    for (let i = 0; i + 1 < seq.length; i += 2) {
      if (typeof seq[i] !== 'string') {
        break;
      }
      out[seq[i] as string] = seq[i + 1];
    }
    return out;
  }

  private looksAnchored(out: Record<string, unknown>): boolean {
    if (out.data_headers && out.data) {
      return true;
    }
    const keys = Object.keys(out);
    return keys.length >= 2 && (keys.includes('data_headers') || keys.includes('data'));
  }

  execute(buf: Buffer): unknown | undefined {
    try {
      const start = this.findFirstPatternIndex(buf, this.buildKeyEncodings('data_headers'));
      if (start !== -1) {
        const seq = [...decodeMulti(buf.subarray(start))];
        const out = this.buildObjectFromKvSequence(seq);
        if (this.looksAnchored(out)) {
          return this.normalizeResponseShape(out);
        }
      }
    } catch (_e) {
      //
    }
    return undefined;
  }
}

export class MultiArrayStrategy extends UnpackStrategy {
  execute(buf: Buffer): unknown | undefined {
    try {
      const arr = [...decodeMulti(buf)];
      if (arr.length > 0) {
        const allNumbers = arr.every((v) => typeof v === 'number');
        if (!allNumbers) {
          return arr;
        }
      }
    } catch (_e) {
      //
    }
    return undefined;
  }
}

export class HeuristicStreamToObjectStrategy extends UnpackStrategy {
  private foldFromFirstStringRun(
    seq: unknown[],
    maxStarts: number,
    minPairs: number,
  ): Record<string, unknown> | undefined {
    for (let start = 0; start < Math.min(seq.length, maxStarts); start++) {
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
      if (okPairs >= minPairs) {
        return obj;
      }
    }
    return undefined;
  }

  execute(buf: Buffer): unknown | undefined {
    try {
      const seq = [...decodeMulti(buf)];
      const obj = this.foldFromFirstStringRun(seq, 64, 2);
      if (obj) {
        return obj;
      }
    } catch (_e) {
      //
    }
    return undefined;
  }
}

export class Unpacker {
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
        //
      }
    }
    return {
      _unparsed_note:
        'Could not parse payload as length-prefixed or raw msgpack. Dumping hex for manual inspection.',
      _raw_hex: buf.toString('hex'),
    };
  }
}
