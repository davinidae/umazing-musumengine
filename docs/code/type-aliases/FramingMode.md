[**umazing-musumengine**](../README.md)

***

# Type Alias: FramingMode

> **FramingMode** = `"length-prefixed"` \| `"kv-stream"`

Defined in: [lib/models/runtime.model.ts:6](https://github.com/davinidae/umazing-musumengine/blob/4ef7fa4bd68ff11c74b5fbedfdd84a758352a918/src/lib/models/runtime.model.ts#L6)

Payload framing modes supported by the wire protocol.
- length-prefixed: [4B LE len][msgpack]
- kv-stream: concatenated msgpack docs [k1][v1][k2][v2]...
