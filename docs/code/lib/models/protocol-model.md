# lib/models/protocol.model

## Classes

### Blob1Header

Defined in:
[lib/models/protocol.model.ts:5](https://github.com/davinidae/umazing-musumengine/blob/c7165367514289ac3f84628f7086bb7b2e32980f/src/lib/models/protocol.model.ts#L5)

Represents the parsed blob1 header fields. Layout:
[prefix][session_id(16)][udid_raw(16)][response_key(32)][auth_key(48)].

#### Constructors

##### Constructor

> `private` **new Blob1Header**(`prefix`, `session_id`, `udid_raw`, `response_key`, `auth_key`,
> `viewer_id`): [`Blob1Header`](#blob1header)

Defined in:
[lib/models/protocol.model.ts:6](https://github.com/davinidae/umazing-musumengine/blob/c7165367514289ac3f84628f7086bb7b2e32980f/src/lib/models/protocol.model.ts#L6)

###### Parameters

###### prefix

`Buffer`

###### session_id

`Buffer`

###### udid_raw

`Buffer`

###### response_key

`Buffer`

###### auth_key

`Buffer`

###### viewer_id

`number` = `0`

###### Returns

[`Blob1Header`](#blob1header)

#### Properties

##### auth_key

> `readonly` **auth_key**: `Buffer`

Defined in:
[lib/models/protocol.model.ts:11](https://github.com/davinidae/umazing-musumengine/blob/c7165367514289ac3f84628f7086bb7b2e32980f/src/lib/models/protocol.model.ts#L11)

##### prefix

> `readonly` **prefix**: `Buffer`

Defined in:
[lib/models/protocol.model.ts:7](https://github.com/davinidae/umazing-musumengine/blob/c7165367514289ac3f84628f7086bb7b2e32980f/src/lib/models/protocol.model.ts#L7)

##### response_key

> `readonly` **response_key**: `Buffer`

Defined in:
[lib/models/protocol.model.ts:10](https://github.com/davinidae/umazing-musumengine/blob/c7165367514289ac3f84628f7086bb7b2e32980f/src/lib/models/protocol.model.ts#L10)

##### session_id

> `readonly` **session_id**: `Buffer`

Defined in:
[lib/models/protocol.model.ts:8](https://github.com/davinidae/umazing-musumengine/blob/c7165367514289ac3f84628f7086bb7b2e32980f/src/lib/models/protocol.model.ts#L8)

##### udid_raw

> `readonly` **udid_raw**: `Buffer`

Defined in:
[lib/models/protocol.model.ts:9](https://github.com/davinidae/umazing-musumengine/blob/c7165367514289ac3f84628f7086bb7b2e32980f/src/lib/models/protocol.model.ts#L9)

##### viewer_id

> `readonly` **viewer_id**: `number` = `0`

Defined in:
[lib/models/protocol.model.ts:12](https://github.com/davinidae/umazing-musumengine/blob/c7165367514289ac3f84628f7086bb7b2e32980f/src/lib/models/protocol.model.ts#L12)

#### Methods

##### udidCanonical()

> **udidCanonical**(): `string`

Defined in:
[lib/models/protocol.model.ts:51](https://github.com/davinidae/umazing-musumengine/blob/c7165367514289ac3f84628f7086bb7b2e32980f/src/lib/models/protocol.model.ts#L51)

UDID canonical dashed-format string derived from udid_raw.

###### Returns

`string`

Canonical UDID string (8-4-4-4-12).

##### fromBuffer()

> `static` **fromBuffer**(`blob1`): [`Blob1Header`](#blob1header)

Defined in:
[lib/models/protocol.model.ts:23](https://github.com/davinidae/umazing-musumengine/blob/c7165367514289ac3f84628f7086bb7b2e32980f/src/lib/models/protocol.model.ts#L23)

Parse a blob1 Buffer into a Blob1Header instance.

###### Parameters

###### blob1

`Buffer`

Header section buffer.

###### Returns

[`Blob1Header`](#blob1header)

Parsed Blob1Header.

###### Throws

If required field sizes are not present.

---

### ParsedRequest

Defined in:
[lib/models/protocol.model.ts:60](https://github.com/davinidae/umazing-musumengine/blob/c7165367514289ac3f84628f7086bb7b2e32980f/src/lib/models/protocol.model.ts#L60)

Represents a parsed full request with blob1 and blob2 sections.

#### Constructors

##### Constructor

> `private` **new ParsedRequest**(`blob1Buffer`, `blob2`): [`ParsedRequest`](#parsedrequest)

Defined in:
[lib/models/protocol.model.ts:65](https://github.com/davinidae/umazing-musumengine/blob/c7165367514289ac3f84628f7086bb7b2e32980f/src/lib/models/protocol.model.ts#L65)

###### Parameters

###### blob1Buffer

`Buffer`

###### blob2

`Buffer`

###### Returns

[`ParsedRequest`](#parsedrequest)

#### Properties

##### blob1

> `readonly` **blob1**: [`Blob1Header`](#blob1header)

Defined in:
[lib/models/protocol.model.ts:63](https://github.com/davinidae/umazing-musumengine/blob/c7165367514289ac3f84628f7086bb7b2e32980f/src/lib/models/protocol.model.ts#L63)

##### blob1Buffer

> `readonly` **blob1Buffer**: `Buffer`

Defined in:
[lib/models/protocol.model.ts:61](https://github.com/davinidae/umazing-musumengine/blob/c7165367514289ac3f84628f7086bb7b2e32980f/src/lib/models/protocol.model.ts#L61)

##### blob2

> `readonly` **blob2**: `Buffer`

Defined in:
[lib/models/protocol.model.ts:62](https://github.com/davinidae/umazing-musumengine/blob/c7165367514289ac3f84628f7086bb7b2e32980f/src/lib/models/protocol.model.ts#L62)

#### Methods

##### parse()

> `static` **parse**(`raw`): [`ParsedRequest`](#parsedrequest)

Defined in:
[lib/models/protocol.model.ts:77](https://github.com/davinidae/umazing-musumengine/blob/c7165367514289ac3f84628f7086bb7b2e32980f/src/lib/models/protocol.model.ts#L77)

Parse a full request buffer into a ParsedRequest.

###### Parameters

###### raw

`Buffer`

Full request buffer.

###### Returns

[`ParsedRequest`](#parsedrequest)

Parsed request with blob1 header object and blob2 bytes.

###### Throws

If the buffer is too short or sizes are inconsistent.
