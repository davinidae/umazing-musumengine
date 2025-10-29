[**umazing-musumengine**](../../README.md)

***

# Function: udidRawToCanonicalString()

> **udidRawToCanonicalString**(`udidRaw`): `string`

Defined in: [shared/protocol.util.ts:73](https://github.com/davinidae/umazing-musumengine/blob/e099ae72d04c46726039e2dd238802d266be3d5f/src/shared/protocol.util.ts#L73)

Convert a 16-byte raw UDID into canonical dashed string form.

## Parameters

### udidRaw

`Buffer`

Raw UDID bytes.

## Returns

`string`

Canonical string form (8-4-4-4-12 hex groups).
