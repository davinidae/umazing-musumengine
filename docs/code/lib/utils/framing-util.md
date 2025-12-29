# lib/utils/framing.util

## Functions

### buildLengthPrefixedPayload()

> **buildLengthPrefixedPayload**(`payload`): `Buffer`

Defined in:
[lib/utils/framing.util.ts:2](https://github.com/davinidae/umazing-musumengine/blob/8c2a93a99924070f3bed30bfbb56b7b18480c6b1/src/lib/utils/framing.util.ts#L2)

Build a length-prefixed buffer: `[u32le(payload.length)][payload]`.

#### Parameters

##### payload

`Uint8Array`

#### Returns

`Buffer`
