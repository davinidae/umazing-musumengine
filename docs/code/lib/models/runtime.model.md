# lib/models/runtime.model

## Enumerations

### FramingMode

Defined in:
[lib/models/runtime.model.ts:6](https://github.com/davinidae/umazing-musumengine/blob/47f9b56140c43967809e5f0bc8aed0e51605223f/src/lib/models/runtime.model.ts#L6)

Payload framing modes supported by the wire protocol.

- length-prefixed: [4B LE len][msgpack]
- kv-stream: concatenated msgpack docs [k1][v1][k2][v2]...

#### Enumeration Members

##### KvStream

> **KvStream**: `"kv-stream"`

Defined in:
[lib/models/runtime.model.ts:8](https://github.com/davinidae/umazing-musumengine/blob/47f9b56140c43967809e5f0bc8aed0e51605223f/src/lib/models/runtime.model.ts#L8)

##### LengthPrefixed

> **LengthPrefixed**: `"length-prefixed"`

Defined in:
[lib/models/runtime.model.ts:7](https://github.com/davinidae/umazing-musumengine/blob/47f9b56140c43967809e5f0bc8aed0e51605223f/src/lib/models/runtime.model.ts#L7)

## Type Aliases

### DecodeResponseInput

> **DecodeResponseInput** = `object`

Defined in:
[lib/models/runtime.model.ts:37](https://github.com/davinidae/umazing-musumengine/blob/47f9b56140c43967809e5f0bc8aed0e51605223f/src/lib/models/runtime.model.ts#L37)

#### Properties

##### requestB64

> **requestB64**: `string`

Defined in:
[lib/models/runtime.model.ts:39](https://github.com/davinidae/umazing-musumengine/blob/47f9b56140c43967809e5f0bc8aed0e51605223f/src/lib/models/runtime.model.ts#L39)

Matching request (Base64) — used to obtain UDID and derive IV.

##### responseB64

> **responseB64**: `string`

Defined in:
[lib/models/runtime.model.ts:40](https://github.com/davinidae/umazing-musumengine/blob/47f9b56140c43967809e5f0bc8aed0e51605223f/src/lib/models/runtime.model.ts#L40)

---

### DecodeResponseOutput

> **DecodeResponseOutput** = `object`

Defined in:
[lib/models/runtime.model.ts:43](https://github.com/davinidae/umazing-musumengine/blob/47f9b56140c43967809e5f0bc8aed0e51605223f/src/lib/models/runtime.model.ts#L43)

#### Properties

##### data_headers

> **data_headers**: `Record`\<`string`, `unknown`\>

Defined in:
[lib/models/runtime.model.ts:44](https://github.com/davinidae/umazing-musumengine/blob/47f9b56140c43967809e5f0bc8aed0e51605223f/src/lib/models/runtime.model.ts#L44)

##### payload

> **payload**: `unknown`

Defined in:
[lib/models/runtime.model.ts:45](https://github.com/davinidae/umazing-musumengine/blob/47f9b56140c43967809e5f0bc8aed0e51605223f/src/lib/models/runtime.model.ts#L45)

---

### EncodeRequestInput

> **EncodeRequestInput** = `object`

Defined in:
[lib/models/runtime.model.ts:12](https://github.com/davinidae/umazing-musumengine/blob/47f9b56140c43967809e5f0bc8aed0e51605223f/src/lib/models/runtime.model.ts#L12)

Input parameters for building a request.

#### Properties

##### blob1

> **blob1**: `object` & `Partial`\<\{ `framing`: [`FramingMode`](#framingmode); `udid_canonical`:
> `string`; `udid_raw_hex`: `string`; \}\>

Defined in:
[lib/models/runtime.model.ts:13](https://github.com/davinidae/umazing-musumengine/blob/47f9b56140c43967809e5f0bc8aed0e51605223f/src/lib/models/runtime.model.ts#L13)

###### Type Declaration

###### auth_key_hex

> **auth_key_hex**: `string`

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

##### payload

> **payload**: `unknown`

Defined in:
[lib/models/runtime.model.ts:30](https://github.com/davinidae/umazing-musumengine/blob/47f9b56140c43967809e5f0bc8aed0e51605223f/src/lib/models/runtime.model.ts#L30)

---

### EncodeRequestOutput

> **EncodeRequestOutput** = `object`

Defined in:
[lib/models/runtime.model.ts:33](https://github.com/davinidae/umazing-musumengine/blob/47f9b56140c43967809e5f0bc8aed0e51605223f/src/lib/models/runtime.model.ts#L33)

#### Properties

##### requestB64

> **requestB64**: `string`

Defined in:
[lib/models/runtime.model.ts:34](https://github.com/davinidae/umazing-musumengine/blob/47f9b56140c43967809e5f0bc8aed0e51605223f/src/lib/models/runtime.model.ts#L34)
