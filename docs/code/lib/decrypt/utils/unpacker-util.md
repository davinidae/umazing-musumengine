# lib/decrypt/utils/unpacker.util

## Classes

### AnchorDataHeadersStrategy

Defined in:
[src/lib/decrypt/utils/unpacker.util.ts:333](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/decrypt/utils/unpacker.util.ts#L333)

AnchorDataHeadersStrategy.

#### Remarks

Extends/implements: `extends UnpackStrategy`.

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
[src/lib/decrypt/utils/unpacker.util.ts:339](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/decrypt/utils/unpacker.util.ts#L339)

buildKeyEncodings.

###### Parameters

###### key

`string`

Type: `string`.

###### Returns

`Buffer`\<`ArrayBufferLike`\>[]

Type: `Buffer<ArrayBufferLike>[]`.

##### buildObjectFromKvSequence()

> `private` **buildObjectFromKvSequence**(`seq`): `Record`\<`string`, `unknown`\>

Defined in:
[src/lib/decrypt/utils/unpacker.util.ts:402](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/decrypt/utils/unpacker.util.ts#L402)

buildObjectFromKvSequence.

###### Parameters

###### seq

`unknown`[]

Type: `unknown[]`.

###### Returns

`Record`\<`string`, `unknown`\>

Type: `Record<string, unknown>`.

##### execute()

> **execute**(`buf`): `unknown`

Defined in:
[src/lib/decrypt/utils/unpacker.util.ts:450](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/decrypt/utils/unpacker.util.ts#L450)

execute.

###### Parameters

###### buf

`Buffer`

Type: `Buffer<ArrayBufferLike>`.

###### Returns

`unknown`

Type: `unknown`.

###### Overrides

[`UnpackStrategy`](../../utils/decrypt.util.md#unpackstrategy).[`execute`](../../utils/decrypt.util.md#execute)

##### findFirstPatternIndex()

> `private` **findFirstPatternIndex**(`buf`, `patterns`): `number`

Defined in:
[src/lib/decrypt/utils/unpacker.util.ts:378](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/decrypt/utils/unpacker.util.ts#L378)

findFirstPatternIndex.

###### Parameters

###### buf

`Buffer`

Type: `Buffer<ArrayBufferLike>`.

###### patterns

`Buffer`\<`ArrayBufferLike`\>[]

Type: `Buffer<ArrayBufferLike>[]`.

###### Returns

`number`

Type: `number`.

##### looksAnchored()

> `private` **looksAnchored**(`out`): `boolean`

Defined in:
[src/lib/decrypt/utils/unpacker.util.ts:428](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/decrypt/utils/unpacker.util.ts#L428)

looksAnchored.

###### Parameters

###### out

`Record`\<`string`, `unknown`\>

Type: `Record<string, unknown>`.

###### Returns

`boolean`

Type: `boolean`.

##### normalizeResponseShape()

> **normalizeResponseShape**(`v`): `unknown`

Defined in:
[src/lib/utils/decrypt.util.ts:47](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/utils/decrypt.util.ts#L47)

normalizeResponseShape.

###### Parameters

###### v

`unknown`

Type: `unknown`.

###### Returns

`unknown`

Type: `unknown`.

###### Inherited from

[`UnpackStrategy`](../../utils/decrypt.util.md#unpackstrategy).[`normalizeResponseShape`](../../utils/decrypt.util.md#normalizeresponseshape)

---

### HeuristicStreamToObjectStrategy

Defined in:
[src/lib/decrypt/utils/unpacker.util.ts:546](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/decrypt/utils/unpacker.util.ts#L546)

HeuristicStreamToObjectStrategy.

#### Remarks

Extends/implements: `extends UnpackStrategy`.

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
[src/lib/decrypt/utils/unpacker.util.ts:608](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/decrypt/utils/unpacker.util.ts#L608)

execute.

###### Parameters

###### buf

`Buffer`

Type: `Buffer<ArrayBufferLike>`.

###### Returns

`unknown`

Type: `unknown`.

###### Overrides

[`UnpackStrategy`](../../utils/decrypt.util.md#unpackstrategy).[`execute`](../../utils/decrypt.util.md#execute)

##### foldFromFirstStringRun()

> `private` **foldFromFirstStringRun**(`seq`, `maxStarts`, `minPairs`): `Record`\<`string`,
> `unknown`\> \| `undefined`

Defined in:
[src/lib/decrypt/utils/unpacker.util.ts:554](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/decrypt/utils/unpacker.util.ts#L554)

foldFromFirstStringRun.

###### Parameters

###### seq

`unknown`[]

Type: `unknown[]`.

###### maxStarts

`number`

Type: `number`.

###### minPairs

`number`

Type: `number`.

###### Returns

`Record`\<`string`, `unknown`\> \| `undefined`

Type: `Record<string, unknown> | undefined`.

##### normalizeResponseShape()

> **normalizeResponseShape**(`v`): `unknown`

Defined in:
[src/lib/utils/decrypt.util.ts:47](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/utils/decrypt.util.ts#L47)

normalizeResponseShape.

###### Parameters

###### v

`unknown`

Type: `unknown`.

###### Returns

`unknown`

Type: `unknown`.

###### Inherited from

[`UnpackStrategy`](../../utils/decrypt.util.md#unpackstrategy).[`normalizeResponseShape`](../../utils/decrypt.util.md#normalizeresponseshape)

---

### KVStreamStrategy

Defined in:
[src/lib/decrypt/utils/unpacker.util.ts:201](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/decrypt/utils/unpacker.util.ts#L201)

KVStreamStrategy.

#### Remarks

Extends/implements: `extends UnpackStrategy`.

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
[src/lib/decrypt/utils/unpacker.util.ts:237](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/decrypt/utils/unpacker.util.ts#L237)

decodeStreamToObject.

###### Parameters

###### values

`unknown`[]

Type: `unknown[]`.

###### Returns

`Record`\<`string`, `unknown`\>

Type: `Record<string, unknown>`.

##### execute()

> **execute**(`buf`): `unknown`

Defined in:
[src/lib/decrypt/utils/unpacker.util.ts:294](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/decrypt/utils/unpacker.util.ts#L294)

execute.

###### Parameters

###### buf

`Buffer`

Type: `Buffer<ArrayBufferLike>`.

###### Returns

`unknown`

Type: `unknown`.

###### Overrides

[`UnpackStrategy`](../../utils/decrypt.util.md#unpackstrategy).[`execute`](../../utils/decrypt.util.md#execute)

##### findFirstStringMarkerIndex()

> `private` **findFirstStringMarkerIndex**(`buf`): `number`

Defined in:
[src/lib/decrypt/utils/unpacker.util.ts:219](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/decrypt/utils/unpacker.util.ts#L219)

findFirstStringMarkerIndex.

###### Parameters

###### buf

`Buffer`

Type: `Buffer<ArrayBufferLike>`.

###### Returns

`number`

Type: `number`.

##### isEmptyObject()

> `private` **isEmptyObject**(`value`): `boolean`

Defined in:
[src/lib/decrypt/utils/unpacker.util.ts:272](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/decrypt/utils/unpacker.util.ts#L272)

isEmptyObject.

###### Parameters

###### value

`unknown`

Type: `unknown`.

###### Returns

`boolean`

Type: `boolean`.

##### isStringMarker()

> `private` **isStringMarker**(`marker`): `boolean`

Defined in:
[src/lib/decrypt/utils/unpacker.util.ts:207](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/decrypt/utils/unpacker.util.ts#L207)

isStringMarker.

###### Parameters

###### marker

`number`

Type: `number`.

###### Returns

`boolean`

Type: `boolean`.

##### normalizeResponseShape()

> **normalizeResponseShape**(`v`): `unknown`

Defined in:
[src/lib/utils/decrypt.util.ts:47](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/utils/decrypt.util.ts#L47)

normalizeResponseShape.

###### Parameters

###### v

`unknown`

Type: `unknown`.

###### Returns

`unknown`

Type: `unknown`.

###### Inherited from

[`UnpackStrategy`](../../utils/decrypt.util.md#unpackstrategy).[`normalizeResponseShape`](../../utils/decrypt.util.md#normalizeresponseshape)

---

### LengthPrefixedStrategy

Defined in:
[src/lib/decrypt/utils/unpacker.util.ts:20](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/decrypt/utils/unpacker.util.ts#L20)

LengthPrefixedStrategy.

#### Remarks

Extends/implements: `extends UnpackStrategy`.

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
[src/lib/decrypt/utils/unpacker.util.ts:31](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/decrypt/utils/unpacker.util.ts#L31)

execute.

###### Parameters

###### data

`Buffer`

Type: `Buffer<ArrayBufferLike>`.

###### Returns

`unknown`

Type: `unknown`.

###### Overrides

[`UnpackStrategy`](../../utils/decrypt.util.md#unpackstrategy).[`execute`](../../utils/decrypt.util.md#execute)

##### normalizeResponseShape()

> **normalizeResponseShape**(`v`): `unknown`

Defined in:
[src/lib/utils/decrypt.util.ts:47](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/utils/decrypt.util.ts#L47)

normalizeResponseShape.

###### Parameters

###### v

`unknown`

Type: `unknown`.

###### Returns

`unknown`

Type: `unknown`.

###### Inherited from

[`UnpackStrategy`](../../utils/decrypt.util.md#unpackstrategy).[`normalizeResponseShape`](../../utils/decrypt.util.md#normalizeresponseshape)

---

### MapHeaderScanStrategy

Defined in:
[src/lib/decrypt/utils/unpacker.util.ts:97](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/decrypt/utils/unpacker.util.ts#L97)

MapHeaderScanStrategy.

#### Remarks

Extends/implements: `extends UnpackStrategy`.

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
[src/lib/decrypt/utils/unpacker.util.ts:150](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/decrypt/utils/unpacker.util.ts#L150)

execute.

###### Parameters

###### buf

`Buffer`

Type: `Buffer<ArrayBufferLike>`.

###### Returns

`unknown`

Type: `unknown`.

###### Overrides

[`UnpackStrategy`](../../utils/decrypt.util.md#unpackstrategy).[`execute`](../../utils/decrypt.util.md#execute)

##### isPlausibleMapHeaderMarker()

> `private` **isPlausibleMapHeaderMarker**(`marker`): `boolean`

Defined in:
[src/lib/decrypt/utils/unpacker.util.ts:103](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/decrypt/utils/unpacker.util.ts#L103)

isPlausibleMapHeaderMarker.

###### Parameters

###### marker

Type: `number | undefined`.

`number` | `undefined`

###### Returns

`boolean`

Type: `boolean`.

##### looksLikeUsefulObject()

> `private` **looksLikeUsefulObject**(`value`, `likelyKeys`): `boolean`

Defined in:
[src/lib/decrypt/utils/unpacker.util.ts:116](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/decrypt/utils/unpacker.util.ts#L116)

looksLikeUsefulObject.

###### Parameters

###### value

`unknown`

Type: `unknown`.

###### likelyKeys

`string`[]

Type: `string[]`.

###### Returns

`boolean`

Type: `boolean`.

##### normalizeResponseShape()

> **normalizeResponseShape**(`v`): `unknown`

Defined in:
[src/lib/utils/decrypt.util.ts:47](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/utils/decrypt.util.ts#L47)

normalizeResponseShape.

###### Parameters

###### v

`unknown`

Type: `unknown`.

###### Returns

`unknown`

Type: `unknown`.

###### Inherited from

[`UnpackStrategy`](../../utils/decrypt.util.md#unpackstrategy).[`normalizeResponseShape`](../../utils/decrypt.util.md#normalizeresponseshape)

---

### MultiArrayStrategy

Defined in:
[src/lib/decrypt/utils/unpacker.util.ts:494](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/decrypt/utils/unpacker.util.ts#L494)

MultiArrayStrategy.

#### Remarks

Extends/implements: `extends UnpackStrategy`.

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
[src/lib/decrypt/utils/unpacker.util.ts:504](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/decrypt/utils/unpacker.util.ts#L504)

execute.

###### Parameters

###### buf

`Buffer`

Type: `Buffer<ArrayBufferLike>`.

###### Returns

`unknown`

Type: `unknown`.

###### Overrides

[`UnpackStrategy`](../../utils/decrypt.util.md#unpackstrategy).[`execute`](../../utils/decrypt.util.md#execute)

##### normalizeResponseShape()

> **normalizeResponseShape**(`v`): `unknown`

Defined in:
[src/lib/utils/decrypt.util.ts:47](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/utils/decrypt.util.ts#L47)

normalizeResponseShape.

###### Parameters

###### v

`unknown`

Type: `unknown`.

###### Returns

`unknown`

Type: `unknown`.

###### Inherited from

[`UnpackStrategy`](../../utils/decrypt.util.md#unpackstrategy).[`normalizeResponseShape`](../../utils/decrypt.util.md#normalizeresponseshape)

---

### RawMsgpackStrategy

Defined in:
[src/lib/decrypt/utils/unpacker.util.ts:70](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/decrypt/utils/unpacker.util.ts#L70)

RawMsgpackStrategy.

#### Remarks

Extends/implements: `extends UnpackStrategy`.

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
[src/lib/decrypt/utils/unpacker.util.ts:80](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/decrypt/utils/unpacker.util.ts#L80)

execute.

###### Parameters

###### buf

`Buffer`

Type: `Buffer<ArrayBufferLike>`.

###### Returns

`unknown`

Type: `unknown`.

###### Overrides

[`UnpackStrategy`](../../utils/decrypt.util.md#unpackstrategy).[`execute`](../../utils/decrypt.util.md#execute)

##### normalizeResponseShape()

> **normalizeResponseShape**(`v`): `unknown`

Defined in:
[src/lib/utils/decrypt.util.ts:47](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/utils/decrypt.util.ts#L47)

normalizeResponseShape.

###### Parameters

###### v

`unknown`

Type: `unknown`.

###### Returns

`unknown`

Type: `unknown`.

###### Inherited from

[`UnpackStrategy`](../../utils/decrypt.util.md#unpackstrategy).[`normalizeResponseShape`](../../utils/decrypt.util.md#normalizeresponseshape)

---

### Unpacker

Defined in:
[src/lib/decrypt/utils/unpacker.util.ts:643](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/decrypt/utils/unpacker.util.ts#L643)

Unpacker.

#### Constructors

##### Constructor

> **new Unpacker**(`strategies`): [`Unpacker`](#unpacker)

Defined in:
[src/lib/decrypt/utils/unpacker.util.ts:659](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/decrypt/utils/unpacker.util.ts#L659)

constructor.

###### Parameters

###### strategies

[`UnpackStrategy`](../../utils/decrypt.util.md#unpackstrategy)[] = `...`

Type: `UnpackStrategy[]`.

###### Returns

[`Unpacker`](#unpacker)

Type: `Unpacker`.

#### Properties

##### strategies

> `private` `readonly` **strategies**:
> [`UnpackStrategy`](../../utils/decrypt.util.md#unpackstrategy)[]

Defined in:
[src/lib/decrypt/utils/unpacker.util.ts:660](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/decrypt/utils/unpacker.util.ts#L660)

Type: `UnpackStrategy[]`.

#### Methods

##### execute()

> **execute**(`buf`): `unknown`

Defined in:
[src/lib/decrypt/utils/unpacker.util.ts:678](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/decrypt/utils/unpacker.util.ts#L678)

execute.

###### Parameters

###### buf

`Buffer`

Type: `Buffer<ArrayBufferLike>`.

###### Returns

`unknown`

Type: `unknown`.
