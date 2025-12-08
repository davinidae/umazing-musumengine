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
  data_headers: {
    viewer_id: number; // Player's viewer ID
    sid: string; // Session ID
    servertime: number; // Server timestamp
    result_code: number; // Operation result code
  };
  data: {
    rank: number; // Player's final ranking in the race
    first_clear_reward_array: unknown[]; // Special rewards for first-time completion
    normal_reward_array: {
      item_type: number; // Type/category of reward item
      item_id: number; // Specific item identifier
      item_num: number; // Quantity awarded
    }[];
    rare_reward_array: {
      item_type: number; // Type/category of rare reward item
      item_id: number; // Specific rare item identifier
      item_num: number; // Quantity of rare reward
    }[];
    bonus_reward_array: unknown[]; // Additional bonus rewards
    reward_summary_info: {
      add_item_list: {
        item_id: number; // Item identifier
        number: number; // Quantity received
      }[];
      add_piece_list: unknown[]; // Character pieces received
      add_card_list: unknown[]; // Cards received
      add_card_bonus_info: null; // Card bonus information
      add_support_card_list: unknown[]; // Support cards received
      add_support_card_num_array: unknown[]; // Support card numbers
      add_honor_list: unknown[]; // Honors received
      add_chara_list: unknown[]; // Characters received
      add_cloth_list: unknown[]; // Costumes received
      add_music_list: unknown[]; // Music tracks received
      add_story_id_array: unknown[]; // Story IDs unlocked
      add_fcoin: number; // Friendship coins received
      add_present_num: number; // Number of presents received
      add_total_fan: number; // Total fan count increase
      new_chara_profile_array: unknown[]; // New character profiles
      force_update_honor_id: number; // Honor ID requiring update
    };
    state: number; // Race completion state
    limited_shop_info: {
      limited_exchange_id: number; // Shop identifier
      open_flag: number; // Whether shop is open (1=open, 0=closed)
      appear_flag: number; // Whether shop appears in UI
      close_time: number; // Shop closing timestamp
      open_count: number; // Number of times shop has opened
    };
  };
};
```
