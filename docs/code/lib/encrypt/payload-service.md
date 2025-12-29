# lib/encrypt/payload.service

## Classes

### EncryptPayloadService

Defined in:
[lib/encrypt/payload.service.ts:24](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/lib/encrypt/payload.service.ts#L24)

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
[lib/encrypt/payload.service.ts:221](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/lib/encrypt/payload.service.ts#L221)

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

##### buildKvStreamRequest()

> `private` **buildKvStreamRequest**(`input`): `object`

Defined in:
[lib/encrypt/payload.service.ts:146](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/lib/encrypt/payload.service.ts#L146)

###### Parameters

###### input

###### blob1

`object` & `Partial`\<\{ `udid_canonical`: `string`; `udid_raw_hex`: `string`; \}\>

###### blob2

`unknown`

###### DETERMINISTIC_ENC_SECRET

`string`

###### Returns

`object`

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

##### buildLengthPrefixedRequest()

> `private` **buildLengthPrefixedRequest**(`input`): `object`

Defined in:
[lib/encrypt/payload.service.ts:100](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/lib/encrypt/payload.service.ts#L100)

###### Parameters

###### input

###### blob1

`object` & `Partial`\<\{ `udid_canonical`: `string`; `udid_raw_hex`: `string`; \}\>

###### blob2

`unknown`

###### DETERMINISTIC_ENC_SECRET

`string`

###### Returns

`object`

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

##### requireResponseKeyHex()

> `private` **requireResponseKeyHex**(`blob1`): `string`

Defined in:
[lib/encrypt/payload.service.ts:74](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/lib/encrypt/payload.service.ts#L74)

###### Parameters

###### blob1

`object` & `Partial`\<\{ `udid_canonical`: `string`; `udid_raw_hex`: `string`; \}\>

###### Returns

`string`

##### resolveAuthKey()

> `private` **resolveAuthKey**(`blob1`): `Buffer`

Defined in:
[lib/encrypt/payload.service.ts:91](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/lib/encrypt/payload.service.ts#L91)

###### Parameters

###### blob1

`object` & `Partial`\<\{ `udid_canonical`: `string`; `udid_raw_hex`: `string`; \}\>

###### Returns

`Buffer`

##### resolveResponseKey()

> `private` **resolveResponseKey**(`blob1`): `Buffer`

Defined in:
[lib/encrypt/payload.service.ts:82](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/lib/encrypt/payload.service.ts#L82)

###### Parameters

###### blob1

`object` & `Partial`\<\{ `udid_canonical`: `string`; `udid_raw_hex`: `string`; \}\>

###### Returns

`Buffer`

##### resolveSessionId()

> `private` **resolveSessionId**(`sessionIdHex`): `Buffer`

Defined in:
[lib/encrypt/payload.service.ts:63](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/lib/encrypt/payload.service.ts#L63)

###### Parameters

###### sessionIdHex

`string` | `undefined`

###### Returns

`Buffer`

##### resolveUdid()

> `private` **resolveUdid**(`blob1`): `object`

Defined in:
[lib/encrypt/payload.service.ts:25](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/lib/encrypt/payload.service.ts#L25)

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
[lib/encrypt/payload.service.ts:57](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/lib/encrypt/payload.service.ts#L57)

###### Parameters

###### secret

`string`

###### Returns

`Buffer`
