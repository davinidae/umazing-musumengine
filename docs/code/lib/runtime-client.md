# lib/runtime-client

## Classes

### RuntimeClient

Defined in:
[src/lib/runtime-client.ts:30](https://github.com/davinidae/umazing-musumengine/blob/ebaf158dd5679712f54ae827a19a292737f0c6a5/src/lib/runtime-client.ts#L30)

RuntimeClient.

#### Constructors

##### Constructor

> **new RuntimeClient**(`opts`): [`RuntimeClient`](#runtimeclient)

Defined in:
[src/lib/runtime-client.ts:39](https://github.com/davinidae/umazing-musumengine/blob/ebaf158dd5679712f54ae827a19a292737f0c6a5/src/lib/runtime-client.ts#L39)

constructor.

###### Parameters

###### opts

[`RuntimeClientOptions`](models/client.model.md#runtimeclientoptions) = `...`

Type: `RuntimeClientOptions`.

###### Returns

[`RuntimeClient`](#runtimeclient)

Type: `RuntimeClient`.

#### Properties

##### opts

> `private` `readonly` **opts**:
> [`RuntimeClientOptions`](models/client.model.md#runtimeclientoptions)

Defined in:
[src/lib/runtime-client.ts:40](https://github.com/davinidae/umazing-musumengine/blob/ebaf158dd5679712f54ae827a19a292737f0c6a5/src/lib/runtime-client.ts#L40)

Type: `RuntimeClientOptions`.

#### Methods

##### decodeResponse()

> **decodeResponse**(`input`):
> [`DecodeResponseOutput`](models/runtime.model.md#decoderesponseoutput)

Defined in:
[src/lib/runtime-client.ts:88](https://github.com/davinidae/umazing-musumengine/blob/ebaf158dd5679712f54ae827a19a292737f0c6a5/src/lib/runtime-client.ts#L88)

decodeResponse.

###### Parameters

###### input

[`DecodeResponseInput`](models/runtime.model.md#decoderesponseinput)

Type: `DecodeResponseInput`.

###### Returns

[`DecodeResponseOutput`](models/runtime.model.md#decoderesponseoutput)

Type: `DecodeResponseOutput`.

##### encodeRequest()

> **encodeRequest**(`input`): [`EncodeRequestOutput`](models/runtime.model.md#encoderequestoutput)

Defined in:
[src/lib/runtime-client.ts:59](https://github.com/davinidae/umazing-musumengine/blob/ebaf158dd5679712f54ae827a19a292737f0c6a5/src/lib/runtime-client.ts#L59)

encodeRequest.

###### Parameters

###### input

[`EncodeRequestInput`](models/runtime.model.md#encoderequestinput)

Type: `EncodeRequestInput`.

###### Returns

[`EncodeRequestOutput`](models/runtime.model.md#encoderequestoutput)

Type: `EncodeRequestOutput`.
