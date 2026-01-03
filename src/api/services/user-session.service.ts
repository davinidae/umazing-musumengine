import { AttestationType, AuthModeKind, DeviceType } from '../models';
import type { AuthMode, UmaData, RequestBase } from '../models';
import { randomUUID } from 'crypto';
import { createUmaClient } from './uma-client.service';
import { AuthKey, Udid } from '../../lib';
import type { UmaClient } from './uma-client.service';
import { STEAM_APP_ID } from '../../constants';
import SteamUser from 'steam-user';

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

  /**
   * constructor.
   * @param cfg - Type: `Partial<{ udid: Udid; authKey: AuthKey; base: RequestBase; }>`.
   * @param auth - Type: `AuthMode`.
   * @returns Type: `UserSession`.
   */
  constructor(
    private readonly umaData: UmaData = {},
    private readonly auth: AuthMode = {
      kind: AuthModeKind.MOBILE,
      deviceType: DeviceType.ANDROID,
      attestationType: AttestationType.Mobile,
    },
  ) {
    //
  }

  public steamSessionTicket: string | null = null;

  /**
   * getDefaultBase.
   * @param deviceType - Type: `number`.
   * @returns Type: `RequestBase`.
   */
  getDefaultBase(deviceType: number): RequestBase {
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
      device: deviceType,
      device_id: randomUUID().replace(/-/g, ''),
      dmm_onetime_token: null,
      dmm_viewer_id: null,
      keychain: 0,
      locale: 'JPN',
      viewer_id: this.umaData.trainerId ?? 0,
    };
    switch (deviceType) {
      case DeviceType.ANDROID: {
        return {
          ...common,
          device_name: 'OnePlus HD 542',
          graphics_device_name: 'Adreno (TM) 640',
          ip_address: '192.168.1.100',
          platform_os_version: 'Windows 10  (10.0.19045) 64bit',
          steam_id: null,
          steam_session_ticket: null,
        };
      }
      case DeviceType.PC: {
        return {
          ...common,
          device_name: 'System Product Name (ASUS)',
          graphics_device_name: 'NVIDIA GeForce RTX 3080',
          ip_address: '192.168.1.42',
          platform_os_version: 'Windows 11  (10.0.26200) 64bit',
          steam_id: this.umaData.steamId?.toString() ?? null,
          steam_session_ticket: this.steamSessionTicket ?? null,
        };
      }
      default: {
        throw new Error(`Unsupported device type: ${deviceType}`);
      }
    }
  }

  /**
   * resolveUdid.
   * @returns Type: `Udid`.
   */
  private resolveUdid(): Udid {
    return new Udid(this.umaData.udid ?? randomUUID());
  }

  /**
   * resolveDeviceType.
   * @returns Type: `number`.
   */
  private resolveDeviceType(): number {
    return this.auth.kind === AuthModeKind.STEAM ? DeviceType.PC : this.auth.deviceType;
  }

  /**
   * resolveBase.
   * @param deviceType - Type: `number`.
   * @returns Type: `RequestBase`.
   */
  private resolveBase(deviceType: number): RequestBase {
    return this.getDefaultBase(deviceType);
  }

  public getAuthKey() {
    return this.umaData.authKey != null
      ? new AuthKey(Buffer.from(this.umaData.authKey, 'base64'))
      : undefined;
  }

  logInSteam() {
    if (this.umaData.steamId == null) {
      return;
    }
    return new Promise<void>((resolve) => {
      this.steamUser.on('loggedOn', () => {
        this.steamUser.createAuthSessionTicket(STEAM_APP_ID, (obj) => {
          this.steamSessionTicket = obj.sessionTicket.toString('base64');
          resolve();
        });
      });
      this.steamUser.logOn({
        anonymous: true,
        steamID: this.umaData.steamId?.toString(),
      });
    });
  }

  /**
   * initialize (async).
   * @returns Type: `Promise<UmaClient>`.
   */
  async initialize(): Promise<UmaClient> {
    if (this.auth.kind === AuthModeKind.STEAM) {
      await this.logInSteam();
    }
    /**
     * udid.
     * @remarks Type: `Udid`.
     * @defaultValue `this.resolveUdid()`
     */
    const udid = this.resolveUdid();
    /**
     * deviceType.
     * @remarks Type: `number`.
     * @defaultValue `this.resolveDeviceType()`
     */
    const deviceType = this.resolveDeviceType();
    /**
     * base.
     * @remarks Type: `RequestBase`.
     * @defaultValue `this.resolveBase(deviceType)`
     */
    const base: RequestBase = this.resolveBase(deviceType);
    if (this.auth.kind === AuthModeKind.STEAM) {
      //this.assertSteamBase(base);
    }
    /**
     * client.
     * @remarks Type: `UmaClient`.
     * @defaultValue `createUmaClient( this.auth, udid, this.cfg.authKey, base, this.resVer, this.baseUrl, )`
     */
    const authKey = this.getAuthKey();
    const client = createUmaClient(
      this.auth,
      udid,
      authKey,
      base,
      this.resVer,
      this.baseUrl,
      this.umaData,
      this,
    );
    return client;
  }
}
