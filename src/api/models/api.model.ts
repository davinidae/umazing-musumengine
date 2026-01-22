import type { APIGatewayProxyEventV2 } from 'aws-lambda';
import { Blob1Json } from '../../lib/decrypt/utils/request-context.util';
import { UmaClient } from '../services/uma-client.service';
import { UserSession } from '../services/user-session.service';
import { UUID } from 'crypto';

export type HttpEvent<T = unknown> = Omit<APIGatewayProxyEventV2, 'body'> & {
  body: T | null;
};

export type UmaData = {
  viewerId: Blob1Json['viewer_id'];
  authKey: Blob1Json['auth_key'];
  udidRaw: Blob1Json['udid_raw'];
  useSteam: boolean;
};

export type UserData = {
  userId: UUID;
};

/**
 * A `UserSession` where `client` is guaranteed to be initialized.
 */
export type InitializedUserSession = UserSession & { client: UmaClient };
