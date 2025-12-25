# Race Entry Endpoint

## Request Body

```typescript
type ReadInfoIndexRequest = {
  add_home_story_data_array: {
    id: number;
  }[];
  add_short_episode_data_array: unknown[];
  add_home_poster_data_array: unknown[];
  add_tutorial_guide_data_array: unknown[];
  add_released_episode_data_array: unknown[];
  viewer_id: number;
  device: number;
  device_id: string;
  device_name: string;
  graphics_device_name: string;
  ip_address: string;
  platform_os_version: string;
  carrier: string;
  keychain: number;
  locale: string;
  dmm_viewer_id: null;
  dmm_onetime_token: null;
  steam_id: string;
  steam_session_ticket: string;
};
```

## Response Body

```typescript
type ReadInfoIndexResponse = {
  response_code: number;
  data_headers: DataHeaders;
  data: Data;
};

export interface DataHeaders {
  viewer_id: number;
  sid: string;
  servertime: number;
  result_code: number;
  notifications: Notifications;
}

export interface Notifications {
  unread_information_exists: number;
}

export interface Data {
  home_story_data_array: HomeStoryDataArray[];
  short_episode_data_array: ShortEpisodeDataArray[];
  home_poster_data_array: HomePosterDataArray[];
  tutorial_guide_data_array: TutorialGuideDataArray[];
  released_episode_data_array: ReleasedEpisodeDataArray[];
  talk_gallery_data_array: TalkGalleryDataArray[];
}

export interface HomeStoryDataArray {
  id: number;
}

export interface ShortEpisodeDataArray {
  id: number;
}

export interface HomePosterDataArray {
  id: number;
}

export interface TutorialGuideDataArray {
  id: number;
}

export interface ReleasedEpisodeDataArray {
  id: number;
}

export interface TalkGalleryDataArray {
  home_story_trigger_id: number;
  new_flag: number;
}
```
