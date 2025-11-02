# Class: ParsedRequest

Defined in: [lib/models/protocol.model.ts:69](https://github.com/davinidae/umazing-musumengine/blob/e31f12912bf088e7e67f5379b1fed36ba4f17894/src/lib/models/protocol.model.ts#L69)

Represents a parsed full request with blob1 and blob2 sections.

## Methods

### parse()

> `static` **parse**(`raw`): `ParsedRequest`

Defined in: [lib/models/protocol.model.ts:86](https://github.com/davinidae/umazing-musumengine/blob/e31f12912bf088e7e67f5379b1fed36ba4f17894/src/lib/models/protocol.model.ts#L86)

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
