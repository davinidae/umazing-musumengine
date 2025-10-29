# Live Start API

Initiates a live performance/concert with selected characters, music, and theater settings.

## Request Body

```typescript
type LiveStartRequest = {

  music_id: number; // ID of the music track to perform
  member_info_array: {

    chara_id: number; // Character identifier
    mob_id: number; // Mob/background character ID (0 for main characters)
    dress_id: number; // Primary outfit/dress ID
    color_id: number; // Primary color variation
    dress_id2: number; // Secondary outfit ID (0 if none)
    color_id2: number; // Secondary color variation (0 if none)
  }[];
  live_theater_setting_info: {

    sound_live_music: number; // Music volume level (0-10)
    display_lyrics: number; // Show lyrics during performance (1=yes, 0=no)
    play_se: number; // Play sound effects (1=yes, 0=no)
    portrait_mode: number; // Portrait orientation mode (1=yes, 0=no)
  };
  live_theater_vocal_chara_id_array: number[]; // Characters providing vocals
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
type LiveStartResponse = {

  response_code: number; // Success indicator
  data_headers: {

    viewer_id: number; // Player identifier
    sid: string; // Session identifier
    servertime: number; // Server timestamp
    result_code: number; // Operation result
  };
}
```
