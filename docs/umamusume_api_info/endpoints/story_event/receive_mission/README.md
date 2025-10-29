# Story Event - Receive Mission Endpoint

Allows players to claim rewards for completed story event missions.

## Request Body

```typescript
type StoryEventReceiveMissionRequest = {

  mission_id_array: number[]; // Array of mission IDs to claim rewards for
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
type StoryEventReceiveMissionResponse = {

  response_code: number;
  data_headers: {

    viewer_id: number; // Player's viewer ID
    sid: string; // Session ID
    servertime: number; // Server timestamp
    result_code: number; // Operation result code
  };
  data: {

    reward_summary_info: {

      add_item_list: unknown[]; // Items received
      add_piece_list: unknown[]; // Character pieces received
      add_card_list: unknown[]; // Cards received
      add_card_bonus_info: unknown | null; // Card bonus information
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
    updated_mission_array: {

      mission_id: number; // Mission identifier
      exec_count: number; // Number of times mission was executed
      mission_status: number; // Mission completion status (2=completed)
    }[];
    add_event_point: number; // Event points received
    add_roulette_coin_num: number; // Roulette coins received
    new_story_id_list: unknown[]; // New story IDs unlocked
  };
}
```
