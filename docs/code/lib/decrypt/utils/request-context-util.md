# lib/decrypt/utils/request-context.util

## Type Aliases

### Blob1Json

> **Blob1Json** =
> [`EncodeRequestInput`](../../models/runtime.model.md#encoderequestinput)\[`"blob1"`\] & `object`

Defined in:
[src/lib/decrypt/utils/request-context.util.ts:13](https://github.com/davinidae/umazing-musumengine/blob/2fd0a7ae5bcd71fb665112d795849ae0ada2b9de/src/lib/decrypt/utils/request-context.util.ts#L13)

#### Type Declaration

##### encryption_key

> **encryption_key**: `string`

##### prefix_len

> **prefix_len**: `number`

---

### RequestContext

> **RequestContext** = `object`

Defined in:
[src/lib/decrypt/utils/request-context.util.ts:6](https://github.com/davinidae/umazing-musumengine/blob/2fd0a7ae5bcd71fb665112d795849ae0ada2b9de/src/lib/decrypt/utils/request-context.util.ts#L6)

#### Properties

##### header

> **header**: `Blob1Header`

Defined in:
[src/lib/decrypt/utils/request-context.util.ts:8](https://github.com/davinidae/umazing-musumengine/blob/2fd0a7ae5bcd71fb665112d795849ae0ada2b9de/src/lib/decrypt/utils/request-context.util.ts#L8)

##### iv

> **iv**: `Buffer`

Defined in:
[src/lib/decrypt/utils/request-context.util.ts:10](https://github.com/davinidae/umazing-musumengine/blob/2fd0a7ae5bcd71fb665112d795849ae0ada2b9de/src/lib/decrypt/utils/request-context.util.ts#L10)

##### request

> **request**: `ReturnType`\<_typeof_
> [`parseParsedRequest`](../../utils/protocol.util.md#parseparsedrequest)\>

Defined in:
[src/lib/decrypt/utils/request-context.util.ts:7](https://github.com/davinidae/umazing-musumengine/blob/2fd0a7ae5bcd71fb665112d795849ae0ada2b9de/src/lib/decrypt/utils/request-context.util.ts#L7)

##### udidRaw

> **udidRaw**: `string`

Defined in:
[src/lib/decrypt/utils/request-context.util.ts:9](https://github.com/davinidae/umazing-musumengine/blob/2fd0a7ae5bcd71fb665112d795849ae0ada2b9de/src/lib/decrypt/utils/request-context.util.ts#L9)

## Functions

### blob1ToJson()

> **blob1ToJson**(`header`, `udidRaw`, `keyUsed`): [`Blob1Json`](#blob1json)

Defined in:
[src/lib/decrypt/utils/request-context.util.ts:72](https://github.com/davinidae/umazing-musumengine/blob/2fd0a7ae5bcd71fb665112d795849ae0ada2b9de/src/lib/decrypt/utils/request-context.util.ts#L72)

blob1ToJson.

#### Parameters

##### header

`Blob1Header`

Type: `Blob1Header`.

##### udidRaw

`string`

Type: `string`.

##### keyUsed

`Buffer`

Type: `Buffer<ArrayBufferLike>`.

#### Returns

[`Blob1Json`](#blob1json)

Type: `Blob1Json`.

---

### decodeRequestContextFromBase64()

> **decodeRequestContextFromBase64**(`requestB64`): [`RequestContext`](#requestcontext)

Defined in:
[src/lib/decrypt/utils/request-context.util.ts:23](https://github.com/davinidae/umazing-musumengine/blob/2fd0a7ae5bcd71fb665112d795849ae0ada2b9de/src/lib/decrypt/utils/request-context.util.ts#L23)

decodeRequestContextFromBase64.

#### Parameters

##### requestB64

`string`

Type: `string`.

#### Returns

[`RequestContext`](#requestcontext)

Type: `RequestContext`.
