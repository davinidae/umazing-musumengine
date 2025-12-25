# Daily Race - Replay Check Endpoint

Submits race results and receives rewards based on race performance.

## Request Body

```typescript
type DailyRaceReplayCheckRequest = {
  race_result_array: {
    viewer_id: number; // Participant's viewer ID (0 for NPCs, actual ID for player)
    finish_order: number; // Final position in the race (1 = first place)
    finish_time: number; // Total race time including modifiers
    finish_time_raw: number; // Raw race time without modifiers
    bashin_diff_from_behind: number; // Distance behind the leader
  }[];
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
type DailyRaceReplayCheckResponse = {
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
  rank: number;
  first_clear_reward_array: any[];
  normal_reward_array: NormalRewardArray[];
  rare_reward_array: RareRewardArray[];
  bonus_reward_array: any[];
  reward_summary_info: RewardSummaryInfo;
  state: number;
  limited_shop_info: LimitedShopInfo;
}

export interface NormalRewardArray {
  item_type: number;
  item_id: number;
  item_num: number;
}

export interface RareRewardArray {
  item_type: number;
  item_id: number;
  item_num: number;
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

export interface LimitedShopInfo {
  limited_exchange_id: number;
  open_flag: number;
  appear_flag: number;
  close_time: number;
  open_count: number;
}
```
