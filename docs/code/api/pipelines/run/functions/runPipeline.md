# Function: runPipeline()

> **runPipeline**(`steps`): `Promise`\<[`StepResult`](../../../models/pipelines/interfaces/StepResult.md)[]\>

Defined in: api/pipelines/run.ts:15

Execute a sequence of pipeline services.

Behavior:
- Runs services sequentially; each service receives the previous StepResult (if any).
- On error, pushes an error result and stops the pipeline.
- Each successful result is augmented with an `order` index starting at 1.

## Parameters

### steps

[`StepService`](../../services/step.service/classes/StepService.md)[]

Instantiated services to execute in order.

## Returns

`Promise`\<[`StepResult`](../../../models/pipelines/interfaces/StepResult.md)[]\>

Ordered list of results; if an error occurs, the last element holds error/errorStack and execution stops.
