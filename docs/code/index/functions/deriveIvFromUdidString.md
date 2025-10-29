[**umazing-musumengine**](../../README.md)

***

# Function: deriveIvFromUdidString()

> **deriveIvFromUdidString**(`udidString`): `Buffer`

Defined in: [shared/protocol.util.ts:87](https://github.com/davinidae/umazing-musumengine/blob/e099ae72d04c46726039e2dd238802d266be3d5f/src/shared/protocol.util.ts#L87)

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
