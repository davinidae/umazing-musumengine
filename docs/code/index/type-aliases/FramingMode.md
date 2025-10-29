[**umazing-musumengine**](../../README.md)

***

# Type Alias: FramingMode

> **FramingMode** = `"length-prefixed"` \| `"kv-stream"`

Defined in: [models/runtime.model.ts:6](https://github.com/davinidae/umazing-musumengine/blob/e099ae72d04c46726039e2dd238802d266be3d5f/src/models/runtime.model.ts#L6)

Payload framing modes supported by the wire protocol.
- length-prefixed: [4B LE len][msgpack]
- kv-stream: concatenated msgpack docs [k1][v1][k2][v2]...
