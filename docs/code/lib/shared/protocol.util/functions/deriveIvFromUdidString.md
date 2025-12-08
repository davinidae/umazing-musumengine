# Function: deriveIvFromUdidString()

> **deriveIvFromUdidString**(`udidString`): `Buffer`

Defined in: [lib/shared/protocol.util.ts:87](https://github.com/davinidae/umazing-musumengine/blob/44f6e784adc57f5b49586071f4bdcb81060753f5/src/lib/shared/protocol.util.ts#L87)

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
