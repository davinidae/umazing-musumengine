# Class: MultiArrayStrategy

Defined in: [lib/decrypt/shared/unpacker.util.ts:195](https://github.com/davinidae/umazing-musumengine/blob/ef7abbeb2f0a0bbb0762686b42f68cdafb94656e/src/lib/decrypt/shared/unpacker.util.ts#L195)

Fallback: decode as a sequence of msgpack documents into an array.
Keeps some visibility into odd payloads when object reconstruction is ambiguous.

## Methods

### execute()

> **execute**(`buf`): `unknown`

Defined in: [lib/decrypt/shared/unpacker.util.ts:200](https://github.com/davinidae/umazing-musumengine/blob/ef7abbeb2f0a0bbb0762686b42f68cdafb94656e/src/lib/decrypt/shared/unpacker.util.ts#L200)

#### Parameters

##### buf

`Buffer`

Decrypted plaintext buffer.

#### Returns

`unknown`

Array of decoded values via decodeMulti, or undefined.

#### Overrides

`UnpackStrategy.execute`

***

### normalizeResponseShape()

> **normalizeResponseShape**(`v`): `unknown`

Defined in: [lib/models/decrypt.model.ts:8](https://github.com/davinidae/umazing-musumengine/blob/ef7abbeb2f0a0bbb0762686b42f68cdafb94656e/src/lib/models/decrypt.model.ts#L8)

Normalize common response shape: if an object has data and flattened header-like keys,
wrap the headers under data_headers.

#### Parameters

##### v

`unknown`

#### Returns

`unknown`

#### Inherited from

`UnpackStrategy.normalizeResponseShape`
