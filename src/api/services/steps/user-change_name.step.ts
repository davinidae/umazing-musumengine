import { CoreStepService } from './core.step';

export class UserChangeNameStepService extends CoreStepService<Record<string, string>, unknown> {
  endpoint = 'user/change_name';

  getRequestBody() {
    return {
      name: 'Carrot Liker',
    };
  }
}
