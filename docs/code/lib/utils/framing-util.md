# lib/utils/framing.util

## Functions

### buildLengthPrefixedPayload()

> **buildLengthPrefixedPayload**(`payload`): `Buffer`

Defined in:
[lib/utils/framing.util.ts:2](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/lib/utils/framing.util.ts#L2)

Build a length-prefixed buffer: `[u32le(payload.length)][payload]`.

#### Parameters

##### payload

`Uint8Array`

#### Returns

`Buffer`
