# Team Stadium Index API

Retrieves the player's team stadium status, including ranking information, class standing, and border lines for promotion/demotion.

## Request Body

```typescript
type TeamStadiumIndexRequest = {

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
type TeamStadiumIndexResponse = {

  response_code: number;
  data_headers: {

    viewer_id: number; // Player identifier
    sid: string; // Session ID
    servertime: number; // Server timestamp
    result_code: number; // Operation result code
  };
  data: {

    team_stadium_id: number; // Current stadium identifier
    team_stadium_user: {

      team_class: number; // Current team class/tier
      best_team_class: number; // Highest team class ever achieved
      team_class_state: number; // State of class changes (0=stable)
      best_point: number; // Highest points achieved
    };
    ranking: {

      term_id: number; // Current ranking term/season identifier
      viewer_id: number; // Player identifier
      team_class: number; // Current tier
      best_point: number; // Highest points in current term
      rank: number; // Current rank position
    };
    border_line: {

      promotion_rank: number; // Rank threshold for promotion
      demotion_rank: number; // Rank threshold for demotion
      keep_rank: number; // Rank threshold to maintain class
      promotion_point: number; // Point threshold for promotion
      demotion_point: number; // Point threshold for demotion
      keep_point: number; // Point threshold to maintain class
    };
    team_class_change_state: number; // Class change status (0=no_change_pending)
    reward_info_array: unknown[]; // Available rewards
    race_status: number; // Current race status (0=not_racing)
    term_state: number; // Current term/season state (1=active)
  };
}
```
