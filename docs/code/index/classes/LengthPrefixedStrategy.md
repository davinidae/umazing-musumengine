[**umazing-musumengine**](../../README.md)

***

# Class: LengthPrefixedStrategy

Defined in: [decrypt/shared/unpacker.util.ts:15](https://github.com/davinidae/umazing-musumengine/blob/51f61211084dfe767110f78265e0aa27a13c00d0/src/decrypt/shared/unpacker.util.ts#L15)

First try: classic length-prefixed msgpack [4B LE len][msgpack].
This strategy intentionally throws on malformed inputs so unit tests can assert
error conditions. The Unpacker will catch and try other strategies afterwards.

## Extends

- [`UnpackStrategy`](UnpackStrategy.md)

## Constructors

### Constructor

> **new LengthPrefixedStrategy**(): `LengthPrefixedStrategy`

#### Returns

`LengthPrefixedStrategy`

#### Inherited from

[`UnpackStrategy`](UnpackStrategy.md).[`constructor`](UnpackStrategy.md#constructor)

## Methods

### execute()

> **execute**(`buf`): `unknown`

Defined in: [decrypt/shared/unpacker.util.ts:21](https://github.com/davinidae/umazing-musumengine/blob/51f61211084dfe767110f78265e0aa27a13c00d0/src/decrypt/shared/unpacker.util.ts#L21)

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

[`UnpackStrategy`](UnpackStrategy.md).[`execute`](UnpackStrategy.md#execute)

***

### normalizeResponseShape()

> **normalizeResponseShape**(`v`): `unknown`

Defined in: [models/decrypt.model.ts:8](https://github.com/davinidae/umazing-musumengine/blob/51f61211084dfe767110f78265e0aa27a13c00d0/src/models/decrypt.model.ts#L8)

Normalize common response shape: if an object has data and flattened header-like keys,
wrap the headers under data_headers.

#### Parameters

##### v

`unknown`

#### Returns

`unknown`

#### Inherited from

[`UnpackStrategy`](UnpackStrategy.md).[`normalizeResponseShape`](UnpackStrategy.md#normalizeresponseshape)
