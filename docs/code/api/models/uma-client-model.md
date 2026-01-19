# api/models/uma-client.model

## Enumerations

### AuthModeKind

Defined in:
[src/api/models/uma-client.model.ts:42](https://github.com/davinidae/umazing-musumengine/blob/c3424db7d4c963120848a67fbf3509fbef9995f9/src/api/models/uma-client.model.ts#L42)

#### Enumeration Members

##### MOBILE

> **MOBILE**: `"mobile"`

Defined in:
[src/api/models/uma-client.model.ts:44](https://github.com/davinidae/umazing-musumengine/blob/c3424db7d4c963120848a67fbf3509fbef9995f9/src/api/models/uma-client.model.ts#L44)

##### STEAM

> **STEAM**: `"steam"`

Defined in:
[src/api/models/uma-client.model.ts:43](https://github.com/davinidae/umazing-musumengine/blob/c3424db7d4c963120848a67fbf3509fbef9995f9/src/api/models/uma-client.model.ts#L43)

## Type Aliases

### AuthMode

> **AuthMode** = `object` & `Partial`\<\{ `password`: `string`; `username`: `string`; \}\>

Defined in:
[src/api/models/uma-client.model.ts:47](https://github.com/davinidae/umazing-musumengine/blob/c3424db7d4c963120848a67fbf3509fbef9995f9/src/api/models/uma-client.model.ts#L47)

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
[src/api/models/uma-client.model.ts:36](https://github.com/davinidae/umazing-musumengine/blob/c3424db7d4c963120848a67fbf3509fbef9995f9/src/api/models/uma-client.model.ts#L36)

---

### RequestBase

> **RequestBase** = `object`

Defined in:
[src/api/models/uma-client.model.ts:5](https://github.com/davinidae/umazing-musumengine/blob/c3424db7d4c963120848a67fbf3509fbef9995f9/src/api/models/uma-client.model.ts#L5)

#### Properties

##### carrier

> **carrier**: `string`

Defined in:
[src/api/models/uma-client.model.ts:6](https://github.com/davinidae/umazing-musumengine/blob/c3424db7d4c963120848a67fbf3509fbef9995f9/src/api/models/uma-client.model.ts#L6)

##### device

> **device**: `number`

Defined in:
[src/api/models/uma-client.model.ts:7](https://github.com/davinidae/umazing-musumengine/blob/c3424db7d4c963120848a67fbf3509fbef9995f9/src/api/models/uma-client.model.ts#L7)

##### device_id

> **device_id**: `string`

Defined in:
[src/api/models/uma-client.model.ts:8](https://github.com/davinidae/umazing-musumengine/blob/c3424db7d4c963120848a67fbf3509fbef9995f9/src/api/models/uma-client.model.ts#L8)

##### device_name

> **device_name**: `string`

Defined in:
[src/api/models/uma-client.model.ts:9](https://github.com/davinidae/umazing-musumengine/blob/c3424db7d4c963120848a67fbf3509fbef9995f9/src/api/models/uma-client.model.ts#L9)

##### dmm_onetime_token

> **dmm_onetime_token**: `null`

Defined in:
[src/api/models/uma-client.model.ts:10](https://github.com/davinidae/umazing-musumengine/blob/c3424db7d4c963120848a67fbf3509fbef9995f9/src/api/models/uma-client.model.ts#L10)

##### dmm_viewer_id

> **dmm_viewer_id**: `null`

Defined in:
[src/api/models/uma-client.model.ts:11](https://github.com/davinidae/umazing-musumengine/blob/c3424db7d4c963120848a67fbf3509fbef9995f9/src/api/models/uma-client.model.ts#L11)

##### graphics_device_name

> **graphics_device_name**: `string`

Defined in:
[src/api/models/uma-client.model.ts:12](https://github.com/davinidae/umazing-musumengine/blob/c3424db7d4c963120848a67fbf3509fbef9995f9/src/api/models/uma-client.model.ts#L12)

##### ip_address

> **ip_address**: `string`

Defined in:
[src/api/models/uma-client.model.ts:13](https://github.com/davinidae/umazing-musumengine/blob/c3424db7d4c963120848a67fbf3509fbef9995f9/src/api/models/uma-client.model.ts#L13)

##### keychain

> **keychain**: `number`

Defined in:
[src/api/models/uma-client.model.ts:14](https://github.com/davinidae/umazing-musumengine/blob/c3424db7d4c963120848a67fbf3509fbef9995f9/src/api/models/uma-client.model.ts#L14)

##### locale

> **locale**: `string`

Defined in:
[src/api/models/uma-client.model.ts:15](https://github.com/davinidae/umazing-musumengine/blob/c3424db7d4c963120848a67fbf3509fbef9995f9/src/api/models/uma-client.model.ts#L15)

##### platform_os_version

> **platform_os_version**: `string`

Defined in:
[src/api/models/uma-client.model.ts:16](https://github.com/davinidae/umazing-musumengine/blob/c3424db7d4c963120848a67fbf3509fbef9995f9/src/api/models/uma-client.model.ts#L16)

##### steam_id

> **steam_id**: `string` \| `null`

Defined in:
[src/api/models/uma-client.model.ts:18](https://github.com/davinidae/umazing-musumengine/blob/c3424db7d4c963120848a67fbf3509fbef9995f9/src/api/models/uma-client.model.ts#L18)

##### steam_session_ticket

> **steam_session_ticket**: `string` \| `null`

Defined in:
[src/api/models/uma-client.model.ts:19](https://github.com/davinidae/umazing-musumengine/blob/c3424db7d4c963120848a67fbf3509fbef9995f9/src/api/models/uma-client.model.ts#L19)

##### viewer_id

> **viewer_id**: `number`

Defined in:
[src/api/models/uma-client.model.ts:17](https://github.com/davinidae/umazing-musumengine/blob/c3424db7d4c963120848a67fbf3509fbef9995f9/src/api/models/uma-client.model.ts#L17)

---

### RequestResult

> **RequestResult**\<`T`\> = `object`

Defined in:
[src/api/models/uma-client.model.ts:56](https://github.com/davinidae/umazing-musumengine/blob/c3424db7d4c963120848a67fbf3509fbef9995f9/src/api/models/uma-client.model.ts#L56)

#### Type Parameters

##### T

`T` = `unknown`

#### Properties

##### body

> **body**: `Record`\<`string`, `unknown`\>

Defined in:
[src/api/models/uma-client.model.ts:60](https://github.com/davinidae/umazing-musumengine/blob/c3424db7d4c963120848a67fbf3509fbef9995f9/src/api/models/uma-client.model.ts#L60)

##### decoded

> **decoded**: [`UmaResponse`](#umaresponse)\<`T`\>

Defined in:
[src/api/models/uma-client.model.ts:57](https://github.com/davinidae/umazing-musumengine/blob/c3424db7d4c963120848a67fbf3509fbef9995f9/src/api/models/uma-client.model.ts#L57)

##### endpoint

> **endpoint**: `string`

Defined in:
[src/api/models/uma-client.model.ts:58](https://github.com/davinidae/umazing-musumengine/blob/c3424db7d4c963120848a67fbf3509fbef9995f9/src/api/models/uma-client.model.ts#L58)

##### headers

> **headers**: `Record`\<`string`, `string`\>

Defined in:
[src/api/models/uma-client.model.ts:61](https://github.com/davinidae/umazing-musumengine/blob/c3424db7d4c963120848a67fbf3509fbef9995f9/src/api/models/uma-client.model.ts#L61)

##### name

> **name**: `string`

Defined in:
[src/api/models/uma-client.model.ts:59](https://github.com/davinidae/umazing-musumengine/blob/c3424db7d4c963120848a67fbf3509fbef9995f9/src/api/models/uma-client.model.ts#L59)

---

### StepData

> **StepData** = `object`

Defined in:
[src/api/models/uma-client.model.ts:64](https://github.com/davinidae/umazing-musumengine/blob/c3424db7d4c963120848a67fbf3509fbef9995f9/src/api/models/uma-client.model.ts#L64)

#### Properties

##### umaclient

> **umaclient**: [`UmaClient`](../services/uma-client.service.md#umaclient)

Defined in:
[src/api/models/uma-client.model.ts:65](https://github.com/davinidae/umazing-musumengine/blob/c3424db7d4c963120848a67fbf3509fbef9995f9/src/api/models/uma-client.model.ts#L65)

---

### UmaClientData

> **UmaClientData** = `object`

Defined in:
[src/api/models/uma-client.model.ts:68](https://github.com/davinidae/umazing-musumengine/blob/c3424db7d4c963120848a67fbf3509fbef9995f9/src/api/models/uma-client.model.ts#L68)

#### Properties

##### base

> **base**: [`RequestBase`](#requestbase)

Defined in:
[src/api/models/uma-client.model.ts:70](https://github.com/davinidae/umazing-musumengine/blob/c3424db7d4c963120848a67fbf3509fbef9995f9/src/api/models/uma-client.model.ts#L70)

##### baseUrl

> **baseUrl**: `string`

Defined in:
[src/api/models/uma-client.model.ts:72](https://github.com/davinidae/umazing-musumengine/blob/c3424db7d4c963120848a67fbf3509fbef9995f9/src/api/models/uma-client.model.ts#L72)

##### header

> **header**: [`UmaReqHeader`](../../lib/utils/protocol.util.md#umareqheader)

Defined in:
[src/api/models/uma-client.model.ts:69](https://github.com/davinidae/umazing-musumengine/blob/c3424db7d4c963120848a67fbf3509fbef9995f9/src/api/models/uma-client.model.ts#L69)

##### resVer

> **resVer**: `string`

Defined in:
[src/api/models/uma-client.model.ts:71](https://github.com/davinidae/umazing-musumengine/blob/c3424db7d4c963120848a67fbf3509fbef9995f9/src/api/models/uma-client.model.ts#L71)

---

### UmaResponse

> **UmaResponse**\<`T`\> = `object` & `Partial`\<\{ `data`: `T`; `response_name`: `string`; \}\>

Defined in:
[src/api/models/uma-client.model.ts:22](https://github.com/davinidae/umazing-musumengine/blob/c3424db7d4c963120848a67fbf3509fbef9995f9/src/api/models/uma-client.model.ts#L22)

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
