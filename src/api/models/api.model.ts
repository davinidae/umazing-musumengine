import type { APIGatewayProxyEventV2 } from 'aws-lambda';

export type HttpEvent<T = unknown> = Omit<APIGatewayProxyEventV2, 'body'> & {
  body: T | null;
};

export type UmaData = Partial<{
  // viewerId = trainerId
  viewerId: number;
  udidCanonical: string;
  authKeyHex: string;
  authKeyB64: string;
  steamId: number;
  steamSessionTicket: string;
}>;
