import { describe, test, expect } from 'vitest';
import { encode } from '@msgpack/msgpack';
import {
  LengthPrefixedStrategy,
  RawMsgpackStrategy,
  KVStreamStrategy,
  Unpacker,
} from '../../../../../src/lib/decrypt/shared';
import {
  MapHeaderScanStrategy,
  AnchorDataHeadersStrategy,
  MultiArrayStrategy,
  HeuristicStreamToObjectStrategy,
} from '../../../../../src/lib/decrypt/shared/unpacker.util';

describe('Unpacker strategies (unit)', () => {
  test('MapHeaderScanStrategy finds map header inside buffer', () => {
    const strat = new MapHeaderScanStrategy();
    const noise = Buffer.from([0x00, 0x01, 0x02]);
    const obj = { device: 4, viewer_id: 0, device_id: 'abc' };
    const buf = Buffer.concat([noise, Buffer.from(encode(obj))]);
    const out = strat.execute(buf) as any;
    expect(out).toMatchObject(obj);
  });

  test("AnchorDataHeadersStrategy reconstructs object around 'data_headers'", () => {
    const strat = new AnchorDataHeadersStrategy();
    const stream = Buffer.concat([
      Buffer.from(encode('data_headers')),
      Buffer.from(encode({ a: 1 })),
      Buffer.from(encode('data')),
      Buffer.from(encode({ b: 2 })),
    ]);
    const out = strat.execute(stream) as any;
    expect(out).toMatchObject({ data_headers: { a: 1 }, data: { b: 2 } });
  });

  test('MultiArrayStrategy decodes multiple documents to array', () => {
    const strat = new MultiArrayStrategy();
    const stream = Buffer.concat([
      Buffer.from(encode('a')),
      Buffer.from(encode(1)),
      Buffer.from(encode('b')),
    ]);
    const out = strat.execute(stream) as unknown[] | undefined;
    expect(Array.isArray(out)).toEqual(true);
    expect((out as unknown[]).length).toBeGreaterThan(0);
  });

  test('HeuristicStreamToObjectStrategy folds a run of key/value pairs', () => {
    const strat = new HeuristicStreamToObjectStrategy();
    const stream = Buffer.concat([
      Buffer.from(encode('k1')),
      Buffer.from(encode(1)),
      Buffer.from(encode('k2')),
      Buffer.from(encode(2)),
      Buffer.from(encode('k3')),
      Buffer.from(encode(3)),
      Buffer.from(encode('k4')),
      Buffer.from(encode(4)),
    ]);
    const out = strat.execute(stream) as any;
    expect(out).toMatchObject({ k1: 1, k2: 2, k3: 3, k4: 4 });
  });

  test('LengthPrefixedStrategy decodes valid payload and throws on bad prefix', () => {
    const s = new LengthPrefixedStrategy();
    const mp = Buffer.from(encode({ a: 1 }));
    const buf = Buffer.concat([Buffer.alloc(4), mp]);
    buf.writeUInt32LE(mp.length, 0);
    expect(s.execute(buf)).toEqual({ a: 1 });
    // bad: too short
    expect(() => s.execute(Buffer.alloc(2))).toThrow();
    // bad: inconsistent length
    const bad = Buffer.concat([Buffer.from([0, 0, 0, 10]), mp]);
    expect(() => s.execute(bad)).toThrow();
  });

  test('RawMsgpackStrategy decodes single doc or returns undefined', () => {
    const s = new RawMsgpackStrategy();
    const ok = Buffer.from(encode(['x', 2]));
    expect(s.execute(ok)).toEqual(['x', 2]);
    const bad = Buffer.from([0xff, 0x00, 0x01]);
    expect(s.execute(bad)).toBeUndefined();
  });

  test('KVStreamStrategy reconstructs object for key/value streams', () => {
    const s = new KVStreamStrategy();
    const kv = Buffer.concat([
      Buffer.from(encode('a')),
      Buffer.from(encode(1)),
      Buffer.from(encode('b')),
      Buffer.from(encode('z')),
    ]);
    const out = s.execute(kv) as any;
    expect(out).toEqual({ a: 1, b: 'z' });
  });

  test('Unpacker falls back to diagnostic object when nothing matches', () => {
    const u = new Unpacker();
    const buf = Buffer.from([0x00, 0x01, 0x02, 0x03]);
    const out = u.execute(buf) as any;
    expect(out).toHaveProperty('_unparsed_note');
    expect(out).toHaveProperty('_raw_hex');
  });
});
