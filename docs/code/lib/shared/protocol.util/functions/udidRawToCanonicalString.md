# Function: udidRawToCanonicalString()

> **udidRawToCanonicalString**(`udidRaw`): `string`

Defined in: [lib/shared/protocol.util.ts:73](https://github.com/davinidae/umazing-musumengine/blob/f0aa00e05dacca920f40c0772577d56aeee15536/src/lib/shared/protocol.util.ts#L73)

Convert a 16-byte raw UDID into canonical dashed string form.

## Parameters

### udidRaw

`Buffer`

Raw UDID bytes.

## Returns

`string`

Canonical string form (8-4-4-4-12 hex groups).
