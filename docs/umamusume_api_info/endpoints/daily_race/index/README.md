# Daily Race Index API

Retrieves the player's daily race records and purchase status. Shows which daily races have been
played and cleared.

## Request Body

```typescript
type DailyRaceIndexRequest = {
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
  dmm_viewer_id: number | null; // DMM platform ID (null for Steam)
  dmm_onetime_token: string | null; // DMM authentication token (null for Steam)
  steam_id: string; // Steam user identifier
  steam_session_ticket: string; // Steam authentication ticket
};
```

## Response Body

```typescript
type DailyRaceIndexResponse = {
  response_code: number;
  data_headers: DataHeaders;
  data: Data;
};

export interface DataHeaders {
  viewer_id: number;
  sid: string;
  servertime: number;
  result_code: number;
  notifications: Notifications;
}

export interface Notifications {
  room_match_race_result_num: number;
}

export interface Data {
  daily_race_record_array: DailyRaceRecordArray[];
  purchase_num: number;
}

export interface DailyRaceRecordArray {
  daily_race_id: number;
  is_cleared: number;
  is_played: number;
}
```
