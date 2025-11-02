[**umazing-musumengine**](../README.md)

***

# Interface: EncodeRequestInput

Defined in: [lib/models/runtime.model.ts:9](https://github.com/davinidae/umazing-musumengine/blob/4ef7fa4bd68ff11c74b5fbedfdd84a758352a918/src/lib/models/runtime.model.ts#L9)

Input parameters for building a request.

## Properties

### blob1

> **blob1**: `object`

Defined in: [lib/models/runtime.model.ts:10](https://github.com/davinidae/umazing-musumengine/blob/4ef7fa4bd68ff11c74b5fbedfdd84a758352a918/src/lib/models/runtime.model.ts#L10)

#### auth\_key\_hex

> **auth\_key\_hex**: `string`

48-byte auth key (hex); contents are opaque for our purposes.

#### framing?

> `optional` **framing**: [`FramingMode`](../type-aliases/FramingMode.md)

Optional framing hint for the payload. Defaults to length-prefixed.

#### prefix\_hex

> **prefix\_hex**: `string`

Free-form prefix; echoed back by the server.

#### response\_key\_hex

> **response\_key\_hex**: `string`

32-byte response key (hex); echoed back and used by the server.

#### session\_id\_hex

> **session\_id\_hex**: `string`

16-byte session identifier (hex).

#### udid\_canonical?

> `optional` **udid\_canonical**: `string`

Canonical UDID string (with dashes); alternative to udid_raw_hex.

#### udid\_raw\_hex?

> `optional` **udid\_raw\_hex**: `string`

Raw 16-byte UDID in hex; alternative to udid_canonical.

***

### payload

> **payload**: `any`

Defined in: [lib/models/runtime.model.ts:26](https://github.com/davinidae/umazing-musumengine/blob/4ef7fa4bd68ff11c74b5fbedfdd84a758352a918/src/lib/models/runtime.model.ts#L26)
