import { decode, decodeMulti } from '@msgpack/msgpack';
import { STR16, STR32, STR8 } from './constants';

function isStringMarker(marker: number): boolean {
  // FixStr: 0xa0..0xbf
  return (
    (marker >= 0xa0 && marker <= 0xbf) || marker === STR8 || marker === STR16 || marker === STR32
  );
}

export function msgpackLenDecode<T = unknown>(data: Uint8Array): T {
  if (data.byteLength < 4) {
    throw new Error('message too short');
  }
  const len = data[0]! | (data[1]! << 8) | (data[2]! << 16) | (data[3]! << 24);
  const payloadLen = len >>> 0;
  if (payloadLen > data.byteLength - 4) {
    throw new Error('message too short');
  }
  return decode(data.subarray(4, 4 + payloadLen)) as T;
}

/**
 * Rust parity: scans forward until the first msgpack string marker, then decodes
 * a sequence of key(string), value(any) pairs until EOF.
 */
export function kvstreamDecode<T = unknown>(data: Uint8Array): T {
  let start = 0;
  while (start < data.byteLength && !isStringMarker(data[start]!)) {
    start += 1;
  }
  const sliced = data.subarray(start);
  const values = Array.from(decodeMulti(sliced));
  if (values.length % 2 !== 0) {
    throw new Error('failed to read string key');
  }
  const out: Record<string, unknown> = {};
  for (let i = 0; i < values.length; i += 2) {
    const key = values[i];
    if (typeof key !== 'string') {
      throw new Error('failed to read string key');
    }
    out[key] = values[i + 1] as unknown;
  }
  return out as T;
}

export function heuristicDecode<T = unknown>(data: Uint8Array): T {
  try {
    return msgpackLenDecode<T>(data);
  } catch {
    return kvstreamDecode<T>(data);
  }
}
