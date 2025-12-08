# lib/models/protocol.model

## Classes

### Blob1Header

Defined in:
[lib/models/protocol.model.ts:5](https://github.com/davinidae/umazing-musumengine/blob/31506e6c59268922860b05e2a0fd19297714c4cb/src/lib/models/protocol.model.ts#L5)

Represents the parsed blob1 header fields. Layout:
[prefix][session_id(16)][udid_raw(16)][response_key(32)][auth_key(48)].

#### Methods

##### udidCanonical()

> **udidCanonical**(): `string`

Defined in:
[lib/models/protocol.model.ts:60](https://github.com/davinidae/umazing-musumengine/blob/31506e6c59268922860b05e2a0fd19297714c4cb/src/lib/models/protocol.model.ts#L60)

UDID canonical dashed-format string derived from udid_raw.

###### Returns

`string`

Canonical UDID string (8-4-4-4-12).

##### fromBuffer()

> `static` **fromBuffer**(`blob1`): [`Blob1Header`](#blob1header)

Defined in:
[lib/models/protocol.model.ts:32](https://github.com/davinidae/umazing-musumengine/blob/31506e6c59268922860b05e2a0fd19297714c4cb/src/lib/models/protocol.model.ts#L32)

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
[lib/models/protocol.model.ts:69](https://github.com/davinidae/umazing-musumengine/blob/31506e6c59268922860b05e2a0fd19297714c4cb/src/lib/models/protocol.model.ts#L69)

Represents a parsed full request with blob1 and blob2 sections.

#### Methods

##### parse()

> `static` **parse**(`raw`): [`ParsedRequest`](#parsedrequest)

Defined in:
[lib/models/protocol.model.ts:86](https://github.com/davinidae/umazing-musumengine/blob/31506e6c59268922860b05e2a0fd19297714c4cb/src/lib/models/protocol.model.ts#L86)

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
