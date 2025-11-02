# Function: udidRawToCanonicalString()

> **udidRawToCanonicalString**(`udidRaw`): `string`

Defined in: [lib/shared/protocol.util.ts:73](https://github.com/davinidae/umazing-musumengine/blob/3699b0b316713adaa61e62c11a4220687bdb55bc/src/lib/shared/protocol.util.ts#L73)

Convert a 16-byte raw UDID into canonical dashed string form.

## Parameters

### udidRaw

`Buffer`

Raw UDID bytes.

## Returns

`string`

Canonical string form (8-4-4-4-12 hex groups).
