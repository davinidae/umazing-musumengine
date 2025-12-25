# Load / Index

Load user profile and game data after session establishment.

## Request Body

```typescript
type LoadIndexRequest = {
  adid: string;
  viewer_id: number; // User identifier
  device: number; // Platform code (4 = Windows)
  device_id: string; // Hashed device identifier
  device_name: string; // System name and manufacturer
  graphics_device_name: string; // GPU information
  ip_address: string; // Client IP
  platform_os_version: string; // OS version string
  carrier: string; // Mobile carrier (empty for PC)
  keychain: number; // Keychain flag
  locale: string; // Language code
  button_info: string;
  dmm_viewer_id: number | null; // DMM platform viewer ID
  dmm_onetime_token: string | null; // DMM one-time token
  steam_id: string; // Steam user ID
  steam_session_ticket: string; // Steam authentication ticket
};
```

## Response Body

```typescript
type LoadIndexResponse = {
  response_code: number;
  data_headers: DataHeaders;
  data: Data;
};

type DataHeaders = {
  viewer_id: number;
  sid: string;
  servertime: number;
  result_code: number;
  notifications: Notifications;
};

type Notifications = {
  unread_information_exists: number;
  room_match_race_result_num: number;
};

type Data = {
  common_define: CommonDefine;
  user_info: UserInfo;
  tp_info: TpInfo;
  rp_info: RpInfo;
  coin_info: CoinInfo;
  trained_chara: TrainedChara[];
  trained_chara_favorite_array: any[];
  chara_list: CharaList[];
  card_dress_array: any[];
  card_list: CardList[];
  support_card_list: SupportCardList2[];
  support_card_deck_array: SupportCardDeckArray[];
  last_select_support_card_deck_id: number;
  item_list: ItemList[];
  piece_list: PieceList[];
  cloth_list: ClothList[];
  music_list: MusicList[];
  user_last_checked_time_list: UserLastCheckedTimeList[];
  menu_badge_info: MenuBadgeInfo;
  gacha_banner_info: GachaBannerInfo[];
  gacha_campaign_info_array: any[];
  payment_purchased_times_list: PaymentPurchasedTimesList[];
  res_version: string;
  user_birth: string;
  circle_data: CircleData;
  main_story_data_list: MainStoryDataList[];
  character_story_data_list: CharacterStoryDataList[];
  single_mode_chara_light: any[];
  single_mode_rental_succession_num: number;
  single_mode_succession_free_rental_time: number;
  single_mode_difficulty_info_array: SingleModeDifficultyInfoArray[];
  home_position_info: HomePositionInfo;
  is_linkage: number;
  season_pack_info: SeasonPackInfo;
  event_data_array: EventDataArray[];
  chara_profile_array: CharaProfileArray[];
  team_data_array: TeamDataArray[];
  directory_card_array: DirectoryCardArray[];
  scenario_record_array: ScenarioRecordArray[];
  team_stadium_user: TeamStadiumUser;
  daily_race_playing_info: DailyRacePlayingInfo;
  legend_race_playing_info: LegendRacePlayingInfo;
  daily_legend_race_playing_info: DailyLegendRacePlayingInfo;
  honor_info: HonorInfo;
  login_trophy_info_array: LoginTrophyInfoArray[];
  team_stadium_race_status: number;
  release_item_flag: number;
  home_story_data_array: HomeStoryDataArray[];
  short_episode_data_array: ShortEpisodeDataArray[];
  home_poster_data_array: HomePosterDataArray[];
  tutorial_guide_data_array: TutorialGuideDataArray[];
  released_episode_data_array: ReleasedEpisodeDataArray[];
  ranking: Ranking;
  border_line: BorderLine;
  last_information_update_time: string;
  release_card_array: number[];
  stadium_race_chara_id_array: any[];
  extra_story_data_list: ExtraStoryDataList;
  champions_info: ChampionsInfo;
  practice_partner_chara_array: PracticePartnerCharaArray[];
  practice_partner_owner_info_array: PracticePartnerOwnerInfoArray[];
  practice_race_state: number;
  notice_data: NoticeData;
  jukebox_info: JukeboxInfo;
  jukebox_request_history: JukeboxRequestHistory;
  training_challenge_user_info: any;
  training_challenge_exam_infos: any;
  talk_gallery_list: TalkGalleryList[];
  valentine_campaign_received_array: any[];
  story_favorite_array: any[];
  team_building_load_info: TeamBuildingLoadInfo;
  cygames_id_apply_product_flag: boolean;
  support_user_num: number;
  single_mode_scenario_id_array: number[];
  story_event_id: number;
  story_event_first_flag: boolean;
  fan_raid_id: number;
  fan_raid_first_flag: boolean;
  story_event_mission_list: StoryEventMissionList[];
  story_event_roulette_coin_num: number;
  challenge_match_load_info: ChallengeMatchLoadInfo;
  added_gacha_stock_info: any;
  recheck_dmm_jewel: string;
  optin_user_birth: number;
  dma_state: number;
  country_type: number;
  parental_consent: number;
  cygames_id_serial_code_reward_info_array: any[];
  login_bonus_list: any[];
  add_friend_point: number;
  limited_shop_info: LimitedShopInfo;
  unread_announce_id_array: any[];
};

type CommonDefine = {
  change_date_hour: number;
  trained_chara_default_save_num: number;
  trained_chara_default_succession_num: number;
  max_circle_member_num: number;
  max_circle_scout_num: number;
  item_request_expire: number;
  max_donate_num_total: number;
  max_donate_num_for_request: number;
  max_donate_count_day: number;
  max_trainer_point: number;
  trainer_point_recovery_time: number;
  trainer_point_recovery_unit_value: number;
  trainer_point_recovery_calc_base: number;
  max_race_point: number;
  race_point_recovery_time: number;
  race_point_recovery_unit_value: number;
  race_point_recovery_calc_base: number;
  single_mode_trainer_point_use_value: number;
  single_mode_trained_chara_rental_max_num: number;
  new_single_mode_trained_chara_rental_open_time: number;
  new_single_mode_trained_chara_rental_max_num: number;
  coefficient_money_required_strength: number;
  max_follow_num: number;
  max_follower_num: number;
  present_history_limit: number;
  team_stadium_reload_interval_ms: number;
  team_stadium_support_card_bonus_max: number;
  need_team_rank_play_daily_race: number;
  need_team_rank_play_circle: number;
  need_team_rank_play_champions: number;
  need_team_rank_play_room_match: number;
  need_team_rank_play_practice_race: number;
  serial_code_restrict_release_sec: number;
  daily_race_ticket_max_num: number;
  legend_race_ticket_max_num: number;
  daily_legend_race_ticket_max_num: number;
  champions_open_league_rank_max: number;
  champions_entry_cost_num: number;
  champions_polling_interval: number;
  champions_entry_reset_time: number;
  champions_stamp_polling_interval: number;
  champions_stamp_max_display_num: number;
  room_match_force_start_time_min: number;
  room_match_force_start_time_sec: number;
  room_match_entry_limit_time: number;
  room_match_max_saved_race_num: number;
  room_match_max_join_watch_num: number;
  room_match_min_entry_num: number;
  room_match_reload_interval_ms: number;
  room_match_change_lock_reload_interval_ms: number;
  room_match_preset_num_max: number;
  room_match_preset_entry_num_max: number;
  room_match_second_update: string;
  practice_recommend_list_reload_interval_ms: number;
  max_practice_partner_num: number;
  practice_race_entry_chara_num_min: number;
  practice_race_entry_same_chara_num_max: number;
  practice_race_save_race_num_max: number;
  practice_race_sns_share_partner_expire_hour: number;
  practice_race_create_partner_id_daily_max_count: number;
  circle_chat_post_partner_hold_count: number;
  circle_chat_post_partner_daily_max_count: number;
  practice_race_used_history_expire_day_count: number;
  practice_race_used_history_list_count_max: number;
  practice_race_preset_num_max: number;
  practice_race_preset_entry_num_max: number;
  practice_race_preset_open_date: string;
  group_support_card_open_date: string;
  hint_lvup_open_date: string;
  skill_upgrade_max_level: number;
  multi_reserve_open_date: string;
  talk_gallery_open_date: string;
  home_eat_open_date: string;
  race_rich_open_date: string;
  single_mode_scenario_free_shop_item_motivation_up_condition_check_open_date: string;
  profile_card_open_date: string;
  charm_add_evaluation: number;
  featured_stock_add_evaluation: number;
  single_mode_free_auto_item_use_open_date: string;
  dress_change_open_date: string;
  story_event_max_total_bonus: number;
  team_building_purchase_limit_num: number;
  team_building_coin_pay_cost: number;
  team_building_free_continue_num: number;
  jukebox_open_date: string;
  race_orientation_open_date: string;
  update_tp_rp_limit_open_date: string;
  cygames_id_resign_url: string;
  cygames_id_open_date: string;
  is_cygames_id_open: boolean;
};

type UserInfo = {
  viewer_id: number;
  honor_id: number;
  sex: number;
  tutorial_step: number;
  leader_chara_id: number;
  leader_chara_dress_id: number;
  support_card_id: number;
  partner_chara_id: number;
  bonus_follow_num: number;
  fan: number;
  rank_score: number;
  best_team_evaluation_point: number;
  last_ticket_natural_recovery_time: string;
  register_time: string;
  create_time: string;
  update_time: string;
  name: string;
  comment: string;
  birth_day: string;
};

type TpInfo = {
  current_tp: number;
  max_tp: number;
  max_recovery_time: number;
};

type RpInfo = {
  current_rp: number;
  max_rp: number;
  max_recovery_time: number;
};

type CoinInfo = {
  fcoin: number;
  coin: number;
};

type TrainedChara = {
  viewer_id: number;
  trained_chara_id: number;
  owner_viewer_id: number;
  owner_trained_chara_id: number;
  single_mode_chara_id: number;
  chara_seed: number;
  card_id: number;
  succession_trained_chara_id_1: number;
  succession_trained_chara_id_2: number;
  use_type: number;
  speed: number;
  stamina: number;
  power: number;
  wiz: number;
  guts: number;
  fans: number;
  rank_score: number;
  rank: number;
  scenario_id: number;
  route_id: number;
  arrive_route_race_id: number;
  proper_ground_turf: number;
  proper_ground_dirt: number;
  proper_running_style_nige: number;
  proper_running_style_senko: number;
  proper_running_style_sashi: number;
  proper_running_style_oikomi: number;
  proper_distance_short: number;
  proper_distance_mile: number;
  proper_distance_middle: number;
  proper_distance_long: number;
  succession_num: number;
  rarity: number;
  is_saved: number;
  is_locked: number;
  talent_level: number;
  race_cloth_id: number;
  chara_grade: number;
  running_style: number;
  nickname_id: number;
  wins: number;
  register_time: string;
  create_time: string;
  skill_array: SkillArray[];
  support_card_list: SupportCardList[];
  race_result_list: RaceResultList[];
  win_saddle_id_array: number[];
  nickname_id_array: number[];
  factor_id_array: number[];
  factor_info_array: FactorInfoArray[];
  succession_chara_array: SuccessionCharaArray[];
  succession_history_array: SuccessionHistoryArray[];
};

type SkillArray = {
  skill_id: number;
  level: number;
};

type SupportCardList = {
  position: number;
  support_card_id: number;
  exp: number;
  limit_break_count: number;
};

type RaceResultList = {
  turn: number;
  program_id: number;
  weather: number;
  ground_condition: number;
  running_style: number;
  popularity: number;
  result_rank: number;
  result_time: number;
  prize_money: number;
};

type FactorInfoArray = {
  factor_id: number;
  level: number;
};

type SuccessionCharaArray = {
  position_id: number;
  card_id: number;
  rank: number;
  rarity: number;
  talent_level: number;
  factor_id_array: number[];
  factor_info_array: FactorInfoArray2[];
  win_saddle_id_array: number[];
  owner_viewer_id: number;
};

type FactorInfoArray2 = {
  factor_id: number;
  level: number;
};

type SuccessionHistoryArray = {
  id: number;
  viewer_id: number;
  trained_chara_id: number;
  history_type: number;
  succession_card_id: number;
  date: number;
  rental_viewer_id: number;
  user_name: string;
  circle_name: string;
};

type CharaList = {
  chara_id: number;
  training_num: number;
  love_point: number;
  fan: number;
  max_grade: number;
  dress_id: number;
  mini_dress_id: number;
};

type CardList = {
  card_id: number;
  rarity: number;
  talent_level: number;
  create_time: string;
  skill_data_array: any[];
};

type SupportCardList2 = {
  viewer_id: number;
  support_card_id: number;
  exp: number;
  limit_break_count: number;
  favorite_flag: number;
  stock: number;
  possess_time: string;
  create_time: string;
};

type SupportCardDeckArray = {
  deck_id: number;
  name: string;
  support_card_id_array: number[];
};

type ItemList = {
  item_id: number;
  number: number;
};

type PieceList = {
  piece_id: number;
  piece_num: number;
};

type ClothList = {
  cloth_id: number;
};

type MusicList = {
  music_id: number;
  acquisition_time: string;
};

type UserLastCheckedTimeList = {
  type: number;
  last_checked_time: number;
};

type MenuBadgeInfo = {
  new_gacha_flag: number;
  present_num: number;
  mission_num: number;
  legend_mission_num: number;
  champions_mission_array: any[];
  training_challenge_mission_num: number;
  challenge_match_mission_num: number;
  team_building_mission_num: number;
  view_limited_mission_num: number;
};

type GachaBannerInfo = {
  id: number;
};

type PaymentPurchasedTimesList = {
  product_id: string;
  num_of_purchases: number;
  limit_type: number;
  item_pack_id: number;
  recommended_flag: number;
  limit: number;
  start_date: string;
  end_date: string;
};

type CircleData = {
  circle_info: CircleInfo;
  circle_user: CircleUser;
};

type CircleInfo = {
  circle_id: number;
  name: string;
};

type CircleUser = {
  viewer_id: number;
  circle_id: number;
  membership: number;
  join_time: string;
  penalty_end_time: string;
  item_request_end_time: string;
  last_check_post_id: number;
  ranking_result_check_time: string;
};

type MainStoryDataList = {
  episode_id: number;
  state: number;
};

type CharacterStoryDataList = {
  episode_id: number;
  state: number;
};

type SingleModeDifficultyInfoArray = {
  difficulty_id: number;
  open_difficulty_index: number;
  item_num: number;
  box_id: number;
  box_item_num: number;
  gacha_gauge: number;
  box_info_array: BoxInfoArray[];
};

type BoxInfoArray = {
  box_id: number;
  reward_info_array: RewardInfoArray[];
};

type RewardInfoArray = {
  difficulty_box_reward_id: number;
  remain_num: number;
};

type HomePositionInfo = {
  position1_chara_id: number;
  position2_chara_id: number;
  position3_chara_id: number;
  position4_chara_id: number;
  position1_cloth_id: number;
  position2_cloth_id: number;
  position3_cloth_id: number;
  position4_cloth_id: number;
};

type SeasonPackInfo = {
  product_master_id: number;
  season_end_time: number;
  repurchase_time: number;
  notice_status: number;
};

type EventDataArray = {
  chara_id: number;
  data_id: number;
  create_time: string;
  new_flag: number;
};

type CharaProfileArray = {
  chara_id: number;
  data_id: number;
  new_flag: number;
};

type TeamDataArray = {
  distance_type: number;
  member_id: number;
  trained_chara_id: number;
  running_style: number;
};

type DirectoryCardArray = {
  card_id: number;
  directory_ranking: number;
  trained_chara: TrainedChara2;
};

type TrainedChara2 = {
  viewer_id: number;
  card_id: number;
  directory_ranking: number;
  trained_chara_id: number;
  owner_viewer_id: number;
  owner_trained_chara_id: number;
  single_mode_chara_id: number;
  succession_trained_chara_id_1: number;
  succession_trained_chara_id_2: number;
  speed: number;
  stamina: number;
  power: number;
  wiz: number;
  guts: number;
  fans: number;
  rank_score: number;
  rank: number;
  scenario_id: number;
  route_id: number;
  proper_ground_turf: number;
  proper_ground_dirt: number;
  proper_running_style_nige: number;
  proper_running_style_senko: number;
  proper_running_style_sashi: number;
  proper_running_style_oikomi: number;
  proper_distance_short: number;
  proper_distance_mile: number;
  proper_distance_middle: number;
  proper_distance_long: number;
  succession_num: number;
  rarity: number;
  is_saved: number;
  is_locked: number;
  talent_level: number;
  race_cloth_id: number;
  chara_grade: number;
  running_style: number;
  nickname_id: number;
  create_time: string;
  skill_array: SkillArray2[];
  support_card_list: SupportCardList3[];
  race_result_list: RaceResultList2[];
  win_saddle_id_array: number[];
  nickname_id_array: number[];
  factor_id_array: number[];
  factor_info_array: FactorInfoArray3[];
  succession_chara_array: SuccessionCharaArray2[];
  succession_history_array: SuccessionHistoryArray2[];
};

type SkillArray2 = {
  skill_id: number;
  level: number;
};

type SupportCardList3 = {
  position: number;
  support_card_id: number;
  exp: number;
  limit_break_count: number;
};

type RaceResultList2 = {
  turn: number;
  program_id: number;
  weather: number;
  ground_condition: number;
  running_style: number;
  popularity: number;
  result_rank: number;
  result_time: number;
  prize_money: number;
};

type FactorInfoArray3 = {
  factor_id: number;
  level: number;
};

type SuccessionCharaArray2 = {
  position_id: number;
  card_id: number;
  rank: number;
  rarity: number;
  talent_level: number;
  factor_id_array: number[];
  factor_info_array: FactorInfoArray4[];
  win_saddle_id_array: number[];
  owner_viewer_id: number;
};

type FactorInfoArray4 = {
  factor_id: number;
  level: number;
};

type SuccessionHistoryArray2 = {
  id: number;
  viewer_id: number;
  trained_chara_id: number;
  history_type: number;
  succession_card_id: number;
  date: number;
  rental_viewer_id: number;
  user_name: string;
  circle_name: string;
};

type ScenarioRecordArray = {
  scenario_id: number;
  directory_ranking: number;
  trained_chara: TrainedChara3;
};

type TrainedChara3 = {
  viewer_id: number;
  card_id: number;
  directory_ranking: number;
  trained_chara_id: number;
  owner_viewer_id: number;
  owner_trained_chara_id: number;
  single_mode_chara_id: number;
  succession_trained_chara_id_1: number;
  succession_trained_chara_id_2: number;
  speed: number;
  stamina: number;
  power: number;
  wiz: number;
  guts: number;
  fans: number;
  rank_score: number;
  rank: number;
  scenario_id: number;
  route_id: number;
  proper_ground_turf: number;
  proper_ground_dirt: number;
  proper_running_style_nige: number;
  proper_running_style_senko: number;
  proper_running_style_sashi: number;
  proper_running_style_oikomi: number;
  proper_distance_short: number;
  proper_distance_mile: number;
  proper_distance_middle: number;
  proper_distance_long: number;
  succession_num: number;
  rarity: number;
  is_saved: number;
  is_locked: number;
  talent_level: number;
  race_cloth_id: number;
  chara_grade: number;
  running_style: number;
  nickname_id: number;
  create_time: string;
  skill_array: SkillArray3[];
  support_card_list: SupportCardList4[];
  race_result_list: RaceResultList3[];
  win_saddle_id_array: number[];
  nickname_id_array: number[];
  factor_id_array: number[];
  factor_info_array: FactorInfoArray5[];
  succession_chara_array: SuccessionCharaArray3[];
  succession_history_array: SuccessionHistoryArray3[];
};

type SkillArray3 = {
  skill_id: number;
  level: number;
};

type SupportCardList4 = {
  position: number;
  support_card_id: number;
  exp: number;
  limit_break_count: number;
};

type RaceResultList3 = {
  turn: number;
  program_id: number;
  weather: number;
  ground_condition: number;
  running_style: number;
  popularity: number;
  result_rank: number;
  result_time: number;
  prize_money: number;
};

type FactorInfoArray5 = {
  factor_id: number;
  level: number;
};

type SuccessionCharaArray3 = {
  position_id: number;
  card_id: number;
  rank: number;
  rarity: number;
  talent_level: number;
  factor_id_array: number[];
  factor_info_array: FactorInfoArray6[];
  win_saddle_id_array: number[];
  owner_viewer_id: number;
};

type FactorInfoArray6 = {
  factor_id: number;
  level: number;
};

type SuccessionHistoryArray3 = {
  id: number;
  viewer_id: number;
  trained_chara_id: number;
  history_type: number;
  succession_card_id: number;
  date: number;
  rental_viewer_id: number;
  user_name: string;
  circle_name: string;
};

type TeamStadiumUser = {
  team_class: number;
  best_team_class: number;
  team_class_state: number;
  best_point: number;
};

type DailyRacePlayingInfo = {
  state: number;
  trained_chara_id: number;
  daily_race_record_array: DailyRaceRecordArray[];
};

type DailyRaceRecordArray = {
  daily_race_id: number;
  is_cleared: number;
  is_played: number;
};

type LegendRacePlayingInfo = {
  state: number;
  group_id: number;
  next_group_id: number;
  trained_chara_id: number;
  legend_race_record_array: LegendRaceRecordArray[];
};

type LegendRaceRecordArray = {
  legend_race_id: number;
  is_cleared: number;
  is_played: number;
};

type DailyLegendRacePlayingInfo = {
  state: number;
  trained_chara_id: number;
  daily_legend_race_record: any[];
  new_flag: number;
};

type HonorInfo = {
  honor_list: HonorList[];
  last_checked_time: number;
};

type HonorList = {
  honor_id: number;
  create_time: string;
};

type LoginTrophyInfoArray = {
  trophy_id: number;
  chara_id_array: number[];
};

type HomeStoryDataArray = {
  id: number;
};

type ShortEpisodeDataArray = {
  id: number;
};

type HomePosterDataArray = {
  id: number;
};

type TutorialGuideDataArray = {
  id: number;
};

type ReleasedEpisodeDataArray = {
  id: number;
};

type Ranking = {
  term_id: number;
  viewer_id: number;
  team_class: number;
  best_point: number;
  rank: number;
};

type BorderLine = {
  promotion_rank: number;
  demotion_rank: number;
  keep_rank: number;
  promotion_point: number;
  demotion_point: number;
  keep_point: number;
};

type ExtraStoryDataList = {
  story_event: StoryEvent[];
  story_extra: StoryExtra[];
};

type StoryEvent = {
  episode_id: number;
  state: number;
};

type StoryExtra = {
  episode_id: number;
  state: number;
};

type ChampionsInfo = {
  champions_id: number;
  entry_times: number;
  free_entry_times: number;
  round_id: number;
  next_tier: number;
  state: number;
  entry_trained_chara_id_array: any[];
  league_type: number;
};

type PracticePartnerCharaArray = {
  viewer_id: number;
  trained_chara_id: number;
  owner_viewer_id: number;
  owner_trained_chara_id: number;
  single_mode_chara_id: number;
  chara_seed: number;
  card_id: number;
  succession_trained_chara_id_1: number;
  succession_trained_chara_id_2: number;
  use_type: number;
  speed: number;
  stamina: number;
  power: number;
  wiz: number;
  guts: number;
  fans: number;
  rank_score: number;
  rank: number;
  scenario_id: number;
  route_id: number;
  arrive_route_race_id: number;
  proper_ground_turf: number;
  proper_ground_dirt: number;
  proper_running_style_nige: number;
  proper_running_style_senko: number;
  proper_running_style_sashi: number;
  proper_running_style_oikomi: number;
  proper_distance_short: number;
  proper_distance_mile: number;
  proper_distance_middle: number;
  proper_distance_long: number;
  succession_num: number;
  rarity: number;
  is_saved: number;
  is_locked: number;
  talent_level: number;
  race_cloth_id: number;
  chara_grade: number;
  running_style: number;
  nickname_id: number;
  wins: number;
  register_time: string;
  create_time: string;
  skill_array: SkillArray4[];
  support_card_list: SupportCardList5[];
  race_result_list: RaceResultList4[];
  win_saddle_id_array: number[];
  nickname_id_array: number[];
  factor_id_array: number[];
  factor_info_array: FactorInfoArray7[];
  succession_chara_array: SuccessionCharaArray4[];
  succession_history_array: SuccessionHistoryArray4[];
};

type SkillArray4 = {
  skill_id: number;
  level: number;
};

type SupportCardList5 = {
  position: number;
  support_card_id: number;
  exp: number;
  limit_break_count: number;
};

type RaceResultList4 = {
  turn: number;
  program_id: number;
  weather: number;
  ground_condition: number;
  running_style: number;
  popularity: number;
  result_rank: number;
  result_time: number;
  prize_money: number;
};

type FactorInfoArray7 = {
  factor_id: number;
  level: number;
};

type SuccessionCharaArray4 = {
  position_id: number;
  card_id: number;
  rank: number;
  rarity: number;
  talent_level: number;
  factor_id_array: number[];
  factor_info_array: FactorInfoArray8[];
  win_saddle_id_array: number[];
  owner_viewer_id: number;
};

type FactorInfoArray8 = {
  factor_id: number;
  level: number;
};

type SuccessionHistoryArray4 = {
  id: number;
  viewer_id: number;
  trained_chara_id: number;
  history_type: number;
  succession_card_id: number;
  date: number;
  rental_viewer_id: number;
  user_name: string;
  circle_name: string;
};

type PracticePartnerOwnerInfoArray = {
  partner_trained_chara_id: number;
  owner_viewer_id: number;
  owner_name: string;
  owner_trained_chara_id: number;
  friend_state: number;
};

type NoticeData = {
  event_id: number;
  notice_title: string;
  notice_text: string;
  button_type: number;
};

type JukeboxInfo = {
  play_music_flag: number;
  random_request_flag: number;
  user_request_flag: number;
  next_random_request_time: string;
  music_size: number;
};

type JukeboxRequestHistory = {
  request_id: number;
  request_type: number;
  request_value: number;
  requester_id: number;
  requester_request_id: number;
  music_id: number;
  request_time: string;
};

type TalkGalleryList = {
  home_story_trigger_id: number;
  new_flag: number;
};

type TeamBuildingLoadInfo = {
  team_building_id: number;
  state: number;
  captain_id: number;
};

type StoryEventMissionList = {
  mission_id: number;
  exec_count: number;
  mission_status: number;
  mission_type: number;
  event_id: number;
};

type ChallengeMatchLoadInfo = {
  challenge_match_id: number;
  match_point: number;
  resume_state: any;
  resume_trained_chara_id: any;
};

type LimitedShopInfo = {
  limited_exchange_id: number;
  open_flag: number;
  appear_flag: number;
  close_time: number;
  open_count: number;
};
```
