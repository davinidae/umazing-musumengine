import type { APIGatewayProxyEventV2 } from 'aws-lambda';

export type HttpEvent<T = unknown> = Omit<APIGatewayProxyEventV2, 'body'> & {
  body: T | null;
};
