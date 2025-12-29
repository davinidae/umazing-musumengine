# api/endpoints

## Variables

### routes

> `const` **routes**: `object`[]

Defined in:
[src/api/endpoints/index.ts:11](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/api/endpoints/index.ts#L11)

routes.

#### Type Declaration

##### handler()

> **handler**: (`event`) => `Promise`\<[`ApiResponse`](utils/api.util.md#apiresponse)\>

###### Parameters

###### event

[`HttpEvent`](models/api.model.md#httpevent)\<`unknown`\>

###### Returns

`Promise`\<[`ApiResponse`](utils/api.util.md#apiresponse)\>

##### method

> **method**: `string`

##### path

> **path**: `string`

#### Remarks

Type:
`{ method: string; path: string; handler: (event: HttpEvent<unknown>) => Promise<ApiResponse>; }[]`.

#### Default Value

`[ { method: 'GET', path: '/', handler: rootHandler, }, { method: 'GET', path: '/health', handler: healthHandler, }, { method: 'POST', path:…`
