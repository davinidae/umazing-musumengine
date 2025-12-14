# api/session/session-manager

## Classes

### SessionManager

Defined in:
[api/session/session-manager.ts:12](https://github.com/davinidae/umazing-musumengine/blob/92508e018818c5fb68a0c2fe2b0ebc322fd78ba3/src/api/session/session-manager.ts#L12)

Simple in-memory session manager to keep server-only data between endpoint calls. Not for production
multi-process use without an external store.

#### Constructors

##### Constructor

> **new SessionManager**(`opts?`): [`SessionManager`](#sessionmanager)

Defined in:
[api/session/session-manager.ts:17](https://github.com/davinidae/umazing-musumengine/blob/92508e018818c5fb68a0c2fe2b0ebc322fd78ba3/src/api/session/session-manager.ts#L17)

###### Parameters

###### opts?

`Partial`\<\{ `ttlMs`: `number`; \}\>

###### Returns

[`SessionManager`](#sessionmanager)

#### Properties

##### sessions

> `private` `readonly` **sessions**: `Map`\<`string`, [`UserSession`](user-session.md#usersession)\>

Defined in:
[api/session/session-manager.ts:13](https://github.com/davinidae/umazing-musumengine/blob/92508e018818c5fb68a0c2fe2b0ebc322fd78ba3/src/api/session/session-manager.ts#L13)

##### ttlMs

> `private` `readonly` **ttlMs**: `number`

Defined in:
[api/session/session-manager.ts:15](https://github.com/davinidae/umazing-musumengine/blob/92508e018818c5fb68a0c2fe2b0ebc322fd78ba3/src/api/session/session-manager.ts#L15)

#### Methods

##### createSession()

> **createSession**(`steam_id`, `steam_session_ticket`, `meta`):
> [`UserSession`](user-session.md#usersession)

Defined in:
[api/session/session-manager.ts:94](https://github.com/davinidae/umazing-musumengine/blob/92508e018818c5fb68a0c2fe2b0ebc322fd78ba3/src/api/session/session-manager.ts#L94)

Create a new server-side session and store it in memory.

###### Parameters

###### steam_id

`string`

Steam identifier.

###### steam_session_ticket

`string`

Steam session ticket.

###### meta

`Record`\<`string`, `unknown`\>

Arbitrary metadata associated with the session.

###### Returns

[`UserSession`](user-session.md#usersession)

Created `UserSession`.

##### delete()

> **delete**(`id`): `void`

Defined in:
[api/session/session-manager.ts:173](https://github.com/davinidae/umazing-musumengine/blob/92508e018818c5fb68a0c2fe2b0ebc322fd78ba3/src/api/session/session-manager.ts#L173)

Delete a session by id.

###### Parameters

###### id

`string`

Session id.

###### Returns

`void`

##### deleteInactiveSessions()

> `private` **deleteInactiveSessions**(): `void`

Defined in:
[api/session/session-manager.ts:177](https://github.com/davinidae/umazing-musumengine/blob/92508e018818c5fb68a0c2fe2b0ebc322fd78ba3/src/api/session/session-manager.ts#L177)

###### Returns

`void`

##### generateCtx()

> **generateCtx**(`steam_id`, `steam_session_ticket`):
> [`PipelineContext`](../models/pipelines.model.md#pipelinecontext)

Defined in:
[api/session/session-manager.ts:32](https://github.com/davinidae/umazing-musumengine/blob/92508e018818c5fb68a0c2fe2b0ebc322fd78ba3/src/api/session/session-manager.ts#L32)

Generate a default `PipelineContext` for a user based on Steam identifiers. Uses deterministic
derivations for development/testing.

###### Parameters

###### steam_id

`string`

Steam identifier.

###### steam_session_ticket

`string`

Steam session ticket.

###### Returns

[`PipelineContext`](../models/pipelines.model.md#pipelinecontext)

Initialized `PipelineContext`.

##### getContext()

> **getContext**(`id`): [`PipelineContext`](../models/pipelines.model.md#pipelinecontext) \|
> `undefined`

Defined in:
[api/session/session-manager.ts:143](https://github.com/davinidae/umazing-musumengine/blob/92508e018818c5fb68a0c2fe2b0ebc322fd78ba3/src/api/session/session-manager.ts#L143)

Access the current pipeline context for a session.

###### Parameters

###### id

`string`

Session id.

###### Returns

[`PipelineContext`](../models/pipelines.model.md#pipelinecontext) \| `undefined`

`PipelineContext` or `undefined`.

##### getLastStep()

> **getLastStep**(`id`): `Partial`\<\{ `decoded`:
> [`DecodeResponseOutput`](../../lib/models/runtime.model.md#decoderesponseoutput); `endpoint`:
> `string`; `name`: `string`; `requestB64`: `string`; `responseB64`: `string`; \}\> \| `undefined`

Defined in:
[api/session/session-manager.ts:165](https://github.com/davinidae/umazing-musumengine/blob/92508e018818c5fb68a0c2fe2b0ebc322fd78ba3/src/api/session/session-manager.ts#L165)

Read the last step result for a session.

###### Parameters

###### id

`string`

Session id.

###### Returns

`Partial`\<\{ `decoded`:
[`DecodeResponseOutput`](../../lib/models/runtime.model.md#decoderesponseoutput); `endpoint`:
`string`; `name`: `string`; `requestB64`: `string`; `responseB64`: `string`; \}\> \| `undefined`

`StepPrevResult` or `undefined`.

##### getSession()

> **getSession**(`id`): [`UserSession`](user-session.md#usersession) \| `undefined`

Defined in:
[api/session/session-manager.ts:112](https://github.com/davinidae/umazing-musumengine/blob/92508e018818c5fb68a0c2fe2b0ebc322fd78ba3/src/api/session/session-manager.ts#L112)

Retrieve a session by id. Applies TTL lazily and prunes expired entries.

###### Parameters

###### id

`string`

Session identifier.

###### Returns

[`UserSession`](user-session.md#usersession) \| `undefined`

`UserSession` or `undefined` if not found/expired.

##### setContext()

> **setContext**(`id`, `ctx`): `void`

Defined in:
[api/session/session-manager.ts:130](https://github.com/davinidae/umazing-musumengine/blob/92508e018818c5fb68a0c2fe2b0ebc322fd78ba3/src/api/session/session-manager.ts#L130)

Update the session's pipeline context.

###### Parameters

###### id

`string`

Session id.

###### ctx

[`PipelineContext`](../models/pipelines.model.md#pipelinecontext)

New `PipelineContext`.

###### Returns

`void`

##### setLastStep()

> **setLastStep**(`id`, `step`): `void`

Defined in:
[api/session/session-manager.ts:152](https://github.com/davinidae/umazing-musumengine/blob/92508e018818c5fb68a0c2fe2b0ebc322fd78ba3/src/api/session/session-manager.ts#L152)

Persist the last step result for a session.

###### Parameters

###### id

`string`

Session id.

###### step

Last step or `undefined`.

`Partial`\<\{ `decoded`:
[`DecodeResponseOutput`](../../lib/models/runtime.model.md#decoderesponseoutput); `endpoint`:
`string`; `name`: `string`; `requestB64`: `string`; `responseB64`: `string`; \}\> | `undefined`

###### Returns

`void`

## Variables

### sessionManager

> `const` **sessionManager**: [`SessionManager`](#sessionmanager)

Defined in:
[api/session/session-manager.ts:187](https://github.com/davinidae/umazing-musumengine/blob/92508e018818c5fb68a0c2fe2b0ebc322fd78ba3/src/api/session/session-manager.ts#L187)
