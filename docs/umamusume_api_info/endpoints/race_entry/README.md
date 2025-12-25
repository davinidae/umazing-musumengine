# Race Entry Endpoint

## Request Body

```typescript
type RaceEntryRequest = {
  daily_race_id: number;
  trained_chara_id: number;
  viewer_id: number;
  device: number;
  device_id: string;
  device_name: string;
  graphics_device_name: string;
  ip_address: string;
  platform_os_version: string;
  carrier: string;
  keychain: number;
  locale: string;
  dmm_viewer_id: null;
  dmm_onetime_token: null;
  steam_id: string;
  steam_session_ticket: string;
};
```

## Response Body

```typescript
type RaceEntryResponse = {
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
