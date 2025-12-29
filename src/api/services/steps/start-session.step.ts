import type { RequestResult, StepData } from '../../models';
import { CoreStep } from './core.step';

export class StartSessionStep extends CoreStep<
  Umatypes.Request.ToolStartSession,
  Umatypes.Response.ToolStartSession
> {
  override endpoint = 'tool/start_session';

  override getRequestBody(): Umatypes.Request.ToolStartSession {
    return {
      attestation_type: this.attestationType,
      device_token: null,
    };
  }

  constructor(
    protected readonly stepData: StepData,
    private readonly attestationType: number,
  ) {
    super(stepData);
  }

  protected override afterExecute(result: RequestResult<Umatypes.Response.ToolStartSession>): void {
    let resVer = this.stepData.resVer;
    if (result.decoded.data?.resource_version) {
      resVer = result.decoded.data.resource_version;
    }
    this.stepData.umaclient.updateResVer(resVer);
  }
}
