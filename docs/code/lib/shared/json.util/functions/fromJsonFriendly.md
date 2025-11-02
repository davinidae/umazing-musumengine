# Function: fromJsonFriendly()

> **fromJsonFriendly**(`value`): `any`

Defined in: [lib/shared/json.util.ts:8](https://github.com/davinidae/umazing-musumengine/blob/e31f12912bf088e7e67f5379b1fed36ba4f17894/src/lib/shared/json.util.ts#L8)

Convert JSON-friendly representations into runtime shapes.
- Recognizes strings prefixed with "base64:" and converts them to Buffers.
- Recursively processes arrays and objects.

## Parameters

### value

`any`

Any JSON-like value.

## Returns

`any`

Value with Buffers reconstructed where applicable.
