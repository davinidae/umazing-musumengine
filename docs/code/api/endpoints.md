# api/endpoints

## Type Aliases

### ApiRoute

> **ApiRoute** = `object`

Defined in:
[api/endpoints/index.ts:6](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/endpoints/index.ts#L6)

#### Properties

##### handler()

> **handler**: (`event`) => `Promise`\<[`ApiResponse`](utils/api.util.md#apiresponse)\>

Defined in:
[api/endpoints/index.ts:9](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/endpoints/index.ts#L9)

###### Parameters

###### event

[`HttpEvent`](models/api.model.md#httpevent)\<`any`\>

###### Returns

`Promise`\<[`ApiResponse`](utils/api.util.md#apiresponse)\>

##### method

> **method**: `string`

Defined in:
[api/endpoints/index.ts:7](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/endpoints/index.ts#L7)

##### path

> **path**: `string`

Defined in:
[api/endpoints/index.ts:8](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/endpoints/index.ts#L8)

## Variables

### routes

> `const` **routes**: [`ApiRoute`](#apiroute)[]

Defined in:
[api/endpoints/index.ts:12](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/endpoints/index.ts#L12)
