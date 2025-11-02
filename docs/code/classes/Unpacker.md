[**umazing-musumengine**](../README.md)

***

# Class: Unpacker

Defined in: [lib/decrypt/shared/unpacker.util.ts:272](https://github.com/davinidae/umazing-musumengine/blob/d4855d0689c920b326ed58c418dab42de4b3c061/src/lib/decrypt/shared/unpacker.util.ts#L272)

Pipeline that tries multiple strategies in a safe order. If none succeed,
returns a diagnostic object containing a hex dump to aid manual inspection.

## Constructors

### Constructor

> **new Unpacker**(`strategies`): `Unpacker`

Defined in: [lib/decrypt/shared/unpacker.util.ts:283](https://github.com/davinidae/umazing-musumengine/blob/d4855d0689c920b326ed58c418dab42de4b3c061/src/lib/decrypt/shared/unpacker.util.ts#L283)

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

[`UnpackStrategy`](UnpackStrategy.md)[] = `...`

#### Returns

`Unpacker`

## Methods

### execute()

> **execute**(`buf`): `unknown`

Defined in: [lib/decrypt/shared/unpacker.util.ts:297](https://github.com/davinidae/umazing-musumengine/blob/d4855d0689c920b326ed58c418dab42de4b3c061/src/lib/decrypt/shared/unpacker.util.ts#L297)

#### Parameters

##### buf

`Buffer`

#### Returns

`unknown`
