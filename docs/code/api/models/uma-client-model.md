# api/models/uma-client.model

## Enumerations

### AuthModeKind

Defined in:
[api/models/uma-client.model.ts:42](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/models/uma-client.model.ts#L42)

#### Enumeration Members

##### MOBILE

> **MOBILE**: `"mobile"`

Defined in:
[api/models/uma-client.model.ts:44](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/models/uma-client.model.ts#L44)

##### STEAM

> **STEAM**: `"steam"`

Defined in:
[api/models/uma-client.model.ts:43](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/models/uma-client.model.ts#L43)

## Type Aliases

### AuthMode

> **AuthMode** = \{ `kind`: [`STEAM`](#steam); `password`: `string`; `username`: `string`; \} \| \{
> `attestationType`: [`AttestationType`](umamusume-api/enums.model.md#attestationtype);
> `deviceType`: [`DeviceType`](umamusume-api/enums.model.md#devicetype); `kind`:
> [`MOBILE`](#mobile); \}

Defined in:
[api/models/uma-client.model.ts:47](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/models/uma-client.model.ts#L47)

---

### ClientConfig

> **ClientConfig** = `Partial`\<\{ `authKey`: [`AuthKey`](../utils/protocol.util.md#authkey);
> `base`: [`RequestBase`](#requestbase); `udid`: [`Udid`](../utils/protocol.util.md#udid); \}\>

Defined in:
[api/models/uma-client.model.ts:36](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/models/uma-client.model.ts#L36)

---

### DataHeaders

> **DataHeaders** = `object`

Defined in:
[api/models/uma-client.model.ts:22](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/models/uma-client.model.ts#L22)

#### Indexable

\[`k`: `string`\]: `unknown`

#### Properties

##### result_code

> **result_code**: `number`

Defined in:
[api/models/uma-client.model.ts:26](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/models/uma-client.model.ts#L26)

##### servertime

> **servertime**: `number`

Defined in:
[api/models/uma-client.model.ts:25](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/models/uma-client.model.ts#L25)

##### sid

> **sid**: `string`

Defined in:
[api/models/uma-client.model.ts:24](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/models/uma-client.model.ts#L24)

##### viewer_id

> **viewer_id**: `number`

Defined in:
[api/models/uma-client.model.ts:23](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/models/uma-client.model.ts#L23)

---

### RequestBase

> **RequestBase** = `object`

Defined in:
[api/models/uma-client.model.ts:5](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/models/uma-client.model.ts#L5)

#### Properties

##### carrier

> **carrier**: `string`

Defined in:
[api/models/uma-client.model.ts:6](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/models/uma-client.model.ts#L6)

##### device

> **device**: `number`

Defined in:
[api/models/uma-client.model.ts:7](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/models/uma-client.model.ts#L7)

##### device_id

> **device_id**: `string`

Defined in:
[api/models/uma-client.model.ts:8](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/models/uma-client.model.ts#L8)

##### device_name

> **device_name**: `string`

Defined in:
[api/models/uma-client.model.ts:9](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/models/uma-client.model.ts#L9)

##### dmm_onetime_token

> **dmm_onetime_token**: `null`

Defined in:
[api/models/uma-client.model.ts:10](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/models/uma-client.model.ts#L10)

##### dmm_viewer_id

> **dmm_viewer_id**: `null`

Defined in:
[api/models/uma-client.model.ts:11](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/models/uma-client.model.ts#L11)

##### graphics_device_name

> **graphics_device_name**: `string`

Defined in:
[api/models/uma-client.model.ts:12](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/models/uma-client.model.ts#L12)

##### ip_address

> **ip_address**: `string`

Defined in:
[api/models/uma-client.model.ts:13](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/models/uma-client.model.ts#L13)

##### keychain

> **keychain**: `number`

Defined in:
[api/models/uma-client.model.ts:14](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/models/uma-client.model.ts#L14)

##### locale

> **locale**: `string`

Defined in:
[api/models/uma-client.model.ts:15](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/models/uma-client.model.ts#L15)

##### platform_os_version

> **platform_os_version**: `string`

Defined in:
[api/models/uma-client.model.ts:16](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/models/uma-client.model.ts#L16)

##### steam_id

> **steam_id**: `string` \| `null`

Defined in:
[api/models/uma-client.model.ts:18](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/models/uma-client.model.ts#L18)

##### steam_session_ticket

> **steam_session_ticket**: `string` \| `null`

Defined in:
[api/models/uma-client.model.ts:19](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/models/uma-client.model.ts#L19)

##### viewer_id

> **viewer_id**: `number`

Defined in:
[api/models/uma-client.model.ts:17](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/models/uma-client.model.ts#L17)

---

### RequestResult

> **RequestResult**\<`T`\> = `object`

Defined in:
[api/models/uma-client.model.ts:59](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/models/uma-client.model.ts#L59)

#### Type Parameters

##### T

`T` = `unknown`

#### Properties

##### body

> **body**: `Record`\<`string`, `unknown`\>

Defined in:
[api/models/uma-client.model.ts:62](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/models/uma-client.model.ts#L62)

##### decoded

> **decoded**: [`UmaResponse`](#umaresponse)\<`T`\>

Defined in:
[api/models/uma-client.model.ts:60](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/models/uma-client.model.ts#L60)

##### endpoint

> **endpoint**: `string`

Defined in:
[api/models/uma-client.model.ts:61](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/models/uma-client.model.ts#L61)

##### headers

> **headers**: `Record`\<`string`, `string`\>

Defined in:
[api/models/uma-client.model.ts:63](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/models/uma-client.model.ts#L63)

---

### StepData

> **StepData** = [`UmaClientData`](#umaclientdata) & `object`

Defined in:
[api/models/uma-client.model.ts:66](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/models/uma-client.model.ts#L66)

#### Type Declaration

##### prevResults

> **prevResults**: [`RequestResult`](#requestresult)[]

##### umaclient

> **umaclient**: [`UmaClient`](../services/uma-client.service.md#umaclient)

---

### UmaClientData

> **UmaClientData** = `object`

Defined in:
[api/models/uma-client.model.ts:71](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/models/uma-client.model.ts#L71)

#### Properties

##### base

> **base**: [`RequestBase`](#requestbase)

Defined in:
[api/models/uma-client.model.ts:73](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/models/uma-client.model.ts#L73)

##### baseUrl

> **baseUrl**: `string`

Defined in:
[api/models/uma-client.model.ts:75](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/models/uma-client.model.ts#L75)

##### header

> **header**: [`UmaReqHeader`](../utils/protocol.util.md#umareqheader)

Defined in:
[api/models/uma-client.model.ts:72](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/models/uma-client.model.ts#L72)

##### resVer

> **resVer**: `string`

Defined in:
[api/models/uma-client.model.ts:74](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/models/uma-client.model.ts#L74)

---

### UmaResponse

> **UmaResponse**\<`T`\> = `object` & `Partial`\<\{ `data`: `T`; \}\>

Defined in:
[api/models/uma-client.model.ts:30](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/models/uma-client.model.ts#L30)

#### Type Declaration

##### data_headers

> **data_headers**: [`DataHeaders`](#dataheaders)

#### Type Parameters

##### T

`T`
