import type { APIGatewayProxyEventV2 } from 'aws-lambda';
import { Blob1Json } from '../../lib/decrypt/utils/request-context.util';
import { UmaClient } from '../services/uma-client.service';
import { UserSession } from '../services/user-session.service';

export type HttpEvent<T = unknown> = Omit<APIGatewayProxyEventV2, 'body'> & {
  body: T | null;
};

export type UmaData = Partial<{
  viewerId: Blob1Json['viewer_id'];
  authKey: Blob1Json['auth_key'];
  udidRaw: Blob1Json['udid_raw'];
  steamId: string;
  steamSessionTicket: string;
}>;

export type UserData = {
  userId: string;
};

/**
 * A `UserSession` where `client` is guaranteed to be initialized.
 */
export type InitializedUserSession = UserSession & { client: UmaClient };
