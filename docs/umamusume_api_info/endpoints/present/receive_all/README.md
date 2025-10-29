# Present / Receive All

Collect all available presents from the inbox.

## Request Body

```typescript
type PresentReceiveAllRequest = {

  time_filter_type: number; // Time filter option (0=all)
  category_filter_type: number[]; // Category filters (0=all)
  is_asc: boolean; // Sort order (true=ascending)
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
type PresentReceiveAllResponse = {

  response_code: number; // 1 on success
  data_headers: {

    viewer_id: number; // Confirmed user ID
    sid: string; // Session identifier
    servertime: number; // Server timestamp
    result_code: number; // Operation result
  };
  data: {

    reward_summary_info: {

      add_item_list: {

        item_id: number; // Item identifier
        number: number; // Quantity received
      }[];
      add_piece_list: unknown[]; // Character pieces
      add_card_list: unknown[]; // Cards received
      add_support_card_list: unknown[]; // Support cards
      add_fcoin: number; // Free coins received
      add_present_num: number; // Additional presents
      add_total_fan: number; // Fan count increase
    };
    receive_present_num: number; // Number of presents collected
    rest_present_num: number; // Remaining presents
    no_receive_support_card_count: number; // Uncollected support cards
    no_receive_item_flg: boolean; // Has uncollected items
  };
}
```
