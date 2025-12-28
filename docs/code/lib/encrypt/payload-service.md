# lib/encrypt/payload.service

## Classes

### EncryptPayloadService

Defined in:
[lib/encrypt/payload.service.ts:27](https://github.com/davinidae/umazing-musumengine/blob/3287c40709f1f448cf5e0c1e301ea35ff5829e19/src/lib/encrypt/payload.service.ts#L27)

Build Base64 requests from in-memory parts (no filesystem access).

Framing modes:

- Default 'length-prefixed': a single msgpack document with a 4-byte little-endian length prefix.
- 'kv-stream' when blob1.framing === 'kv-stream': concatenated msgpack(key)+msgpack(value) pairs.

#### Constructors

##### Constructor

> **new EncryptPayloadService**(): [`EncryptPayloadService`](#encryptpayloadservice)

###### Returns

[`EncryptPayloadService`](#encryptpayloadservice)

#### Methods

##### build()

> **build**(`input`): `BuiltEncryptedPayload`

Defined in:
[lib/encrypt/payload.service.ts:37](https://github.com/davinidae/umazing-musumengine/blob/3287c40709f1f448cf5e0c1e301ea35ff5829e19/src/lib/encrypt/payload.service.ts#L37)

Build a single request as Base64 from header fields (blob1) and a JS payload.

###### Parameters

###### input

`object` & `Partial`\<\{ `framing`: [`FramingMode`](../models/runtime.model.md#framingmode); \}\> &
`object`

###### Returns

`BuiltEncryptedPayload`

An object containing the Base64-encoded request buffer as `requestB64`.

###### Throws

If mandatory fields are missing or have invalid sizes (e.g., session_id != 16B, response_key !=
32B).
