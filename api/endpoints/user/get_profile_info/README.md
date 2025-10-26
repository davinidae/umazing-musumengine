# User / Get Profile Info

Get user profile statistics and achievements.

## Request Body

```typescript
type GetProfileInfoRequest = {
  add_voice_data_array: {
    chara_id: number; // Character identifier
    data_id: number; // Voice data identifier
  }[];
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
  dmm_viewer_id: number | null; // DMM platform viewer ID
  dmm_onetime_token: string | null; // DMM one-time token
  steam_id: string; // Steam user ID
  steam_session_ticket: string; // Steam authentication ticket
}
```

## Response Body

```typescript
type GetProfileInfoResponse = {
  response_code: number;
  data_headers: {
    viewer_id: number; // Player identifier
    sid: string; // Session ID
    servertime: number; // Server timestamp
    result_code: number; // Operation result code
  };
  data: {
    user_info: {
      viewer_id: number; // Player identifier
      name: string; // Player display name
      comment: string; // Player profile comment/message
      favorite_chara_id: number; // Favorite character ID
      trainer_level: number; // Current trainer level
      fan_count: number; // Current fan count
      total_fan_count: number; // Total accumulated fan count
    };
  };
}
```
