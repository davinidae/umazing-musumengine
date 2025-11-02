# Function: fromJsonFriendly()

> **fromJsonFriendly**(`value`): `any`

Defined in: [lib/shared/json.util.ts:8](https://github.com/davinidae/umazing-musumengine/blob/ef7abbeb2f0a0bbb0762686b42f68cdafb94656e/src/lib/shared/json.util.ts#L8)

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
