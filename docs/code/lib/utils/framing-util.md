# lib/utils/framing.util

## Functions

### buildLengthPrefixedPayload()

> **buildLengthPrefixedPayload**(`payload`): `Buffer`

Defined in:
[lib/utils/framing.util.ts:2](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/lib/utils/framing.util.ts#L2)

Build a length-prefixed buffer: `[u32le(payload.length)][payload]`.

#### Parameters

##### payload

`Uint8Array`

#### Returns

`Buffer`
