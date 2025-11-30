# Function: readBase64File()

> **readBase64File**(`path`): `Buffer`

Defined in: [lib/shared/protocol.util.ts:11](https://github.com/davinidae/umazing-musumengine/blob/cf87bd67fdf2e5f0d9b1c7ee0046a9e9ec258452/src/lib/shared/protocol.util.ts#L11)

Read a text file containing Base64 (possibly with whitespace) and return its bytes.

## Parameters

### path

`string`

Absolute or relative file path.

## Returns

`Buffer`

Buffer with decoded bytes.
