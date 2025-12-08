# lib/decrypt/shared/unpacker.util

## Classes

### AnchorDataHeadersStrategy

Defined in: [lib/decrypt/shared/unpacker.util.ts:130](https://github.com/davinidae/umazing-musumengine/blob/83ba6e036c77d3d01d34b0572c11883ee166b58c/src/lib/decrypt/shared/unpacker.util.ts#L130)

Targeted heuristic: anchor on the 'data_headers' key often present in tool responses
and reconstruct a map from the surrounding key/value sequence.

#### Methods

##### execute()

> **execute**(`buf`): `unknown`

Defined in: [lib/decrypt/shared/unpacker.util.ts:135](https://github.com/davinidae/umazing-musumengine/blob/83ba6e036c77d3d01d34b0572c11883ee166b58c/src/lib/decrypt/shared/unpacker.util.ts#L135)

###### Parameters

###### buf

`Buffer`

Decrypted plaintext buffer.

###### Returns

`unknown`

Object reconstructed when 'data_headers' anchor is present; otherwise undefined.

###### Overrides

`UnpackStrategy.execute`

##### normalizeResponseShape()

> **normalizeResponseShape**(`v`): `unknown`

Defined in: [lib/models/decrypt.model.ts:8](https://github.com/davinidae/umazing-musumengine/blob/83ba6e036c77d3d01d34b0572c11883ee166b58c/src/lib/models/decrypt.model.ts#L8)

Normalize common response shape: if an object has data and flattened header-like keys,
wrap the headers under data_headers.

###### Parameters

###### v

`unknown`

###### Returns

`unknown`

###### Inherited from

`UnpackStrategy.normalizeResponseShape`

***

### HeuristicStreamToObjectStrategy

Defined in: [lib/decrypt/shared/unpacker.util.ts:222](https://github.com/davinidae/umazing-musumengine/blob/83ba6e036c77d3d01d34b0572c11883ee166b58c/src/lib/decrypt/shared/unpacker.util.ts#L222)

Last-resort heuristic: decode a short prefix of values and attempt to fold them
into an object starting at the first run of string keys. This is conservative
and only accepts outputs with enough (>=4) key/value pairs.

#### Methods

##### execute()

> **execute**(`buf`): `unknown`

Defined in: [lib/decrypt/shared/unpacker.util.ts:227](https://github.com/davinidae/umazing-musumengine/blob/83ba6e036c77d3d01d34b0572c11883ee166b58c/src/lib/decrypt/shared/unpacker.util.ts#L227)

###### Parameters

###### buf

`Buffer`

Decrypted plaintext buffer.

###### Returns

`unknown`

Conservatively reconstructed object from a stream, or undefined.

###### Overrides

`UnpackStrategy.execute`

##### normalizeResponseShape()

> **normalizeResponseShape**(`v`): `unknown`

Defined in: [lib/models/decrypt.model.ts:8](https://github.com/davinidae/umazing-musumengine/blob/83ba6e036c77d3d01d34b0572c11883ee166b58c/src/lib/models/decrypt.model.ts#L8)

Normalize common response shape: if an object has data and flattened header-like keys,
wrap the headers under data_headers.

###### Parameters

###### v

`unknown`

###### Returns

`unknown`

###### Inherited from

`UnpackStrategy.normalizeResponseShape`

***

### KVStreamStrategy

Defined in: [lib/decrypt/shared/unpacker.util.ts:90](https://github.com/davinidae/umazing-musumengine/blob/83ba6e036c77d3d01d34b0572c11883ee166b58c/src/lib/decrypt/shared/unpacker.util.ts#L90)

Heuristic: decode a concatenated (key, value, ...) msgpack stream into an object.
This matches some tool endpoints that stream key/value pairs without a surrounding map.

#### Methods

##### execute()

> **execute**(`buf`): `unknown`

Defined in: [lib/decrypt/shared/unpacker.util.ts:95](https://github.com/davinidae/umazing-musumengine/blob/83ba6e036c77d3d01d34b0572c11883ee166b58c/src/lib/decrypt/shared/unpacker.util.ts#L95)

###### Parameters

###### buf

`Buffer`

Decrypted plaintext buffer.

###### Returns

`unknown`

Object reconstructed from (key, value, ...) stream, or undefined.

###### Overrides

`UnpackStrategy.execute`

##### normalizeResponseShape()

> **normalizeResponseShape**(`v`): `unknown`

Defined in: [lib/models/decrypt.model.ts:8](https://github.com/davinidae/umazing-musumengine/blob/83ba6e036c77d3d01d34b0572c11883ee166b58c/src/lib/models/decrypt.model.ts#L8)

Normalize common response shape: if an object has data and flattened header-like keys,
wrap the headers under data_headers.

###### Parameters

###### v

`unknown`

###### Returns

`unknown`

###### Inherited from

`UnpackStrategy.normalizeResponseShape`

***

### LengthPrefixedStrategy

Defined in: [lib/decrypt/shared/unpacker.util.ts:15](https://github.com/davinidae/umazing-musumengine/blob/83ba6e036c77d3d01d34b0572c11883ee166b58c/src/lib/decrypt/shared/unpacker.util.ts#L15)

First try: classic length-prefixed msgpack [4B LE len][msgpack].
This strategy intentionally throws on malformed inputs so unit tests can assert
error conditions. The Unpacker will catch and try other strategies afterwards.

#### Methods

##### execute()

> **execute**(`buf`): `unknown`

Defined in: [lib/decrypt/shared/unpacker.util.ts:21](https://github.com/davinidae/umazing-musumengine/blob/83ba6e036c77d3d01d34b0572c11883ee166b58c/src/lib/decrypt/shared/unpacker.util.ts#L21)

###### Parameters

###### buf

`Buffer`

Decrypted plaintext buffer.

###### Returns

`unknown`

Decoded value if valid; otherwise throws on malformed prefix/length.

###### Throws

If the buffer is too short or the declared length is inconsistent with data.

###### Overrides

`UnpackStrategy.execute`

##### normalizeResponseShape()

> **normalizeResponseShape**(`v`): `unknown`

Defined in: [lib/models/decrypt.model.ts:8](https://github.com/davinidae/umazing-musumengine/blob/83ba6e036c77d3d01d34b0572c11883ee166b58c/src/lib/models/decrypt.model.ts#L8)

Normalize common response shape: if an object has data and flattened header-like keys,
wrap the headers under data_headers.

###### Parameters

###### v

`unknown`

###### Returns

`unknown`

###### Inherited from

`UnpackStrategy.normalizeResponseShape`

***

### MapHeaderScanStrategy

Defined in: [lib/decrypt/shared/unpacker.util.ts:56](https://github.com/davinidae/umazing-musumengine/blob/83ba6e036c77d3d01d34b0572c11883ee166b58c/src/lib/decrypt/shared/unpacker.util.ts#L56)

Heuristic: scan for a plausible map header inside the buffer and decode from there.
Looks for likely keys (viewer_id, device, ...) or sufficient string key density.

#### Methods

##### execute()

> **execute**(`buf`): `unknown`

Defined in: [lib/decrypt/shared/unpacker.util.ts:61](https://github.com/davinidae/umazing-musumengine/blob/83ba6e036c77d3d01d34b0572c11883ee166b58c/src/lib/decrypt/shared/unpacker.util.ts#L61)

###### Parameters

###### buf

`Buffer`

Decrypted plaintext buffer.

###### Returns

`unknown`

Decoded object if a plausible map header is found; otherwise undefined.

###### Overrides

`UnpackStrategy.execute`

##### normalizeResponseShape()

> **normalizeResponseShape**(`v`): `unknown`

Defined in: [lib/models/decrypt.model.ts:8](https://github.com/davinidae/umazing-musumengine/blob/83ba6e036c77d3d01d34b0572c11883ee166b58c/src/lib/models/decrypt.model.ts#L8)

Normalize common response shape: if an object has data and flattened header-like keys,
wrap the headers under data_headers.

###### Parameters

###### v

`unknown`

###### Returns

`unknown`

###### Inherited from

`UnpackStrategy.normalizeResponseShape`

***

### MultiArrayStrategy

Defined in: [lib/decrypt/shared/unpacker.util.ts:195](https://github.com/davinidae/umazing-musumengine/blob/83ba6e036c77d3d01d34b0572c11883ee166b58c/src/lib/decrypt/shared/unpacker.util.ts#L195)

Fallback: decode as a sequence of msgpack documents into an array.
Keeps some visibility into odd payloads when object reconstruction is ambiguous.

#### Methods

##### execute()

> **execute**(`buf`): `unknown`

Defined in: [lib/decrypt/shared/unpacker.util.ts:200](https://github.com/davinidae/umazing-musumengine/blob/83ba6e036c77d3d01d34b0572c11883ee166b58c/src/lib/decrypt/shared/unpacker.util.ts#L200)

###### Parameters

###### buf

`Buffer`

Decrypted plaintext buffer.

###### Returns

`unknown`

Array of decoded values via decodeMulti, or undefined.

###### Overrides

`UnpackStrategy.execute`

##### normalizeResponseShape()

> **normalizeResponseShape**(`v`): `unknown`

Defined in: [lib/models/decrypt.model.ts:8](https://github.com/davinidae/umazing-musumengine/blob/83ba6e036c77d3d01d34b0572c11883ee166b58c/src/lib/models/decrypt.model.ts#L8)

Normalize common response shape: if an object has data and flattened header-like keys,
wrap the headers under data_headers.

###### Parameters

###### v

`unknown`

###### Returns

`unknown`

###### Inherited from

`UnpackStrategy.normalizeResponseShape`

***

### RawMsgpackStrategy

Defined in: [lib/decrypt/shared/unpacker.util.ts:38](https://github.com/davinidae/umazing-musumengine/blob/83ba6e036c77d3d01d34b0572c11883ee166b58c/src/lib/decrypt/shared/unpacker.util.ts#L38)

Second try: treat the entire buffer as a single msgpack document.
Useful when the server omits the length prefix for small payloads.

#### Methods

##### execute()

> **execute**(`buf`): `unknown`

Defined in: [lib/decrypt/shared/unpacker.util.ts:43](https://github.com/davinidae/umazing-musumengine/blob/83ba6e036c77d3d01d34b0572c11883ee166b58c/src/lib/decrypt/shared/unpacker.util.ts#L43)

###### Parameters

###### buf

`Buffer`

Decrypted plaintext buffer.

###### Returns

`unknown`

Decoded single msgpack value, or undefined if not decodable.

###### Overrides

`UnpackStrategy.execute`

##### normalizeResponseShape()

> **normalizeResponseShape**(`v`): `unknown`

Defined in: [lib/models/decrypt.model.ts:8](https://github.com/davinidae/umazing-musumengine/blob/83ba6e036c77d3d01d34b0572c11883ee166b58c/src/lib/models/decrypt.model.ts#L8)

Normalize common response shape: if an object has data and flattened header-like keys,
wrap the headers under data_headers.

###### Parameters

###### v

`unknown`

###### Returns

`unknown`

###### Inherited from

`UnpackStrategy.normalizeResponseShape`

***

### Unpacker

Defined in: [lib/decrypt/shared/unpacker.util.ts:258](https://github.com/davinidae/umazing-musumengine/blob/83ba6e036c77d3d01d34b0572c11883ee166b58c/src/lib/decrypt/shared/unpacker.util.ts#L258)

Pipeline that tries multiple strategies in a safe order. If none succeed,
returns a diagnostic object containing a hex dump to aid manual inspection.

#### Constructors

##### Constructor

> **new Unpacker**(`strategies`): [`Unpacker`](#unpacker)

Defined in: [lib/decrypt/shared/unpacker.util.ts:269](https://github.com/davinidae/umazing-musumengine/blob/83ba6e036c77d3d01d34b0572c11883ee166b58c/src/lib/decrypt/shared/unpacker.util.ts#L269)

Heuristic unpacker for payloads that may not be length-prefixed. It tries, in order:
1) Standard length-prefixed msgpack
2) Raw single msgpack document
3) Scan for map header and decode if plausible
4) Scan for a streamed KV sequence (key,value,...) and reconstruct an object
   - Includes a targeted 'data_headers' anchor for tool responses
5) decodeMulti to array as a last resort
If none succeed, returns a small diagnostic object with hex dump.

###### Parameters

###### strategies

`UnpackStrategy`[] = `...`

###### Returns

[`Unpacker`](#unpacker)
