# lib/encrypt/payload.service

## Classes

### EncryptPayloadService

Defined in:
[lib/encrypt/payload.service.ts:15](https://github.com/davinidae/umazing-musumengine/blob/7806b7e4bb02dbafeebca9a5d829610c2bce50e3/src/lib/encrypt/payload.service.ts#L15)

#### Constructors

##### Constructor

> **new EncryptPayloadService**(): [`EncryptPayloadService`](#encryptpayloadservice)

###### Returns

[`EncryptPayloadService`](#encryptpayloadservice)

#### Methods

##### build()

> **build**(`input`): `object`

Defined in:
[lib/encrypt/payload.service.ts:187](https://github.com/davinidae/umazing-musumengine/blob/7806b7e4bb02dbafeebca9a5d829610c2bce50e3/src/lib/encrypt/payload.service.ts#L187)

###### Parameters

###### input

`object` & `Partial`\<\{ `framing`: [`FramingMode`](../models/runtime.model.md#framingmode); \}\> &
`object`

###### Returns

`object`

###### blob1

> **blob1**: `object` & `Partial`\<\{ `udid`: `string`; `udid_raw`: `string`; \}\>

###### Type Declaration

###### auth_key

> **auth_key**: `string` \| `null`

48-byte auth key (hex); contents are opaque for our purposes.

###### prefix

> **prefix**: `string`

Prefix (hex); echoed back by the server.

###### response_key

> **response_key**: `string`

32-byte response key (hex); echoed back and used by the server.

###### session_id

> **session_id**: `string`

16-byte session identifier (hex).

###### viewer_id

> **viewer_id**: `number`

###### blob2

> **blob2**: `unknown`

###### requestB64

> **requestB64**: `string`

##### buildKvStreamRequest()

> `private` **buildKvStreamRequest**(`input`): `object`

Defined in:
[lib/encrypt/payload.service.ts:129](https://github.com/davinidae/umazing-musumengine/blob/7806b7e4bb02dbafeebca9a5d829610c2bce50e3/src/lib/encrypt/payload.service.ts#L129)

###### Parameters

###### input

###### blob1

`object` & `Partial`\<\{ `udid`: `string`; `udid_raw`: `string`; \}\>

###### blob2

`unknown`

###### DETERMINISTIC_ENC_SECRET

`string`

###### Returns

`object`

###### blob1

> **blob1**: `object` & `Partial`\<\{ `udid`: `string`; `udid_raw`: `string`; \}\>

###### Type Declaration

###### auth_key

> **auth_key**: `string` \| `null`

48-byte auth key (hex); contents are opaque for our purposes.

###### prefix

> **prefix**: `string`

Prefix (hex); echoed back by the server.

###### response_key

> **response_key**: `string`

32-byte response key (hex); echoed back and used by the server.

###### session_id

> **session_id**: `string`

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
[lib/encrypt/payload.service.ts:88](https://github.com/davinidae/umazing-musumengine/blob/7806b7e4bb02dbafeebca9a5d829610c2bce50e3/src/lib/encrypt/payload.service.ts#L88)

###### Parameters

###### input

###### blob1

`object` & `Partial`\<\{ `udid`: `string`; `udid_raw`: `string`; \}\>

###### blob2

`unknown`

###### DETERMINISTIC_ENC_SECRET

`string`

###### Returns

`object`

###### blob1

> **blob1**: `object` & `Partial`\<\{ `udid`: `string`; `udid_raw`: `string`; \}\>

###### Type Declaration

###### auth_key

> **auth_key**: `string` \| `null`

48-byte auth key (hex); contents are opaque for our purposes.

###### prefix

> **prefix**: `string`

Prefix (hex); echoed back by the server.

###### response_key

> **response_key**: `string`

32-byte response key (hex); echoed back and used by the server.

###### session_id

> **session_id**: `string`

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
[lib/encrypt/payload.service.ts:63](https://github.com/davinidae/umazing-musumengine/blob/7806b7e4bb02dbafeebca9a5d829610c2bce50e3/src/lib/encrypt/payload.service.ts#L63)

###### Parameters

###### blob1

`object` & `Partial`\<\{ `udid`: `string`; `udid_raw`: `string`; \}\>

###### Returns

`string`

##### resolveAuthKey()

> `private` **resolveAuthKey**(`blob1`): `Buffer`

Defined in:
[lib/encrypt/payload.service.ts:80](https://github.com/davinidae/umazing-musumengine/blob/7806b7e4bb02dbafeebca9a5d829610c2bce50e3/src/lib/encrypt/payload.service.ts#L80)

###### Parameters

###### blob1

`object` & `Partial`\<\{ `udid`: `string`; `udid_raw`: `string`; \}\>

###### Returns

`Buffer`

##### resolveResponseKey()

> `private` **resolveResponseKey**(`blob1`): `Buffer`

Defined in:
[lib/encrypt/payload.service.ts:71](https://github.com/davinidae/umazing-musumengine/blob/7806b7e4bb02dbafeebca9a5d829610c2bce50e3/src/lib/encrypt/payload.service.ts#L71)

###### Parameters

###### blob1

`object` & `Partial`\<\{ `udid`: `string`; `udid_raw`: `string`; \}\>

###### Returns

`Buffer`

##### resolveSessionId()

> `private` **resolveSessionId**(`sessionIdHex`): `Buffer`

Defined in:
[lib/encrypt/payload.service.ts:52](https://github.com/davinidae/umazing-musumengine/blob/7806b7e4bb02dbafeebca9a5d829610c2bce50e3/src/lib/encrypt/payload.service.ts#L52)

###### Parameters

###### sessionIdHex

`string` | `undefined`

###### Returns

`Buffer`

##### resolveUdid()

> `private` **resolveUdid**(`blob1`): `object`

Defined in:
[lib/encrypt/payload.service.ts:16](https://github.com/davinidae/umazing-musumengine/blob/7806b7e4bb02dbafeebca9a5d829610c2bce50e3/src/lib/encrypt/payload.service.ts#L16)

###### Parameters

###### blob1

`object` & `Partial`\<\{ `udid`: `string`; `udid_raw`: `string`; \}\>

###### Returns

`object`

###### udidRawHex

> **udidRawHex**: `string`

###### udidString

> **udidString**: `string`

##### sha256Key()

> `private` **sha256Key**(`secret`): `Buffer`

Defined in:
[lib/encrypt/payload.service.ts:46](https://github.com/davinidae/umazing-musumengine/blob/7806b7e4bb02dbafeebca9a5d829610c2bce50e3/src/lib/encrypt/payload.service.ts#L46)

###### Parameters

###### secret

`string`

###### Returns

`Buffer`
