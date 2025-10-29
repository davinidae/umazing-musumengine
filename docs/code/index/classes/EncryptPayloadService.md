[**umazing-musumengine**](../../README.md)

***

# Class: EncryptPayloadService

Defined in: [encrypt/payload.service.ts:30](https://github.com/davinidae/umazing-musumengine/blob/51f61211084dfe767110f78265e0aa27a13c00d0/src/encrypt/payload.service.ts#L30)

Builds Base64 requests from all decoded.json files under encrypt/input (recursive).

Framing modes:
- Default 'length-prefixed': a single msgpack document with 4B LE length.
- 'kv-stream' when blob1.framing === 'kv-stream': concatenated msgpack(key)+msgpack(value) pairs.

## Constructors

### Constructor

> **new EncryptPayloadService**(`inRoot`, `options`): `EncryptPayloadService`

Defined in: [encrypt/payload.service.ts:32](https://github.com/davinidae/umazing-musumengine/blob/51f61211084dfe767110f78265e0aa27a13c00d0/src/encrypt/payload.service.ts#L32)

#### Parameters

##### inRoot

`string` = `'encrypt/input'`

##### options

[`ServiceOptions`](../interfaces/ServiceOptions.md) = `{}`

#### Returns

`EncryptPayloadService`

## Methods

### execute()

> **execute**(): `Promise`\<`number`\>

Defined in: [encrypt/payload.service.ts:43](https://github.com/davinidae/umazing-musumengine/blob/51f61211084dfe767110f78265e0aa27a13c00d0/src/encrypt/payload.service.ts#L43)

Scan encrypt/input for decoded.json files and build request.b64 outputs.

#### Returns

`Promise`\<`number`\>

Process exit code (0).
