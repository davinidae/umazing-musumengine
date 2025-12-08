# Mission Index API

Retrieves the complete list of missions for the user, including their progress and completion
status.

## Request Body

```typescript
type MissionIndexRequest = {
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
type MissionIndexResponse = {
  response_code: number;
  data_headers: {
    viewer_id: number; // Player identifier
    sid: string; // Session ID
    servertime: number; // Server timestamp
    result_code: number; // Operation result code
  };
  data: {
    mission_list: {
      mission_id: number; // Unique mission identifier
      exec_count: number; // Current progress count
      mission_status: number; // Mission completion status (1=available, 2=completed, 3=claimed)
      mission_type: number; // Mission category (1=daily, 2=weekly, 3=permanent, 4=event)
      event_id: number; // Associated event ID (0 for regular missions)
    }[];
  };
};
```
