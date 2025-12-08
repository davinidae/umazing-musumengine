# Function: readBase64File()

> **readBase64File**(`path`): `Buffer`

Defined in: [lib/shared/protocol.util.ts:11](https://github.com/davinidae/umazing-musumengine/blob/18c3ff3260c8ab431287937bbbd69b2ff72846ba/src/lib/shared/protocol.util.ts#L11)

Read a text file containing Base64 (possibly with whitespace) and return its bytes.

## Parameters

### path

`string`

Absolute or relative file path.

## Returns

`Buffer`

Buffer with decoded bytes.
