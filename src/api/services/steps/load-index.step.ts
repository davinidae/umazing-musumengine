import { setTimeout } from 'timers';
import type { StepData } from '../../models';
import { CoreStep } from './core.step';

/**
 * Local sleep helper.
 * Kept here (instead of a shared util) because it is only used by this step.
 */
function sleep(ms: number): Promise<void> {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

/**
 * `load/index` step.
 *
 * Some upstream flows behave more reliably with a small delay after the call,
 * so this step optionally sleeps in `afterExecute()`.
 */
export class LoadIndexStep extends CoreStep<
  Umatypes.Request.LoadIndex,
  Umatypes.Response.LoadIndex
> {
  override endpoint = 'load/index';

  constructor(
    protected readonly stepData: StepData,
    private readonly doSleep: boolean = true,
  ) {
    super(stepData);
  }

  override getRequestBody(): Umatypes.Request.LoadIndex {
    return {};
  }

  protected override async afterExecute(): Promise<void> {
    if (!this.doSleep) {
      return;
    }
    await sleep(2000);
  }
}
