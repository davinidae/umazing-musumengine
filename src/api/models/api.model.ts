import type { APIGatewayProxyEventV2 } from 'aws-lambda';
import { Blob1Json } from '../../lib/decrypt/utils/request-context.util';

export type HttpEvent<T = unknown> = Omit<APIGatewayProxyEventV2, 'body'> & {
  body: T | null;
};

export type UmaData = Partial<{
  // viewerId = trainerId
  viewerId: Blob1Json['viewer_id'];
  // authKey in hex format
  authKey: Blob1Json['auth_key'];
  udidRaw: Blob1Json['udid_raw'];
  steamId: string;
  steamSessionTicket: string;
}>;
