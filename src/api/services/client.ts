import {
  AttestationType,
  AuthMode,
  AuthModeKind,
  ClientConfig,
  DeviceType,
  RequestBase,
} from '../models';
import { randomUUID } from 'crypto';
import { sleep, Udid } from '../utils';
import { UmaClient } from './uma-client.service';

export class Client {
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

  getDefaultInitBase(deviceType: number): RequestBase {
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

  async initialize() {
    const udid = this.cfg.udid ?? new Udid(randomUUID());
    const deviceType = this.auth.kind === 'steam' ? 4 : this.auth.deviceType;
    const attestationType = this.auth.kind === 'steam' ? 0 : this.auth.attestationType;
    const base: RequestBase = this.cfg.base ?? this.getDefaultInitBase(deviceType);
    if (this.auth.kind === 'steam') {
      if (!base.steam_id || !base.steam_session_ticket) {
        throw new Error(
          'Steam auth requires cfg.base.steam_id and cfg.base.steam_session_ticket (ticket generation not implemented in TS port)',
        );
      }
    }
    const client = UmaClient.create(udid, this.cfg.authKey, base);
    if (client.base.viewer_id !== 0 && client.header.authKey) {
      // already signed up
    } else {
      await client.signup();
    }
    client.regenSessionId();
    const startSessionRes = await client.startSession(attestationType);
    await client.loadIndex();
    await sleep(2000);
    const isTutorial = Boolean(startSessionRes.data?.is_tutorial);
    if (isTutorial) {
      await client.request('user/change_sex', { sex: 1 });
      await client.request('user/change_name', { name: 'Carrot Liker' });
      await client.request('tutorial/skip', {});
    }
    await client.loadIndex();
  }
}
