# Mission Receive API

Claims rewards from completed missions. Allows claiming single missions or multiple missions in one
request.

## Request Body

```typescript
type MissionReceiveRequest = {
  mission_id_array: number[]; // Array of mission IDs to claim rewards from
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
type MissionReceiveResponse = {
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
  reward_summary_info: RewardSummaryInfo;
  updated_mission_array: UpdatedMissionArray[];
}

export interface RewardSummaryInfo {
  add_item_list: AddItemList[];
  add_piece_list: any[];
  add_card_list: any[];
  add_card_bonus_info: any;
  add_support_card_list: any[];
  add_support_card_num_array: any[];
  add_honor_list: any[];
  add_chara_list: any[];
  add_cloth_list: any[];
  add_music_list: any[];
  add_story_id_array: any[];
  add_fcoin: number;
  add_present_num: number;
  add_total_fan: number;
  new_chara_profile_array: any[];
  force_update_honor_id: number;
}

export interface AddItemList {
  item_id: number;
  number: number;
}

export interface UpdatedMissionArray {
  mission_id: number;
  exec_count: number;
  mission_status: number;
}
```
