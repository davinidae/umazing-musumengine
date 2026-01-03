import { AttestationType, AuthModeKind, DeviceType } from '../models';
import type { AuthMode, UmaData, RequestBase } from '../models';
import { randomUUID } from 'crypto';
import { createUmaClient } from './uma-client.service';
import { AuthKey, Udid } from '../../lib';
import type { UmaClient } from './uma-client.service';

/**
 * UserSession.
 */
export class UserSession {
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

  /**
   * getDefaultBase.
   * @param deviceType - Type: `number`.
   * @returns Type: `RequestBase`.
   */
  getDefaultBase(deviceType: number): RequestBase {
    switch (deviceType) {
      case DeviceType.ANDROID: {
        return {
          carrier: '',
          device: deviceType,
          device_id: randomUUID().replace(/-/g, ''),
          device_name: 'OnePlus HD 542',
          dmm_onetime_token: null,
          dmm_viewer_id: null,
          graphics_device_name: 'Adreno (TM) 640',
          ip_address: '192.168.1.100',
          keychain: 0,
          locale: 'JPN',
          platform_os_version: 'Windows 10  (10.0.19045) 64bit',
          viewer_id: this.umaData.trainerId ?? 0,
        };
      }
      case DeviceType.PC: {
        return {
          carrier: '',
          device: deviceType,
          device_id: randomUUID().replace(/-/g, ''),
          device_name: 'System Product Name (ASUS)',
          dmm_onetime_token: null,
          dmm_viewer_id: null,
          graphics_device_name: 'NVIDIA GeForce RTX 3080',
          ip_address: '192.168.1.42',
          keychain: 0,
          locale: 'JPN',
          platform_os_version: 'Windows 11  (10.0.26200) 64bit',
          viewer_id: this.umaData.trainerId ?? 0,
          steam_id: this.umaData.steamId?.toString() ?? '00000000000000000',
          steam_session_ticket: '00000000000000000000000000000000000000000000000000000000000000000',
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

  /**
   * assertSteamBase.
   * @param base - Type: `RequestBase`.
   */
  private assertSteamBase(base: RequestBase): void {
    if (base.steam_id && base.steam_session_ticket) {
      return;
    }
    throw new Error(
      'Steam auth requires cfg.base.steam_id and cfg.base.steam_session_ticket (ticket generation not implemented in TS port)',
    );
  }

  public getAuthKey() {
    return this.umaData.authKey != null
      ? new AuthKey(Buffer.from(this.umaData.authKey, 'base64'))
      : undefined;
  }

  /**
   * initialize (async).
   * @returns Type: `Promise<UmaClient>`.
   */
  async initialize(): Promise<UmaClient> {
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
    const client = createUmaClient(this.auth, udid, authKey, base, this.resVer, this.baseUrl);
    return client;
  }
}
