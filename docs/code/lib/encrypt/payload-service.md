# lib/encrypt/payload.service

## Classes

### EncryptPayloadService

Defined in:
[src/lib/encrypt/payload.service.ts:27](https://github.com/davinidae/umazing-musumengine/blob/bfc4a80e82b79071340aa57781e33eb50ffad709/src/lib/encrypt/payload.service.ts#L27)

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
[src/lib/encrypt/payload.service.ts:466](https://github.com/davinidae/umazing-musumengine/blob/bfc4a80e82b79071340aa57781e33eb50ffad709/src/lib/encrypt/payload.service.ts#L466)

build.

###### Parameters

###### input

`object` & `Partial`\<\{ `framing`: [`FramingMode`](../models/runtime.model.md#framingmode); \}\> &
`object`

Type:
`{ blob1: { viewer_id: number; prefix_hex: string; session_id_hex: string; response_key_hex: string; auth_key_hex: string | null; } & Partial<{ udid_hex: string; udid_raw: string; }>; blob2: unknown; } & Partial<{ framing: FramingMode; }> & { DETERMINISTIC_ENC_SECRET: string; }`.

###### Returns

`object`

Type:
`{ requestB64: string; blob1: { viewer_id: number; prefix_hex: string; session_id_hex: string; response_key_hex: string; auth_key_hex: string | null; } & Partial<{ udid_hex: string; udid_raw: string; }>; blob2: unknown; }`.

###### blob1

> **blob1**: `object` & `Partial`\<\{ `udid_b64`: `string`; `udid_canonical`: `string`; `udid_hex`:
> `string`; \}\>

###### Type Declaration

###### auth_key_b64

> **auth_key_b64**: `string` \| `null`

###### auth_key_hex

> **auth_key_hex**: `string` \| `null`

48-byte auth key (hex); contents are opaque for our purposes.

###### prefix_b64

> **prefix_b64**: `string`

###### prefix_hex

> **prefix_hex**: `string`

Free-form prefix; echoed back by the server.

###### response_key_b64

> **response_key_b64**: `string`

###### response_key_hex

> **response_key_hex**: `string`

32-byte response key (hex); echoed back and used by the server.

###### session_id_b64

> **session_id_b64**: `string`

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
[src/lib/encrypt/payload.service.ts:307](https://github.com/davinidae/umazing-musumengine/blob/bfc4a80e82b79071340aa57781e33eb50ffad709/src/lib/encrypt/payload.service.ts#L307)

buildKvStreamRequest.

###### Parameters

###### input

Type:
`{ blob1: { viewer_id: number; prefix_hex: string; session_id_hex: string; response_key_hex: string; auth_key_hex: string | null; } & Partial<{ udid_hex: string; udid_raw: string; }>; blob2: unknown; DETERMINISTIC_ENC_SECRET: string; }`.

###### blob1

`object` & `Partial`\<\{ `udid_b64`: `string`; `udid_canonical`: `string`; `udid_hex`: `string`;
\}\>

###### blob2

`unknown`

###### DETERMINISTIC_ENC_SECRET

`string`

###### Returns

`object`

Type:
`{ requestB64: string; blob1: { viewer_id: number; prefix_hex: string; session_id_hex: string; response_key_hex: string; auth_key_hex: string | null; } & Partial<{ udid_hex: string; udid_raw: string; }>; blob2: unknown; }`.

###### blob1

> **blob1**: `object` & `Partial`\<\{ `udid_b64`: `string`; `udid_canonical`: `string`; `udid_hex`:
> `string`; \}\>

###### Type Declaration

###### auth_key_b64

> **auth_key_b64**: `string` \| `null`

###### auth_key_hex

> **auth_key_hex**: `string` \| `null`

48-byte auth key (hex); contents are opaque for our purposes.

###### prefix_b64

> **prefix_b64**: `string`

###### prefix_hex

> **prefix_hex**: `string`

Free-form prefix; echoed back by the server.

###### response_key_b64

> **response_key_b64**: `string`

###### response_key_hex

> **response_key_hex**: `string`

32-byte response key (hex); echoed back and used by the server.

###### session_id_b64

> **session_id_b64**: `string`

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
[src/lib/encrypt/payload.service.ts:186](https://github.com/davinidae/umazing-musumengine/blob/bfc4a80e82b79071340aa57781e33eb50ffad709/src/lib/encrypt/payload.service.ts#L186)

buildLengthPrefixedRequest.

###### Parameters

###### input

Type:
`{ blob1: { viewer_id: number; prefix_hex: string; session_id_hex: string; response_key_hex: string; auth_key_hex: string | null; } & Partial<{ udid_hex: string; udid_raw: string; }>; blob2: unknown; DETERMINISTIC_ENC_SECRET: string; }`.

###### blob1

`object` & `Partial`\<\{ `udid_b64`: `string`; `udid_canonical`: `string`; `udid_hex`: `string`;
\}\>

###### blob2

`unknown`

###### DETERMINISTIC_ENC_SECRET

`string`

###### Returns

`object`

Type:
`{ requestB64: string; blob1: { viewer_id: number; prefix_hex: string; session_id_hex: string; response_key_hex: string; auth_key_hex: string | null; } & Partial<{ udid_hex: string; udid_raw: string; }>; blob2: unknown; }`.

###### blob1

> **blob1**: `object` & `Partial`\<\{ `udid_b64`: `string`; `udid_canonical`: `string`; `udid_hex`:
> `string`; \}\>

###### Type Declaration

###### auth_key_b64

> **auth_key_b64**: `string` \| `null`

###### auth_key_hex

> **auth_key_hex**: `string` \| `null`

48-byte auth key (hex); contents are opaque for our purposes.

###### prefix_b64

> **prefix_b64**: `string`

###### prefix_hex

> **prefix_hex**: `string`

Free-form prefix; echoed back by the server.

###### response_key_b64

> **response_key_b64**: `string`

###### response_key_hex

> **response_key_hex**: `string`

32-byte response key (hex); echoed back and used by the server.

###### session_id_b64

> **session_id_b64**: `string`

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
[src/lib/encrypt/payload.service.ts:120](https://github.com/davinidae/umazing-musumengine/blob/bfc4a80e82b79071340aa57781e33eb50ffad709/src/lib/encrypt/payload.service.ts#L120)

requireResponseKeyHex.

###### Parameters

###### blob1

`object` & `Partial`\<\{ `udid_b64`: `string`; `udid_canonical`: `string`; `udid_hex`: `string`;
\}\>

Type:
`{ viewer_id: number; prefix_hex: string; session_id_hex: string; response_key_hex: string; auth_key_hex: string | null; } & Partial<{ udid_hex: string; udid_raw: string; }>`.

###### Returns

`string`

Type: `string`.

##### resolveAuthKey()

> `private` **resolveAuthKey**(`blob1`): `Buffer`

Defined in:
[src/lib/encrypt/payload.service.ts:162](https://github.com/davinidae/umazing-musumengine/blob/bfc4a80e82b79071340aa57781e33eb50ffad709/src/lib/encrypt/payload.service.ts#L162)

resolveAuthKey.

###### Parameters

###### blob1

`object` & `Partial`\<\{ `udid_b64`: `string`; `udid_canonical`: `string`; `udid_hex`: `string`;
\}\>

Type:
`{ viewer_id: number; prefix_hex: string; session_id_hex: string; response_key_hex: string; auth_key_hex: string | null; } & Partial<{ udid_hex: string; udid_raw: string; }>`.

###### Returns

`Buffer`

Type: `Buffer<ArrayBufferLike>`.

##### resolveResponseKey()

> `private` **resolveResponseKey**(`blob1`): `Buffer`

Defined in:
[src/lib/encrypt/payload.service.ts:138](https://github.com/davinidae/umazing-musumengine/blob/bfc4a80e82b79071340aa57781e33eb50ffad709/src/lib/encrypt/payload.service.ts#L138)

resolveResponseKey.

###### Parameters

###### blob1

`object` & `Partial`\<\{ `udid_b64`: `string`; `udid_canonical`: `string`; `udid_hex`: `string`;
\}\>

Type:
`{ viewer_id: number; prefix_hex: string; session_id_hex: string; response_key_hex: string; auth_key_hex: string | null; } & Partial<{ udid_hex: string; udid_raw: string; }>`.

###### Returns

`Buffer`

Type: `Buffer<ArrayBufferLike>`.

##### resolveSessionId()

> `private` **resolveSessionId**(`sessionIdHex`): `Buffer`

Defined in:
[src/lib/encrypt/payload.service.ts:99](https://github.com/davinidae/umazing-musumengine/blob/bfc4a80e82b79071340aa57781e33eb50ffad709/src/lib/encrypt/payload.service.ts#L99)

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
[src/lib/encrypt/payload.service.ts:33](https://github.com/davinidae/umazing-musumengine/blob/bfc4a80e82b79071340aa57781e33eb50ffad709/src/lib/encrypt/payload.service.ts#L33)

resolveUdid.

###### Parameters

###### blob1

`object` & `Partial`\<\{ `udid_b64`: `string`; `udid_canonical`: `string`; `udid_hex`: `string`;
\}\>

Type:
`{ viewer_id: number; prefix_hex: string; session_id_hex: string; response_key_hex: string; auth_key_hex: string | null; } & Partial<{ udid_hex: string; udid_raw: string; }>`.

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
[src/lib/encrypt/payload.service.ts:83](https://github.com/davinidae/umazing-musumengine/blob/bfc4a80e82b79071340aa57781e33eb50ffad709/src/lib/encrypt/payload.service.ts#L83)

sha256Key.

###### Parameters

###### secret

`string`

Type: `string`.

###### Returns

`Buffer`

Type: `Buffer<ArrayBufferLike>`.
