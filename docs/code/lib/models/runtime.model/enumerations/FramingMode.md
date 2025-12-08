# Enumeration: FramingMode

Defined in: [lib/models/runtime.model.ts:6](https://github.com/davinidae/umazing-musumengine/blob/18c3ff3260c8ab431287937bbbd69b2ff72846ba/src/lib/models/runtime.model.ts#L6)

Payload framing modes supported by the wire protocol.
- length-prefixed: [4B LE len][msgpack]
- kv-stream: concatenated msgpack docs [k1][v1][k2][v2]...

## Enumeration Members

### KvStream

> **KvStream**: `"kv-stream"`

Defined in: [lib/models/runtime.model.ts:8](https://github.com/davinidae/umazing-musumengine/blob/18c3ff3260c8ab431287937bbbd69b2ff72846ba/src/lib/models/runtime.model.ts#L8)

***

### LengthPrefixed

> **LengthPrefixed**: `"length-prefixed"`

Defined in: [lib/models/runtime.model.ts:7](https://github.com/davinidae/umazing-musumengine/blob/18c3ff3260c8ab431287937bbbd69b2ff72846ba/src/lib/models/runtime.model.ts#L7)
