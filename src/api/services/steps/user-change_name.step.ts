import { CoreStep } from './core.step';

export class UserChangeNameStep extends CoreStep<Record<string, string>, unknown> {
  endpoint = 'user/change_name';

  getRequestBody() {
    return {
      name: 'Carrot Liker',
    };
  }
}
