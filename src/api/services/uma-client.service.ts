import {
  AuthMode,
  AuthModeKind,
  ClientConfig,
  RequestBase,
  RequestResult,
  StepData,
  UmaClientData,
} from '../models';
import { ToolPreSignupStep } from './steps/tool-pre_signup.step';
import { ToolSignupStep } from './steps/tool-signup.step';
import { LoadIndexStep } from './steps/load-index.step';
import { StartSessionStep } from './steps/start-session.step';
import { UserChangeSexStep } from './steps/user-change_sex.step';
import { UserChangeNameStep } from './steps/user-change_name.step';
import { TutorialSkipStep } from './steps/tutorial-skip.step';
import { AuthKey, newSessionId, SessionId, Udid, UmaReqHeader } from '../../lib';

export function createUmaClient(
  cfg: ClientConfig,
  auth: AuthMode,
  udid: Udid,
  authKey: AuthKey | undefined,
  base: RequestBase,
  resVer: string,
  baseUrl: string,
): UmaClient {
  const sessionId = newSessionId(udid, BigInt(base.viewer_id));
  const header = new UmaReqHeader(sessionId, udid, authKey);
  return new UmaClient(cfg, auth, {
    header,
    base,
    resVer,
    baseUrl,
  });
}

export class UmaClient {
  constructor(
    private readonly cfg: ClientConfig,
    private readonly auth: AuthMode,
    private readonly umaclientData: UmaClientData,
  ) {
    //
  }

  public regenSessionId(): void {
    this.umaclientData.header.sessionId = newSessionId(
      this.umaclientData.header.udid,
      BigInt(this.umaclientData.base.viewer_id),
    );
  }

  public updateSessionId(sessionId: SessionId): void {
    this.umaclientData.header.sessionId = sessionId;
  }

  private getStepData(prevResults: RequestResult[] = []): StepData {
    return {
      ...this.umaclientData,
      prevResults,
      umaclient: this,
    };
  }

  public updateResVer(resVer: string): void {
    this.umaclientData.resVer = resVer;
  }

  public updateViewerId(viewerId: number): void {
    this.umaclientData.base.viewer_id = viewerId;
  }

  public updateAuthKey(authKey: AuthKey | undefined): void {
    this.umaclientData.header.authKey = authKey;
  }

  private async signup(): Promise<RequestResult[]> {
    if (this.umaclientData.base.viewer_id !== 0 && this.umaclientData.header.authKey) {
      this.regenSessionId();
      return [];
    }
    return [
      await new ToolPreSignupStep(this.getStepData()).execute(),
      await new ToolSignupStep(this.getStepData()).execute(),
    ];
  }

  private async tutorial(results: RequestResult[]): Promise<RequestResult[]> {
    const startSessionResult = results.find((o) => {
      return o.endpoint === '/start_session';
    });
    const isTutorial = Boolean(
      (startSessionResult as RequestResult<Umatypes.Response.ToolStartSession>)?.decoded.data
        ?.is_tutorial,
    );
    if (!isTutorial) {
      return [];
    }
    return [
      await new UserChangeSexStep(this.getStepData()).execute(),
      await new UserChangeNameStep(this.getStepData()).execute(),
      await new TutorialSkipStep(this.getStepData()).execute(),
    ];
  }

  public async logIn(): Promise<RequestResult[]> {
    const attestationType = this.auth.kind === AuthModeKind.STEAM ? 0 : this.auth.attestationType;
    const results = [...(await this.signup())];
    const startSessionRes = await new StartSessionStep(
      this.getStepData(),
      attestationType,
    ).execute();
    results.push(
      startSessionRes,
      await new LoadIndexStep(this.getStepData()).execute(),
      ...(await this.tutorial(results)),
      await new LoadIndexStep(this.getStepData(), false).execute(),
    );
    return results;
  }
}
