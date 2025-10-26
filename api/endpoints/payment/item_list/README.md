# Payment Item List API

Retrieves the list of purchasable items in the in-game store, including prices, currency amounts, and purchase limits.

## Request Body

```typescript
type PaymentItemListRequest = {
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
type PaymentItemListResponse = {
  response_code: number;
  data_headers: {
    viewer_id: number; // Player's viewer ID
    sid: string; // Session ID
    servertime: number; // Server timestamp
    result_code: number; // Operation result code
  };
  data: {
    data: {
      id: number; // Payment item identifier
      store_product_id: string; // Platform store product ID
      disp_order: number; // Display order in shop
      price: number; // Price in local currency cents
      formatted_price: string; // Formatted price display
      charge_num: number; // Amount of premium currency received
      free_num: number; // Bonus premium currency
      limit_num: number; // Purchase limit quantity
      limit_type: number; // Purchase limit type (0=no limit, 1=daily limit, 3=special limit)
      item_pack_id: number; // Associated item pack ID
      recommended_flag: number; // Recommended item flag (0=not recommended, 1=recommended)
      start_time: number; // Availability start timestamp
      end_time: number; // Availability end timestamp
      number_of_product_purchased: number; // Times player has purchased this item
    }[];
    season_pack_info: {
      product_master_id: number; // Season pack product ID
      season_end_time: number; // Season pack expiration
      repurchase_time: number; // When season pack can be repurchased
      notice_status: number; // Notice status for season pack
    };
    last_checked_time: number; // Last time shop was checked
  };
}
```
