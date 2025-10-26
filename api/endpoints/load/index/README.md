# Load / Index

Load user profile and game data after session establishment.

## Request Body

```typescript
type LoadIndexRequest = {
  viewer_id: number; // User identifier
  device: number; // Platform code (4 = Windows)
  device_id: string; // Hashed device identifier
  device_name: string; // System name and manufacturer
  graphics_device_name: string; // GPU information
  ip_address: string; // Client IP
  platform_os_version: string; // OS version string
  carrier: string; // Mobile carrier (empty for PC)
  keychain: number; // Keychain flag
  locale: string; // Language code
  dmm_viewer_id: number | null; // DMM platform viewer ID
  dmm_onetime_token: string | null; // DMM one-time token
  steam_id: string; // Steam user ID
  steam_session_ticket: string; // Steam authentication ticket
}
```

## Response Body

```typescript
type LoadIndexResponse = {
  response_code: number; // 1 on success
  data_headers: {
    viewer_id: number; // Confirmed user ID
    sid: string; // Session identifier
    servertime: number; // Server timestamp
    result_code: number; // Operation result
    notifications: {
      event_mission: {
        mission_id: number; // Mission identifier
        exec_count: number; // Current progress count
        mission_status: number; // Mission completion status (0=not_started, 1=in_progress, 2=completed)
      }[];
      add_present_num: number; // New presents count
      room_match_race_result_num: number; // Race results count
    };
  };
  data: {
    common_define: unknown; // Game configuration constants
    user_info: {
      viewer_id: number; // User identifier
      honor_id: number; // Current honor/title ID
      sex: number; // Character gender
      tutorial_step: number; // Tutorial progress
      leader_chara_id: number; // Main character ID
      name: string; // Player display name
      comment: string; // Player profile comment
      birth_day: string; // Player's birthday setting
      fan: number; // Current fan count
      rank_score: number; // Overall rank score
    };
    tp_info: {
      current_tp: number; // Current trainer points
      max_tp: number; // Maximum trainer points
      max_recovery_time: number; // When TP fully recovers
    };
    rp_info: {
      current_rp: number; // Current race points
      max_rp: number; // Maximum race points
      max_recovery_time: number; // When RP fully recovers
    };
    coin_info: {
      fcoin: number; // Friendship coins
      coin: number; // Premium currency
    };
    trained_chara: unknown[]; // Owned/trained character data
    // Additional game state objects (items, cards, etc.)
    [key: string]: unknown;
  };
}
```
