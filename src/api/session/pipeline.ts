import path from 'path';
import {
  asResultCodeName,
  GallopResultCode,
  StoredData,
  type PipelineContext,
  type StepPrevResult,
  type StepResult,
  type StepResultBase,
} from '../models';
import { StepServiceCtor } from '../pipelines';
import fs from 'fs';
import { fileURLToPath } from 'node:url';

const moduleDir = path.dirname(fileURLToPath(import.meta.url));

/**
 * Executes a sequence of pipeline services within a session context.
 * @public
 */
export class Pipeline {
  constructor(
    public readonly id: string,
    public readonly createdAt: number,
    public readonly storedData: StoredData,
    private ctx: PipelineContext,
  ) {
    //
  }

  /**
   * Replace or initialize the pipeline context for this session.
   * @param ctx New `PipelineContext` to set.
   */
  setContext(ctx: PipelineContext): void {
    this.ctx = ctx;
  }

  /**
   * Access the pipeline context, if any.
   * @returns Current `PipelineContext` or `undefined`.
   */
  getContext(): PipelineContext | undefined {
    return this.ctx;
  }

  async setStoredData() {
    const file = fs.readFileSync(path.resolve(moduleDir, '../../assets/storedData.json'), 'utf-8');
    const data = JSON.parse(file) as Record<string, StoredData>;
    data[this.id] = this.storedData;
    fs.writeFileSync(
      path.resolve(moduleDir, '../../assets/storedData.json'),
      JSON.stringify(data, null, 2),
      'utf-8',
    );
  }
  /**
   * Execute services sequentially, instantiating each with the current context.
   * On error, pushes an error result and stops execution.
   * @param steps Constructors for services to run, in order.
   * @returns Ordered list of `StepResult` items, including an error entry if an error occurred.
   */
  async execute(steps: StepServiceCtor[]): Promise<StepResult[]> {
    const results: StepResult[] = [];
    let prev: StepPrevResult | undefined = undefined;
    for (let i = 0; i < steps.length; i++) {
      const service = new steps[i](this.ctx, this);
      try {
        console.log(`Executing pipeline step ${i + 1}/${steps.length}: ${service.name}`);
        const rBase: StepResultBase = await service.execute(prev);
        const r: StepResult = {
          order: i + 1,
          ...rBase,
        };
        results.push(r);
        prev = r;
        await this.setStoredData();
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        const stack = err instanceof Error && typeof err.stack === 'string' ? err.stack : undefined;
        const r: StepResult = {
          order: i + 1,
          name: service?.name ?? service.constructor?.name,
          endpoint: service?.endpoint,
          framing: service.framing,
          skipped: true,
          error: message,
          errorStack: stack,
          note: 'pipeline stopped due to error',
          responseCode: GallopResultCode.PipelineError,
          responseCodeName: asResultCodeName(GallopResultCode.PipelineError),
        };
        results.push(r);
        // Stop executing subsequent steps on error
        break;
      }
    }
    return results;
  }
}
