# lib/decrypt/utils/request-context.util

## Type Aliases

### Blob1Json

> **Blob1Json** =
> [`EncodeRequestInput`](../../models/runtime.model.md#encoderequestinput)\[`"blob1"`\] & `object`

Defined in:
[lib/decrypt/utils/request-context.util.ts:16](https://github.com/davinidae/umazing-musumengine/blob/df5a110e6c3a9bccb597476078ba8ed2b6d43fdf/src/lib/decrypt/utils/request-context.util.ts#L16)

#### Type Declaration

##### encryption_key

> **encryption_key**: `string`

##### prefix_len

> **prefix_len**: `number`

---

### RequestContext

> **RequestContext** = `object`

Defined in:
[lib/decrypt/utils/request-context.util.ts:9](https://github.com/davinidae/umazing-musumengine/blob/df5a110e6c3a9bccb597476078ba8ed2b6d43fdf/src/lib/decrypt/utils/request-context.util.ts#L9)

#### Properties

##### header

> **header**: [`Blob1Header`](../../utils/protocol.util.md#blob1header)

Defined in:
[lib/decrypt/utils/request-context.util.ts:11](https://github.com/davinidae/umazing-musumengine/blob/df5a110e6c3a9bccb597476078ba8ed2b6d43fdf/src/lib/decrypt/utils/request-context.util.ts#L11)

##### iv

> **iv**: `Buffer`

Defined in:
[lib/decrypt/utils/request-context.util.ts:13](https://github.com/davinidae/umazing-musumengine/blob/df5a110e6c3a9bccb597476078ba8ed2b6d43fdf/src/lib/decrypt/utils/request-context.util.ts#L13)

##### request

> **request**: `ReturnType`\<_typeof_
> [`parseParsedRequest`](../../utils/protocol.util.md#parseparsedrequest)\>

Defined in:
[lib/decrypt/utils/request-context.util.ts:10](https://github.com/davinidae/umazing-musumengine/blob/df5a110e6c3a9bccb597476078ba8ed2b6d43fdf/src/lib/decrypt/utils/request-context.util.ts#L10)

##### udidRaw

> **udidRaw**: `string`

Defined in:
[lib/decrypt/utils/request-context.util.ts:12](https://github.com/davinidae/umazing-musumengine/blob/df5a110e6c3a9bccb597476078ba8ed2b6d43fdf/src/lib/decrypt/utils/request-context.util.ts#L12)

## Functions

### blob1ToJson()

> **blob1ToJson**(`header`, `udidRaw`, `keyUsed`): [`Blob1Json`](#blob1json)

Defined in:
[lib/decrypt/utils/request-context.util.ts:38](https://github.com/davinidae/umazing-musumengine/blob/df5a110e6c3a9bccb597476078ba8ed2b6d43fdf/src/lib/decrypt/utils/request-context.util.ts#L38)

#### Parameters

##### header

[`Blob1Header`](../../utils/protocol.util.md#blob1header)

##### udidRaw

`string`

##### keyUsed

`Buffer`

#### Returns

[`Blob1Json`](#blob1json)

---

### decodeRequestContextFromBase64()

> **decodeRequestContextFromBase64**(`requestB64`): [`RequestContext`](#requestcontext)

Defined in:
[lib/decrypt/utils/request-context.util.ts:21](https://github.com/davinidae/umazing-musumengine/blob/df5a110e6c3a9bccb597476078ba8ed2b6d43fdf/src/lib/decrypt/utils/request-context.util.ts#L21)

#### Parameters

##### requestB64

`string`

#### Returns

[`RequestContext`](#requestcontext)
