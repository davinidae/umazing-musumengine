# Class: HeuristicStreamToObjectStrategy

Defined in: [lib/decrypt/shared/unpacker.util.ts:222](https://github.com/davinidae/umazing-musumengine/blob/cf87bd67fdf2e5f0d9b1c7ee0046a9e9ec258452/src/lib/decrypt/shared/unpacker.util.ts#L222)

Last-resort heuristic: decode a short prefix of values and attempt to fold them
into an object starting at the first run of string keys. This is conservative
and only accepts outputs with enough (>=4) key/value pairs.

## Methods

### execute()

> **execute**(`buf`): `unknown`

Defined in: [lib/decrypt/shared/unpacker.util.ts:227](https://github.com/davinidae/umazing-musumengine/blob/cf87bd67fdf2e5f0d9b1c7ee0046a9e9ec258452/src/lib/decrypt/shared/unpacker.util.ts#L227)

#### Parameters

##### buf

`Buffer`

Decrypted plaintext buffer.

#### Returns

`unknown`

Conservatively reconstructed object from a stream, or undefined.

#### Overrides

`UnpackStrategy.execute`

***

### normalizeResponseShape()

> **normalizeResponseShape**(`v`): `unknown`

Defined in: [lib/models/decrypt.model.ts:8](https://github.com/davinidae/umazing-musumengine/blob/cf87bd67fdf2e5f0d9b1c7ee0046a9e9ec258452/src/lib/models/decrypt.model.ts#L8)

Normalize common response shape: if an object has data and flattened header-like keys,
wrap the headers under data_headers.

#### Parameters

##### v

`unknown`

#### Returns

`unknown`

#### Inherited from

`UnpackStrategy.normalizeResponseShape`
