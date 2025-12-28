import { CoreStepService } from './core.step';

export class LoadIndexStepService extends CoreStepService<Record<string, string>, unknown> {
  endpoint = 'load/index';

  getRequestBody() {
    return {};
  }
}
