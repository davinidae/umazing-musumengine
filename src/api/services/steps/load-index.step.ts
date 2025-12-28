import { CoreStep } from './core.step';

export class LoadIndexStep extends CoreStep<Record<string, string>, unknown> {
  endpoint = 'load/index';

  getRequestBody() {
    return {};
  }
}
