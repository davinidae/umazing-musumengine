# Item Show Exchange API

Displays the item exchange shop with available trades, exchange limits, and player's exchange history.

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
  data_headers: {
    viewer_id: number; // Player identifier
    sid: string; // Session ID
    servertime: number; // Server timestamp
    result_code: number; // Operation result code
  };
  data: {
    limit_list: {
      item_exchange_id: number; // Exchange option identifier
      exchange_count: number; // Number of times player has used this exchange
      update_time: string; // Last time this exchange was used
    }[];
    disabled_id_array: number[]; // Exchange IDs that are currently disabled
    release_id_array: number[]; // Exchange IDs that have been newly released
    limited_shop_info: {
      limited_exchange_id: number; // Limited shop identifier
      open_flag: number; // Whether limited shop is open (0=closed, 1=open)
      appear_flag: number; // Whether limited shop should appear in UI
      close_time: number; // When limited shop closes (timestamp)
      open_count: number; // Number of times limited shop has been opened
    };
    limited_goods_info_array: unknown[]; // Limited-time items available
  };
};
```
