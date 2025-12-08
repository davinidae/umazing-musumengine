# api/pipelines/pipeline\_groups

## Variables

### loginPipeline

> `const` **loginPipeline**: (*typeof* [`PreSignupService`](services/pre_signup.service.md#presignupservice) \| *typeof* [`SignupService`](services/signup.service.md#signupservice) \| *typeof* [`StartSessionService`](services/start_session.service.md#startsessionservice) \| *typeof* [`LoadIndexService`](services/load_index.service.md#loadindexservice))[]

Defined in: [api/pipelines/pipeline\_groups.ts:13](https://github.com/davinidae/umazing-musumengine/blob/ad6973b41701fd9608d8e30485e1b330f1fe581e/src/api/pipelines/pipeline_groups.ts#L13)

Bootstrap pipeline used by `/login` to start a user session.
Order:
- `pre_signup` (kv-stream): send device/env data
- `signup` (kv-stream): register/fetch viewer_id
- `start_session` (length-prefixed): establish server session
- `load/index` (length-prefixed): fetch main screen
