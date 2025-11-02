[**umazing-musumengine**](../README.md)

***

# Type Alias: FramingMode

> **FramingMode** = `"length-prefixed"` \| `"kv-stream"`

Defined in: [lib/models/runtime.model.ts:6](https://github.com/davinidae/umazing-musumengine/blob/d4855d0689c920b326ed58c418dab42de4b3c061/src/lib/models/runtime.model.ts#L6)

Payload framing modes supported by the wire protocol.
- length-prefixed: [4B LE len][msgpack]
- kv-stream: concatenated msgpack docs [k1][v1][k2][v2]...
