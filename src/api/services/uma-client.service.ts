import { AuthModeKind, GallopResultCode } from '../models';
import type { AuthMode, RequestBase, RequestResult, UmaClientData, UmaData } from '../models';
import { LoadIndexStep } from './steps/load/index.step';
import { StartSessionStep } from './steps/tool/start_session.step';
import { AuthKey, newSessionId, SessionId, Udid, UmaReqHeader } from '../../lib';
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
 * createUmaClient.
 * @param auth - Type: `AuthMode`.
 * @param udid - Type: `Udid`.
 * @param authKey - Type: `AuthKey | undefined`.
 * @param base - Type: `RequestBase`.
 * @param resVer - Type: `string`.
 * @param baseUrl - Type: `string`.
 * @returns Type: `UmaClient`.
 */
export function createUmaClient(
  auth: AuthMode,
  udid: Udid,
  authKey: AuthKey | undefined,
  base: RequestBase,
  resVer: string,
  baseUrl: string,
  umaData: UmaData,
  userSession: UserSession,
): UmaClient {
  /**
   * sessionId.
   * @remarks Type: `SessionId`.
   * @defaultValue `newSessionId(udid, base.viewer_id)`
   */
  const sessionId = newSessionId(udid, base.viewer_id);
  /**
   * header.
   * @remarks Type: `UmaReqHeader`.
   * @defaultValue `new UmaReqHeader(sessionId, udid, authKey)`
   */
  const header = new UmaReqHeader(sessionId, udid, authKey);
  return new UmaClient(
    auth,
    {
      header,
      base,
      resVer,
      baseUrl,
    },
    umaData,
    userSession,
  );
}

/**
 * UmaClient.
 */
export class UmaClient {
  /**
   * constructor.
   * @param auth - Type: `AuthMode`.
   * @param data - Type: `UmaClientData`.
   * @returns Type: `UmaClient`.
   */
  constructor(
    private readonly auth: AuthMode,
    public readonly data: UmaClientData,
    public readonly umaData: UmaData,
    public readonly userSession: UserSession,
  ) {
    //
  }

  public getUmaData(): UmaData {
    return {
      viewerId: this.data.base.viewer_id,
      udidRaw: this.data.header.udid.uuid,
      authKey:
        this.data.header.authKey != null
          ? Buffer.from(this.data.header.authKey.bytes).toString('hex')
          : undefined,
      steamId: this.umaData.steamId,
      steamSessionTicket: this.umaData.steamSessionTicket,
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
    this.data.header.sessionId = newSessionId(this.data.header.udid, this.data.base.viewer_id);
  }

  /**
   * updateSessionId.
   * @param sessionId - Type: `SessionId`.
   */
  public updateSessionId(sessionId: SessionId): void {
    this.data.header.sessionId = sessionId;
  }

  /**
   * updateResVer.
   * @param resVer - Type: `string`.
   */
  public updateResVer(resVer: string): void {
    this.data.resVer = resVer;
  }

  /**
   * updateViewerId.
   * @param viewerId - Type: `number`.
   */
  public updateViewerId(viewerId: number): void {
    this.data.base.viewer_id = viewerId;
  }

  /**
   * updateAuthKey.
   * @param authKey - Type: `AuthKey | undefined`.
   */
  public updateAuthKey(authKey: AuthKey | undefined): void {
    this.data.header.authKey = authKey;
  }

  /**
   * hasActiveSession.
   * @returns Type: `boolean`.
   */
  public hasActiveSession(): boolean {
    return this.data.base.viewer_id !== 0 && Boolean(this.data.header.authKey);
  }

  /**
   * getAttestationType.
   * @returns Type: `number`.
   */
  private getAttestationType(): number {
    return this.auth.kind === AuthModeKind.STEAM ? 0 : this.auth.attestationType;
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
    const attestationType = this.getAttestationType();
    if (this.data.base.viewer_id !== 0) {
      await this.executeFlow([
        {
          type: FlowType.STEP,
          service: StartSessionStep,
          extra: [attestationType],
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
        extra: [attestationType],
      },
      {
        type: FlowType.STEP,
        service: StartSessionStep,
        extra: [attestationType],
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
    sessionManager.addSession(this.userSession);
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
