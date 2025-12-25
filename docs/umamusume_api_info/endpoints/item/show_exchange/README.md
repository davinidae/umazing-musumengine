# Item Show Exchange API

Displays the item exchange shop with available trades, exchange limits, and player's exchange
history.

## Request Body

```typescript
type ItemShowExchangeRequest = {
  viewer_id: number; // Player identifier
  device: number; // Device type identifier
  device_id: string; // Unique device identifier
  device_name: string; // Human-readable device name
  graphics_device_name: string; // Graphics card information
  ip_address: string; // Client IP address
  platform_os_version: string; // Operating system version
  carrier: string; // Mobile carrier (empty for PC)
  keychain: number; // Keychain access flag
  locale: string; // Language/region setting
  dmm_viewer_id: null; // DMM platform ID (null for Steam)
  dmm_onetime_token: null; // DMM authentication token (null for Steam)
  steam_id: string; // Steam user identifier
  steam_session_ticket: string; // Steam authentication ticket
};
```

## Response Body

```typescript
type ItemShowExchangeResponse = {
  response_code: number;
  data_headers: DataHeaders;
  data: Data;
};

export interface DataHeaders {
  viewer_id: number;
  sid: string;
  servertime: number;
  result_code: number;
}

export interface Data {
  limit_list: LimitList[];
  disabled_id_array: any[];
  release_id_array: any[];
  limited_shop_info: LimitedShopInfo;
  limited_goods_info_array: any[];
}

export interface LimitList {
  item_exchange_id: number;
  exchange_count: number;
  update_time: string;
}

export interface LimitedShopInfo {
  limited_exchange_id: number;
  open_flag: number;
  appear_flag: number;
  close_time: number;
  open_count: number;
}
```
