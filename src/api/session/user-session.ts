import type { PipelineContext, StepPrevResult, StepResult, StepResultBase } from '../models';
import { StepServiceCtor } from '../pipelines';

/**
 * Represents a per-user server-side session owned by the API.
 *
 * Responsibilities
 * - Hold server-only state: PipelineContext (crypto/runtime + upstream config) and the last pipeline step result.
 * - Provide helpers to run a sequence of pipeline services and persist the last step.
 * - Do NOT expose sensitive state to API consumers; only share the opaque `id`.
 */
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

  /** Replace or initialize the pipeline context for this session. */
  setContext(ctx: PipelineContext): void {
    this.ctx = ctx;
  }

  /** Access the pipeline context, if any. */
  getContext(): PipelineContext | undefined {
    return this.ctx;
  }

  /** Persist the last successful or terminal step of the pipeline. */
  setLastStep(step: StepPrevResult | undefined): void {
    this.lastStep = step;
  }

  /** Retrieve the last step result, used as input for chained pipelines. */
  getLastStep(): StepPrevResult | undefined {
    return this.lastStep;
  }

  /**
   * Execute a set of services sequentially, instantiating each with the current context.
   * On error, pushes an error result and stops execution.
   *
   * @param steps Constructors for services to run, in order.
   * @returns Ordered list of StepResult items, including the error entry if an error occurred.
   */
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

  /**
   * Convenience wrapper around executePipeline that also saves the last step for chaining.
   * @param services Constructors for services to run, in order.
   */
  async runPipeline(services: StepServiceCtor[]): Promise<StepResult[]> {
    const results = await this.executePipeline(services);
    if (results.length > 0) {
      this.lastStep = results[results.length - 1];
    }
    return results;
  }
}
