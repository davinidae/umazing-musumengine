import { describe, test, expect } from 'vitest';
import { encode } from '@msgpack/msgpack';
import {
  LengthPrefixedStrategy,
  RawMsgpackStrategy,
  KVStreamStrategy,
  Unpacker,
  MapHeaderScanStrategy,
  AnchorDataHeadersStrategy,
  MultiArrayStrategy,
  HeuristicStreamToObjectStrategy,
  UnpackStrategy,
} from '../../../../../src';

describe('Unpacker strategies (unit)', () => {
  test('MapHeaderScanStrategy finds map header inside buffer', () => {
    const strat = new MapHeaderScanStrategy();
    const noise = Buffer.from([0x00, 0x01, 0x02]);
    const obj = { device: 4, viewer_id: 0, device_id: 'abc' };
    const buf = Buffer.concat([noise, Buffer.from(encode(obj))]);
    const out = strat.execute(buf) as any;
    expect(out).toMatchObject(obj);
  });

  test('MapHeaderScanStrategy returns undefined for objects that do not look useful', () => {
    const strat = new MapHeaderScanStrategy();
    const buf = Buffer.from(encode({ a: 1 }));
    expect(strat.execute(buf)).toBeUndefined();
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

  test("AnchorDataHeadersStrategy accepts an anchored object even without 'data'", () => {
    const strat = new AnchorDataHeadersStrategy();
    const stream = Buffer.concat([
      Buffer.from(encode('data_headers')),
      Buffer.from(encode({ sid: 'x' })),
      Buffer.from(encode('foo')),
      Buffer.from(encode(1)),
    ]);
    const out = strat.execute(stream) as any;
    expect(out).toMatchObject({ data_headers: { sid: 'x' }, foo: 1 });
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

  test('MultiArrayStrategy returns undefined for trivial all-number streams', () => {
    const strat = new MultiArrayStrategy();
    const stream = Buffer.concat([
      Buffer.from(encode(1)),
      Buffer.from(encode(2)),
      Buffer.from(encode(3)),
    ]);
    expect(strat.execute(stream)).toBeUndefined();
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

  test('HeuristicStreamToObjectStrategy returns undefined when not enough pairs', () => {
    const strat = new HeuristicStreamToObjectStrategy();
    const stream = Buffer.concat([Buffer.from(encode('k1')), Buffer.from(encode(1))]);
    expect(strat.execute(stream)).toBeUndefined();
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

  test('KVStreamStrategy skips leading non-string bytes before parsing', () => {
    const s = new KVStreamStrategy();
    const noise = Buffer.from([0x00, 0x01, 0x02, 0x03]);
    const kv = Buffer.concat([noise, Buffer.from(encode('a')), Buffer.from(encode(1))]);
    const out = s.execute(kv) as any;
    expect(out).toEqual({ a: 1 });
  });

  test('KVStreamStrategy returns undefined for odd-length streams', () => {
    const s = new KVStreamStrategy();
    const kv = Buffer.concat([
      Buffer.from(encode('a')),
      Buffer.from(encode(1)),
      Buffer.from(encode('b')),
    ]);
    expect(s.execute(kv)).toBeUndefined();
  });

  test('KVStreamStrategy accepts a single (key,value) pair', () => {
    const s = new KVStreamStrategy();
    const kv = Buffer.concat([Buffer.from(encode('only')), Buffer.from(encode(123))]);
    const out = s.execute(kv) as any;
    expect(out).toEqual({ only: 123 });
  });

  test('Unpacker falls back to diagnostic object when nothing matches', () => {
    const u = new Unpacker();
    // 0xC1 is "never used" in msgpack and should fail decode.
    const buf = Buffer.from([0xc1, 0xc1, 0xc1, 0xc1]);
    const out = u.execute(buf) as any;
    expect(out).toHaveProperty('_unparsed_note');
    expect(out).toHaveProperty('_raw_hex');
    expect(out._raw_hex).toEqual(buf.toString('hex'));
  });

  test('Unpacker ignores strategy errors and continues to next strategy', () => {
    class ThrowingStrategy extends UnpackStrategy {
      execute(): unknown {
        throw new Error('boom');
      }
    }
    const u = new Unpacker([new ThrowingStrategy(), new RawMsgpackStrategy()]);
    const ok = Buffer.from(encode({ x: 1 }));
    expect(u.execute(ok)).toEqual({ x: 1 });
  });
});
