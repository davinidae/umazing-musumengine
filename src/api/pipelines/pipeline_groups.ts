import { LoadIndexService, StartSessionService } from './services';

/**
 * Bootstrap pipeline used by `/login` to start a user session.
 * Order:
 * - `pre_signup` (kv-stream): send device/env data
 * - `signup` (kv-stream): register/fetch viewer_id
 * - `start_session` (length-prefixed): establish server session
 * - `load/index` (length-prefixed): fetch main screen
 *
 * @public
 */
export const loginPipeline = [
  /*
  Formerly included steps:
    PreSignupService,
    SignupService,
  */
  StartSessionService,
  LoadIndexService,
];
