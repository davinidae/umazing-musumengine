# Story Event - Roulette Endpoint

Retrieves story event roulette information including available rewards and user progress.

## Request Body

```typescript
type StoryEventRouletteRequest = {
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
type StoryEventRouletteResponse = {
  response_code: number;
  data_headers: {
    viewer_id: number; // Player's viewer ID
    sid: string; // Session ID
    servertime: number; // Server timestamp
    result_code: number; // Operation result code
  };
  data: {
    event_user_info: {
      event_point: number; // Current event points
      roulette_coin_num: number; // Available roulette coins
      roulette_sheet_num: number; // Current roulette sheet number
    };
    user_roulette_order_list: number[]; // Array of numbers indicating completed roulette positions
    roulette_reward_list: {
      reward_order: number; // Position of reward on roulette board
      item_category: number; // Category ID of the reward item
      item_id: number; // Specific item ID
      item_num: number; // Quantity of the item
    }[];
    bingo_info: {
      sheet_num: number; // Bingo sheet number
      line_num: number; // Number of completed lines
    }[];
    first_access_flag: boolean; // Whether this is the first time accessing the roulette
    roulette_exec_count: number; // Total number of roulette executions
  };
};
```
