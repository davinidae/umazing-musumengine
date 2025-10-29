import { describe, test, expect } from 'vitest';
import { encode } from '@msgpack/msgpack';
import { Unpacker } from '../../src';

const unpacker = new Unpacker();

function concat(...bufs: Buffer[]): Buffer {
  return Buffer.concat(bufs);
}

describe('Unpacker', () => {
  test('decodes kv-stream (key,value,key,value,...) into an object', () => {
    const kv = concat(
      Buffer.from(encode('a')),
      Buffer.from(encode(1)),
      Buffer.from(encode('b')),
      Buffer.from(encode('x')),
      Buffer.from(encode('c')),
      Buffer.from(encode(true)),
    );
    const obj = unpacker.execute(kv) as any;
    expect(obj).toEqual({ a: 1, b: 'x', c: true });
  });

  test("decodes with 'data_headers' anchor after some noise and reconstructs response shape", () => {
    const headers = {
      viewer_id: 0,
      sid: '',
      servertime: 123,
      result_code: 1,
      server_list: { r: 's' },
    };
    const data = { ok: true };
    const noise = Buffer.from([0x02, 0x4a, 0x06, 0x58]);
    const seq = concat(
      noise,
      Buffer.from(encode('data_headers')),
      Buffer.from(encode(headers)),
      Buffer.from(encode('data')),
      Buffer.from(encode(data)),
    );
    const obj = unpacker.execute(seq) as any;
    expect(obj).toEqual({ data_headers: headers, data });
  });

  test('normalizes flattened headers + data into { data_headers, data }', () => {
    const flat = {
      viewer_id: 0,
      sid: '',
      servertime: 1,
      result_code: 1,
      server_list: { r: 's' },
      data: { z: 9 },
    };
    const buf = Buffer.from(encode(flat));
    const obj = unpacker.execute(buf) as any;
    expect(obj).toEqual({
      data_headers: {
        viewer_id: 0,
        sid: '',
        servertime: 1,
        result_code: 1,
        server_list: { r: 's' },
      },
      data: { z: 9 },
    });
  });

  test('falls back to length-prefixed path when valid', () => {
    const inner = { m: 7, s: 'ok' };
    const enc = Buffer.from(encode(inner));
    const prefixed = Buffer.concat([Buffer.alloc(4), enc]);
    prefixed.writeUInt32LE(enc.length, 0);
    const obj = unpacker.execute(prefixed) as any;
    expect(obj).toEqual(inner);
  });
});
