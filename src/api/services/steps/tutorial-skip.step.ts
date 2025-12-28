import { CoreStepService } from './core.step';

export class TutorialSkipStepService extends CoreStepService<Record<string, string>, unknown> {
  endpoint = 'tutorial/skip';

  getRequestBody() {
    return {};
  }
}
