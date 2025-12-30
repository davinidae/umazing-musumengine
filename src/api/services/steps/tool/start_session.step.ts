import type { AttestationType, RequestResult } from '../../../models';
import { UmaClient } from '../../uma-client.service';
import { CoreStep } from '../core.step';

/**
 * StartSessionStep.
 * @remarks Extends/implements: `extends CoreStep< Umatypes.Request.ToolStartSession, Umatypes.Response.ToolStartSession >`.
 */
export class StartSessionStep extends CoreStep<
  Umatypes.Request.ToolStartSession,
  Umatypes.Response.ToolStartSession
> {
  /**
   * endpoint.
   * @remarks Type: `string`.
   * @defaultValue `'tool/start_session'`
   */
  override endpoint = 'tool/start_session';

  /**
   * getRequestBody.
   * @returns Type: `ToolStartSession`.
   */
  override getRequestBody(): Umatypes.Request.ToolStartSession {
    return {
      attestation_type: this.attestationType,
      device_token: null,
    };
  }

  /**
   * constructor.
   * @param umaClient - Type: `UmaClient`.
   * @param attestationType - Type: `number`.
   * @returns Type: `StartSessionStep`.
   */
  constructor(
    protected readonly umaClient: UmaClient,
    private readonly attestationType: AttestationType,
  ) {
    super(umaClient);
  }

  /**
   * afterExecute.
   * @param result - Type: `RequestResult<ToolStartSession>`.
   */
  protected override afterExecute(result: RequestResult<Umatypes.Response.ToolStartSession>): void {
    /**
     * resVer.
     * @remarks Type: `string`.
     * @defaultValue `this.umaClient.data.resVer`
     */
    let resVer = this.umaClient.data.resVer;
    if (result.decoded.data?.resource_version) {
      resVer = result.decoded.data.resource_version;
    }
    this.umaClient.updateResVer(resVer);
  }
}
