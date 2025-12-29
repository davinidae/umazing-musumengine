# lib/decrypt/utils/unpacker.util

## Classes

### AnchorDataHeadersStrategy

Defined in:
[lib/decrypt/utils/unpacker.util.ts:173](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/decrypt/utils/unpacker.util.ts#L173)

Targeted heuristic: anchor on the 'data_headers' key often present in tool responses and reconstruct
a map from the surrounding key/value sequence.

#### Extends

- [`UnpackStrategy`](../../utils/decrypt.util.md#unpackstrategy)

#### Constructors

##### Constructor

> **new AnchorDataHeadersStrategy**(): [`AnchorDataHeadersStrategy`](#anchordataheadersstrategy)

###### Returns

[`AnchorDataHeadersStrategy`](#anchordataheadersstrategy)

###### Inherited from

[`UnpackStrategy`](../../utils/decrypt.util.md#unpackstrategy).[`constructor`](../../utils/decrypt.util.md#constructor)

#### Methods

##### buildKeyEncodings()

> `private` **buildKeyEncodings**(`key`): `Buffer`\<`ArrayBufferLike`\>[]

Defined in:
[lib/decrypt/utils/unpacker.util.ts:174](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/decrypt/utils/unpacker.util.ts#L174)

###### Parameters

###### key

`string`

###### Returns

`Buffer`\<`ArrayBufferLike`\>[]

##### buildObjectFromKvSequence()

> `private` **buildObjectFromKvSequence**(`seq`): `Record`\<`string`, `unknown`\>

Defined in:
[lib/decrypt/utils/unpacker.util.ts:207](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/decrypt/utils/unpacker.util.ts#L207)

###### Parameters

###### seq

`unknown`[]

###### Returns

`Record`\<`string`, `unknown`\>

##### execute()

> **execute**(`buf`): `unknown`

Defined in:
[lib/decrypt/utils/unpacker.util.ts:230](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/decrypt/utils/unpacker.util.ts#L230)

###### Parameters

###### buf

`Buffer`

Decrypted plaintext buffer.

###### Returns

`unknown`

Object reconstructed when 'data_headers' anchor is present; otherwise undefined.

###### Overrides

[`UnpackStrategy`](../../utils/decrypt.util.md#unpackstrategy).[`execute`](../../utils/decrypt.util.md#execute)

##### findFirstPatternIndex()

> `private` **findFirstPatternIndex**(`buf`, `patterns`): `number`

Defined in:
[lib/decrypt/utils/unpacker.util.ts:197](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/decrypt/utils/unpacker.util.ts#L197)

###### Parameters

###### buf

`Buffer`

###### patterns

`Buffer`\<`ArrayBufferLike`\>[]

###### Returns

`number`

##### looksAnchored()

> `private` **looksAnchored**(`out`): `boolean`

Defined in:
[lib/decrypt/utils/unpacker.util.ts:218](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/decrypt/utils/unpacker.util.ts#L218)

###### Parameters

###### out

`Record`\<`string`, `unknown`\>

###### Returns

`boolean`

##### normalizeResponseShape()

> **normalizeResponseShape**(`v`): `unknown`

Defined in:
[lib/utils/decrypt.util.ts:22](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/utils/decrypt.util.ts#L22)

Normalize common response shape: if an object has data and flattened header-like keys, wrap the
headers under data_headers.

###### Parameters

###### v

`unknown`

###### Returns

`unknown`

###### Inherited from

[`UnpackStrategy`](../../utils/decrypt.util.md#unpackstrategy).[`normalizeResponseShape`](../../utils/decrypt.util.md#normalizeresponseshape)

---

### HeuristicStreamToObjectStrategy

Defined in:
[lib/decrypt/utils/unpacker.util.ts:278](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/decrypt/utils/unpacker.util.ts#L278)

Last-resort heuristic: decode a short prefix of values and attempt to fold them into an object
starting at the first run of string keys. This is conservative and only accepts outputs with enough
(>=4) key/value pairs.

#### Extends

- [`UnpackStrategy`](../../utils/decrypt.util.md#unpackstrategy)

#### Constructors

##### Constructor

> **new HeuristicStreamToObjectStrategy**():
> [`HeuristicStreamToObjectStrategy`](#heuristicstreamtoobjectstrategy)

###### Returns

[`HeuristicStreamToObjectStrategy`](#heuristicstreamtoobjectstrategy)

###### Inherited from

[`UnpackStrategy`](../../utils/decrypt.util.md#unpackstrategy).[`constructor`](../../utils/decrypt.util.md#constructor)

#### Methods

##### execute()

> **execute**(`buf`): `unknown`

Defined in:
[lib/decrypt/utils/unpacker.util.ts:308](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/decrypt/utils/unpacker.util.ts#L308)

###### Parameters

###### buf

`Buffer`

Decrypted plaintext buffer.

###### Returns

`unknown`

Conservatively reconstructed object from a stream, or undefined.

###### Overrides

[`UnpackStrategy`](../../utils/decrypt.util.md#unpackstrategy).[`execute`](../../utils/decrypt.util.md#execute)

##### foldFromFirstStringRun()

> `private` **foldFromFirstStringRun**(`seq`, `maxStarts`, `minPairs`): `Record`\<`string`,
> `unknown`\> \| `undefined`

Defined in:
[lib/decrypt/utils/unpacker.util.ts:279](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/decrypt/utils/unpacker.util.ts#L279)

###### Parameters

###### seq

`unknown`[]

###### maxStarts

`number`

###### minPairs

`number`

###### Returns

`Record`\<`string`, `unknown`\> \| `undefined`

##### normalizeResponseShape()

> **normalizeResponseShape**(`v`): `unknown`

Defined in:
[lib/utils/decrypt.util.ts:22](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/utils/decrypt.util.ts#L22)

Normalize common response shape: if an object has data and flattened header-like keys, wrap the
headers under data_headers.

###### Parameters

###### v

`unknown`

###### Returns

`unknown`

###### Inherited from

[`UnpackStrategy`](../../utils/decrypt.util.md#unpackstrategy).[`normalizeResponseShape`](../../utils/decrypt.util.md#normalizeresponseshape)

---

### KVStreamStrategy

Defined in:
[lib/decrypt/utils/unpacker.util.ts:105](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/decrypt/utils/unpacker.util.ts#L105)

Heuristic: decode a concatenated (key, value, ...) msgpack stream into an object. This matches some
tool endpoints that stream key/value pairs without a surrounding map.

#### Extends

- [`UnpackStrategy`](../../utils/decrypt.util.md#unpackstrategy)

#### Constructors

##### Constructor

> **new KVStreamStrategy**(): [`KVStreamStrategy`](#kvstreamstrategy)

###### Returns

[`KVStreamStrategy`](#kvstreamstrategy)

###### Inherited from

[`UnpackStrategy`](../../utils/decrypt.util.md#unpackstrategy).[`constructor`](../../utils/decrypt.util.md#constructor)

#### Methods

##### decodeStreamToObject()

> `private` **decodeStreamToObject**(`values`): `Record`\<`string`, `unknown`\>

Defined in:
[lib/decrypt/utils/unpacker.util.ts:121](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/decrypt/utils/unpacker.util.ts#L121)

###### Parameters

###### values

`unknown`[]

###### Returns

`Record`\<`string`, `unknown`\>

##### execute()

> **execute**(`buf`): `unknown`

Defined in:
[lib/decrypt/utils/unpacker.util.ts:153](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/decrypt/utils/unpacker.util.ts#L153)

###### Parameters

###### buf

`Buffer`

Decrypted plaintext buffer.

###### Returns

`unknown`

Object reconstructed from (key, value, ...) stream, or undefined.

###### Overrides

[`UnpackStrategy`](../../utils/decrypt.util.md#unpackstrategy).[`execute`](../../utils/decrypt.util.md#execute)

##### findFirstStringMarkerIndex()

> `private` **findFirstStringMarkerIndex**(`buf`): `number`

Defined in:
[lib/decrypt/utils/unpacker.util.ts:113](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/decrypt/utils/unpacker.util.ts#L113)

###### Parameters

###### buf

`Buffer`

###### Returns

`number`

##### isEmptyObject()

> `private` **isEmptyObject**(`value`): `boolean`

Defined in:
[lib/decrypt/utils/unpacker.util.ts:136](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/decrypt/utils/unpacker.util.ts#L136)

###### Parameters

###### value

`unknown`

###### Returns

`boolean`

##### isStringMarker()

> `private` **isStringMarker**(`marker`): `boolean`

Defined in:
[lib/decrypt/utils/unpacker.util.ts:106](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/decrypt/utils/unpacker.util.ts#L106)

###### Parameters

###### marker

`number`

###### Returns

`boolean`

##### normalizeResponseShape()

> **normalizeResponseShape**(`v`): `unknown`

Defined in:
[lib/utils/decrypt.util.ts:22](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/utils/decrypt.util.ts#L22)

Normalize common response shape: if an object has data and flattened header-like keys, wrap the
headers under data_headers.

###### Parameters

###### v

`unknown`

###### Returns

`unknown`

###### Inherited from

[`UnpackStrategy`](../../utils/decrypt.util.md#unpackstrategy).[`normalizeResponseShape`](../../utils/decrypt.util.md#normalizeresponseshape)

---

### LengthPrefixedStrategy

Defined in:
[lib/decrypt/utils/unpacker.util.ts:16](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/decrypt/utils/unpacker.util.ts#L16)

First try: classic length-prefixed msgpack [4B LE len][msgpack]. This strategy intentionally throws
on malformed inputs so unit tests can assert error conditions. The Unpacker will catch and try other
strategies afterwards.

#### Extends

- [`UnpackStrategy`](../../utils/decrypt.util.md#unpackstrategy)

#### Constructors

##### Constructor

> **new LengthPrefixedStrategy**(): [`LengthPrefixedStrategy`](#lengthprefixedstrategy)

###### Returns

[`LengthPrefixedStrategy`](#lengthprefixedstrategy)

###### Inherited from

[`UnpackStrategy`](../../utils/decrypt.util.md#unpackstrategy).[`constructor`](../../utils/decrypt.util.md#constructor)

#### Methods

##### execute()

> **execute**(`data`): `unknown`

Defined in:
[lib/decrypt/utils/unpacker.util.ts:22](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/decrypt/utils/unpacker.util.ts#L22)

###### Parameters

###### data

`Buffer`

Decrypted plaintext buffer.

###### Returns

`unknown`

Decoded value if valid; otherwise throws on malformed prefix/length.

###### Throws

If the buffer is too short or the declared length is inconsistent with data.

###### Overrides

[`UnpackStrategy`](../../utils/decrypt.util.md#unpackstrategy).[`execute`](../../utils/decrypt.util.md#execute)

##### normalizeResponseShape()

> **normalizeResponseShape**(`v`): `unknown`

Defined in:
[lib/utils/decrypt.util.ts:22](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/utils/decrypt.util.ts#L22)

Normalize common response shape: if an object has data and flattened header-like keys, wrap the
headers under data_headers.

###### Parameters

###### v

`unknown`

###### Returns

`unknown`

###### Inherited from

[`UnpackStrategy`](../../utils/decrypt.util.md#unpackstrategy).[`normalizeResponseShape`](../../utils/decrypt.util.md#normalizeresponseshape)

---

### MapHeaderScanStrategy

Defined in:
[lib/decrypt/utils/unpacker.util.ts:60](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/decrypt/utils/unpacker.util.ts#L60)

Heuristic: scan for a plausible map header inside the buffer and decode from there. Looks for likely
keys (viewer_id, device, ...) or sufficient string key density.

#### Extends

- [`UnpackStrategy`](../../utils/decrypt.util.md#unpackstrategy)

#### Constructors

##### Constructor

> **new MapHeaderScanStrategy**(): [`MapHeaderScanStrategy`](#mapheaderscanstrategy)

###### Returns

[`MapHeaderScanStrategy`](#mapheaderscanstrategy)

###### Inherited from

[`UnpackStrategy`](../../utils/decrypt.util.md#unpackstrategy).[`constructor`](../../utils/decrypt.util.md#constructor)

#### Methods

##### execute()

> **execute**(`buf`): `unknown`

Defined in:
[lib/decrypt/utils/unpacker.util.ts:82](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/decrypt/utils/unpacker.util.ts#L82)

###### Parameters

###### buf

`Buffer`

Decrypted plaintext buffer.

###### Returns

`unknown`

Decoded object if a plausible map header is found; otherwise undefined.

###### Overrides

[`UnpackStrategy`](../../utils/decrypt.util.md#unpackstrategy).[`execute`](../../utils/decrypt.util.md#execute)

##### isPlausibleMapHeaderMarker()

> `private` **isPlausibleMapHeaderMarker**(`marker`): `boolean`

Defined in:
[lib/decrypt/utils/unpacker.util.ts:61](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/decrypt/utils/unpacker.util.ts#L61)

###### Parameters

###### marker

`number` | `undefined`

###### Returns

`boolean`

##### looksLikeUsefulObject()

> `private` **looksLikeUsefulObject**(`value`, `likelyKeys`): `boolean`

Defined in:
[lib/decrypt/utils/unpacker.util.ts:68](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/decrypt/utils/unpacker.util.ts#L68)

###### Parameters

###### value

`unknown`

###### likelyKeys

`string`[]

###### Returns

`boolean`

##### normalizeResponseShape()

> **normalizeResponseShape**(`v`): `unknown`

Defined in:
[lib/utils/decrypt.util.ts:22](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/utils/decrypt.util.ts#L22)

Normalize common response shape: if an object has data and flattened header-like keys, wrap the
headers under data_headers.

###### Parameters

###### v

`unknown`

###### Returns

`unknown`

###### Inherited from

[`UnpackStrategy`](../../utils/decrypt.util.md#unpackstrategy).[`normalizeResponseShape`](../../utils/decrypt.util.md#normalizeresponseshape)

---

### MultiArrayStrategy

Defined in:
[lib/decrypt/utils/unpacker.util.ts:251](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/decrypt/utils/unpacker.util.ts#L251)

Fallback: decode as a sequence of msgpack documents into an array. Keeps some visibility into odd
payloads when object reconstruction is ambiguous.

#### Extends

- [`UnpackStrategy`](../../utils/decrypt.util.md#unpackstrategy)

#### Constructors

##### Constructor

> **new MultiArrayStrategy**(): [`MultiArrayStrategy`](#multiarraystrategy)

###### Returns

[`MultiArrayStrategy`](#multiarraystrategy)

###### Inherited from

[`UnpackStrategy`](../../utils/decrypt.util.md#unpackstrategy).[`constructor`](../../utils/decrypt.util.md#constructor)

#### Methods

##### execute()

> **execute**(`buf`): `unknown`

Defined in:
[lib/decrypt/utils/unpacker.util.ts:256](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/decrypt/utils/unpacker.util.ts#L256)

###### Parameters

###### buf

`Buffer`

Decrypted plaintext buffer.

###### Returns

`unknown`

Array of decoded values via decodeMulti, or undefined.

###### Overrides

[`UnpackStrategy`](../../utils/decrypt.util.md#unpackstrategy).[`execute`](../../utils/decrypt.util.md#execute)

##### normalizeResponseShape()

> **normalizeResponseShape**(`v`): `unknown`

Defined in:
[lib/utils/decrypt.util.ts:22](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/utils/decrypt.util.ts#L22)

Normalize common response shape: if an object has data and flattened header-like keys, wrap the
headers under data_headers.

###### Parameters

###### v

`unknown`

###### Returns

`unknown`

###### Inherited from

[`UnpackStrategy`](../../utils/decrypt.util.md#unpackstrategy).[`normalizeResponseShape`](../../utils/decrypt.util.md#normalizeresponseshape)

---

### RawMsgpackStrategy

Defined in:
[lib/decrypt/utils/unpacker.util.ts:42](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/decrypt/utils/unpacker.util.ts#L42)

Second try: treat the entire buffer as a single msgpack document. Useful when the server omits the
length prefix for small payloads.

#### Extends

- [`UnpackStrategy`](../../utils/decrypt.util.md#unpackstrategy)

#### Constructors

##### Constructor

> **new RawMsgpackStrategy**(): [`RawMsgpackStrategy`](#rawmsgpackstrategy)

###### Returns

[`RawMsgpackStrategy`](#rawmsgpackstrategy)

###### Inherited from

[`UnpackStrategy`](../../utils/decrypt.util.md#unpackstrategy).[`constructor`](../../utils/decrypt.util.md#constructor)

#### Methods

##### execute()

> **execute**(`buf`): `unknown`

Defined in:
[lib/decrypt/utils/unpacker.util.ts:47](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/decrypt/utils/unpacker.util.ts#L47)

###### Parameters

###### buf

`Buffer`

Decrypted plaintext buffer.

###### Returns

`unknown`

Decoded single msgpack value, or undefined if not decodable.

###### Overrides

[`UnpackStrategy`](../../utils/decrypt.util.md#unpackstrategy).[`execute`](../../utils/decrypt.util.md#execute)

##### normalizeResponseShape()

> **normalizeResponseShape**(`v`): `unknown`

Defined in:
[lib/utils/decrypt.util.ts:22](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/utils/decrypt.util.ts#L22)

Normalize common response shape: if an object has data and flattened header-like keys, wrap the
headers under data_headers.

###### Parameters

###### v

`unknown`

###### Returns

`unknown`

###### Inherited from

[`UnpackStrategy`](../../utils/decrypt.util.md#unpackstrategy).[`normalizeResponseShape`](../../utils/decrypt.util.md#normalizeresponseshape)

---

### Unpacker

Defined in:
[lib/decrypt/utils/unpacker.util.ts:326](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/decrypt/utils/unpacker.util.ts#L326)

Pipeline that tries multiple strategies in a safe order. If none succeed, returns a diagnostic
object containing a hex dump to aid manual inspection.

#### Constructors

##### Constructor

> **new Unpacker**(`strategies`): [`Unpacker`](#unpacker)

Defined in:
[lib/decrypt/utils/unpacker.util.ts:337](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/decrypt/utils/unpacker.util.ts#L337)

Heuristic unpacker for payloads that may not be length-prefixed. It tries, in order:

1. Standard length-prefixed msgpack
2. Raw single msgpack document
3. Scan for map header and decode if plausible
4. Scan for a streamed KV sequence (key,value,...) and reconstruct an object
   - Includes a targeted 'data_headers' anchor for tool responses
5. decodeMulti to array as a last resort If none succeed, returns a small diagnostic object with hex
   dump.

###### Parameters

###### strategies

[`UnpackStrategy`](../../utils/decrypt.util.md#unpackstrategy)[] = `...`

###### Returns

[`Unpacker`](#unpacker)

#### Properties

##### strategies

> `private` `readonly` **strategies**:
> [`UnpackStrategy`](../../utils/decrypt.util.md#unpackstrategy)[]

Defined in:
[lib/decrypt/utils/unpacker.util.ts:338](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/decrypt/utils/unpacker.util.ts#L338)

#### Methods

##### execute()

> **execute**(`buf`): `unknown`

Defined in:
[lib/decrypt/utils/unpacker.util.ts:351](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/decrypt/utils/unpacker.util.ts#L351)

###### Parameters

###### buf

`Buffer`

###### Returns

`unknown`
