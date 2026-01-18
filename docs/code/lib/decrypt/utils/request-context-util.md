# lib/decrypt/utils/request-context.util

## Type Aliases

### RequestContext

> **RequestContext** = `object`

Defined in:
[src/lib/decrypt/utils/request-context.util.ts:6](https://github.com/davinidae/umazing-musumengine/blob/2b696d82fbabdc92d50663114c51adb9edb4509d/src/lib/decrypt/utils/request-context.util.ts#L6)

#### Properties

##### header

> **header**: `Blob1Header`

Defined in:
[src/lib/decrypt/utils/request-context.util.ts:8](https://github.com/davinidae/umazing-musumengine/blob/2b696d82fbabdc92d50663114c51adb9edb4509d/src/lib/decrypt/utils/request-context.util.ts#L8)

##### iv

> **iv**: `Buffer`

Defined in:
[src/lib/decrypt/utils/request-context.util.ts:10](https://github.com/davinidae/umazing-musumengine/blob/2b696d82fbabdc92d50663114c51adb9edb4509d/src/lib/decrypt/utils/request-context.util.ts#L10)

##### request

> **request**: `ReturnType`\<_typeof_
> [`parseParsedRequest`](../../utils/protocol.util.md#parseparsedrequest)\>

Defined in:
[src/lib/decrypt/utils/request-context.util.ts:7](https://github.com/davinidae/umazing-musumengine/blob/2b696d82fbabdc92d50663114c51adb9edb4509d/src/lib/decrypt/utils/request-context.util.ts#L7)

##### udidCanonical

> **udidCanonical**: `string`

Defined in:
[src/lib/decrypt/utils/request-context.util.ts:9](https://github.com/davinidae/umazing-musumengine/blob/2b696d82fbabdc92d50663114c51adb9edb4509d/src/lib/decrypt/utils/request-context.util.ts#L9)

## Functions

### blob1ToJson()

> **blob1ToJson**(`header`, `udidCanonical`, `keyUsed`): `Blob1Json`

Defined in:
[src/lib/decrypt/utils/request-context.util.ts:73](https://github.com/davinidae/umazing-musumengine/blob/2b696d82fbabdc92d50663114c51adb9edb4509d/src/lib/decrypt/utils/request-context.util.ts#L73)

blob1ToJson.

#### Parameters

##### header

`Blob1Header`

Type: `Blob1Header`.

##### udidCanonical

`string`

Type: `string`.

##### keyUsed

`Buffer`

Type: `Buffer<ArrayBufferLike>`.

#### Returns

`Blob1Json`

Type: `Blob1Json`.

---

### decodeRequestContextFromBase64()

> **decodeRequestContextFromBase64**(`requestB64`): [`RequestContext`](#requestcontext)

Defined in:
[src/lib/decrypt/utils/request-context.util.ts:24](https://github.com/davinidae/umazing-musumengine/blob/2b696d82fbabdc92d50663114c51adb9edb4509d/src/lib/decrypt/utils/request-context.util.ts#L24)

decodeRequestContextFromBase64.

#### Parameters

##### requestB64

`string`

Type: `string`.

#### Returns

[`RequestContext`](#requestcontext)

Type: `RequestContext`.
