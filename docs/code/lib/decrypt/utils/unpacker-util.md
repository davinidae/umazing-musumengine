# lib/decrypt/utils/unpacker.util

## Classes

### AnchorDataHeadersStrategy

Defined in:
[lib/decrypt/utils/unpacker.util.ts:127](https://github.com/davinidae/umazing-musumengine/blob/d3e15f25b7d8fa68ec86ebb62ab4f46188974cb8/src/lib/decrypt/utils/unpacker.util.ts#L127)

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
[lib/decrypt/utils/unpacker.util.ts:128](https://github.com/davinidae/umazing-musumengine/blob/d3e15f25b7d8fa68ec86ebb62ab4f46188974cb8/src/lib/decrypt/utils/unpacker.util.ts#L128)

###### Parameters

###### key

`string`

###### Returns

`Buffer`\<`ArrayBufferLike`\>[]

##### buildObjectFromKvSequence()

> `private` **buildObjectFromKvSequence**(`seq`): `Record`\<`string`, `unknown`\>

Defined in:
[lib/decrypt/utils/unpacker.util.ts:157](https://github.com/davinidae/umazing-musumengine/blob/d3e15f25b7d8fa68ec86ebb62ab4f46188974cb8/src/lib/decrypt/utils/unpacker.util.ts#L157)

###### Parameters

###### seq

`unknown`[]

###### Returns

`Record`\<`string`, `unknown`\>

##### execute()

> **execute**(`buf`): `unknown`

Defined in:
[lib/decrypt/utils/unpacker.util.ts:176](https://github.com/davinidae/umazing-musumengine/blob/d3e15f25b7d8fa68ec86ebb62ab4f46188974cb8/src/lib/decrypt/utils/unpacker.util.ts#L176)

###### Parameters

###### buf

`Buffer`

###### Returns

`unknown`

###### Overrides

[`UnpackStrategy`](../../utils/decrypt.util.md#unpackstrategy).[`execute`](../../utils/decrypt.util.md#execute)

##### findFirstPatternIndex()

> `private` **findFirstPatternIndex**(`buf`, `patterns`): `number`

Defined in:
[lib/decrypt/utils/unpacker.util.ts:147](https://github.com/davinidae/umazing-musumengine/blob/d3e15f25b7d8fa68ec86ebb62ab4f46188974cb8/src/lib/decrypt/utils/unpacker.util.ts#L147)

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
[lib/decrypt/utils/unpacker.util.ts:168](https://github.com/davinidae/umazing-musumengine/blob/d3e15f25b7d8fa68ec86ebb62ab4f46188974cb8/src/lib/decrypt/utils/unpacker.util.ts#L168)

###### Parameters

###### out

`Record`\<`string`, `unknown`\>

###### Returns

`boolean`

##### normalizeResponseShape()

> **normalizeResponseShape**(`v`): `unknown`

Defined in:
[lib/utils/decrypt.util.ts:12](https://github.com/davinidae/umazing-musumengine/blob/d3e15f25b7d8fa68ec86ebb62ab4f46188974cb8/src/lib/utils/decrypt.util.ts#L12)

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
[lib/decrypt/utils/unpacker.util.ts:210](https://github.com/davinidae/umazing-musumengine/blob/d3e15f25b7d8fa68ec86ebb62ab4f46188974cb8/src/lib/decrypt/utils/unpacker.util.ts#L210)

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
[lib/decrypt/utils/unpacker.util.ts:236](https://github.com/davinidae/umazing-musumengine/blob/d3e15f25b7d8fa68ec86ebb62ab4f46188974cb8/src/lib/decrypt/utils/unpacker.util.ts#L236)

###### Parameters

###### buf

`Buffer`

###### Returns

`unknown`

###### Overrides

[`UnpackStrategy`](../../utils/decrypt.util.md#unpackstrategy).[`execute`](../../utils/decrypt.util.md#execute)

##### foldFromFirstStringRun()

> `private` **foldFromFirstStringRun**(`seq`, `maxStarts`, `minPairs`): `Record`\<`string`,
> `unknown`\> \| `undefined`

Defined in:
[lib/decrypt/utils/unpacker.util.ts:211](https://github.com/davinidae/umazing-musumengine/blob/d3e15f25b7d8fa68ec86ebb62ab4f46188974cb8/src/lib/decrypt/utils/unpacker.util.ts#L211)

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
[lib/utils/decrypt.util.ts:12](https://github.com/davinidae/umazing-musumengine/blob/d3e15f25b7d8fa68ec86ebb62ab4f46188974cb8/src/lib/utils/decrypt.util.ts#L12)

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
[lib/decrypt/utils/unpacker.util.ts:69](https://github.com/davinidae/umazing-musumengine/blob/d3e15f25b7d8fa68ec86ebb62ab4f46188974cb8/src/lib/decrypt/utils/unpacker.util.ts#L69)

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
[lib/decrypt/utils/unpacker.util.ts:84](https://github.com/davinidae/umazing-musumengine/blob/d3e15f25b7d8fa68ec86ebb62ab4f46188974cb8/src/lib/decrypt/utils/unpacker.util.ts#L84)

###### Parameters

###### values

`unknown`[]

###### Returns

`Record`\<`string`, `unknown`\>

##### execute()

> **execute**(`buf`): `unknown`

Defined in:
[lib/decrypt/utils/unpacker.util.ts:112](https://github.com/davinidae/umazing-musumengine/blob/d3e15f25b7d8fa68ec86ebb62ab4f46188974cb8/src/lib/decrypt/utils/unpacker.util.ts#L112)

###### Parameters

###### buf

`Buffer`

###### Returns

`unknown`

###### Overrides

[`UnpackStrategy`](../../utils/decrypt.util.md#unpackstrategy).[`execute`](../../utils/decrypt.util.md#execute)

##### findFirstStringMarkerIndex()

> `private` **findFirstStringMarkerIndex**(`buf`): `number`

Defined in:
[lib/decrypt/utils/unpacker.util.ts:76](https://github.com/davinidae/umazing-musumengine/blob/d3e15f25b7d8fa68ec86ebb62ab4f46188974cb8/src/lib/decrypt/utils/unpacker.util.ts#L76)

###### Parameters

###### buf

`Buffer`

###### Returns

`number`

##### isEmptyObject()

> `private` **isEmptyObject**(`value`): `boolean`

Defined in:
[lib/decrypt/utils/unpacker.util.ts:99](https://github.com/davinidae/umazing-musumengine/blob/d3e15f25b7d8fa68ec86ebb62ab4f46188974cb8/src/lib/decrypt/utils/unpacker.util.ts#L99)

###### Parameters

###### value

`unknown`

###### Returns

`boolean`

##### isStringMarker()

> `private` **isStringMarker**(`marker`): `boolean`

Defined in:
[lib/decrypt/utils/unpacker.util.ts:70](https://github.com/davinidae/umazing-musumengine/blob/d3e15f25b7d8fa68ec86ebb62ab4f46188974cb8/src/lib/decrypt/utils/unpacker.util.ts#L70)

###### Parameters

###### marker

`number`

###### Returns

`boolean`

##### normalizeResponseShape()

> **normalizeResponseShape**(`v`): `unknown`

Defined in:
[lib/utils/decrypt.util.ts:12](https://github.com/davinidae/umazing-musumengine/blob/d3e15f25b7d8fa68ec86ebb62ab4f46188974cb8/src/lib/utils/decrypt.util.ts#L12)

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
[lib/decrypt/utils/unpacker.util.ts:5](https://github.com/davinidae/umazing-musumengine/blob/d3e15f25b7d8fa68ec86ebb62ab4f46188974cb8/src/lib/decrypt/utils/unpacker.util.ts#L5)

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
[lib/decrypt/utils/unpacker.util.ts:6](https://github.com/davinidae/umazing-musumengine/blob/d3e15f25b7d8fa68ec86ebb62ab4f46188974cb8/src/lib/decrypt/utils/unpacker.util.ts#L6)

###### Parameters

###### data

`Buffer`

###### Returns

`unknown`

###### Overrides

[`UnpackStrategy`](../../utils/decrypt.util.md#unpackstrategy).[`execute`](../../utils/decrypt.util.md#execute)

##### normalizeResponseShape()

> **normalizeResponseShape**(`v`): `unknown`

Defined in:
[lib/utils/decrypt.util.ts:12](https://github.com/davinidae/umazing-musumengine/blob/d3e15f25b7d8fa68ec86ebb62ab4f46188974cb8/src/lib/utils/decrypt.util.ts#L12)

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
[lib/decrypt/utils/unpacker.util.ts:32](https://github.com/davinidae/umazing-musumengine/blob/d3e15f25b7d8fa68ec86ebb62ab4f46188974cb8/src/lib/decrypt/utils/unpacker.util.ts#L32)

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
[lib/decrypt/utils/unpacker.util.ts:50](https://github.com/davinidae/umazing-musumengine/blob/d3e15f25b7d8fa68ec86ebb62ab4f46188974cb8/src/lib/decrypt/utils/unpacker.util.ts#L50)

###### Parameters

###### buf

`Buffer`

###### Returns

`unknown`

###### Overrides

[`UnpackStrategy`](../../utils/decrypt.util.md#unpackstrategy).[`execute`](../../utils/decrypt.util.md#execute)

##### isPlausibleMapHeaderMarker()

> `private` **isPlausibleMapHeaderMarker**(`marker`): `boolean`

Defined in:
[lib/decrypt/utils/unpacker.util.ts:33](https://github.com/davinidae/umazing-musumengine/blob/d3e15f25b7d8fa68ec86ebb62ab4f46188974cb8/src/lib/decrypt/utils/unpacker.util.ts#L33)

###### Parameters

###### marker

`number` | `undefined`

###### Returns

`boolean`

##### looksLikeUsefulObject()

> `private` **looksLikeUsefulObject**(`value`, `likelyKeys`): `boolean`

Defined in:
[lib/decrypt/utils/unpacker.util.ts:40](https://github.com/davinidae/umazing-musumengine/blob/d3e15f25b7d8fa68ec86ebb62ab4f46188974cb8/src/lib/decrypt/utils/unpacker.util.ts#L40)

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
[lib/utils/decrypt.util.ts:12](https://github.com/davinidae/umazing-musumengine/blob/d3e15f25b7d8fa68ec86ebb62ab4f46188974cb8/src/lib/utils/decrypt.util.ts#L12)

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
[lib/decrypt/utils/unpacker.util.ts:193](https://github.com/davinidae/umazing-musumengine/blob/d3e15f25b7d8fa68ec86ebb62ab4f46188974cb8/src/lib/decrypt/utils/unpacker.util.ts#L193)

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
[lib/decrypt/utils/unpacker.util.ts:194](https://github.com/davinidae/umazing-musumengine/blob/d3e15f25b7d8fa68ec86ebb62ab4f46188974cb8/src/lib/decrypt/utils/unpacker.util.ts#L194)

###### Parameters

###### buf

`Buffer`

###### Returns

`unknown`

###### Overrides

[`UnpackStrategy`](../../utils/decrypt.util.md#unpackstrategy).[`execute`](../../utils/decrypt.util.md#execute)

##### normalizeResponseShape()

> **normalizeResponseShape**(`v`): `unknown`

Defined in:
[lib/utils/decrypt.util.ts:12](https://github.com/davinidae/umazing-musumengine/blob/d3e15f25b7d8fa68ec86ebb62ab4f46188974cb8/src/lib/utils/decrypt.util.ts#L12)

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
[lib/decrypt/utils/unpacker.util.ts:22](https://github.com/davinidae/umazing-musumengine/blob/d3e15f25b7d8fa68ec86ebb62ab4f46188974cb8/src/lib/decrypt/utils/unpacker.util.ts#L22)

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
[lib/decrypt/utils/unpacker.util.ts:23](https://github.com/davinidae/umazing-musumengine/blob/d3e15f25b7d8fa68ec86ebb62ab4f46188974cb8/src/lib/decrypt/utils/unpacker.util.ts#L23)

###### Parameters

###### buf

`Buffer`

###### Returns

`unknown`

###### Overrides

[`UnpackStrategy`](../../utils/decrypt.util.md#unpackstrategy).[`execute`](../../utils/decrypt.util.md#execute)

##### normalizeResponseShape()

> **normalizeResponseShape**(`v`): `unknown`

Defined in:
[lib/utils/decrypt.util.ts:12](https://github.com/davinidae/umazing-musumengine/blob/d3e15f25b7d8fa68ec86ebb62ab4f46188974cb8/src/lib/utils/decrypt.util.ts#L12)

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
[lib/decrypt/utils/unpacker.util.ts:250](https://github.com/davinidae/umazing-musumengine/blob/d3e15f25b7d8fa68ec86ebb62ab4f46188974cb8/src/lib/decrypt/utils/unpacker.util.ts#L250)

#### Constructors

##### Constructor

> **new Unpacker**(`strategies`): [`Unpacker`](#unpacker)

Defined in:
[lib/decrypt/utils/unpacker.util.ts:251](https://github.com/davinidae/umazing-musumengine/blob/d3e15f25b7d8fa68ec86ebb62ab4f46188974cb8/src/lib/decrypt/utils/unpacker.util.ts#L251)

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
[lib/decrypt/utils/unpacker.util.ts:252](https://github.com/davinidae/umazing-musumengine/blob/d3e15f25b7d8fa68ec86ebb62ab4f46188974cb8/src/lib/decrypt/utils/unpacker.util.ts#L252)

#### Methods

##### execute()

> **execute**(`buf`): `unknown`

Defined in:
[lib/decrypt/utils/unpacker.util.ts:265](https://github.com/davinidae/umazing-musumengine/blob/d3e15f25b7d8fa68ec86ebb62ab4f46188974cb8/src/lib/decrypt/utils/unpacker.util.ts#L265)

###### Parameters

###### buf

`Buffer`

###### Returns

`unknown`
