# Support Card Strengthen API

Strengthens a support card by spending experience points and money to increase its level and stats.

## Request Body

```typescript
type SupportCardStrengthenRequest = {
  support_card_id: number; // ID of the support card to strengthen
  use_global_exp: number; // Amount of global experience points to spend
  current_global_exp: number; // Current global experience before strengthening
  use_money: number; // Amount of money to spend on strengthening
  current_money: number; // Current money balance before strengthening
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
type SupportCardStrengthenResponse = {
  response_code: number;
  data_headers: {
    viewer_id: number; // Player identifier
    sid: string; // Session ID
    servertime: number; // Server timestamp
    result_code: number; // Operation result code
    notifications: {
      room_match_race_result_num: number; // Room match notifications
    };
  };
  data: {
    support_card_data: {
      viewer_id: number; // Player identifier
      support_card_id: number; // Support card identifier
      exp: number; // New experience level after strengthening
      limit_break_count: number; // Number of limit breaks performed
      favorite_flag: number; // Whether card is marked as favorite (1=yes, 0=no)
      stock: number; // Number of duplicate copies owned
      possess_time: string; // When the card was obtained
      create_time: string; // When the card was first created
    };
    item_data_array: {
      item_id: number; // Item type identifier (110=coin, 59=training item, etc.)
      number: number; // New quantity after spending
    }[];
  };
};
```
