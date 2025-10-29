[**umazing-musumengine**](../../README.md)

***

# Class: Blob1Header

Defined in: [models/protocol.model.ts:5](https://github.com/davinidae/umazing-musumengine/blob/e099ae72d04c46726039e2dd238802d266be3d5f/src/models/protocol.model.ts#L5)

Represents the parsed blob1 header fields.
Layout: [prefix][session_id(16)][udid_raw(16)][response_key(32)][auth_key(48)].

## Properties

### auth\_key

> `readonly` **auth\_key**: `Buffer`

Defined in: [models/protocol.model.ts:10](https://github.com/davinidae/umazing-musumengine/blob/e099ae72d04c46726039e2dd238802d266be3d5f/src/models/protocol.model.ts#L10)

***

### prefix

> `readonly` **prefix**: `Buffer`

Defined in: [models/protocol.model.ts:6](https://github.com/davinidae/umazing-musumengine/blob/e099ae72d04c46726039e2dd238802d266be3d5f/src/models/protocol.model.ts#L6)

***

### response\_key

> `readonly` **response\_key**: `Buffer`

Defined in: [models/protocol.model.ts:9](https://github.com/davinidae/umazing-musumengine/blob/e099ae72d04c46726039e2dd238802d266be3d5f/src/models/protocol.model.ts#L9)

***

### session\_id

> `readonly` **session\_id**: `Buffer`

Defined in: [models/protocol.model.ts:7](https://github.com/davinidae/umazing-musumengine/blob/e099ae72d04c46726039e2dd238802d266be3d5f/src/models/protocol.model.ts#L7)

***

### udid\_raw

> `readonly` **udid\_raw**: `Buffer`

Defined in: [models/protocol.model.ts:8](https://github.com/davinidae/umazing-musumengine/blob/e099ae72d04c46726039e2dd238802d266be3d5f/src/models/protocol.model.ts#L8)

## Methods

### udidCanonical()

> **udidCanonical**(): `string`

Defined in: [models/protocol.model.ts:60](https://github.com/davinidae/umazing-musumengine/blob/e099ae72d04c46726039e2dd238802d266be3d5f/src/models/protocol.model.ts#L60)

UDID canonical dashed-format string derived from udid_raw.

#### Returns

`string`

Canonical UDID string (8-4-4-4-12).

***

### fromBuffer()

> `static` **fromBuffer**(`blob1`): `Blob1Header`

Defined in: [models/protocol.model.ts:32](https://github.com/davinidae/umazing-musumengine/blob/e099ae72d04c46726039e2dd238802d266be3d5f/src/models/protocol.model.ts#L32)

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
