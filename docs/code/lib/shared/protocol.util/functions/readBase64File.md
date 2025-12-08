# Function: readBase64File()

> **readBase64File**(`path`): `Buffer`

Defined in: [lib/shared/protocol.util.ts:11](https://github.com/davinidae/umazing-musumengine/blob/6df8e3e1b8dfb16b24d04befbfa6d32c969e2756/src/lib/shared/protocol.util.ts#L11)

Read a text file containing Base64 (possibly with whitespace) and return its bytes.

## Parameters

### path

`string`

Absolute or relative file path.

## Returns

`Buffer`

Buffer with decoded bytes.
