# Function: fromJsonFriendly()

> **fromJsonFriendly**(`value`): `unknown`

Defined in: [lib/shared/json.util.ts:8](https://github.com/davinidae/umazing-musumengine/blob/44f6e784adc57f5b49586071f4bdcb81060753f5/src/lib/shared/json.util.ts#L8)

Convert JSON-friendly representations into runtime shapes.
- Recognizes strings prefixed with "base64:" and converts them to Buffers.
- Recursively processes arrays and objects.

## Parameters

### value

`unknown`

Any JSON-like value.

## Returns

`unknown`

Value with Buffers reconstructed where applicable.
