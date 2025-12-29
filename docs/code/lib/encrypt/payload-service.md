# lib/encrypt/payload.service

## Classes

### EncryptPayloadService

Defined in:
[src/lib/encrypt/payload.service.ts:27](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/encrypt/payload.service.ts#L27)

EncryptPayloadService.

#### Constructors

##### Constructor

> **new EncryptPayloadService**(): [`EncryptPayloadService`](#encryptpayloadservice)

###### Returns

[`EncryptPayloadService`](#encryptpayloadservice)

#### Methods

##### build()

> **build**(`input`): `object`

Defined in:
[src/lib/encrypt/payload.service.ts:468](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/encrypt/payload.service.ts#L468)

build.

###### Parameters

###### input

`object` & `Partial`\<\{ `framing`: [`FramingMode`](../models/runtime.model.md#framingmode); \}\> &
`object`

Type:
`{ blob1: { viewer_id: number; prefix_hex: string; session_id_hex: string; response_key_hex: string; auth_key_hex: string | null; } & Partial<{ udid_raw_hex: string; udid_canonical: string; }>; blob2: unknown; } & Partial<{ framing: FramingMode; }> & { DETERMINISTIC_ENC_SECRET: string; }`.

###### Returns

`object`

Type:
`{ requestB64: string; blob1: { viewer_id: number; prefix_hex: string; session_id_hex: string; response_key_hex: string; auth_key_hex: string | null; } & Partial<{ udid_raw_hex: string; udid_canonical: string; }>; blob2: unknown; }`.

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

##### buildKvStreamRequest()

> `private` **buildKvStreamRequest**(`input`): `object`

Defined in:
[src/lib/encrypt/payload.service.ts:309](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/encrypt/payload.service.ts#L309)

buildKvStreamRequest.

###### Parameters

###### input

Type:
`{ blob1: { viewer_id: number; prefix_hex: string; session_id_hex: string; response_key_hex: string; auth_key_hex: string | null; } & Partial<{ udid_raw_hex: string; udid_canonical: string; }>; blob2: unknown; DETERMINISTIC_ENC_SECRET: string; }`.

###### blob1

`object` & `Partial`\<\{ `udid_canonical`: `string`; `udid_raw_hex`: `string`; \}\>

###### blob2

`unknown`

###### DETERMINISTIC_ENC_SECRET

`string`

###### Returns

`object`

Type:
`{ requestB64: string; blob1: { viewer_id: number; prefix_hex: string; session_id_hex: string; response_key_hex: string; auth_key_hex: string | null; } & Partial<{ udid_raw_hex: string; udid_canonical: string; }>; blob2: unknown; }`.

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
[src/lib/encrypt/payload.service.ts:188](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/encrypt/payload.service.ts#L188)

buildLengthPrefixedRequest.

###### Parameters

###### input

Type:
`{ blob1: { viewer_id: number; prefix_hex: string; session_id_hex: string; response_key_hex: string; auth_key_hex: string | null; } & Partial<{ udid_raw_hex: string; udid_canonical: string; }>; blob2: unknown; DETERMINISTIC_ENC_SECRET: string; }`.

###### blob1

`object` & `Partial`\<\{ `udid_canonical`: `string`; `udid_raw_hex`: `string`; \}\>

###### blob2

`unknown`

###### DETERMINISTIC_ENC_SECRET

`string`

###### Returns

`object`

Type:
`{ requestB64: string; blob1: { viewer_id: number; prefix_hex: string; session_id_hex: string; response_key_hex: string; auth_key_hex: string | null; } & Partial<{ udid_raw_hex: string; udid_canonical: string; }>; blob2: unknown; }`.

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
[src/lib/encrypt/payload.service.ts:122](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/encrypt/payload.service.ts#L122)

requireResponseKeyHex.

###### Parameters

###### blob1

`object` & `Partial`\<\{ `udid_canonical`: `string`; `udid_raw_hex`: `string`; \}\>

Type:
`{ viewer_id: number; prefix_hex: string; session_id_hex: string; response_key_hex: string; auth_key_hex: string | null; } & Partial<{ udid_raw_hex: string; udid_canonical: string; }>`.

###### Returns

`string`

Type: `string`.

##### resolveAuthKey()

> `private` **resolveAuthKey**(`blob1`): `Buffer`

Defined in:
[src/lib/encrypt/payload.service.ts:164](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/encrypt/payload.service.ts#L164)

resolveAuthKey.

###### Parameters

###### blob1

`object` & `Partial`\<\{ `udid_canonical`: `string`; `udid_raw_hex`: `string`; \}\>

Type:
`{ viewer_id: number; prefix_hex: string; session_id_hex: string; response_key_hex: string; auth_key_hex: string | null; } & Partial<{ udid_raw_hex: string; udid_canonical: string; }>`.

###### Returns

`Buffer`

Type: `Buffer<ArrayBufferLike>`.

##### resolveResponseKey()

> `private` **resolveResponseKey**(`blob1`): `Buffer`

Defined in:
[src/lib/encrypt/payload.service.ts:140](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/encrypt/payload.service.ts#L140)

resolveResponseKey.

###### Parameters

###### blob1

`object` & `Partial`\<\{ `udid_canonical`: `string`; `udid_raw_hex`: `string`; \}\>

Type:
`{ viewer_id: number; prefix_hex: string; session_id_hex: string; response_key_hex: string; auth_key_hex: string | null; } & Partial<{ udid_raw_hex: string; udid_canonical: string; }>`.

###### Returns

`Buffer`

Type: `Buffer<ArrayBufferLike>`.

##### resolveSessionId()

> `private` **resolveSessionId**(`sessionIdHex`): `Buffer`

Defined in:
[src/lib/encrypt/payload.service.ts:101](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/encrypt/payload.service.ts#L101)

resolveSessionId.

###### Parameters

###### sessionIdHex

Type: `string | undefined`.

`string` | `undefined`

###### Returns

`Buffer`

Type: `Buffer<ArrayBufferLike>`.

##### resolveUdid()

> `private` **resolveUdid**(`blob1`): `object`

Defined in:
[src/lib/encrypt/payload.service.ts:33](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/encrypt/payload.service.ts#L33)

resolveUdid.

###### Parameters

###### blob1

`object` & `Partial`\<\{ `udid_canonical`: `string`; `udid_raw_hex`: `string`; \}\>

Type:
`{ viewer_id: number; prefix_hex: string; session_id_hex: string; response_key_hex: string; auth_key_hex: string | null; } & Partial<{ udid_raw_hex: string; udid_canonical: string; }>`.

###### Returns

`object`

Type: `{ udidString: string; udidRawHex: string; }`.

###### udidRawHex

> **udidRawHex**: `string`

###### udidString

> **udidString**: `string`

##### sha256Key()

> `private` **sha256Key**(`secret`): `Buffer`

Defined in:
[src/lib/encrypt/payload.service.ts:85](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/encrypt/payload.service.ts#L85)

sha256Key.

###### Parameters

###### secret

`string`

Type: `string`.

###### Returns

`Buffer`

Type: `Buffer<ArrayBufferLike>`.
