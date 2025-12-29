# lib/encrypt/payload.service

## Classes

### EncryptPayloadService

Defined in:
[lib/encrypt/payload.service.ts:23](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/lib/encrypt/payload.service.ts#L23)

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

> **build**(`input`): `object`

Defined in:
[lib/encrypt/payload.service.ts:72](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/lib/encrypt/payload.service.ts#L72)

Build a single request as Base64 from header fields (blob1) and a JS payload.

###### Parameters

###### input

`object` & `Partial`\<\{ `framing`: [`FramingMode`](../models/runtime.model.md#framingmode); \}\> &
`object`

###### Returns

`object`

An object containing the Base64-encoded request buffer as `requestB64`.

###### blob1

> **blob1**: `object` & `Partial`\<\{ `udid_canonical`: `string`; `udid_raw_hex`: `string`; \}\>

###### Type Declaration

###### auth_key_hex

> **auth_key_hex**: `string` \| `null`

48-byte auth key (hex); contents are opaque for our purposes.

###### prefix_hex

> **prefix_hex**: `string`

Free-form prefix; echoed back by the server.

###### response_key_hex

> **response_key_hex**: `string`

32-byte response key (hex); echoed back and used by the server.

###### session_id_hex

> **session_id_hex**: `string`

16-byte session identifier (hex).

###### viewer_id

> **viewer_id**: `number`

###### blob2

> **blob2**: `unknown`

###### requestB64

> **requestB64**: `string`

###### Throws

If mandatory fields are missing or have invalid sizes (e.g., session_id != 16B, response_key !=
32B).

##### resolveSessionId()

> `private` **resolveSessionId**(`sessionIdHex`): `Buffer`

Defined in:
[lib/encrypt/payload.service.ts:52](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/lib/encrypt/payload.service.ts#L52)

###### Parameters

###### sessionIdHex

`string` | `undefined`

###### Returns

`Buffer`

##### resolveUdid()

> `private` **resolveUdid**(`blob1`): `object`

Defined in:
[lib/encrypt/payload.service.ts:24](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/lib/encrypt/payload.service.ts#L24)

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
[lib/encrypt/payload.service.ts:46](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/lib/encrypt/payload.service.ts#L46)

###### Parameters

###### secret

`string`

###### Returns

`Buffer`
