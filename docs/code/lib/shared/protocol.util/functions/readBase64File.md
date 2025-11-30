# Function: readBase64File()

> **readBase64File**(`path`): `Buffer`

Defined in: [lib/shared/protocol.util.ts:11](https://github.com/davinidae/umazing-musumengine/blob/313d7b3da3bf5cac1cbad23523f6160ad25ffb7e/src/lib/shared/protocol.util.ts#L11)

Read a text file containing Base64 (possibly with whitespace) and return its bytes.

## Parameters

### path

`string`

Absolute or relative file path.

## Returns

`Buffer`

Buffer with decoded bytes.
