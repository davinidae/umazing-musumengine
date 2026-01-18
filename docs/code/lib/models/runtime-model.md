# lib/models/runtime.model

## Enumerations

### FramingMode

Defined in:
[src/lib/models/runtime.model.ts:6](https://github.com/davinidae/umazing-musumengine/blob/bfc4a80e82b79071340aa57781e33eb50ffad709/src/lib/models/runtime.model.ts#L6)

Payload framing modes supported by the wire protocol.

- length-prefixed: [4B LE len][msgpack]
- kv-stream: concatenated msgpack docs [k1][v1][k2][v2]...

#### Enumeration Members

##### KvStream

> **KvStream**: `"kv-stream"`

Defined in:
[src/lib/models/runtime.model.ts:8](https://github.com/davinidae/umazing-musumengine/blob/bfc4a80e82b79071340aa57781e33eb50ffad709/src/lib/models/runtime.model.ts#L8)

##### LengthPrefixed

> **LengthPrefixed**: `"length-prefixed"`

Defined in:
[src/lib/models/runtime.model.ts:7](https://github.com/davinidae/umazing-musumengine/blob/bfc4a80e82b79071340aa57781e33eb50ffad709/src/lib/models/runtime.model.ts#L7)

## Type Aliases

### DecodeResponseInput

> **DecodeResponseInput** = `object`

Defined in:
[src/lib/models/runtime.model.ts:46](https://github.com/davinidae/umazing-musumengine/blob/bfc4a80e82b79071340aa57781e33eb50ffad709/src/lib/models/runtime.model.ts#L46)

#### Properties

##### requestB64

> **requestB64**: `string`

Defined in:
[src/lib/models/runtime.model.ts:48](https://github.com/davinidae/umazing-musumengine/blob/bfc4a80e82b79071340aa57781e33eb50ffad709/src/lib/models/runtime.model.ts#L48)

Matching request (Base64) — used to obtain UDID and derive IV.

##### responseB64

> **responseB64**: `string`

Defined in:
[src/lib/models/runtime.model.ts:49](https://github.com/davinidae/umazing-musumengine/blob/bfc4a80e82b79071340aa57781e33eb50ffad709/src/lib/models/runtime.model.ts#L49)

---

### DecodeResponseOutput

> **DecodeResponseOutput** = `object`

Defined in:
[src/lib/models/runtime.model.ts:52](https://github.com/davinidae/umazing-musumengine/blob/bfc4a80e82b79071340aa57781e33eb50ffad709/src/lib/models/runtime.model.ts#L52)

#### Properties

##### blob1

> **blob1**: [`EncodeRequestInput`](#encoderequestinput)\[`"blob1"`\]

Defined in:
[src/lib/models/runtime.model.ts:53](https://github.com/davinidae/umazing-musumengine/blob/bfc4a80e82b79071340aa57781e33eb50ffad709/src/lib/models/runtime.model.ts#L53)

##### blob2

> **blob2**: `unknown`

Defined in:
[src/lib/models/runtime.model.ts:54](https://github.com/davinidae/umazing-musumengine/blob/bfc4a80e82b79071340aa57781e33eb50ffad709/src/lib/models/runtime.model.ts#L54)

---

### EncodeRequestInput

> **EncodeRequestInput** = `object` & `Partial`\<\{ `framing`: [`FramingMode`](#framingmode); \}\>

Defined in:
[src/lib/models/runtime.model.ts:12](https://github.com/davinidae/umazing-musumengine/blob/bfc4a80e82b79071340aa57781e33eb50ffad709/src/lib/models/runtime.model.ts#L12)

Input parameters for building a request.

#### Type Declaration

##### blob1

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

##### blob2

> **blob2**: `unknown`

---

### EncodeRequestOutput

> **EncodeRequestOutput** = `object`

Defined in:
[src/lib/models/runtime.model.ts:40](https://github.com/davinidae/umazing-musumengine/blob/bfc4a80e82b79071340aa57781e33eb50ffad709/src/lib/models/runtime.model.ts#L40)

#### Properties

##### blob1

> **blob1**: [`EncodeRequestInput`](#encoderequestinput)\[`"blob1"`\]

Defined in:
[src/lib/models/runtime.model.ts:42](https://github.com/davinidae/umazing-musumengine/blob/bfc4a80e82b79071340aa57781e33eb50ffad709/src/lib/models/runtime.model.ts#L42)

##### blob2

> **blob2**: [`EncodeRequestInput`](#encoderequestinput)\[`"blob2"`\]

Defined in:
[src/lib/models/runtime.model.ts:43](https://github.com/davinidae/umazing-musumengine/blob/bfc4a80e82b79071340aa57781e33eb50ffad709/src/lib/models/runtime.model.ts#L43)

##### requestB64

> **requestB64**: `string`

Defined in:
[src/lib/models/runtime.model.ts:41](https://github.com/davinidae/umazing-musumengine/blob/bfc4a80e82b79071340aa57781e33eb50ffad709/src/lib/models/runtime.model.ts#L41)
