# Team Stadium Opponent List API

Retrieves a list of potential opponents for Team Stadium battles, including their team compositions and player information.

## Request Body

```typescript
type TeamStadiumOpponentListRequest = {

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
type TeamStadiumOpponentListResponse = {

  response_code: number;
  data_headers: {

    viewer_id: number; // Player identifier
    sid: string; // Session ID
    servertime: number; // Server timestamp
    result_code: number; // Operation result code
  };
  data: {

    opponent_info_array: {

      strength: number; // Opponent difficulty level (1=easy, higher=harder)
      opponent_viewer_id: number; // Opponent's player identifier
      evaluation_point: number; // Opponent's team evaluation score
      user_info: {

        viewer_id: number; // Player identifier
        honor_id: number; // Current honor/title ID
        sex: number; // Player character gender
        tutorial_step: number; // Tutorial progress
        leader_chara_id: number; // Main character displayed
        leader_chara_dress_id: number; // Main character's outfit
        support_card_id: number; // Featured support card
        partner_chara_id: number; // Partner character
        trainer_point: number; // Current training points
        bonus_trainer_point: number; // Bonus training points
        tp_max_recovery_time: number; // When training points fully recover
        current_rp: number; // Current race points
        max_rp_add_val: number; // Additional max race points
        rp_max_recovery_time: number; // When race points fully recover
        bonus_follow_num: number; // Bonus followers
        fan: number; // Total fan count
        rank_score: number; // Overall rank score
        directory_level: number; // Player directory level
        best_team_evaluation_point: number; // Highest team evaluation achieved
        team_stadium_win_count: number; // Team Stadium victories
        single_mode_play_count: number; // Single mode completions
        total_login_day_count: number; // Total login days
        total_login_day_count_check_time: string; // Last login count check
        last_information_checked_time: string; // Last info update
        last_ticket_natural_recovery_time: string; // Last ticket recovery
        register_time: string; // Account registration time
        create_time: string; // Account creation time
        update_time: string; // Last profile update
        name: string; // Player display name
        comment: string; // Player comment/message
        last_login_time: string; // Last login timestamp
      };
      team_data_array: {

        distance_type: number; // Race distance category (1=short, 2=mile, 3=intermediate, 4=long, 5=extra_long)
        member_id: number; // Team position (1-3)
        trained_chara_id: number; // Character used in this position
        running_style: number; // Character's running style (1=front_runners, 2=pace_chasers, 3=late_surgers, 4=end_closers)
      }[];
    }[];
  };
}
```
