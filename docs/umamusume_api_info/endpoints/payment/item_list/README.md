# Payment Item List API

Retrieves the list of purchasable items in the in-game store, including prices, currency amounts,
and purchase limits.

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
};
```

## Response Body

```typescript
type PaymentItemListResponse = {
  response_code: number;
  data_headers: DataHeaders;
  data: Data;
};

export interface DataHeaders {
  viewer_id: number;
  sid: string;
  servertime: number;
  result_code: number;
}

export interface Data {
  data: Daum[];
  season_pack_info: SeasonPackInfo;
  last_checked_time: number;
}

export interface Daum {
  id: number;
  store_product_id: string;
  disp_order: number;
  price: number;
  formatted_price: string;
  charge_num: number;
  free_num: number;
  limit_num: number;
  limit_type: number;
  item_pack_id: number;
  recommended_flag: number;
  start_time: number;
  end_time: number;
  number_of_product_purchased: number;
}

export interface SeasonPackInfo {
  product_master_id: number;
  season_end_time: number;
  repurchase_time: number;
  notice_status: number;
}
```
