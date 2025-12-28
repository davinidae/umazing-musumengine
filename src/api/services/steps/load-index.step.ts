import { StepData } from '../../models';
import { sleep } from '../../utils';
import { CoreStep } from './core.step';

export class LoadIndexStep extends CoreStep<
  Umatypes.Request.LoadIndex,
  Umatypes.Response.LoadIndex
> {
  endpoint = 'load/index';

  constructor(
    protected readonly stepData: StepData,
    private readonly doSleep: boolean = true,
  ) {
    super(stepData);
  }

  getRequestBody() {
    return {};
  }

  protected override async afterExecute() {
    if (this.doSleep) {
      await sleep(2000);
    }
  }
}
