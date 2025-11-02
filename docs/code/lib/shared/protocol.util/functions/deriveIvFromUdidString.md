# Function: deriveIvFromUdidString()

> **deriveIvFromUdidString**(`udidString`): `Buffer`

Defined in: [lib/shared/protocol.util.ts:87](https://github.com/davinidae/umazing-musumengine/blob/ef7abbeb2f0a0bbb0762686b42f68cdafb94656e/src/lib/shared/protocol.util.ts#L87)

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
