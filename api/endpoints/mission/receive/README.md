# Mission Receive API

Claims rewards from completed missions. Allows claiming single missions or multiple missions in one request.

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
}
```

## Response Body

```typescript
type MissionReceiveResponse = {
  response_code: number;
  data_headers: {
    viewer_id: number; // Player identifier
    sid: string; // Session identifier
    servertime: number; // Server timestamp
    result_code: number; // Operation result
  };
  data: {
    reward_summary_info: {
      add_item_list: {
        item_id: number; // Item type identifier
        number: number; // Quantity received
      }[];
      add_piece_list: unknown[]; // Character pieces/fragments received
      add_card_list: unknown[]; // Character cards received
      add_card_bonus_info: null; // Bonus information for new cards
      add_support_card_list: unknown[]; // Support cards received
      add_support_card_num_array: unknown[]; // Support card quantities
      add_honor_list: unknown[]; // Honor/achievement rewards
      add_chara_list: unknown[]; // New characters unlocked
      add_cloth_list: unknown[]; // Costume/clothing rewards
      add_music_list: unknown[]; // Music/song unlocks
      add_story_id_array: unknown[]; // Story chapters unlocked
      add_fcoin: number; // Free coins received
      add_present_num: number; // Present box items added
      add_total_fan: number; // Fan count increase
      new_chara_profile_array: unknown[]; // New character profiles unlocked
      force_update_honor_id: number; // Honor requiring immediate update
    };
    updated_mission_array: {
      mission_id: number; // Mission that was updated
      exec_count: number; // Updated progress count
      mission_status: number; // New mission status (1=available, 2=completed, 3=claimed)
    }[];
  };
}
```
