# lib/utils/framing.util

## Functions

### buildLengthPrefixedPayload()

> **buildLengthPrefixedPayload**(`payload`): `Buffer`

Defined in:
[lib/utils/framing.util.ts:2](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/utils/framing.util.ts#L2)

Build a length-prefixed buffer: `[u32le(payload.length)][payload]`.

#### Parameters

##### payload

`Uint8Array`

#### Returns

`Buffer`
