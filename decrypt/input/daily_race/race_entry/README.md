# Daily Race Entry API

Enters a daily race with a selected character and retrieves race setup information including all participating horses.

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
  data_headers: {
    viewer_id: number; // Player's viewer ID
    sid: string; // Session ID
    servertime: number; // Server timestamp
    result_code: number; // Operation result code
  };
  data: {
    race_horse_data_array: {
      frame_order: number; // Starting gate position
      viewer_id: number; // Owner's viewer ID (0 for NPCs)
      trainer_name: string | null; // Owner's trainer name
      owner_viewer_id: number; // Owner identifier
      owner_trainer_name: string; // Owner's display name
      single_mode_chara_id: number; // Single mode character ID
      trained_chara_id: number; // Trained character instance ID
      nickname_id: number; // Character nickname ID
      chara_id: number; // Base character ID
      card_id: number | null; // Character card ID
      mob_id: number; // NPC mob ID (0 for player characters)
      rarity: number; // Character rarity (1-3)
      talent_level: number; // Talent awakening level
      skill_array: {
        skill_id: number; // Skill identifier
        level: number; // Skill level
      }[];
      stamina: number; // Stamina stat
      speed: number; // Speed stat
      pow: number; // Power stat
      guts: number; // Guts stat
      wiz: number; // Wisdom stat
      running_style: number; // Preferred running style (1=front_runners, 2=pace_chasers, 3=late_surgers, 4=end_closers)
      race_dress_id: number; // Costume/outfit ID
      npc_type: number; // NPC type classification
      final_grade: number; // Character grade (8-13+)
      popularity: number; // Race popularity ranking (1-18)
      popularity_mark_rank_array: number[]; // Popularity indicators
      proper_distance_short: number; // Short distance aptitude (1-7)
      proper_distance_mile: number; // Mile distance aptitude (1-7)
      proper_distance_middle: number; // Middle distance aptitude (1-7)
      proper_distance_long: number; // Long distance aptitude (1-7)
      proper_running_style_nige: number; // Front Runner running style aptitude (1-7)
      proper_running_style_senko: number; // Pace Chaser running style aptitude (1-7)
      proper_running_style_sashi: number; // Late Surger running style aptitude (1-7)
      proper_running_style_oikomi: number; // End Closer running style aptitude (1-7)
      proper_ground_turf: number; // Turf ground aptitude (1-7)
      proper_ground_dirt: number; // Dirt ground aptitude (1-7)
      motivation: number; // Current motivation level (1-5)
      win_saddle_id_array: number[]; // Won race/saddle IDs
      race_result_array: {
        turn: number; // Training turn when race occurred
        program_id: number; // Race program identifier
        weather: number; // Weather condition
        ground_condition: number; // Ground condition
        running_style: number; // Running style used (1=front_runners, 2=pace_chasers, 3=late_surgers, 4=end_closers)
        popularity: number; // Popularity in that race
        result_rank: number; // Final race placement
        result_time: number; // Race completion time
        prize_money: number; // Prize money earned
      }[];
      team_id: number; // Team identifier
      team_member_id: number; // Team member position
      team_rank: number; // Team ranking
      item_id_array: number[]; // Equipment item IDs
      motivation_change_flag: number; // Motivation change indicator
      frame_order_change_flag: number; // Gate position change indicator
    }[];
    season: number; // Current season
    weather: number; // Weather condition
    ground_condition: number; // Track condition
    random_seed: number; // Random seed for race simulation
    race_instance_id: number; // Unique race instance identifier
    state: number; // Race state
    trained_chara_id: number; // Player's entered character ID
  };
};
```
