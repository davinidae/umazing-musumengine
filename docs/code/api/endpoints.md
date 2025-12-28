# api/endpoints

## Type Aliases

### ApiRoute

> **ApiRoute** = `object`

Defined in:
[api/endpoints/index.ts:6](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/endpoints/index.ts#L6)

#### Properties

##### handler()

> **handler**: (`event`) => `Promise`\<[`ApiResponse`](utils/api.util.md#apiresponse)\>

Defined in:
[api/endpoints/index.ts:9](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/endpoints/index.ts#L9)

###### Parameters

###### event

[`HttpEvent`](models/api.model.md#httpevent)\<`any`\>

###### Returns

`Promise`\<[`ApiResponse`](utils/api.util.md#apiresponse)\>

##### method

> **method**: `string`

Defined in:
[api/endpoints/index.ts:7](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/endpoints/index.ts#L7)

##### path

> **path**: `string`

Defined in:
[api/endpoints/index.ts:8](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/endpoints/index.ts#L8)

## Variables

### routes

> `const` **routes**: [`ApiRoute`](#apiroute)[]

Defined in:
[api/endpoints/index.ts:12](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/endpoints/index.ts#L12)
