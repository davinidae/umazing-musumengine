[**umazing-musumengine**](../README.md)

***

# Function: toJsonCompatible()

> **toJsonCompatible**(`value`): `any`

Defined in: [lib/shared/json.util.ts:31](https://github.com/davinidae/umazing-musumengine/blob/4ef7fa4bd68ff11c74b5fbedfdd84a758352a918/src/lib/shared/json.util.ts#L31)

Convert Buffers/Uint8Arrays to UTF-8 strings when possible; otherwise to base64 strings.
Recurses into arrays and objects, and stringifies Buffer keys to stable string keys.

## Parameters

### value

`any`

Arbitrary value possibly containing Buffers.

## Returns

`any`

JSON-compatible representation.
