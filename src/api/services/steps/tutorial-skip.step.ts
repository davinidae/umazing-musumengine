import { CoreStep } from './core.step';

export class TutorialSkipStep extends CoreStep<
  Umatypes.Request.TutorialSkip,
  Umatypes.Response.TutorialSkip
> {
  override endpoint = 'tutorial/skip';

  override getRequestBody(): Umatypes.Request.TutorialSkip {
    return {};
  }
}
