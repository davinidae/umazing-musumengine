import type { PipelineContext, StepPrevResult, StepResult, StepResultBase } from '../models';
import { StepServiceCtor } from '../pipelines';

export class UserSession {
  private lastStep?: StepPrevResult;

  constructor(
    public readonly id: string,
    public readonly createdAt: number,
    public readonly meta: Record<string, unknown>,
    private ctx: PipelineContext,
  ) {
    //
  }

  setContext(ctx: PipelineContext): void {
    this.ctx = ctx;
  }

  getContext(): PipelineContext | undefined {
    return this.ctx;
  }

  setLastStep(step: StepPrevResult | undefined): void {
    this.lastStep = step;
  }

  getLastStep(): StepPrevResult | undefined {
    return this.lastStep;
  }

  async executePipeline(steps: StepServiceCtor[]): Promise<StepResult[]> {
    const results: StepResult[] = [];
    let prev: StepPrevResult | undefined = undefined;
    for (let i = 0; i < steps.length; i++) {
      const service = new steps[i](this.ctx);
      try {
        const rBase: StepResultBase = await service.execute(prev);
        const r: StepResult = {
          order: i + 1,
          ...rBase,
        };
        results.push(r);
        prev = r;
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        const stack = err instanceof Error && typeof err.stack === 'string' ? err.stack : undefined;
        const name: string = (service as any)?.name ?? service.constructor?.name ?? 'unknown';
        const endpoint: string = (service as any)?.endpoint ?? 'unknown';
        const r: StepResult = {
          order: i + 1,
          name,
          endpoint,
          framing: 'length-prefixed',
          skipped: true,
          error: message,
          errorStack: stack,
          note: 'pipeline stopped due to error',
        };
        results.push(r);
        // Stop executing subsequent steps on error
        break;
      }
    }
    return results;
  }

  async runPipeline(services: StepServiceCtor[]): Promise<StepResult[]> {
    const results = await this.executePipeline(services);
    if (results.length > 0) {
      this.lastStep = results[results.length - 1];
    }
    return results;
  }
}
