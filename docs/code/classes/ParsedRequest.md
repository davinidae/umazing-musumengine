[**umazing-musumengine**](../README.md)

***

# Class: ParsedRequest

Defined in: [lib/models/protocol.model.ts:69](https://github.com/davinidae/umazing-musumengine/blob/d4855d0689c920b326ed58c418dab42de4b3c061/src/lib/models/protocol.model.ts#L69)

Represents a parsed full request with blob1 and blob2 sections.

## Properties

### blob1

> `readonly` **blob1**: [`Blob1Header`](Blob1Header.md)

Defined in: [lib/models/protocol.model.ts:72](https://github.com/davinidae/umazing-musumengine/blob/d4855d0689c920b326ed58c418dab42de4b3c061/src/lib/models/protocol.model.ts#L72)

***

### blob1Buffer

> `readonly` **blob1Buffer**: `Buffer`

Defined in: [lib/models/protocol.model.ts:70](https://github.com/davinidae/umazing-musumengine/blob/d4855d0689c920b326ed58c418dab42de4b3c061/src/lib/models/protocol.model.ts#L70)

***

### blob2

> `readonly` **blob2**: `Buffer`

Defined in: [lib/models/protocol.model.ts:71](https://github.com/davinidae/umazing-musumengine/blob/d4855d0689c920b326ed58c418dab42de4b3c061/src/lib/models/protocol.model.ts#L71)

## Methods

### parse()

> `static` **parse**(`raw`): `ParsedRequest`

Defined in: [lib/models/protocol.model.ts:86](https://github.com/davinidae/umazing-musumengine/blob/d4855d0689c920b326ed58c418dab42de4b3c061/src/lib/models/protocol.model.ts#L86)

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
