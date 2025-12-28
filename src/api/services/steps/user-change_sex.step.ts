import { CoreStep } from './core.step';

export class UserChangeSexStep extends CoreStep<
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
