[**umazing-musumengine**](../../README.md)

***

# Function: udidRawToCanonicalString()

> **udidRawToCanonicalString**(`udidRaw`): `string`

Defined in: [shared/protocol.util.ts:73](https://github.com/davinidae/umazing-musumengine/blob/51f61211084dfe767110f78265e0aa27a13c00d0/src/shared/protocol.util.ts#L73)

Convert a 16-byte raw UDID into canonical dashed string form.

## Parameters

### udidRaw

`Buffer`

Raw UDID bytes.

## Returns

`string`

Canonical string form (8-4-4-4-12 hex groups).
