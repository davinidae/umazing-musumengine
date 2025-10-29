# present / index

List presents/gifts in the user's inbox.

## Request Body

```typescript
type PresentIndexRequest = {

  time_filter_type: number; // Time filter option (0 = all)
  category_filter_type: number[]; // Category filters (0 = all)
  offset: number; // Pagination offset
  limit: number; // Max results per page
  is_asc: boolean; // Sort order (true = ascending)
  viewer_id: number; // User identifier
  device: number; // Platform code
  device_id: string; // Hashed device identifier
  device_name: string; // System name and manufacturer
  graphics_device_name: string; // GPU information
  ip_address: string; // Client IP
  platform_os_version: string; // OS version string
  carrier: string; // Mobile carrier
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
type PresentIndexResponse = {

  response_code: number;
  data_headers: {

    viewer_id: number; // Player's viewer ID
    sid: string; // Session ID
    servertime: number; // Server timestamp
    result_code: number; // Operation result code
    notifications: {

      room_match_race_result_num: number; // Room match race results count
    };
  };
  data: {

    present_array: {

      present_id: number; // Unique present identifier
      state: number; // Present state (0=unreceived, other values for different states)
      reward_type: number; // Type of reward item
      reward_id: number; // Specific reward item ID
      reward_count: number; // Quantity of the reward
      message_id: number; // Message template ID
      message_param_value_1: number; // Message parameter 1
      message_param_value_2: number; // Message parameter 2
      message_param_value_3: number; // Message parameter 3
      message_param_value_4: number; // Message parameter 4
      reward_limit_time: number; // Expiration timestamp
      receive_time: string; // When present was received (format: "YYYY-MM-DD HH:MM:SS")
      create_time: string; // When present was created (format: "YYYY-MM-DD HH:MM:SS")
      free_message: string; // Custom message text
    }[];
    no_receive_present_num: {

      no_time_limit_present_num: number; // Count of presents with no time limit
      time_limit_present_num: number; // Count of presents with time limit
    };
  };
}
```
