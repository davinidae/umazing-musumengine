import type { APIGatewayProxyEventV2 } from 'aws-lambda';

export type HttpEvent<T = unknown> = Omit<APIGatewayProxyEventV2, 'body'> & {
  body: T | null;
};

export type UmaData = Partial<{
  trainerId?: number;
  udid?: string;
  authKey?: string;
}>;
