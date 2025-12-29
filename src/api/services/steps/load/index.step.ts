import { setTimeout } from 'timers';
import { CoreStep } from '../core.step';
import { UmaClient } from '../../uma-client.service';

/**
 * sleep.
 * @param ms - Type: `number`.
 * @returns Type: `Promise<void>`.
 */
function sleep(ms: number): Promise<void> {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

/**
 * LoadIndexStep.
 * @remarks Extends/implements: `extends CoreStep< Umatypes.Request.LoadIndex, Umatypes.Response.LoadIndex >`.
 */
export class LoadIndexStep extends CoreStep<
  Umatypes.Request.LoadIndex,
  Umatypes.Response.LoadIndex
> {
  /**
   * endpoint.
   * @remarks Type: `string`.
   * @defaultValue `'load/index'`
   */
  override endpoint = 'load/index';

  /**
   * constructor.
   * @param umaClient - Type: `UmaClient`.
   * @param doSleep - Type: `boolean`.
   * @returns Type: `LoadIndexStep`.
   */
  constructor(
    protected readonly umaClient: UmaClient,
    private readonly doSleep: boolean = true,
  ) {
    super(umaClient);
  }

  /**
   * getRequestBody.
   * @returns Type: `object`.
   */
  override getRequestBody(): Umatypes.Request.LoadIndex {
    return {};
  }

  /**
   * afterExecute (async).
   * @returns Type: `Promise<void>`.
   */
  protected override async afterExecute(): Promise<void> {
    if (!this.doSleep) {
      return;
    }
    await sleep(2000);
  }
}
