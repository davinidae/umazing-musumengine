# Tool / Start Session

Start a client session and obtain session identifiers and server configuration.

## Request Body

```typescript
type ToolStartSessionRequest = {

  attestation_type: number; // Attestation method (0 = none)
  device_token: string | null; // Push notification token
  viewer_id: number; // Unique user identifier
  device: number; // Platform code (4 = Windows)
  device_id: string; // Hashed device identifier
  device_name: string; // System name and manufacturer
  graphics_device_name: string; // GPU information
  ip_address: string; // Client IP
  platform_os_version: string; // OS version string
  carrier: string; // Mobile carrier (empty for PC)
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
type ToolStartSessionResponse = {

  response_code: number; // 1 on success
  data_headers: {

    viewer_id: number; // Confirmed user ID
    sid: string; // Session identifier
    servertime: number; // Server timestamp
    result_code: number; // Operation result
    server_list?: unknown; // Resource server URLs
  };
  data: {

    attest: boolean; // Attestation required flag
    nonce: string; // Challenge nonce
    terms_updated: boolean; // Terms of service update flag
    is_tutorial: boolean; // Tutorial state
    resource_version: string; // Current resource version
  };
}
```
