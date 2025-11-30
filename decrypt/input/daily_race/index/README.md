# Daily Race Index API

Retrieves the player's daily race records and purchase status. Shows which daily races have been played and cleared.

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
  data_headers: {
    viewer_id: number; // Confirmed user ID
    sid: string; // Session identifier
    servertime: number; // Server timestamp
    result_code: number; // Operation result
    notifications: {
      room_match_race_result_num: number; // Number of pending room match results
    };
  };
  data: {
    daily_race_record_array: {
      daily_race_id: number; // Unique daily race identifier
      is_cleared: number; // Whether race was successfully completed (1=cleared, 0=not cleared)
      is_played: number; // Whether race was attempted (1=played, 0=not played)
    }[];
    purchase_num: number; // Number of additional race attempts purchased
  };
};
```
