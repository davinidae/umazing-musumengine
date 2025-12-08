# Class: KVStreamStrategy

Defined in: [lib/decrypt/shared/unpacker.util.ts:90](https://github.com/davinidae/umazing-musumengine/blob/f0aa00e05dacca920f40c0772577d56aeee15536/src/lib/decrypt/shared/unpacker.util.ts#L90)

Heuristic: decode a concatenated (key, value, ...) msgpack stream into an object.
This matches some tool endpoints that stream key/value pairs without a surrounding map.

## Methods

### execute()

> **execute**(`buf`): `unknown`

Defined in: [lib/decrypt/shared/unpacker.util.ts:95](https://github.com/davinidae/umazing-musumengine/blob/f0aa00e05dacca920f40c0772577d56aeee15536/src/lib/decrypt/shared/unpacker.util.ts#L95)

#### Parameters

##### buf

`Buffer`

Decrypted plaintext buffer.

#### Returns

`unknown`

Object reconstructed from (key, value, ...) stream, or undefined.

#### Overrides

`UnpackStrategy.execute`

***

### normalizeResponseShape()

> **normalizeResponseShape**(`v`): `unknown`

Defined in: [lib/models/decrypt.model.ts:8](https://github.com/davinidae/umazing-musumengine/blob/f0aa00e05dacca920f40c0772577d56aeee15536/src/lib/models/decrypt.model.ts#L8)

Normalize common response shape: if an object has data and flattened header-like keys,
wrap the headers under data_headers.

#### Parameters

##### v

`unknown`

#### Returns

`unknown`

#### Inherited from

`UnpackStrategy.normalizeResponseShape`
