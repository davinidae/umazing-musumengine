# api/models/uma-client.model

## Enumerations

### AuthModeKind

Defined in:
[api/models/uma-client.model.ts:69](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L69)

#### Enumeration Members

##### MOBILE

> **MOBILE**: `"mobile"`

Defined in:
[api/models/uma-client.model.ts:71](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L71)

##### STEAM

> **STEAM**: `"steam"`

Defined in:
[api/models/uma-client.model.ts:70](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L70)

## Type Aliases

### AuthMode

> **AuthMode** = \{ `kind`: [`STEAM`](#steam); `password`: `string`; `username`: `string`; \} \| \{
> `attestationType`: [`AttestationType`](umamusume-api/enums.model.md#attestationtype);
> `deviceType`: [`DeviceType`](umamusume-api/enums.model.md#devicetype); `kind`:
> [`MOBILE`](#mobile); \}

Defined in:
[api/models/uma-client.model.ts:74](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L74)

---

### ClientConfig

> **ClientConfig** = `Partial`\<\{ `authKey`: [`AuthKey`](../utils/protocol.util.md#authkey);
> `base`: [`RequestBase`](#requestbase); `udid`: [`Udid`](../utils/protocol.util.md#udid); \}\>

Defined in:
[api/models/uma-client.model.ts:63](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L63)

---

### DataHeaders

> **DataHeaders** = `object`

Defined in:
[api/models/uma-client.model.ts:21](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L21)

#### Indexable

\[`k`: `string`\]: `unknown`

#### Properties

##### result_code

> **result_code**: `number`

Defined in:
[api/models/uma-client.model.ts:25](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L25)

##### servertime

> **servertime**: `number`

Defined in:
[api/models/uma-client.model.ts:24](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L24)

##### sid

> **sid**: `string`

Defined in:
[api/models/uma-client.model.ts:23](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L23)

##### viewer_id

> **viewer_id**: `number`

Defined in:
[api/models/uma-client.model.ts:22](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L22)

---

### RequestBase

> **RequestBase** = `object`

Defined in:
[api/models/uma-client.model.ts:4](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L4)

#### Properties

##### carrier

> **carrier**: `string`

Defined in:
[api/models/uma-client.model.ts:5](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L5)

##### device

> **device**: `number`

Defined in:
[api/models/uma-client.model.ts:6](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L6)

##### device_id

> **device_id**: `string`

Defined in:
[api/models/uma-client.model.ts:7](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L7)

##### device_name

> **device_name**: `string`

Defined in:
[api/models/uma-client.model.ts:8](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L8)

##### dmm_onetime_token

> **dmm_onetime_token**: `null`

Defined in:
[api/models/uma-client.model.ts:9](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L9)

##### dmm_viewer_id

> **dmm_viewer_id**: `null`

Defined in:
[api/models/uma-client.model.ts:10](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L10)

##### graphics_device_name

> **graphics_device_name**: `string`

Defined in:
[api/models/uma-client.model.ts:11](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L11)

##### ip_address

> **ip_address**: `string`

Defined in:
[api/models/uma-client.model.ts:12](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L12)

##### keychain

> **keychain**: `number`

Defined in:
[api/models/uma-client.model.ts:13](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L13)

##### locale

> **locale**: `string`

Defined in:
[api/models/uma-client.model.ts:14](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L14)

##### platform_os_version

> **platform_os_version**: `string`

Defined in:
[api/models/uma-client.model.ts:15](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L15)

##### steam_id

> **steam_id**: `string` \| `null`

Defined in:
[api/models/uma-client.model.ts:17](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L17)

##### steam_session_ticket

> **steam_session_ticket**: `string` \| `null`

Defined in:
[api/models/uma-client.model.ts:18](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L18)

##### viewer_id

> **viewer_id**: `number`

Defined in:
[api/models/uma-client.model.ts:16](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L16)

---

### RequestResult

> **RequestResult**\<`T`\> = `object`

Defined in:
[api/models/uma-client.model.ts:86](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L86)

#### Type Parameters

##### T

`T` = `unknown`

#### Properties

##### body

> **body**: `Record`\<`string`, `unknown`\>

Defined in:
[api/models/uma-client.model.ts:89](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L89)

##### decoded

> **decoded**: [`UmaResponse`](#umaresponse)\<`T`\>

Defined in:
[api/models/uma-client.model.ts:87](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L87)

##### endpoint

> **endpoint**: `string`

Defined in:
[api/models/uma-client.model.ts:88](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L88)

##### headers

> **headers**: `Record`\<`string`, `string`\>

Defined in:
[api/models/uma-client.model.ts:90](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L90)

---

### SignupData

> **SignupData** = `object`

Defined in:
[api/models/uma-client.model.ts:45](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L45)

#### Properties

##### auth_key

> **auth_key**: `string`

Defined in:
[api/models/uma-client.model.ts:47](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L47)

##### viewer_id

> **viewer_id**: `number`

Defined in:
[api/models/uma-client.model.ts:46](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L46)

---

### SignupRequest

> **SignupRequest** = `object`

Defined in:
[api/models/uma-client.model.ts:35](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L35)

#### Properties

##### attestation_type

> **attestation_type**: `number`

Defined in:
[api/models/uma-client.model.ts:38](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L38)

##### country

> **country**: `string`

Defined in:
[api/models/uma-client.model.ts:41](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L41)

##### credential

> **credential**: `string`

Defined in:
[api/models/uma-client.model.ts:42](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L42)

##### dma_state

> **dma_state**: `number`

Defined in:
[api/models/uma-client.model.ts:40](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L40)

##### error_code

> **error_code**: `number`

Defined in:
[api/models/uma-client.model.ts:36](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L36)

##### error_message

> **error_message**: `string`

Defined in:
[api/models/uma-client.model.ts:37](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L37)

##### optin_user_birth

> **optin_user_birth**: `number`

Defined in:
[api/models/uma-client.model.ts:39](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L39)

---

### StartSessionRequest

> **StartSessionRequest** = `object`

Defined in:
[api/models/uma-client.model.ts:50](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L50)

#### Properties

##### attestation_type

> **attestation_type**: `number`

Defined in:
[api/models/uma-client.model.ts:51](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L51)

##### device_token

> **device_token**: `string` \| `null`

Defined in:
[api/models/uma-client.model.ts:52](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L52)

---

### StartSessionResponse

> **StartSessionResponse** = `object`

Defined in:
[api/models/uma-client.model.ts:55](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L55)

#### Properties

##### attest

> **attest**: `boolean`

Defined in:
[api/models/uma-client.model.ts:56](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L56)

##### is_tutorial

> **is_tutorial**: `boolean`

Defined in:
[api/models/uma-client.model.ts:57](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L57)

##### nonce

> **nonce**: `string`

Defined in:
[api/models/uma-client.model.ts:58](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L58)

##### resource_version

> **resource_version**: `string`

Defined in:
[api/models/uma-client.model.ts:59](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L59)

##### terms_updated

> **terms_updated**: `boolean`

Defined in:
[api/models/uma-client.model.ts:60](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L60)

---

### StepData

> **StepData** = `object`

Defined in:
[api/models/uma-client.model.ts:93](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L93)

#### Properties

##### base

> **base**: [`RequestBase`](#requestbase)

Defined in:
[api/models/uma-client.model.ts:95](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L95)

##### baseUrl

> **baseUrl**: `string`

Defined in:
[api/models/uma-client.model.ts:97](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L97)

##### header

> **header**: [`UmaReqHeader`](../utils/protocol.util.md#umareqheader)

Defined in:
[api/models/uma-client.model.ts:94](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L94)

##### resVer

> **resVer**: `string`

Defined in:
[api/models/uma-client.model.ts:96](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L96)

##### updateSessionId()

> **updateSessionId**: (`sessionId`) => `void`

Defined in:
[api/models/uma-client.model.ts:98](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L98)

###### Parameters

###### sessionId

[`SessionId`](../utils/protocol.util.md#sessionid)

###### Returns

`void`

---

### UmaResponse

> **UmaResponse**\<`T`\> = `object` & `Partial`\<\{ `data`: `T`; \}\>

Defined in:
[api/models/uma-client.model.ts:29](https://github.com/davinidae/umazing-musumengine/blob/57e727b3c2cba8f6b015598291ecad23e61d967f/src/api/models/uma-client.model.ts#L29)

#### Type Declaration

##### data_headers

> **data_headers**: [`DataHeaders`](#dataheaders)

#### Type Parameters

##### T

`T`
