# Function: readBase64File()

> **readBase64File**(`path`): `Buffer`

Defined in: [lib/shared/protocol.util.ts:11](https://github.com/davinidae/umazing-musumengine/blob/18fb9920f0c1134675a2221f55ba500b4715772f/src/lib/shared/protocol.util.ts#L11)

Read a text file containing Base64 (possibly with whitespace) and return its bytes.

## Parameters

### path

`string`

Absolute or relative file path.

## Returns

`Buffer`

Buffer with decoded bytes.
