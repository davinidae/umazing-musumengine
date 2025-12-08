# lib/models/runtime.model

## Enumerations

### FramingMode

Defined in: [lib/models/runtime.model.ts:6](https://github.com/davinidae/umazing-musumengine/blob/aaa8c0e18d92afd8c9ed1afe8c861de7d0746c99/src/lib/models/runtime.model.ts#L6)

Payload framing modes supported by the wire protocol.
- length-prefixed: [4B LE len][msgpack]
- kv-stream: concatenated msgpack docs [k1][v1][k2][v2]...

#### Enumeration Members

##### KvStream

> **KvStream**: `"kv-stream"`

Defined in: [lib/models/runtime.model.ts:8](https://github.com/davinidae/umazing-musumengine/blob/aaa8c0e18d92afd8c9ed1afe8c861de7d0746c99/src/lib/models/runtime.model.ts#L8)

##### LengthPrefixed

> **LengthPrefixed**: `"length-prefixed"`

Defined in: [lib/models/runtime.model.ts:7](https://github.com/davinidae/umazing-musumengine/blob/aaa8c0e18d92afd8c9ed1afe8c861de7d0746c99/src/lib/models/runtime.model.ts#L7)

## Type Aliases

### EncodeRequestInput

> **EncodeRequestInput** = `object`

Defined in: [lib/models/runtime.model.ts:12](https://github.com/davinidae/umazing-musumengine/blob/aaa8c0e18d92afd8c9ed1afe8c861de7d0746c99/src/lib/models/runtime.model.ts#L12)

Input parameters for building a request.
