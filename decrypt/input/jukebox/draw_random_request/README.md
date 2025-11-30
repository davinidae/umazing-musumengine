# Jukebox Draw Random Request API

Draws a random music request from the jukebox system, allowing players to discover new songs or get specific song requests.

## Request Body

```typescript
type JukeboxDrawRandomRequest = {
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
type JukeboxDrawRandomRequestResponse = {
  response_code: number;
  data_headers: {
    viewer_id: number; // Player identifier
    sid: string; // Session identifier
    servertime: number; // Server timestamp
    result_code: number; // Operation result
  };
  data: {
    request_history: {
      request_type: number; // Type of music request (1=character, 2=random, 3=event)
      request_value: number; // Additional request parameters
      music_id: number; // ID of the requested music track
      requester_id: number; // ID of the character making the request
      request_id: number; // Unique request identifier
      requester_request_id: null; // Linked request ID (null for random)
    };
    next_random_request_time: string; // When the next random request will be available
    add_music_array: unknown[]; // New music tracks unlocked (empty if none)
  };
};
```
