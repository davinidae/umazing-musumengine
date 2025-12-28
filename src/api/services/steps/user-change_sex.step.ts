import { CoreStepService } from './core.step';

export class UserChangeSexStepService extends CoreStepService<
  {
    sex: number;
  },
  unknown
> {
  endpoint = 'user/change_sex';

  getRequestBody() {
    return {
      sex: 1,
    };
  }
}
