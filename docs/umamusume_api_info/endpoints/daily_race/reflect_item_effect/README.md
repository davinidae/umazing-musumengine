# Daily Race - Reflect Item Effect API

Applies item effects during daily race gameplay.

## Request Body

```typescript
type DailyRaceReflectItemEffectRequest = {
  item_id_array: number[]; // Array of item IDs to apply effects for (can be empty)
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
type DailyRaceReflectItemEffectResponse = {
  response_code: number;
  data_headers: {
    viewer_id: number; // Player identifier
    sid: string; // Session ID
    servertime: number; // Server timestamp
    result_code: number; // Operation result code
  };
  data: {
    weather: null; // Weather conditions for the race (null if unchanged)
    ground_condition: null; // Track condition (null if unchanged)
    race_horse_data_array: null; // Horse performance data (null if unchanged)
    item_info_array: {
      item_id: number; // Item identifier
      number: number; // Quantity available
    }[]; // Items available or consumed
    state: number; // Current race state
  };
};
```
