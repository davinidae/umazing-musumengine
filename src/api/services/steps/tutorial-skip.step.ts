import { CoreStep } from './core.step';

export class TutorialSkipStep extends CoreStep<
  Umatypes.Request.TutorialSkip,
  Umatypes.Response.TutorialSkip
> {
  endpoint = 'tutorial/skip';

  getRequestBody() {
    return {};
  }
}
