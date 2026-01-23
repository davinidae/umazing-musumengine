import type {
  AuthMode,
  UmaData,
  InitializedUserSession,
  RequestResult,
  RequestBase,
} from '../models';
import { randomUUID, UUID } from 'crypto';
import { AuthKey, Udid } from '../../lib';
import { UmaClient } from './uma-client.service';
import { RES_VERSION } from '../../constants';
import { Client } from 'steamworks.js';

/**
 * UserSession.
 */
export class UserSession {
  /**
   * resVer.
   * @remarks Type: `string`.
   * @defaultValue `'10002800'`
   */
  public resVer = RES_VERSION;
  /**
   * baseUrl.
   * @remarks Type: `string`.
   * @defaultValue `'https://api.games.umamusume.com/umamusume/'`
   */
  public baseUrl = 'https://api.games.umamusume.com/umamusume/';

  public readonly udid: Udid;
  public readonly authKey: AuthKey | undefined;

  public userId = randomUUID();

  public carrier: RequestBase['carrier'];
  public device: RequestBase['device'];
  public device_id: RequestBase['device_id'];
  public keychain: RequestBase['keychain'];
  public locale: RequestBase['locale'];
  public viewer_id: RequestBase['viewer_id'];
  public dmm_onetime_token: RequestBase['dmm_onetime_token'];
  public dmm_viewer_id: RequestBase['dmm_viewer_id'];
  public device_name: RequestBase['device_name'];
  public graphics_device_name: RequestBase['graphics_device_name'];
  public ip_address: RequestBase['ip_address'];
  public platform_os_version: RequestBase['platform_os_version'];
  public steam_id: RequestBase['steam_id'];
  public steam_session_ticket: RequestBase['steam_session_ticket'];

  /**
   * constructor.
   * @param cfg - Type: `Partial<{ udid: Udid; authKey: AuthKey; base: RequestBase; }>`.
   * @param auth - Type: `AuthMode`.
   * @returns Type: `UserSession`.
   */
  constructor(
    public readonly umaData: UmaData,
    public readonly auth: AuthMode,
    public readonly steamClient: Client,
    public readonly userIdOverride?: UUID,
    public readonly lastResult?: RequestResult,
  ) {
    this.carrier = '';
    this.device = auth.deviceType;
    this.device_id = randomUUID().replace(/-/g, '');
    this.keychain = 0;
    this.locale = 'JPN';
    this.viewer_id = umaData.viewerId ?? 0;
    this.dmm_onetime_token = null;
    this.dmm_viewer_id = null;
    this.device_name = 'System Product Name (ASUS)';
    this.graphics_device_name = 'NVIDIA GeForce RTX 3080';
    this.ip_address = '192.168.1.42';
    this.platform_os_version = 'Windows 11  (10.0.26200) 64bit';
    this.steam_id = null;
    this.steam_session_ticket = null;
    this.userId = userIdOverride ?? randomUUID();
    this.udid = new Udid(umaData.udidRaw ?? randomUUID());
    if (this.umaData.authKey != null) {
      this.authKey = new AuthKey(Buffer.from(this.umaData.authKey, 'hex'));
    }
  }

  async resolveSteamSessionTicket(): Promise<void> {
    if (!this.umaData.useSteam) {
      return;
    }
    const steamId = await this.steamClient.localplayer.getSteamId();
    const sessionTicket = await this.steamClient.auth.getSessionTicketWithSteamId(
      steamId.steamId64,
    );
    this.steam_id = steamId.steamId64.toString();
    this.steam_session_ticket = sessionTicket.getBytes().toString('hex');
  }

  public client: UmaClient | undefined;

  /**
   * Returns `true` if this session has an initialized `UmaClient`.
   */
  hasClient(): this is InitializedUserSession {
    return this.client != null;
  }

  /**
   * initialize (async).
   * @returns Type: `Promise<UmaClient>`.
   */
  async initialize(): Promise<UmaClient> {
    await this.resolveSteamSessionTicket();
    this.client = new UmaClient(this);
    return this.client;
  }
}

/**
 * Narrow a `UserSession` to an initialized session.
 */
export function assertInitializedUserSession(
  session: UserSession,
): asserts session is InitializedUserSession {
  if (session?.client == null) {
    throw new Error('Session client is not initialized');
  }
}
