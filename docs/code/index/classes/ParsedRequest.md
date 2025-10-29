[**umazing-musumengine**](../../README.md)

***

# Class: ParsedRequest

Defined in: [models/protocol.model.ts:69](https://github.com/davinidae/umazing-musumengine/blob/e099ae72d04c46726039e2dd238802d266be3d5f/src/models/protocol.model.ts#L69)

Represents a parsed full request with blob1 and blob2 sections.

## Properties

### blob1

> `readonly` **blob1**: [`Blob1Header`](Blob1Header.md)

Defined in: [models/protocol.model.ts:72](https://github.com/davinidae/umazing-musumengine/blob/e099ae72d04c46726039e2dd238802d266be3d5f/src/models/protocol.model.ts#L72)

***

### blob1Buffer

> `readonly` **blob1Buffer**: `Buffer`

Defined in: [models/protocol.model.ts:70](https://github.com/davinidae/umazing-musumengine/blob/e099ae72d04c46726039e2dd238802d266be3d5f/src/models/protocol.model.ts#L70)

***

### blob2

> `readonly` **blob2**: `Buffer`

Defined in: [models/protocol.model.ts:71](https://github.com/davinidae/umazing-musumengine/blob/e099ae72d04c46726039e2dd238802d266be3d5f/src/models/protocol.model.ts#L71)

## Methods

### parse()

> `static` **parse**(`raw`): `ParsedRequest`

Defined in: [models/protocol.model.ts:86](https://github.com/davinidae/umazing-musumengine/blob/e099ae72d04c46726039e2dd238802d266be3d5f/src/models/protocol.model.ts#L86)

Parse a full request buffer into a ParsedRequest.

#### Parameters

##### raw

`Buffer`

Full request buffer.

#### Returns

`ParsedRequest`

Parsed request with blob1 header object and blob2 bytes.

#### Throws

If the buffer is too short or sizes are inconsistent.
