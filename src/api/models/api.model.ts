import { APIGatewayProxyEventV2 } from 'aws-lambda';

export type HttpEvent<T = Record<string, unknown>> = Omit<APIGatewayProxyEventV2, 'body'> & {
  body: T | null;
};

export type StoredData =
  | {
      udid: string;
      viewerId: number;
      authKey: string;
    }
  | undefined;
