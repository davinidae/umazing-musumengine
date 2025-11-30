# Class: LengthPrefixedStrategy

Defined in: [lib/decrypt/shared/unpacker.util.ts:15](https://github.com/davinidae/umazing-musumengine/blob/cf87bd67fdf2e5f0d9b1c7ee0046a9e9ec258452/src/lib/decrypt/shared/unpacker.util.ts#L15)

First try: classic length-prefixed msgpack [4B LE len][msgpack].
This strategy intentionally throws on malformed inputs so unit tests can assert
error conditions. The Unpacker will catch and try other strategies afterwards.

## Methods

### execute()

> **execute**(`buf`): `unknown`

Defined in: [lib/decrypt/shared/unpacker.util.ts:21](https://github.com/davinidae/umazing-musumengine/blob/cf87bd67fdf2e5f0d9b1c7ee0046a9e9ec258452/src/lib/decrypt/shared/unpacker.util.ts#L21)

#### Parameters

##### buf

`Buffer`

Decrypted plaintext buffer.

#### Returns

`unknown`

Decoded value if valid; otherwise throws on malformed prefix/length.

#### Throws

If the buffer is too short or the declared length is inconsistent with data.

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
