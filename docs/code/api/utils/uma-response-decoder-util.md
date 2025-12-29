# api/utils/uma-response-decoder.util

## Classes

### UmaResponseDecoder

Defined in:
[api/utils/uma-response-decoder.util.ts:12](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/api/utils/uma-response-decoder.util.ts#L12)

Preferred API decoder. Preserves the API decode logic:

- try length-prefixed msgpack
- else try kv-stream decoding

Internally uses the library `Unpacker` so decoding behavior stays centralized. Throws when decoding
fails to preserve existing API flow semantics.

#### Constructors

##### Constructor

> **new UmaResponseDecoder**(): [`UmaResponseDecoder`](#umaresponsedecoder)

Defined in:
[api/utils/uma-response-decoder.util.ts:15](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/api/utils/uma-response-decoder.util.ts#L15)

###### Returns

[`UmaResponseDecoder`](#umaresponsedecoder)

#### Properties

##### unpacker

> `private` `readonly` **unpacker**: [`Unpacker`](../../lib/decrypt/utils/unpacker.util.md#unpacker)

Defined in:
[api/utils/uma-response-decoder.util.ts:13](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/api/utils/uma-response-decoder.util.ts#L13)

#### Methods

##### decode()

> **decode**\<`T`\>(`data`): `T`

Defined in:
[api/utils/uma-response-decoder.util.ts:20](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/api/utils/uma-response-decoder.util.ts#L20)

###### Type Parameters

###### T

`T` = `unknown`

###### Parameters

###### data

`Uint8Array`

###### Returns

`T`
