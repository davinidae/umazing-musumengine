# lib/utils/framing.util

## Functions

### buildLengthPrefixedPayload()

> **buildLengthPrefixedPayload**(`payload`): `Buffer`

Defined in:
[lib/utils/framing.util.ts:2](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/utils/framing.util.ts#L2)

Build a length-prefixed buffer: `[u32le(payload.length)][payload]`.

#### Parameters

##### payload

`Uint8Array`

#### Returns

`Buffer`
