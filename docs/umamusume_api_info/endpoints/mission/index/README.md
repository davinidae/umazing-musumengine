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
  mission_list: MissionList[];
}

export interface MissionList {
  mission_id: number;
  exec_count: number;
  mission_status: number;
  mission_type: number;
  event_id: number;
}
```
