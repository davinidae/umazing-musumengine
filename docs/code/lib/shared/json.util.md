# lib/shared/json.util

## Functions

### fromJsonFriendly()

> **fromJsonFriendly**(`value`): `unknown`

Defined in: [lib/shared/json.util.ts:8](https://github.com/davinidae/umazing-musumengine/blob/aaa8c0e18d92afd8c9ed1afe8c861de7d0746c99/src/lib/shared/json.util.ts#L8)

Convert JSON-friendly representations into runtime shapes.
- Recognizes strings prefixed with "base64:" and converts them to Buffers.
- Recursively processes arrays and objects.

#### Parameters

##### value

`unknown`

Any JSON-like value.

#### Returns

`unknown`

Value with Buffers reconstructed where applicable.

***

### toJsonCompatible()

> **toJsonCompatible**(`value`): `unknown`

Defined in: [lib/shared/json.util.ts:31](https://github.com/davinidae/umazing-musumengine/blob/aaa8c0e18d92afd8c9ed1afe8c861de7d0746c99/src/lib/shared/json.util.ts#L31)

Convert Buffers/Uint8Arrays to UTF-8 strings when possible; otherwise to base64 strings.
Recurses into arrays and objects, and stringifies Buffer keys to stable string keys.

#### Parameters

##### value

`unknown`

Arbitrary value possibly containing Buffers.

#### Returns

`unknown`

JSON-compatible representation.
