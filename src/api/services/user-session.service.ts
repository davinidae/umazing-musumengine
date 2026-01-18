import type { AuthMode, UmaData, RequestBase } from '../models';
import { randomUUID } from 'crypto';
import { createUmaClient } from './uma-client.service';
import { AuthKey, Udid } from '../../lib';
import type { UmaClient } from './uma-client.service';
import SteamUser from 'steam-user';
import steamworks from 'steamworks.js';
import { STEAM_APP_ID } from '../../constants';

/**
 * UserSession.
 */
export class UserSession {
  steamUser = new SteamUser();

  /**
   * resVer.
   * @remarks Type: `string`.
   * @defaultValue `'10002800'`
   */
  public resVer = '10002800';

  /**
   * baseUrl.
   * @remarks Type: `string`.
   * @defaultValue `'https://api.games.umamusume.com/umamusume/'`
   */
  public baseUrl = 'https://api.games.umamusume.com/umamusume/';

  public readonly udid: Udid;
  public readonly authKey: AuthKey | undefined;

  /**
   * constructor.
   * @param cfg - Type: `Partial<{ udid: Udid; authKey: AuthKey; base: RequestBase; }>`.
   * @param auth - Type: `AuthMode`.
   * @returns Type: `UserSession`.
   */
  constructor(
    private readonly umaData: UmaData,
    private readonly auth: AuthMode,
  ) {
    this.udid = new Udid(umaData.udidCanonical ?? randomUUID());
    if (this.umaData.authKeyHex != null) {
      this.authKey = new AuthKey(Buffer.from(this.umaData.authKeyHex, 'hex'));
    } else if (this.umaData.authKeyB64 != null) {
      this.authKey = new AuthKey(Buffer.from(this.umaData.authKeyB64, 'base64'));
    }
  }

  /**
   * getBase.
   * @param deviceType - Type: `number`.
   * @returns Type: `RequestBase`.
   */
  getBase(): RequestBase {
    const common: Omit<
      RequestBase,
      | 'device_name'
      | 'graphics_device_name'
      | 'ip_address'
      | 'platform_os_version'
      | 'steam_id'
      | 'steam_session_ticket'
    > = {
      carrier: '',
      device: this.auth.deviceType,
      device_id: randomUUID().replace(/-/g, ''),
      keychain: 0,
      locale: 'JPN',
      viewer_id: this.umaData.viewerId ?? 0,
      dmm_onetime_token: null,
      dmm_viewer_id: null,
    };
    return {
      ...common,
      device_name: 'System Product Name (ASUS)',
      graphics_device_name: 'NVIDIA GeForce RTX 3080',
      ip_address: '192.168.1.42',
      platform_os_version: 'Windows 11  (10.0.26200) 64bit',
      steam_id: this.umaData.steamId ?? null,
      steam_session_ticket: this.umaData.steamSessionTicket ?? null,
    };
  }

  async resolveSteamSessionTicket(): Promise<void> {
    if (this.umaData.steamId == null || this.umaData.steamSessionTicket != null) {
      return;
    }
    const client = steamworks.init(STEAM_APP_ID);
    const sessionTicket = await client.auth.getSessionTicketWithSteamId(
      BigInt(this.umaData.steamId),
    );
    this.umaData.steamSessionTicket = sessionTicket.getBytes().toString('hex');
  }

  /**
   * initialize (async).
   * @returns Type: `Promise<UmaClient>`.
   */
  async initialize(): Promise<UmaClient> {
    await this.resolveSteamSessionTicket();
    const client = createUmaClient(
      this.auth,
      this.udid,
      this.authKey,
      this.getBase(),
      this.resVer,
      this.baseUrl,
      this.umaData,
      this,
    );
    return client;
  }
}
