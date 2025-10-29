# Story Event Index API

Retrieves current story event information, including user progress, missions, and available rewards.

## Request Body

```typescript
type StoryEventIndexRequest = {

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
type StoryEventIndexResponse = {

  response_code: number;
  data_headers: {

    viewer_id: number; // Player's viewer ID
    sid: string; // Session ID
    servertime: number; // Server timestamp
    result_code: number; // Operation result code
  };
  data: {

    event_id: number; // Current story event identifier
    event_user_info: {

      event_point: number; // Event points accumulated
      roulette_coin_num: number; // Roulette coins available for spinning
      roulette_sheet_num: number; // Current roulette sheet number
    };
    mission_list: {

      mission_id: number; // Unique mission identifier
      exec_count: number; // Current progress count
      mission_status: number; // Mission completion status (0=not_started, 1=in_progress, 2=completed)
      mission_type: number; // Mission category (1=daily, 4=event_specific)
      event_id: number; // Associated event ID (0 for general missions)
    }[];
  };
}
```
