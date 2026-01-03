# api/models/uma-client.model

## Enumerations

### AuthModeKind

Defined in:
[src/api/models/uma-client.model.ts:43](https://github.com/davinidae/umazing-musumengine/blob/27a67ead77e7e430a7a2f321d3db88cc32f51df1/src/api/models/uma-client.model.ts#L43)

#### Enumeration Members

##### MOBILE

> **MOBILE**: `"mobile"`

Defined in:
[src/api/models/uma-client.model.ts:45](https://github.com/davinidae/umazing-musumengine/blob/27a67ead77e7e430a7a2f321d3db88cc32f51df1/src/api/models/uma-client.model.ts#L45)

##### STEAM

> **STEAM**: `"steam"`

Defined in:
[src/api/models/uma-client.model.ts:44](https://github.com/davinidae/umazing-musumengine/blob/27a67ead77e7e430a7a2f321d3db88cc32f51df1/src/api/models/uma-client.model.ts#L44)

## Type Aliases

### AuthMode

> **AuthMode** = `object` & `Partial`\<\{ `password`: `string`; `username`: `string`; \}\>

Defined in:
[src/api/models/uma-client.model.ts:48](https://github.com/davinidae/umazing-musumengine/blob/27a67ead77e7e430a7a2f321d3db88cc32f51df1/src/api/models/uma-client.model.ts#L48)

#### Type Declaration

##### attestationType

> **attestationType**: [`AttestationType`](umamusume-api/enums.model.md#attestationtype)

##### deviceType

> **deviceType**: [`DeviceType`](umamusume-api/enums.model.md#devicetype)

##### kind

> **kind**: [`AuthModeKind`](#authmodekind)

---

### ClientConfig

> **ClientConfig** = `Partial`\<\{ `authKey`: [`AuthKey`](../../lib/utils/protocol.util.md#authkey);
> `base`: [`RequestBase`](#requestbase); `udid`: [`Udid`](../../lib/utils/protocol.util.md#udid);
> \}\>

Defined in:
[src/api/models/uma-client.model.ts:37](https://github.com/davinidae/umazing-musumengine/blob/27a67ead77e7e430a7a2f321d3db88cc32f51df1/src/api/models/uma-client.model.ts#L37)

---

### RequestBase

> **RequestBase** = `object` & `Partial`\<\{ `steam_id`: `string` \| `null`; `steam_session_ticket`:
> `string` \| `null`; \}\>

Defined in:
[src/api/models/uma-client.model.ts:5](https://github.com/davinidae/umazing-musumengine/blob/27a67ead77e7e430a7a2f321d3db88cc32f51df1/src/api/models/uma-client.model.ts#L5)

#### Type Declaration

##### carrier

> **carrier**: `string`

##### device

> **device**: `number`

##### device_id

> **device_id**: `string`

##### device_name

> **device_name**: `string`

##### dmm_onetime_token

> **dmm_onetime_token**: `null`

##### dmm_viewer_id

> **dmm_viewer_id**: `null`

##### graphics_device_name

> **graphics_device_name**: `string`

##### ip_address

> **ip_address**: `string`

##### keychain

> **keychain**: `number`

##### locale

> **locale**: `string`

##### platform_os_version

> **platform_os_version**: `string`

##### viewer_id

> **viewer_id**: `number`

---

### RequestResult

> **RequestResult**\<`T`\> = `object`

Defined in:
[src/api/models/uma-client.model.ts:57](https://github.com/davinidae/umazing-musumengine/blob/27a67ead77e7e430a7a2f321d3db88cc32f51df1/src/api/models/uma-client.model.ts#L57)

#### Type Parameters

##### T

`T` = `unknown`

#### Properties

##### body

> **body**: `Record`\<`string`, `unknown`\>

Defined in:
[src/api/models/uma-client.model.ts:61](https://github.com/davinidae/umazing-musumengine/blob/27a67ead77e7e430a7a2f321d3db88cc32f51df1/src/api/models/uma-client.model.ts#L61)

##### decoded

> **decoded**: [`UmaResponse`](#umaresponse)\<`T`\>

Defined in:
[src/api/models/uma-client.model.ts:58](https://github.com/davinidae/umazing-musumengine/blob/27a67ead77e7e430a7a2f321d3db88cc32f51df1/src/api/models/uma-client.model.ts#L58)

##### endpoint

> **endpoint**: `string`

Defined in:
[src/api/models/uma-client.model.ts:59](https://github.com/davinidae/umazing-musumengine/blob/27a67ead77e7e430a7a2f321d3db88cc32f51df1/src/api/models/uma-client.model.ts#L59)

##### headers

> **headers**: `Record`\<`string`, `string`\>

Defined in:
[src/api/models/uma-client.model.ts:62](https://github.com/davinidae/umazing-musumengine/blob/27a67ead77e7e430a7a2f321d3db88cc32f51df1/src/api/models/uma-client.model.ts#L62)

##### name

> **name**: `string`

Defined in:
[src/api/models/uma-client.model.ts:60](https://github.com/davinidae/umazing-musumengine/blob/27a67ead77e7e430a7a2f321d3db88cc32f51df1/src/api/models/uma-client.model.ts#L60)

---

### StepData

> **StepData** = `object`

Defined in:
[src/api/models/uma-client.model.ts:65](https://github.com/davinidae/umazing-musumengine/blob/27a67ead77e7e430a7a2f321d3db88cc32f51df1/src/api/models/uma-client.model.ts#L65)

#### Properties

##### umaclient

> **umaclient**: [`UmaClient`](../services/uma-client.service.md#umaclient)

Defined in:
[src/api/models/uma-client.model.ts:66](https://github.com/davinidae/umazing-musumengine/blob/27a67ead77e7e430a7a2f321d3db88cc32f51df1/src/api/models/uma-client.model.ts#L66)

---

### UmaClientData

> **UmaClientData** = `object`

Defined in:
[src/api/models/uma-client.model.ts:69](https://github.com/davinidae/umazing-musumengine/blob/27a67ead77e7e430a7a2f321d3db88cc32f51df1/src/api/models/uma-client.model.ts#L69)

#### Properties

##### base

> **base**: [`RequestBase`](#requestbase)

Defined in:
[src/api/models/uma-client.model.ts:71](https://github.com/davinidae/umazing-musumengine/blob/27a67ead77e7e430a7a2f321d3db88cc32f51df1/src/api/models/uma-client.model.ts#L71)

##### baseUrl

> **baseUrl**: `string`

Defined in:
[src/api/models/uma-client.model.ts:73](https://github.com/davinidae/umazing-musumengine/blob/27a67ead77e7e430a7a2f321d3db88cc32f51df1/src/api/models/uma-client.model.ts#L73)

##### header

> **header**: [`UmaReqHeader`](../../lib/utils/protocol.util.md#umareqheader)

Defined in:
[src/api/models/uma-client.model.ts:70](https://github.com/davinidae/umazing-musumengine/blob/27a67ead77e7e430a7a2f321d3db88cc32f51df1/src/api/models/uma-client.model.ts#L70)

##### resVer

> **resVer**: `string`

Defined in:
[src/api/models/uma-client.model.ts:72](https://github.com/davinidae/umazing-musumengine/blob/27a67ead77e7e430a7a2f321d3db88cc32f51df1/src/api/models/uma-client.model.ts#L72)

---

### UmaResponse

> **UmaResponse**\<`T`\> = `object` & `Partial`\<\{ `data`: `T`; `response_name`: `string`; \}\>

Defined in:
[src/api/models/uma-client.model.ts:23](https://github.com/davinidae/umazing-musumengine/blob/27a67ead77e7e430a7a2f321d3db88cc32f51df1/src/api/models/uma-client.model.ts#L23)

#### Type Declaration

##### data_headers

> **data_headers**: `object`

###### Index Signature

\[`k`: `string`\]: `unknown`

###### data_headers.result_code

> **result_code**: `number`

###### data_headers.servertime

> **servertime**: `number`

###### data_headers.sid

> **sid**: `string`

###### data_headers.viewer_id

> **viewer_id**: `number`

##### response_code

> **response_code**: `number`

#### Type Parameters

##### T

`T`
