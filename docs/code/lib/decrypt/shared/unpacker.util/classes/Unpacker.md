# Class: Unpacker

Defined in: [lib/decrypt/shared/unpacker.util.ts:258](https://github.com/davinidae/umazing-musumengine/blob/6df8e3e1b8dfb16b24d04befbfa6d32c969e2756/src/lib/decrypt/shared/unpacker.util.ts#L258)

Pipeline that tries multiple strategies in a safe order. If none succeed,
returns a diagnostic object containing a hex dump to aid manual inspection.

## Constructors

### Constructor

> **new Unpacker**(`strategies`): `Unpacker`

Defined in: [lib/decrypt/shared/unpacker.util.ts:269](https://github.com/davinidae/umazing-musumengine/blob/6df8e3e1b8dfb16b24d04befbfa6d32c969e2756/src/lib/decrypt/shared/unpacker.util.ts#L269)

Heuristic unpacker for payloads that may not be length-prefixed. It tries, in order:
1) Standard length-prefixed msgpack
2) Raw single msgpack document
3) Scan for map header and decode if plausible
4) Scan for a streamed KV sequence (key,value,...) and reconstruct an object
   - Includes a targeted 'data_headers' anchor for tool responses
5) decodeMulti to array as a last resort
If none succeed, returns a small diagnostic object with hex dump.

#### Parameters

##### strategies

`UnpackStrategy`[] = `...`

#### Returns

`Unpacker`
