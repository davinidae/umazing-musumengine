import { AttestationType, AuthModeKind, DeviceType } from '../models';
import type { AuthMode, ClientConfig, RequestBase } from '../models';
import { randomUUID } from 'crypto';
import { createUmaClient } from './uma-client.service';
import { Udid } from '../../lib';
import type { UmaClient } from './uma-client.service';

export class UserSession {
  public resVer = '10002800';
  public baseUrl = 'https://api.games.umamusume.com/umamusume/';

  constructor(
    private readonly cfg: ClientConfig = {},
    private readonly auth: AuthMode = {
      kind: AuthModeKind.MOBILE,
      deviceType: DeviceType.ANDROID,
      attestationType: AttestationType.Mobile,
    },
  ) {
    //
  }

  getDefaultBase(deviceType: number): RequestBase {
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
      viewer_id: 0,
      steam_id: null,
      steam_session_ticket: null,
    };
  }

  private resolveUdid(): Udid {
    return this.cfg.udid ?? new Udid(randomUUID());
  }

  private resolveDeviceType(): number {
    return this.auth.kind === AuthModeKind.STEAM ? 4 : this.auth.deviceType;
  }

  private resolveBase(deviceType: number): RequestBase {
    return this.cfg.base ?? this.getDefaultBase(deviceType);
  }

  private assertSteamBase(base: RequestBase): void {
    if (base.steam_id && base.steam_session_ticket) {
      return;
    }
    throw new Error(
      'Steam auth requires cfg.base.steam_id and cfg.base.steam_session_ticket (ticket generation not implemented in TS port)',
    );
  }

  async initialize(): Promise<UmaClient> {
    const udid = this.resolveUdid();
    const deviceType = this.resolveDeviceType();
    const base: RequestBase = this.resolveBase(deviceType);
    if (this.auth.kind === AuthModeKind.STEAM) {
      this.assertSteamBase(base);
    }
    const client = createUmaClient(
      this.auth,
      udid,
      this.cfg.authKey,
      base,
      this.resVer,
      this.baseUrl,
    );
    return client;
  }
}
