# api/pipelines/pipeline_groups

## Variables

### loginPipeline

> `const` **loginPipeline**: (_typeof_
> [`PreSignupService`](services/pre_signup.service.md#presignupservice) \| _typeof_
> [`SignupService`](services/signup.service.md#signupservice) \| _typeof_
> [`StartSessionService`](services/start_session.service.md#startsessionservice) \| _typeof_
> [`LoadIndexService`](services/load_index.service.md#loadindexservice))[]

Defined in:
[api/pipelines/pipeline_groups.ts:13](https://github.com/davinidae/umazing-musumengine/blob/31506e6c59268922860b05e2a0fd19297714c4cb/src/api/pipelines/pipeline_groups.ts#L13)

Bootstrap pipeline used by `/login` to start a user session. Order:

- `pre_signup` (kv-stream): send device/env data
- `signup` (kv-stream): register/fetch viewer_id
- `start_session` (length-prefixed): establish server session
- `load/index` (length-prefixed): fetch main screen
