import { ToolPreSignupStep } from '../steps/tool/pre_signup.step';
import { ToolSignupStep } from '../steps/tool/signup.step';
import { CoreStepGroup } from './core.step-group';

/**
 * SignupStepGroup.
 * @remarks Extends/implements: `extends CoreStepGroup`.
 */
export class SignupStepGroup extends CoreStepGroup {
  /**
   * execute (async).
   * @returns Type: `Promise<void>`.
   */
  override async execute() {
    if (this.umaClient.hasActiveSession()) {
      this.umaClient.regenSessionId();
      return;
    }
    await this.executeStep(ToolPreSignupStep);
    await this.executeStep(ToolSignupStep);
  }
}
