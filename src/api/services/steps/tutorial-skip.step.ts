import { CoreStep } from './core.step';

export class TutorialSkipStep extends CoreStep<Record<string, string>, unknown> {
  endpoint = 'tutorial/skip';

  getRequestBody() {
    return {};
  }
}
