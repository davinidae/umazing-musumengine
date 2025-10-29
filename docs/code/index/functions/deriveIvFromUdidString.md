[**umazing-musumengine**](../../README.md)

***

# Function: deriveIvFromUdidString()

> **deriveIvFromUdidString**(`udidString`): `Buffer`

Defined in: [shared/protocol.util.ts:87](https://github.com/davinidae/umazing-musumengine/blob/51f61211084dfe767110f78265e0aa27a13c00d0/src/shared/protocol.util.ts#L87)

Derive a 16-byte IV from a canonical UDID string (first 16 ASCII chars, hyphens stripped).

## Parameters

### udidString

`string`

Canonical UDID string with hyphens.

## Returns

`Buffer`

16-byte IV as a Buffer.

## Throws

If the UDID does not yield 16 characters after stripping hyphens.
