# lib/models/runtime.model

## Enumerations

### FramingMode

Defined in: [lib/models/runtime.model.ts:6](https://github.com/davinidae/umazing-musumengine/blob/f925cc44580437204daf55f6632a534c57bf2e91/src/lib/models/runtime.model.ts#L6)

Payload framing modes supported by the wire protocol.
- length-prefixed: [4B LE len][msgpack]
- kv-stream: concatenated msgpack docs [k1][v1][k2][v2]...

#### Enumeration Members

##### KvStream

> **KvStream**: `"kv-stream"`

Defined in: [lib/models/runtime.model.ts:8](https://github.com/davinidae/umazing-musumengine/blob/f925cc44580437204daf55f6632a534c57bf2e91/src/lib/models/runtime.model.ts#L8)

##### LengthPrefixed

> **LengthPrefixed**: `"length-prefixed"`

Defined in: [lib/models/runtime.model.ts:7](https://github.com/davinidae/umazing-musumengine/blob/f925cc44580437204daf55f6632a534c57bf2e91/src/lib/models/runtime.model.ts#L7)

## Type Aliases

### EncodeRequestInput

> **EncodeRequestInput** = `object`

Defined in: [lib/models/runtime.model.ts:12](https://github.com/davinidae/umazing-musumengine/blob/f925cc44580437204daf55f6632a534c57bf2e91/src/lib/models/runtime.model.ts#L12)

Input parameters for building a request.
