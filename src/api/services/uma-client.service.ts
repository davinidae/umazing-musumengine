import { AuthKey, newSessionId, SessionId, sleep, Udid, UmaReqHeader } from '../utils';
import { AttestationType, RequestBase, RequestResult } from '../models';
import { ToolPreSignupStepService } from './steps/tool-pre_signup.step';
import { ToolSignupStepService } from './steps/tool-signup.step';
import { LoadIndexStepService } from './steps/load-index.step';
import { StartSessionStepService } from './steps/start-session.step';
import { UserChangeSexStepService } from './steps/user-change_sex.step';
import { UserChangeNameStepService } from './steps/user-change_name.step';
import { TutorialSkipStepService } from './steps/tutorial-skip.step';

export function createUmaClient(
  udid: Udid,
  authKey: AuthKey | undefined,
  base: RequestBase,
  resVer: string,
  baseUrl: string,
): UmaClient {
  const sessionId = newSessionId(udid, BigInt(base.viewer_id));
  const header = new UmaReqHeader(sessionId, udid, authKey);
  return new UmaClient(header, base, resVer, baseUrl);
}
export class UmaClient {
  public constructor(
    public header: UmaReqHeader,
    public base: RequestBase,
    public resVer: string,
    public baseUrl: string,
  ) {
    //
  }

  public regenSessionId(): void {
    this.header.sessionId = newSessionId(this.header.udid, BigInt(this.base.viewer_id));
  }

  updateSessionId(sessionId: SessionId): void {
    this.header.sessionId = sessionId;
  }

  getStepData() {
    return {
      header: this.header,
      base: this.base,
      resVer: this.resVer,
      baseUrl: this.baseUrl,
      updateSessionId: (sessionId: SessionId) => {
        this.updateSessionId(sessionId);
      },
    };
  }

  public async signup() {
    const results: RequestResult[] = [];
    const preSignupRes = await new ToolPreSignupStepService(this.getStepData()).execute();
    results.push(preSignupRes);
    this.regenSessionId();
    const toolsignupRes = await new ToolSignupStepService(this.getStepData()).execute();
    results.push(toolsignupRes);
    const { viewer_id, authKey } = toolsignupRes;
    this.base.viewer_id = viewer_id;
    this.header.authKey = authKey;
    return results;
  }

  public async logIn(attestationType: AttestationType) {
    const results: RequestResult[] = [];
    if (this.base.viewer_id !== 0 && this.header.authKey) {
      // already signed up
    } else {
      results.push(...(await this.signup()));
    }
    this.regenSessionId();
    const startSessionRes = await new StartSessionStepService(
      this.getStepData(),
      attestationType,
    ).execute();
    results.push(startSessionRes);
    this.resVer = startSessionRes.resVer;
    const loadIndexRes = await new LoadIndexStepService(this.getStepData()).execute();
    results.push(loadIndexRes);
    await sleep(2000);
    const isTutorial = Boolean(startSessionRes.decoded.data?.is_tutorial);
    if (isTutorial) {
      const userChangeSexRes = await new UserChangeSexStepService(this.getStepData()).execute();
      results.push(userChangeSexRes);
      const userChangeNameRes = await new UserChangeNameStepService(this.getStepData()).execute();
      results.push(userChangeNameRes);
      const tutorialSkipRes = await new TutorialSkipStepService(this.getStepData()).execute();
      results.push(tutorialSkipRes);
    }
    const loadIndexRes2 = await new LoadIndexStepService(this.getStepData()).execute();
    results.push(loadIndexRes2);
    return results;
  }
}
