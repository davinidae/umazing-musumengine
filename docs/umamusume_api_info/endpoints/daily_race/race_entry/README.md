# Daily Race Entry API

Enters a daily race with a selected character and retrieves race setup information including all
participating horses.

## Request Body

```typescript
type DailyRaceEntryRequest = {
  daily_race_id: number; // Daily race identifier
  trained_chara_id: number; // Player's trained character ID to enter in the race
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
type DailyRaceEntryResponse = {
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
  race_horse_data_array: RaceHorseDataArray[];
  season: number;
  weather: number;
  ground_condition: number;
  random_seed: number;
  race_instance_id: number;
  state: number;
  trained_chara_id: number;
}

export interface RaceHorseDataArray {
  frame_order: number;
  viewer_id: number;
  trainer_name?: string;
  owner_viewer_id: number;
  owner_trainer_name: string;
  single_mode_chara_id: number;
  trained_chara_id: number;
  nickname_id: number;
  chara_id: number;
  card_id?: number;
  mob_id: number;
  rarity: number;
  talent_level: number;
  skill_array: SkillArray[];
  stamina: number;
  speed: number;
  pow: number;
  guts: number;
  wiz: number;
  running_style: number;
  race_dress_id: number;
  npc_type: number;
  final_grade: number;
  popularity: number;
  popularity_mark_rank_array: number[];
  proper_distance_short: number;
  proper_distance_mile: number;
  proper_distance_middle: number;
  proper_distance_long: number;
  proper_running_style_nige: number;
  proper_running_style_senko: number;
  proper_running_style_sashi: number;
  proper_running_style_oikomi: number;
  proper_ground_turf: number;
  proper_ground_dirt: number;
  motivation: number;
  win_saddle_id_array: number[];
  race_result_array: RaceResultArray[];
  team_id: number;
  team_member_id: number;
  team_rank: number;
  item_id_array: any[];
  motivation_change_flag: number;
  frame_order_change_flag: number;
}

export interface SkillArray {
  skill_id: number;
  level: number;
}

export interface RaceResultArray {
  turn: number;
  program_id: number;
  weather: number;
  ground_condition: number;
  running_style: number;
  popularity: number;
  result_rank: number;
  result_time: number;
  prize_money: number;
}
```
