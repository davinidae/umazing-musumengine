[**umazing-musumengine**](../../README.md)

***

# Function: fromJsonFriendly()

> **fromJsonFriendly**(`value`): `any`

Defined in: [shared/json.util.ts:8](https://github.com/davinidae/umazing-musumengine/blob/e099ae72d04c46726039e2dd238802d266be3d5f/src/shared/json.util.ts#L8)

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
