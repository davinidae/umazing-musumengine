# Class: Blob1Header

Defined in: [lib/models/protocol.model.ts:5](https://github.com/davinidae/umazing-musumengine/blob/313d7b3da3bf5cac1cbad23523f6160ad25ffb7e/src/lib/models/protocol.model.ts#L5)

Represents the parsed blob1 header fields.
Layout: [prefix][session_id(16)][udid_raw(16)][response_key(32)][auth_key(48)].

## Methods

### udidCanonical()

> **udidCanonical**(): `string`

Defined in: [lib/models/protocol.model.ts:60](https://github.com/davinidae/umazing-musumengine/blob/313d7b3da3bf5cac1cbad23523f6160ad25ffb7e/src/lib/models/protocol.model.ts#L60)

UDID canonical dashed-format string derived from udid_raw.

#### Returns

`string`

Canonical UDID string (8-4-4-4-12).

***

### fromBuffer()

> `static` **fromBuffer**(`blob1`): `Blob1Header`

Defined in: [lib/models/protocol.model.ts:32](https://github.com/davinidae/umazing-musumengine/blob/313d7b3da3bf5cac1cbad23523f6160ad25ffb7e/src/lib/models/protocol.model.ts#L32)

Parse a blob1 Buffer into a Blob1Header instance.

#### Parameters

##### blob1

`Buffer`

Header section buffer.

#### Returns

`Blob1Header`

Parsed Blob1Header.

#### Throws

If required field sizes are not present.
