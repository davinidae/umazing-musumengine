# api/models/uma-client.model

## Enumerations

### AuthModeKind

Defined in:
[api/models/uma-client.model.ts:40](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/models/uma-client.model.ts#L40)

#### Enumeration Members

##### MOBILE

> **MOBILE**: `"mobile"`

Defined in:
[api/models/uma-client.model.ts:42](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/models/uma-client.model.ts#L42)

##### STEAM

> **STEAM**: `"steam"`

Defined in:
[api/models/uma-client.model.ts:41](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/models/uma-client.model.ts#L41)

## Type Aliases

### AuthMode

> **AuthMode** = \{ `kind`: [`STEAM`](#steam); `password`: `string`; `username`: `string`; \} \| \{
> `attestationType`: [`AttestationType`](umamusume-api/enums.model.md#attestationtype);
> `deviceType`: [`DeviceType`](umamusume-api/enums.model.md#devicetype); `kind`:
> [`MOBILE`](#mobile); \}

Defined in:
[api/models/uma-client.model.ts:45](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/models/uma-client.model.ts#L45)

---

### ClientConfig

> **ClientConfig** = `Partial`\<\{ `authKey`: [`AuthKey`](../../lib/utils/protocol.util.md#authkey);
> `base`: [`RequestBase`](#requestbase); `udid`: [`Udid`](../../lib/utils/protocol.util.md#udid);
> \}\>

Defined in:
[api/models/uma-client.model.ts:34](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/models/uma-client.model.ts#L34)

---

### RequestBase

> **RequestBase** = `object`

Defined in:
[api/models/uma-client.model.ts:5](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/models/uma-client.model.ts#L5)

#### Properties

##### carrier

> **carrier**: `string`

Defined in:
[api/models/uma-client.model.ts:6](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/models/uma-client.model.ts#L6)

##### device

> **device**: `number`

Defined in:
[api/models/uma-client.model.ts:7](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/models/uma-client.model.ts#L7)

##### device_id

> **device_id**: `string`

Defined in:
[api/models/uma-client.model.ts:8](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/models/uma-client.model.ts#L8)

##### device_name

> **device_name**: `string`

Defined in:
[api/models/uma-client.model.ts:9](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/models/uma-client.model.ts#L9)

##### dmm_onetime_token

> **dmm_onetime_token**: `null`

Defined in:
[api/models/uma-client.model.ts:10](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/models/uma-client.model.ts#L10)

##### dmm_viewer_id

> **dmm_viewer_id**: `null`

Defined in:
[api/models/uma-client.model.ts:11](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/models/uma-client.model.ts#L11)

##### graphics_device_name

> **graphics_device_name**: `string`

Defined in:
[api/models/uma-client.model.ts:12](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/models/uma-client.model.ts#L12)

##### ip_address

> **ip_address**: `string`

Defined in:
[api/models/uma-client.model.ts:13](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/models/uma-client.model.ts#L13)

##### keychain

> **keychain**: `number`

Defined in:
[api/models/uma-client.model.ts:14](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/models/uma-client.model.ts#L14)

##### locale

> **locale**: `string`

Defined in:
[api/models/uma-client.model.ts:15](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/models/uma-client.model.ts#L15)

##### platform_os_version

> **platform_os_version**: `string`

Defined in:
[api/models/uma-client.model.ts:16](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/models/uma-client.model.ts#L16)

##### steam_id

> **steam_id**: `string` \| `null`

Defined in:
[api/models/uma-client.model.ts:18](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/models/uma-client.model.ts#L18)

##### steam_session_ticket

> **steam_session_ticket**: `string` \| `null`

Defined in:
[api/models/uma-client.model.ts:19](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/models/uma-client.model.ts#L19)

##### viewer_id

> **viewer_id**: `number`

Defined in:
[api/models/uma-client.model.ts:17](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/models/uma-client.model.ts#L17)

---

### RequestResult

> **RequestResult**\<`T`\> = `object`

Defined in:
[api/models/uma-client.model.ts:57](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/models/uma-client.model.ts#L57)

#### Type Parameters

##### T

`T` = `unknown`

#### Properties

##### body

> **body**: `Record`\<`string`, `unknown`\>

Defined in:
[api/models/uma-client.model.ts:60](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/models/uma-client.model.ts#L60)

##### decoded

> **decoded**: [`UmaResponse`](#umaresponse)\<`T`\>

Defined in:
[api/models/uma-client.model.ts:58](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/models/uma-client.model.ts#L58)

##### endpoint

> **endpoint**: `string`

Defined in:
[api/models/uma-client.model.ts:59](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/models/uma-client.model.ts#L59)

##### headers

> **headers**: `Record`\<`string`, `string`\>

Defined in:
[api/models/uma-client.model.ts:61](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/models/uma-client.model.ts#L61)

---

### StepData

> **StepData** = [`UmaClientData`](#umaclientdata) & `object`

Defined in:
[api/models/uma-client.model.ts:64](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/models/uma-client.model.ts#L64)

#### Type Declaration

##### prevResults

> **prevResults**: [`RequestResult`](#requestresult)[]

##### umaclient

> **umaclient**: [`UmaClient`](../services/uma-client.service.md#umaclient)

---

### UmaClientData

> **UmaClientData** = `object`

Defined in:
[api/models/uma-client.model.ts:69](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/models/uma-client.model.ts#L69)

#### Properties

##### base

> **base**: [`RequestBase`](#requestbase)

Defined in:
[api/models/uma-client.model.ts:71](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/models/uma-client.model.ts#L71)

##### baseUrl

> **baseUrl**: `string`

Defined in:
[api/models/uma-client.model.ts:73](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/models/uma-client.model.ts#L73)

##### header

> **header**: [`UmaReqHeader`](../../lib/utils/protocol.util.md#umareqheader)

Defined in:
[api/models/uma-client.model.ts:70](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/models/uma-client.model.ts#L70)

##### resVer

> **resVer**: `string`

Defined in:
[api/models/uma-client.model.ts:72](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/models/uma-client.model.ts#L72)

---

### UmaResponse

> **UmaResponse**\<`T`\> = `object` & `Partial`\<\{ `data`: `T`; \}\>

Defined in:
[api/models/uma-client.model.ts:22](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/api/models/uma-client.model.ts#L22)

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

#### Type Parameters

##### T

`T`
