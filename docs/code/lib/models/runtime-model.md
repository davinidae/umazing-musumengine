# lib/models/runtime.model

## Enumerations

### FramingMode

Defined in:
[lib/models/runtime.model.ts:6](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/lib/models/runtime.model.ts#L6)

Payload framing modes supported by the wire protocol.

- length-prefixed: [4B LE len][msgpack]
- kv-stream: concatenated msgpack docs [k1][v1][k2][v2]...

#### Enumeration Members

##### KvStream

> **KvStream**: `"kv-stream"`

Defined in:
[lib/models/runtime.model.ts:8](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/lib/models/runtime.model.ts#L8)

##### LengthPrefixed

> **LengthPrefixed**: `"length-prefixed"`

Defined in:
[lib/models/runtime.model.ts:7](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/lib/models/runtime.model.ts#L7)

## Type Aliases

### DecodeResponseInput

> **DecodeResponseInput** = `object`

Defined in:
[lib/models/runtime.model.ts:41](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/lib/models/runtime.model.ts#L41)

#### Properties

##### requestB64

> **requestB64**: `string`

Defined in:
[lib/models/runtime.model.ts:43](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/lib/models/runtime.model.ts#L43)

Matching request (Base64) — used to obtain UDID and derive IV.

##### responseB64

> **responseB64**: `string`

Defined in:
[lib/models/runtime.model.ts:44](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/lib/models/runtime.model.ts#L44)

---

### DecodeResponseOutput

> **DecodeResponseOutput** = `object`

Defined in:
[lib/models/runtime.model.ts:47](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/lib/models/runtime.model.ts#L47)

#### Properties

##### blob1

> **blob1**: [`EncodeRequestInput`](#encoderequestinput)\[`"blob1"`\]

Defined in:
[lib/models/runtime.model.ts:48](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/lib/models/runtime.model.ts#L48)

##### blob2

> **blob2**: `unknown`

Defined in:
[lib/models/runtime.model.ts:49](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/lib/models/runtime.model.ts#L49)

---

### EncodeRequestInput

> **EncodeRequestInput** = `object` & `Partial`\<\{ `framing`: [`FramingMode`](#framingmode); \}\>

Defined in:
[lib/models/runtime.model.ts:12](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/lib/models/runtime.model.ts#L12)

Input parameters for building a request.

#### Type Declaration

##### blob1

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

##### blob2

> **blob2**: `unknown`

---

### EncodeRequestOutput

> **EncodeRequestOutput** = `object`

Defined in:
[lib/models/runtime.model.ts:35](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/lib/models/runtime.model.ts#L35)

#### Properties

##### blob1

> **blob1**: [`EncodeRequestInput`](#encoderequestinput)\[`"blob1"`\]

Defined in:
[lib/models/runtime.model.ts:37](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/lib/models/runtime.model.ts#L37)

##### blob2

> **blob2**: [`EncodeRequestInput`](#encoderequestinput)\[`"blob2"`\]

Defined in:
[lib/models/runtime.model.ts:38](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/lib/models/runtime.model.ts#L38)

##### requestB64

> **requestB64**: `string`

Defined in:
[lib/models/runtime.model.ts:36](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/lib/models/runtime.model.ts#L36)
