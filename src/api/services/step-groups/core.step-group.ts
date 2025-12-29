import { UmaClient } from '../uma-client.service';

/**
 * CoreStepGroup.
 */
export abstract class CoreStepGroup {
  /**
   * args.
   * @remarks Type: `any[]`.
   * @defaultValue `[]`
   */
  protected readonly args: any[] = [];

  /**
   * constructor.
   * @param umaClient - Type: `UmaClient`.
   * @param args - Type: `any[]`.
   * @returns Type: `CoreStepGroup`.
   */
  constructor(
    protected readonly umaClient: UmaClient,
    ...args: typeof this.args
  ) {
    this.args = args;
  }

  /**
   * executeStep.
   * @remarks Type: `(...args: any[]) => Promise<void>`.
   * @defaultValue `this.umaClient.executeStep.bind(this.umaClient, ...this.args)`
   */
  protected executeStep = this.umaClient.executeStep.bind(this.umaClient, ...this.args);
  /**
   * executeStepGroup.
   * @remarks Type: `(...args: any[]) => Promise<void>`.
   * @defaultValue `this.umaClient.executeStepGroup.bind(this.umaClient, ...this.args)`
   */
  protected executeStepGroup = this.umaClient.executeStepGroup.bind(this.umaClient, ...this.args);

  /**
   * execute.
   * @returns Type: `Promise<void>`.
   * @remarks Source: `abstract execute(): Promise<void>;`.
   */
  abstract execute(): Promise<void>;
}
