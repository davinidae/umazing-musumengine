# lib/models/protocol.model

## Classes

### Blob1Header

Defined in:
[lib/models/protocol.model.ts:5](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/models/protocol.model.ts#L5)

Represents the parsed blob1 header fields. Layout:
[prefix][session_id(16)][udid_raw(16)][response_key(32)][auth_key(0|48)].

#### Constructors

##### Constructor

> **new Blob1Header**(`prefix`, `session_id`, `udid_raw`, `response_key`, `auth_key`, `viewer_id`):
> [`Blob1Header`](#blob1header)

Defined in:
[lib/models/protocol.model.ts:6](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/models/protocol.model.ts#L6)

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
[lib/models/protocol.model.ts:11](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/models/protocol.model.ts#L11)

##### prefix

> `readonly` **prefix**: `Buffer`

Defined in:
[lib/models/protocol.model.ts:7](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/models/protocol.model.ts#L7)

##### response_key

> `readonly` **response_key**: `Buffer`

Defined in:
[lib/models/protocol.model.ts:10](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/models/protocol.model.ts#L10)

##### session_id

> `readonly` **session_id**: `Buffer`

Defined in:
[lib/models/protocol.model.ts:8](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/models/protocol.model.ts#L8)

##### udid_raw

> `readonly` **udid_raw**: `Buffer`

Defined in:
[lib/models/protocol.model.ts:9](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/models/protocol.model.ts#L9)

##### viewer_id

> `readonly` **viewer_id**: `number` = `0`

Defined in:
[lib/models/protocol.model.ts:12](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/models/protocol.model.ts#L12)

#### Methods

##### udidCanonical()

> **udidCanonical**(): `string`

Defined in:
[lib/models/protocol.model.ts:21](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/models/protocol.model.ts#L21)

UDID canonical dashed-format string derived from udid_raw.

###### Returns

`string`

Canonical UDID string (8-4-4-4-12).

---

### ParsedRequest

Defined in:
[lib/models/protocol.model.ts:30](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/models/protocol.model.ts#L30)

Represents a parsed full request with blob1 and blob2 sections.

#### Constructors

##### Constructor

> **new ParsedRequest**(`blob1Buffer`, `blob2`): [`ParsedRequest`](#parsedrequest)

Defined in:
[lib/models/protocol.model.ts:35](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/models/protocol.model.ts#L35)

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
[lib/models/protocol.model.ts:33](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/models/protocol.model.ts#L33)

##### blob1Buffer

> `readonly` **blob1Buffer**: `Buffer`

Defined in:
[lib/models/protocol.model.ts:31](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/models/protocol.model.ts#L31)

##### blob2

> `readonly` **blob2**: `Buffer`

Defined in:
[lib/models/protocol.model.ts:32](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/models/protocol.model.ts#L32)

## Functions

### buildBlob1Buffer()

> **buildBlob1Buffer**(`input`): `Buffer`

Defined in:
[lib/models/protocol.model.ts:109](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/models/protocol.model.ts#L109)

Build a blob1 buffer with the canonical layout:
[prefix][session_id(16)][udid_raw(16)][response_key(32)][auth_key(0|48)].

#### Parameters

##### input

###### authKey?

`Buffer`\<`ArrayBufferLike`\>

###### prefix

`Buffer`

###### responseKey

`Buffer`

###### sessionId

`Buffer`

###### udidRaw

`Buffer`

#### Returns

`Buffer`

---

### parseHeaderBlob1()

> **parseHeaderBlob1**(`blob1`): [`Blob1Header`](#blob1header)

Defined in:
[lib/models/protocol.model.ts:46](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/models/protocol.model.ts#L46)

Parse a blob1 Buffer into a Blob1Header instance.

#### Parameters

##### blob1

`Buffer`

#### Returns

[`Blob1Header`](#blob1header)

#### Throws

If required field sizes are not present.

---

### parseParsedRequest()

> **parseParsedRequest**(`raw`): [`ParsedRequest`](#parsedrequest)

Defined in:
[lib/models/protocol.model.ts:80](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/models/protocol.model.ts#L80)

Parse a full request buffer into a ParsedRequest.

#### Parameters

##### raw

`Buffer`

#### Returns

[`ParsedRequest`](#parsedrequest)

#### Throws

If the buffer is too short or sizes are inconsistent.

---

### parseRequest()

> **parseRequest**(`raw`): \[`Buffer`\<`ArrayBufferLike`\>, `Buffer`\<`ArrayBufferLike`\>\]

Defined in:
[lib/models/protocol.model.ts:100](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/models/protocol.model.ts#L100)

Legacy helper: parse a full request buffer into `[blob1, blob2]`. Kept for backwards compatibility
with older tests/consumers.

#### Parameters

##### raw

`Buffer`

#### Returns

\[`Buffer`\<`ArrayBufferLike`\>, `Buffer`\<`ArrayBufferLike`\>\]
