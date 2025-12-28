# rust-port/client/model

## Interfaces

### ClientConfig

Defined in:
[rust-port/client/model.ts:62](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/model.ts#L62)

#### Properties

##### authKey?

> `optional` **authKey**: [`AuthKey`](../protocol/utils.md#authkey)

Defined in:
[rust-port/client/model.ts:64](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/model.ts#L64)

##### base?

> `optional` **base**: [`RequestBase`](#requestbase)

Defined in:
[rust-port/client/model.ts:65](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/model.ts#L65)

##### udid?

> `optional` **udid**: [`Udid`](../protocol/utils.md#udid)

Defined in:
[rust-port/client/model.ts:63](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/model.ts#L63)

---

### DataHeaders

Defined in:
[rust-port/client/model.ts:21](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/model.ts#L21)

#### Indexable

\[`k`: `string`\]: `unknown`

#### Properties

##### result_code

> **result_code**: `number`

Defined in:
[rust-port/client/model.ts:25](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/model.ts#L25)

##### servertime

> **servertime**: `number`

Defined in:
[rust-port/client/model.ts:24](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/model.ts#L24)

##### sid

> **sid**: `string`

Defined in:
[rust-port/client/model.ts:23](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/model.ts#L23)

##### viewer_id

> **viewer_id**: `number`

Defined in:
[rust-port/client/model.ts:22](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/model.ts#L22)

---

### RequestBase

Defined in:
[rust-port/client/model.ts:4](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/model.ts#L4)

#### Properties

##### carrier

> **carrier**: `string`

Defined in:
[rust-port/client/model.ts:5](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/model.ts#L5)

##### device

> **device**: `number`

Defined in:
[rust-port/client/model.ts:6](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/model.ts#L6)

##### device_id

> **device_id**: `string`

Defined in:
[rust-port/client/model.ts:7](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/model.ts#L7)

##### device_name

> **device_name**: `string`

Defined in:
[rust-port/client/model.ts:8](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/model.ts#L8)

##### dmm_onetime_token

> **dmm_onetime_token**: `null`

Defined in:
[rust-port/client/model.ts:9](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/model.ts#L9)

##### dmm_viewer_id

> **dmm_viewer_id**: `null`

Defined in:
[rust-port/client/model.ts:10](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/model.ts#L10)

##### graphics_device_name

> **graphics_device_name**: `string`

Defined in:
[rust-port/client/model.ts:11](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/model.ts#L11)

##### ip_address

> **ip_address**: `string`

Defined in:
[rust-port/client/model.ts:12](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/model.ts#L12)

##### keychain

> **keychain**: `number`

Defined in:
[rust-port/client/model.ts:13](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/model.ts#L13)

##### locale

> **locale**: `string`

Defined in:
[rust-port/client/model.ts:14](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/model.ts#L14)

##### platform_os_version

> **platform_os_version**: `string`

Defined in:
[rust-port/client/model.ts:15](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/model.ts#L15)

##### steam_id

> **steam_id**: `string` \| `null`

Defined in:
[rust-port/client/model.ts:17](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/model.ts#L17)

##### steam_session_ticket

> **steam_session_ticket**: `string` \| `null`

Defined in:
[rust-port/client/model.ts:18](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/model.ts#L18)

##### viewer_id

> **viewer_id**: `number`

Defined in:
[rust-port/client/model.ts:16](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/model.ts#L16)

---

### SignupData

Defined in:
[rust-port/client/model.ts:44](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/model.ts#L44)

#### Properties

##### auth_key

> **auth_key**: `string`

Defined in:
[rust-port/client/model.ts:46](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/model.ts#L46)

##### viewer_id

> **viewer_id**: `number`

Defined in:
[rust-port/client/model.ts:45](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/model.ts#L45)

---

### SignupRequest

Defined in:
[rust-port/client/model.ts:34](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/model.ts#L34)

#### Properties

##### attestation_type

> **attestation_type**: `number`

Defined in:
[rust-port/client/model.ts:37](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/model.ts#L37)

##### country

> **country**: `string`

Defined in:
[rust-port/client/model.ts:40](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/model.ts#L40)

##### credential

> **credential**: `string`

Defined in:
[rust-port/client/model.ts:41](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/model.ts#L41)

##### dma_state

> **dma_state**: `number`

Defined in:
[rust-port/client/model.ts:39](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/model.ts#L39)

##### error_code

> **error_code**: `number`

Defined in:
[rust-port/client/model.ts:35](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/model.ts#L35)

##### error_message

> **error_message**: `string`

Defined in:
[rust-port/client/model.ts:36](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/model.ts#L36)

##### optin_user_birth

> **optin_user_birth**: `number`

Defined in:
[rust-port/client/model.ts:38](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/model.ts#L38)

---

### StartSessionRequest

Defined in:
[rust-port/client/model.ts:49](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/model.ts#L49)

#### Properties

##### attestation_type

> **attestation_type**: `number`

Defined in:
[rust-port/client/model.ts:50](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/model.ts#L50)

##### device_token

> **device_token**: `string` \| `null`

Defined in:
[rust-port/client/model.ts:51](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/model.ts#L51)

---

### StartSessionResponse

Defined in:
[rust-port/client/model.ts:54](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/model.ts#L54)

#### Properties

##### attest

> **attest**: `boolean`

Defined in:
[rust-port/client/model.ts:55](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/model.ts#L55)

##### is_tutorial

> **is_tutorial**: `boolean`

Defined in:
[rust-port/client/model.ts:56](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/model.ts#L56)

##### nonce

> **nonce**: `string`

Defined in:
[rust-port/client/model.ts:57](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/model.ts#L57)

##### resource_version

> **resource_version**: `string`

Defined in:
[rust-port/client/model.ts:58](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/model.ts#L58)

##### terms_updated

> **terms_updated**: `boolean`

Defined in:
[rust-port/client/model.ts:59](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/model.ts#L59)

---

### UmaResponse

Defined in:
[rust-port/client/model.ts:29](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/model.ts#L29)

#### Type Parameters

##### T

`T`

#### Properties

##### data?

> `optional` **data**: `T`

Defined in:
[rust-port/client/model.ts:31](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/model.ts#L31)

##### data_headers

> **data_headers**: [`DataHeaders`](#dataheaders)

Defined in:
[rust-port/client/model.ts:30](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/model.ts#L30)

## Type Aliases

### AuthMode

> **AuthMode** = \{ `kind`: `"steam"`; `password`: `string`; `username`: `string`; \} \| \{
> `attestationType`:
> [`AttestationType`](../../api/models/umamusume-api/enums.model.md#attestationtype); `deviceType`:
> [`DeviceType`](../../api/models/umamusume-api/enums.model.md#devicetype); `kind`: `"custom"`; \}

Defined in:
[rust-port/client/model.ts:68](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/client/model.ts#L68)
