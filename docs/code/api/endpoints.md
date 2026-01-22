# api/endpoints

## Variables

### routes

> `const` **routes**: `object`[]

Defined in:
[src/api/endpoints/index.ts:14](https://github.com/davinidae/umazing-musumengine/blob/e6f583dfe0091ce918b2c2e16354b5b128f202d9/src/api/endpoints/index.ts#L14)

routes.

#### Type Declaration

##### handler()

> **handler**: (`event`, `steamClient`) =>
> `Promise`\<[`ApiResponse`](utils/api.util.md#apiresponse)\>

###### Parameters

###### event

[`HttpEvent`](models/api.model.md#httpevent)\<`any`\>

###### steamClient

`Client`

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
