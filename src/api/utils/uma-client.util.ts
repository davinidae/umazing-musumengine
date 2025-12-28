import { RequestBase } from '../models';

export function defaultRequestBase(): RequestBase {
  return {
    carrier: '',
    device: 2,
    device_id: '',
    device_name: 'Good Computer',
    dmm_onetime_token: null,
    dmm_viewer_id: null,
    graphics_device_name: 'Colorful Fish',
    ip_address: '192.168.252.100',
    keychain: 0,
    locale: 'JPN',
    platform_os_version: 'Windows 10 (10.0.19045) 64bit',
    viewer_id: 0,
    steam_id: null,
    steam_session_ticket: null,
  };
}
