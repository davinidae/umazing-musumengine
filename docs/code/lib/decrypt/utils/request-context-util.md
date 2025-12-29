# lib/decrypt/utils/request-context.util

## Type Aliases

### RequestContext

> **RequestContext** = `object`

Defined in:
[lib/decrypt/utils/request-context.util.ts:6](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/lib/decrypt/utils/request-context.util.ts#L6)

#### Properties

##### header

> **header**: `Blob1Header`

Defined in:
[lib/decrypt/utils/request-context.util.ts:8](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/lib/decrypt/utils/request-context.util.ts#L8)

##### iv

> **iv**: `Buffer`

Defined in:
[lib/decrypt/utils/request-context.util.ts:10](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/lib/decrypt/utils/request-context.util.ts#L10)

##### request

> **request**: `ReturnType`\<_typeof_
> [`parseParsedRequest`](../../utils/protocol.util.md#parseparsedrequest)\>

Defined in:
[lib/decrypt/utils/request-context.util.ts:7](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/lib/decrypt/utils/request-context.util.ts#L7)

##### udidCanonical

> **udidCanonical**: `string`

Defined in:
[lib/decrypt/utils/request-context.util.ts:9](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/lib/decrypt/utils/request-context.util.ts#L9)

## Functions

### blob1ToJson()

> **blob1ToJson**(`header`, `udidCanonical`, `keyUsed`): `Blob1Json`

Defined in:
[lib/decrypt/utils/request-context.util.ts:35](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/lib/decrypt/utils/request-context.util.ts#L35)

#### Parameters

##### header

`Blob1Header`

##### udidCanonical

`string`

##### keyUsed

`Buffer`

#### Returns

`Blob1Json`

---

### decodeRequestContextFromBase64()

> **decodeRequestContextFromBase64**(`requestB64`): [`RequestContext`](#requestcontext)

Defined in:
[lib/decrypt/utils/request-context.util.ts:18](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/lib/decrypt/utils/request-context.util.ts#L18)

#### Parameters

##### requestB64

`string`

#### Returns

[`RequestContext`](#requestcontext)
