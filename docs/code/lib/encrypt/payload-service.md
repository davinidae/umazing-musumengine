# lib/encrypt/payload.service

## Classes

### EncryptPayloadService

Defined in:
[lib/encrypt/payload.service.ts:28](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/encrypt/payload.service.ts#L28)

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
[lib/encrypt/payload.service.ts:77](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/encrypt/payload.service.ts#L77)

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

##### resolveSessionId()

> `private` **resolveSessionId**(`sessionIdHex`): `Buffer`

Defined in:
[lib/encrypt/payload.service.ts:57](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/encrypt/payload.service.ts#L57)

###### Parameters

###### sessionIdHex

`string` | `undefined`

###### Returns

`Buffer`

##### resolveUdid()

> `private` **resolveUdid**(`blob1`): `object`

Defined in:
[lib/encrypt/payload.service.ts:29](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/encrypt/payload.service.ts#L29)

###### Parameters

###### blob1

`object` & `Partial`\<\{ `udid_canonical`: `string`; `udid_raw_hex`: `string`; \}\>

###### Returns

`object`

###### udidRawHex

> **udidRawHex**: `string`

###### udidString

> **udidString**: `string`

##### sha256Key()

> `private` **sha256Key**(`secret`): `Buffer`

Defined in:
[lib/encrypt/payload.service.ts:51](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/encrypt/payload.service.ts#L51)

###### Parameters

###### secret

`string`

###### Returns

`Buffer`
