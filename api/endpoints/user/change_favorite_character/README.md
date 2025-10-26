# User - Change Favorite Character Endpoint

Updates the player's favorite character positions and their outfits for the home screen display.

## Request Body

```typescript
type ChangeFavoriteCharacterRequest = {
  set_position_info: {
    position1_chara_id: number; // Character ID for position 1 (main/center position)
    position2_chara_id: number; // Character ID for position 2
    position3_chara_id: number; // Character ID for position 3
    position4_chara_id: number; // Character ID for position 4
    position1_cloth_id: number; // Outfit/costume ID for position 1 character
    position2_cloth_id: number; // Outfit/costume ID for position 2 character
    position3_cloth_id: number; // Outfit/costume ID for position 3 character
    position4_cloth_id: number; // Outfit/costume ID for position 4 character
  };
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
type ChangeFavoriteCharacterResponse = {
  response_code: number;
  data_headers: {
    viewer_id: number; // Player's viewer ID
    sid: string; // Session ID
    servertime: number; // Server timestamp
    result_code: number; // Operation result code
    notifications: {
      room_match_race_result_num: number; // Number of room match race results
    };
  };
  data: {
    home_position_info: {
      position1_chara_id: number; // Character ID for position 1 (main/center position)
      position2_chara_id: number; // Character ID for position 2
      position3_chara_id: number; // Character ID for position 3
      position4_chara_id: number; // Character ID for position 4
      position1_cloth_id: number; // Outfit/costume ID for position 1 character
      position2_cloth_id: number; // Outfit/costume ID for position 2 character
      position3_cloth_id: number; // Outfit/costume ID for position 3 character
      position4_cloth_id: number; // Outfit/costume ID for position 4 character
    };
  };
}
```
