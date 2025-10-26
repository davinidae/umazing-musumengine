# Daily Race - Race Start Endpoint

Initiates a daily race with specified running style and distance settings.

## Request Body

```typescript
type DailyRaceStartRequest = {
  running_style: number; // Running style preference (1=escape, 2=leading, 3=stalker, 4=chaser)
  is_short: number; // Race distance type (1=short distance, 0=other distances)
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
}
```

## Response Body

```typescript
type DailyRaceStartResponse = {
  response_code: number;
  data_headers: {
    viewer_id: number; // Player's viewer ID
    sid: string; // Session ID
    servertime: number; // Server timestamp
    result_code: number; // Operation result code
    notifications: {
      mission: {
        mission_id: number; // Mission identifier
        exec_count: number; // Current execution count
        mission_status: number; // Mission status (1=in progress)
      }[];
    };
  };
  data: {
    race_scenario: string; // Compressed race scenario data (base64 encoded)
    state: number; // Race state identifier
    running_style: number; // Confirmed running style for the race
  };
}
```
