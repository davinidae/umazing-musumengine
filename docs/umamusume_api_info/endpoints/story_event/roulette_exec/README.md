# Story Event - Roulette Exec Endpoint

Executes a story event roulette spin using roulette coins.

## Request Body

```typescript
type StoryEventRouletteExecRequest = {

  roulette_coin_num: number; // Number of roulette coins to spend
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
type StoryEventRouletteExecResponse = {

  response_code: number;
  data_headers: {

    viewer_id: number; // Player's viewer ID
    sid: string; // Session ID
    servertime: number; // Server timestamp
    result_code: number; // Operation result code
  };
  data: {

    order: number; // Position number on the roulette that was hit
    reward_summary_info: {

      add_item_list: {

        item_id: number; // ID of the item received
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
    roulette_reward: {

      item_type: number; // Type/category of the item
      item_id: number; // Specific item ID
      item_num: number; // Quantity obtained
    };
    new_bingo_line_array: unknown[]; // New bingo lines completed (if any)
    bingo_reward_list: unknown[]; // Rewards from completing bingo lines
    change_sheet_num: null; // New sheet number if sheet changed
    change_roulette_reward_list: null; // New reward list if changed
    roulette_exec_count: number; // Total number of roulette executions
  };
}
```
