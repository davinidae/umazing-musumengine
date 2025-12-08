import { LoadIndexService, PreSignupService, SignupService, StartSessionService } from './services';

export const loginPipeline = [
  PreSignupService,
  SignupService,
  StartSessionService,
  LoadIndexService,
];
