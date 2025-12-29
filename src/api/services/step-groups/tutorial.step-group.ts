import { findLast } from 'es-toolkit/compat';
import { CoreStepGroup } from './core.step-group';
import { RequestResult } from '../../models';
import { UserChangeSexStep } from '../steps/user/change_sex.step';
import { UserChangeNameStep } from '../steps/user/change_name.step';
import { TutorialSkipStep } from '../steps/tutorial/skip.step';

/**
 * TutorialStepGroup.
 * @remarks Extends/implements: `extends CoreStepGroup`.
 */
export class TutorialStepGroup extends CoreStepGroup {
  /**
   * execute (async).
   * @returns Type: `Promise<void>`.
   */
  override async execute() {
    /**
     * startSessionResult.
     * @remarks Type: `RequestResult<ToolStartSession> | undefined`.
     * @defaultValue `findLast( this.umaClient.prevResults, (r: RequestResult): r is RequestResult<Umatypes.Response.ToolStartSession> => { return r.endpoint ===…`
     */
    const startSessionResult = findLast(
      this.umaClient.prevResults,
      (r: RequestResult): r is RequestResult<Umatypes.Response.ToolStartSession> => {
        return r.endpoint === 'tool/start_session';
      },
    );
    /**
     * isTutorial.
     * @remarks Type: `boolean`.
     * @defaultValue `Boolean(startSessionResult?.decoded.data?.is_tutorial)`
     */
    const isTutorial = Boolean(startSessionResult?.decoded.data?.is_tutorial);
    if (!isTutorial) {
      return;
    }
    await this.executeStep(UserChangeSexStep);
    await this.executeStep(UserChangeNameStep);
    await this.executeStep(TutorialSkipStep);
  }
}
