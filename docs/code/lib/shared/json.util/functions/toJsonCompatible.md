# Function: toJsonCompatible()

> **toJsonCompatible**(`value`): `unknown`

Defined in: [lib/shared/json.util.ts:31](https://github.com/davinidae/umazing-musumengine/blob/6df8e3e1b8dfb16b24d04befbfa6d32c969e2756/src/lib/shared/json.util.ts#L31)

Convert Buffers/Uint8Arrays to UTF-8 strings when possible; otherwise to base64 strings.
Recurses into arrays and objects, and stringifies Buffer keys to stable string keys.

## Parameters

### value

`unknown`

Arbitrary value possibly containing Buffers.

## Returns

`unknown`

JSON-compatible representation.
