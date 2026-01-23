import { AuthModeKind, GallopResultCode } from '../models';
import type { RequestResult, UmaData } from '../models';
import { LoadIndexStep } from './steps/load/index.step';
import { StartSessionStep } from './steps/tool/start_session.step';
import { AuthKey, newSessionId, SessionId, UmaReqHeader } from '../../lib';
import { CoreStep } from './steps/core.step';
import { TutorialStepGroup } from './step-groups/tutorial.step-group';
import { CoreStepGroup } from './step-groups/core.step-group';
import { SignupStepGroup } from './step-groups/signup.step-group';
import { UserSession } from './user-session.service';
import { sessionManager } from './session-manager.service';
import { PresentsIndexStep } from './steps/presents/index.step';
import { PresentsReceiveAllStep } from './steps/presents/receive_all.step';

type CoreStepGroupClass = new (...args: any[]) => CoreStepGroup;

type CoreStepClass = new (...args: any[]) => CoreStep<any, any>;

enum FlowType {
  STEP = 'step',
  GROUP = 'group',
}

type Flow = (
  | {
      type: FlowType.STEP;
      service: CoreStepClass;
    }
  | {
      type: FlowType.GROUP;
      services: CoreStepGroupClass;
    }
) &
  Partial<{
    extra: any[];
  }>;

/**
 * UmaClient.
 */
export class UmaClient {
  header: UmaReqHeader;
  attestationType: number;
  /**
   * constructor.
   * @param auth - Type: `AuthMode`.
   * @param data - Type: `UmaClientData`.
   * @returns Type: `UmaClient`.
   */
  constructor(public readonly userSession: UserSession) {
    this.header = new UmaReqHeader(userSession);
    if (this.userSession.lastResult != null) {
      this.results.push(this.userSession.lastResult);
    }
    this.attestationType =
      this.userSession.auth.kind === AuthModeKind.STEAM ? 0 : this.userSession.auth.attestationType;
  }

  public getUmaData(): UmaData {
    return {
      viewerId: this.userSession.viewer_id,
      udidRaw: this.header.udid.uuid,
      authKey:
        this.header.authKey != null ? Buffer.from(this.header.authKey.bytes).toString('hex') : '',
      useSteam: this.userSession.umaData.useSteam,
    };
  }

  /**
   * results.
   * @remarks Type: `RequestResult[]`.
   * @defaultValue `[]`
   */
  public readonly results: RequestResult[] = [];

  /**
   * regenSessionId.
   */
  public regenSessionId(): void {
    this.header.sessionId = newSessionId(this.header.udid, this.userSession.viewer_id);
  }

  /**
   * updateSessionId.
   * @param sessionId - Type: `SessionId`.
   */
  public updateSessionId(sessionId: SessionId): void {
    this.header.sessionId = sessionId;
  }

  /**
   * updateResVer.
   * @param resVer - Type: `string`.
   */
  public updateResVer(resVer: string): void {
    this.userSession.resVer = resVer;
  }

  /**
   * updateViewerId.
   * @param viewerId - Type: `number`.
   */
  public updateViewerId(viewerId: number): void {
    this.userSession.viewer_id = viewerId;
  }

  /**
   * updateAuthKey.
   * @param authKey - Type: `AuthKey | undefined`.
   */
  public updateAuthKey(authKey: AuthKey | undefined): void {
    this.header.authKey = authKey;
  }

  /**
   * hasActiveSession.
   * @returns Type: `boolean`.
   */
  public hasActiveSession(): boolean {
    return this.userSession.viewer_id !== 0 && Boolean(this.header.authKey);
  }

  public getResponseCodeName(code: number): string {
    const entry = Object.entries(GallopResultCode).find(([_key, value]) => value === code) || [];
    return entry[0] || 'UnknownResponseCode';
  }

  /**
   * executeStep (async).
   * @param step - Type: `CoreStepClass`.
   * @param extra - Type: `any`.
   * @returns Type: `Promise<void>`.
   */
  public async executeStep(step: CoreStepClass, ...extra: any): Promise<void> {
    if (this.results.length > 0) {
      if (
        this.results[this.results.length - 1].decoded.response_code !==
        GallopResultCode.RESULT_CODE_OK
      ) {
        return;
      }
    }
    /**
     * result.
     * @remarks Type: `RequestResult<any>`.
     * @defaultValue `await new step(this, ...(extra ?? [])).execute()`
     */
    const result = await new step(this, ...(extra ?? [])).execute();
    result.decoded.response_name = this.getResponseCodeName(result.decoded.response_code);
    this.results.push(result);
  }

  /**
   * executeStepGroup (async).
   * @param stepGroup - Type: `CoreStepGroupClass`.
   * @param extra - Type: `any`.
   * @returns Type: `Promise<void>`.
   */
  public async executeStepGroup(stepGroup: CoreStepGroupClass, ...extra: any): Promise<void> {
    await new stepGroup(this, ...(extra ?? [])).execute();
  }

  /**
   * executeFlow (async).
   * @param steps - Type: `Flow[]`.
   * @returns Type: `Promise<void>`.
   */
  public async executeFlow(steps: Flow[]): Promise<void> {
    try {
      /**
       * step.
       * @remarks Type: `Flow`.
       */
      for (const step of steps) {
        switch (step.type) {
          case FlowType.STEP: {
            await this.executeStep(step.service, ...(step.extra ?? []));
            break;
          }
          case FlowType.GROUP: {
            await this.executeStepGroup(step.services, ...(step.extra ?? []));
            break;
          }
          default: {
            break;
          }
        }
      }
      await sessionManager.saveLastResult(this.userSession);
    } catch (err) {
      /**
       * catch (err).
       * @remarks Type: `unknown`.
       */
      console.error('Error during UMA client flow execution:', err);
    }
  }

  /**
   * logIn (async).
   * @returns Type: `Promise<void>`.
   */
  public async logIn(): Promise<void> {
    /**
     * attestationType.
     * @remarks Type: `number`.
     * @defaultValue `this.getAttestationType()`
     */
    if (this.userSession.viewer_id !== 0) {
      await this.executeFlow([
        {
          type: FlowType.STEP,
          service: StartSessionStep,
          extra: [this.attestationType],
        },
        {
          type: FlowType.STEP,
          service: LoadIndexStep,
        },
        {
          type: FlowType.GROUP,
          services: TutorialStepGroup,
        },
        {
          type: FlowType.STEP,
          service: LoadIndexStep,
          extra: [false],
        },
      ]);
    }
    await this.executeFlow([
      {
        type: FlowType.GROUP,
        services: SignupStepGroup,
        extra: [this.attestationType],
      },
      {
        type: FlowType.STEP,
        service: StartSessionStep,
        extra: [this.attestationType],
      },
      {
        type: FlowType.STEP,
        service: LoadIndexStep,
      },
      {
        type: FlowType.GROUP,
        services: TutorialStepGroup,
      },
      {
        type: FlowType.STEP,
        service: LoadIndexStep,
        extra: [false],
      },
    ]);
    await sessionManager.addSession(this.userSession);
    await sessionManager.saveLastResult(this.userSession);
  }

  async collectPresents(): Promise<void> {
    await this.executeFlow([
      {
        type: FlowType.STEP,
        service: PresentsIndexStep,
      },
      {
        type: FlowType.STEP,
        service: PresentsReceiveAllStep,
      },
      {
        type: FlowType.STEP,
        service: PresentsIndexStep,
      },
    ]);
  }

  async playTeamTrials(): Promise<void> {
    //
  }
}
