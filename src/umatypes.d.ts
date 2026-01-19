// Auto-generated from docs/umamusume_api_info/umamusume.Http by scripts/generate-umatypes.ts

declare global {
  type AccountChainDisconnect = unknown;

  type AccountDeletionCancel = unknown;

  type AccountDeletionRequest = unknown;

  type AccountSteamChainDisconnect = unknown;

  type AddedGachaStockInfo = {
    gacha_stock_id: number;
    remain_stock_count: number;
    expiration_time: string;
  };

  type AddMatchPointData = {
    add_match_point_total: number;
    add_match_point_base: number;
    add_match_point_match_bonus_skill: number;
  };

  type AppAnnounce = {
    app_announce_id: number;
    message: string;
    begin_date: string;
    end_date: string;
    announce2_date: string;
    announce3_date: string;
    announce4_date: string;
  };

  type BannerUrl = unknown;

  type BestRankInfo = {
    race_instance_id: number;
    best_rank: number;
  };

  type CabinedAccountGetMailInfo = unknown;

  type CabinedAccountRegisterEmailAddress = unknown;

  type CabinedAccountSendAuthCode = unknown;

  type CabinedAccountSendVerificationUrl = unknown;

  type CardGetCardEventSkill = unknown;

  type CardGetReleaseCard = unknown;

  type CardRarityUpgrade = unknown;

  type CardSellPiece = unknown;

  type CardSkillUpgrade = unknown;

  type CardTalentStrengthen = unknown;

  type CardUnlock = unknown;

  type ChallengeMatchIndex = unknown;

  type ChallengeMatchLoadInfo = {
    challenge_match_id: number;
    match_point: number;
    resume_state: number;
    resume_trained_chara_id: number;
  };

  type ChallengeMatchRaceData = {
    challenge_match_race_id: number;
    is_cleared: number;
  };

  type ChallengeMatchRaceEnd = unknown;

  type ChallengeMatchRaceEntry = unknown;

  type ChallengeMatchRaceOpen = unknown;

  type ChallengeMatchRaceRewardLimit = {
    item_category: number;
    item_id: number;
    item_num: number;
    current_count: number;
    limit_count: number;
  };

  type ChallengeMatchRaceStart = unknown;

  type ChallengeMatchReflectItemEffect = unknown;

  type ChallengeMatchReset = unknown;

  type ChallengeMatchResultPoint = {
    raw_point_id: number;
    num: number;
    point: number;
    point_bonus: number;
  };

  type ChallengeMatchResume = unknown;

  type ChampionsCancel = unknown;

  type ChampionsEntryChara = {
    trained_chara_id: number;
    running_style: number;
    team_member_id: number;
  };

  type ChampionsEntry = unknown;

  type ChampionsFinalRaceEnd = unknown;

  type ChampionsFinalRaceRanking = unknown;

  type ChampionsFinalRaceStart = unknown;

  type ChampionsFinalRoundEnd = unknown;

  type ChampionsGetNewsInfo = unknown;

  type ChampionsGetNewsWinInfo = unknown;

  type ChampionsGetRaceHistoryInfo = unknown;

  type ChampionsGetRaceResultChart = unknown;

  type ChampionsGetRankingCharaInfo = unknown;

  type ChampionsGetRewardArray = unknown;

  type ChampionsIndex = unknown;

  type ChampionsInfo = {
    champions_id: number;
    league_type: number;
    entry_times: number;
    free_entry_times: number;
    round_id: number;
    next_tier: number;
    state: number;
    entry_trained_chara_id_array: number;
  };

  type ChampionsLobby = unknown;

  type ChampionsNewsCharaInfo = {
    viewer_id: number;
    team_id: number;
    team_member_id: number;
    news_chara_id_array: number;
    news_chara_comment_id: number;
  };

  type ChampionsNewsCharaRaceHistory = {
    round_id: number;
    set_num: number;
    race_num: number;
    rank: number;
    finish_time: number;
    frame_order: number;
    popularity: number;
    race_horse_num: number;
  };

  type ChampionsNewsCharaResultInfo = {
    viewer_id: number;
    team_id: number;
    team_member_id: number;
    rank_count_1: number;
    rank_count_2: number;
    rank_count_3: number;
    rank_count_unplaced: number;
    race_win_5: number;
  };

  type ChampionsNewsRankCountInfo = {
    trained_chara_id: number;
    rank_count_1: number;
    rank_count_2: number;
    rank_count_3: number;
    rank_count_unplaced: number;
  };

  type ChampionsNewsTrainerInfo = {
    viewer_id: number;
    total_win: number;
    total_race_count: number;
    race_win_5: number;
    news_trainer_id_array: number;
  };

  type ChampionsNewsWinInfo = {
    news_win_title_id: number;
    news_win_comment_id: number;
    news_win_id_array: number;
  };

  type ChampionsPaddockIndex = unknown;

  type ChampionsPoll = unknown;

  type ChampionsRaceEnd = unknown;

  type ChampionsRaceEntry = unknown;

  type ChampionsRaceHistoryCharaResultInfo = {
    viewer_id: number;
    team_id: number;
    team_member_id: number;
    card_id: number;
    rarity: number;
    final_grade: number;
    talent_level: number;
    race_cloth_id: number;
    rank: number;
  };

  type ChampionsRaceHistoryInfo = {
    race_num: number;
  };

  type ChampionsRaceResult = {
    race_num: number;
    result: number;
    user_rank: number;
  };

  type ChampionsRaceStart = unknown;

  type ChampionsRankingEntryCharaInfo = {
    viewer_id: number;
    trained_chara_id: number;
    team_member_id: number;
    card_id: number;
    final_grade: number;
    rarity: number;
    talent_level: number;
    race_cloth_id: number;
    running_style: number;
  };

  type ChampionsRankingInfo = {
    viewer_id: number;
    last_round_id: number;
    rank: number;
    is_same_final: number;
  };

  type ChampionsRankingUserInfo = {
    viewer_id: number;
    name: string;
    honor_id: number;
    leader_chara_id: number;
    leader_chara_dress_id: number;
  };

  type ChampionsRewardInfo = {
    league_type: number;
    round_id: number;
    win_count: number;
    ranking: number;
  };

  type ChampionsRoomInfo = {
    room_id: number;
    user_entry_num: number;
    race_start_time: string;
    race_instance_id: number;
    season: number;
    weather: number;
    ground_condition: number;
    random_seed: number;
    race_scenario: string;
  };

  type ChampionsRoomUser = {
    room_id: number;
    viewer_id: number;
    name: string;
    honor_id: number;
    team_id: number;
  };

  type ChampionsRoundEnd = unknown;

  type ChampionsSelectLeague = unknown;

  type ChampionsSetEntryChara = unknown;

  type ChampionsStampInfo = {
    viewer_id: number;
    stamp_id: number;
    send_time: number;
  };

  type ChampionsStampPoll = unknown;

  type ChampionsStampSendStamp = unknown;

  type ChampionsUserCharaTop = {
    card_id: number;
    chara_id: number;
    race_cloth_id: number;
    nick_name_id: number;
    team_member_id: number;
  };

  type ChampionsUserChara = {
    chara_id: number;
    race_cloth_id: number;
    nick_name_id: number;
    team_member_id: number;
  };

  type ChangeComment = unknown;

  type ChangeLeaderCard = unknown;

  type ChangeName = unknown;

  type ChangePracticePartner = unknown;

  type CharacterStoryData = {
    episode_id: number;
    state: number;
  };

  type CharacterStoryFirstClear = unknown;

  type CharaProfileData = {
    chara_id: number;
    data_id: number;
    new_flag: number;
  };

  type CharaRaceReward = {
    result_rank: number;
    result_time: number;
    gained_fans: number;
    campaign_id_array: number;
  };

  type ChoiceArray = {
    select_index: number;
    receive_item_id: number;
    target_race_id: number;
  };

  type CircleAtLoad = unknown;

  type CircleBreakUp = unknown;

  type CircleChatInviteRoomMatch = unknown;

  type CircleChatMessage = {
    post_id: number;
    viewer_id: number;
    message_type: number;
    message_id: number;
    message_data: string;
    create_time: string;
  };

  type CircleChatPolling = unknown;

  type CircleChatPostPartner = unknown;

  type CircleChatSendItemRequest = unknown;

  type CircleChatSendMessage = unknown;

  type CircleChatSendStamp = unknown;

  type CircleChatUser = {
    viewer_id: number;
    name: string;
    leader_chara_id: number;
    leader_chara_dress_id: number;
  };

  type CircleCheckJoin = unknown;

  type CircleConditionalSearch = unknown;

  type CircleDetail = unknown;

  type CircleDirect = unknown;

  type CircleGetPostPartnerData = unknown;

  type CircleGetRankingTop = unknown;

  type CircleInfoAtFriend = {
    circle_id: number;
    name: string;
    monthly_rank: number;
  };

  type CircleInfo = {
    circle_id: number;
    leader_viewer_id: number;
    name: string;
    comment: string;
    member_num: number;
    join_style: number;
    policy: number;
    make_time: string;
  };

  type CircleItemDonate = {
    donate_id: number;
    request_id: number;
    viewer_id: number;
    item_num: number;
    state: number;
    create_time: string;
  };

  type CircleItemRequestDonateMultiple = unknown;

  type CircleItemRequestDonate = unknown;

  type CircleItemRequestGetRequestData = unknown;

  type CircleItemRequestReceive = unknown;

  type CircleItemRequest = {
    request_id: number;
    viewer_id: number;
    item_id: number;
    end_time: string;
    state: number;
  };

  type CircleList = unknown;

  type CircleMake = unknown;

  type CirclePostPartner = {
    post_comment_id: number;
    post_time: string;
  };

  type CircleRanking = {
    circle_id: number;
    point: number;
    monthly: number;
    rank: number;
  };

  type CircleRequest = {
    circle_id: number;
    viewer_id: number;
    update_time: string;
  };

  type CircleRoomEnter = unknown;

  type CircleScout = {
    circle_id: number;
    viewer_id: number;
  };

  type CircleUpdate = unknown;

  type CircleUserApproveJoinRequest = unknown;

  type CircleUserApproveScout = unknown;

  type CircleUserCancelJoinRequest = unknown;

  type CircleUserCancelScout = unknown;

  type CircleUserChangeLeader = unknown;

  type CircleUserChangeSubLeader = unknown;

  type CircleUserCheckedRequest = unknown;

  type CircleUserDeclineJoinRequest = unknown;

  type CircleUserGetProfileCardInfo = unknown;

  type CircleUserGetProfile = unknown;

  type CircleUserKick = unknown;

  type CircleUserLeave = unknown;

  type CircleUserScout = unknown;

  type CircleUserSetProfileCardInfo = unknown;

  type CircleUserSetProfile = unknown;

  type CircleUserUserJoinRequest = unknown;

  type CircleUser = {
    viewer_id: number;
    circle_id: number;
    membership: number;
    join_time: string;
    penalty_end_time: string;
    item_request_end_time: string;
  };

  type CoinInfo = {
    coin: number;
    fcoin: number;
  };

  type CommonDefine = {
    change_date_hour: number;
    trained_chara_default_save_num: number;
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
    daily_race_ticket_max_num: number;
    legend_race_ticket_max_num: number;
    daily_legend_race_ticket_max_num: number;
    need_team_rank_play_daily_race: number;
    need_team_rank_play_circle: number;
    need_team_rank_play_champions: number;
    champions_open_league_rank_max: number;
    champions_entry_cost_num: number;
    champions_polling_interval: number;
    champions_entry_reset_time: number;
    champions_stamp_polling_interval: number;
    champions_stamp_max_display_num: number;
    serial_code_restrict_release_sec: number;
    room_match_force_start_time_sec: number;
    room_match_entry_limit_time: number;
    room_match_max_saved_race_num: number;
    room_match_max_join_watch_num: number;
    need_team_rank_play_room_match: number;
    need_team_rank_play_practice_race: number;
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
    hint_lvup_open_date: string;
    skill_upgrade_max_level: number;
    race_rich_open_date: string;
    home_eat_open_date: string;
    talk_gallery_open_date: string;
    multi_reserve_open_date: string;
    group_support_card_open_date: string;
    single_mode_scenario_free_shop_item_motivation_up_condition_check_open_date: string;
    profile_card_open_date: string;
    charm_add_evaluation: number;
    featured_stock_add_evaluation: number;
    dress_change_open_date: string;
    story_event_max_total_bonus: number;
    team_building_purchase_limit_num: number;
    team_building_coin_pay_cost: number;
    team_building_free_continue_num: number;
    single_mode_free_auto_item_use_open_date: string;
    jukebox_open_date: string;
    race_orientation_open_date: string;
    choice_reward_preview_open_date: string;
  };

  type CountryInfo = {
    country: string;
    country_type: number;
  };

  type DailyLegendRaceData = {
    daily_legend_race_id: number;
    is_cleared: number;
    is_played: number;
  };

  type DailyLegendRaceGetRewardList = unknown;

  type DailyLegendRaceIndex = unknown;

  type DailyLegendRacePlayingInfo = {
    state: number;
    trained_chara_id: number;
    new_flag: number;
  };

  type DailyLegendRaceRaceEntry = unknown;

  type DailyLegendRaceRaceStart = unknown;

  type DailyLegendRaceReflectItemEffect = unknown;

  type DailyLegendRaceReplayCheck = unknown;

  type DailyLegendRaceReset = unknown;

  type DailyLegendRaceResume = unknown;

  type DailyRaceData = {
    daily_race_id: number;
    is_cleared: number;
    is_played: number;
  };

  type DailyRaceGetRewardList = unknown;

  type DailyRaceIndex = unknown;

  type DailyRacePlayingInfo = {
    state: number;
    trained_chara_id: number;
  };

  type DailyRacePreReplayCheck = unknown;

  type DailyRaceRaceEntry = unknown;

  type DailyRaceRaceStart = unknown;

  type DailyRaceRecoveryTicket = unknown;

  type DailyRaceReflectItemEffect = unknown;

  type DailyRaceReplayCheck = unknown;

  type DailyRaceReset = unknown;

  type DailyRaceResume = unknown;

  type DailyRaceSetRaceScenario = unknown;

  type DailyRaceSkip = unknown;

  type DataHeader = {
    viewer_id: number;
    sid: string;
    servertime: number;
    result_code: number;
    error_message: string;
    store_url: string;
    service_preparation_message: string;
    resource_version: string;
    nonce: string;
    account_deletion_cancellation_period: string;
  };

  type DataLinkChainBySocialAccount = unknown;

  type DataLinkChainByTransitionCode = unknown;

  type DataLinkCreateFacebookNonce = unknown;

  type DataLinkGetByTransitionCode = unknown;

  type DataLinkGetGameDataBySocialAccount = unknown;

  type DataLinkPublishTransitionCode = unknown;

  type DebugRaceInfoLoad = unknown;

  type DebugRaceSimulateDirect = unknown;

  type DebugRaceSimulate = unknown;

  type DebugSingleModeStoryDirect = unknown;

  type DebugTutorialSkip = unknown;

  type DirectoryCard = {
    card_id: number;
    directory_ranking: number;
  };

  type DirectoryCategoryScoreSummary = {
    score: number;
    number: number;
  };

  type DirectoryScoreSummary = {
    directory_card: number;
  };

  type DisplayRewardInfo = {
    item_type: number;
    item_id: number;
    item_num: number;
  };

  type EntryMobChara = {
    npc_id: number;
    rank: number;
    rank_score: number;
    running_style: number;
  };

  type EvaluationInfo = {
    target_id: number;
    evaluation: number;
    is_outing: number;
    story_step: number;
    is_appear: number;
  };

  type EventChoiceRewardGainParam = {
    display_id: number;
    effect_value_0: number;
    effect_value_1: number;
    effect_value_2: number;
  };

  type EventChoiceReward = {
    select_index: number;
  };

  type EventContentsInfo = {
    support_card_id: number;
    show_clear: number;
    show_clear_sort_id: number;
    is_effected_multi_chara: boolean;
  };

  type EventSkill = {
    story_id: number;
    skill_id_array: number;
  };

  type ExtraStoryData = unknown;

  type ExtraStoryFirstClear = unknown;

  type FactorInfo = {
    factor_id: number;
    level: number;
  };

  type FanRaidFansInfo = {
    all_gained_fans: number;
    individual_gained_fans: number;
  };

  type FanRaidIndex = unknown;

  type FanRaidPolling = unknown;

  type FanRaidSingleModeResult = {
    fan_raid_id: number;
    gain_fans: number;
    bonus_gain_fans: number;
    total_gain_fans: number;
    get_all_individual_reward: boolean;
    individual_reward_id_list: number;
  };

  type FriendFollow = unknown;

  type FriendGetTeamStadiumTeamData = unknown;

  type FriendLoad = unknown;

  type FriendRenewRecommendList = unknown;

  type FriendSearch = unknown;

  type FriendUnFollower = unknown;

  type FriendUnFollow = unknown;

  type GachaBannerInfo = {
    id: number;
  };

  type GachaCampaignInfo = {
    id: number;
    is_campaign_draw_enable_single: number;
    is_campaign_draw_enable_multi: number;
  };

  type GachaExecHistory = {
    exec_history_id: number;
    gacha_id: number;
    gacha_card_type: number;
    draw_type: number;
    draw_num: number;
    cost_id: number;
    cost_count: number;
    create_time: string;
  };

  type GachaExec = unknown;

  type GachaGetHistory = unknown;

  type GachaGetPrizeHistory = unknown;

  type GachaInfoList = {
    id: number;
    is_daily_draw_end: number;
    prize_selected_card_type: number;
    prize_selected_card_id: number;
    is_campaign_draw_enable_single: number;
    is_campaign_draw_enable_multi: number;
    remain_stock_num_single: number;
    remain_stock_num_multi: number;
    web_text: string;
  };

  type GachaLimitExchange = unknown;

  type GachaLimitInfo = unknown;

  type GachaLimitItemInfo = {
    gacha_id: number;
    num: number;
    converted_item_num: number;
  };

  type GachaLoad = unknown;

  type GachaPrizeHistory = {
    exec_time: string;
  };

  type GachaPrizeResultInfo = {
    place: number;
    num: number;
  };

  type GachaResultData = {
    card_type: number;
    card_id: number;
    piece_id: number;
    common_item_category: number;
    common_item_id: number;
    convert_piece_num: number;
    convert_common_item_num: number;
    additional_piece_num: number;
    new_flag: number;
    win_prize: number;
  };

  type GachaRewardHistory = {
    exec_history_id: number;
    disp_order: number;
    card_type: number;
    card_id: number;
    piece_id: number;
    common_item_category: number;
    common_item_id: number;
    convert_piece_num: number;
    convert_common_item_num: number;
    additional_piece_num: number;
  };

  type GachaSelectPrize = unknown;

  type GainSkillInfo = {
    skill_id: number;
    level: number;
  };

  type GalleryEventContentsInfo = {
    support_card_id: number;
    month: number;
    race_id: number;
  };

  type GalleryPlayEvent = unknown;

  type GallerySaveGalleryData = unknown;

  type GallopResultCode = unknown;

  type GetTrophyDetail = unknown;

  type GetTrophyInfo = unknown;

  type GroupOutingInfo = {
    chara_id: number;
    is_outing: number;
    story_step: number;
  };

  type GuestOutingInfo = {
    support_card_id: number;
    story_step: number;
  };

  type HomeCharacterDressInfo = {
    position1_chara_id: number;
    position2_chara_id: number;
    position3_chara_id: number;
    position4_chara_id: number;
    position1_cloth_id: number;
    position2_cloth_id: number;
    position3_cloth_id: number;
    position4_cloth_id: number;
  };

  type HomePosterDataForDisplay = {
    id: number;
  };

  type HomePosterDataForRegist = {
    id: number;
  };

  type HomeStoryDataForDisplay = {
    id: number;
  };

  type HomeStoryDataForRegist = {
    id: number;
  };

  type HonorChangeHonor = unknown;

  type HonorData = {
    honor_id: number;
    create_time: string;
  };

  type HonorInfo = {
    last_checked_time: number;
  };

  type HonorList = unknown;

  type InviteHistory = {
    circle_id: number;
    room_id: number;
    viewer_id: number;
    race_type: number;
    create_time: string;
  };

  type ItemCheckAnivShop = unknown;

  type ItemExchangeAddFrame = unknown;

  type ItemExchangeLimit = {
    item_exchange_id: number;
    exchange_count: number;
  };

  type ItemExchange = unknown;

  type ItemManualClose = unknown;

  type ItemSell = unknown;

  type ItemShowExchange = unknown;

  type ItemUseRecoveryItem = unknown;

  type JukeboxChangePlayMusic = unknown;

  type JukeboxChangeRandomRequest = unknown;

  type JukeboxChangeUserRequest = unknown;

  type JukeboxDrawRandomRequest = unknown;

  type JukeboxExecLike = unknown;

  type JukeboxHistory = unknown;

  type JukeboxIndex = unknown;

  type JukeboxInfo = {
    play_music_flag: number;
    random_request_flag: number;
    user_request_flag: number;
    next_random_request_time: string;
    music_size: number;
  };

  type JukeboxLike = {
    request_id: number;
    sort_id: number;
    like_chara_id: number;
    like_viewer_id: number;
  };

  type JukeboxPlayUserRequest = unknown;

  type JukeboxRequest = {
    request_id: number;
    request_type: number;
    request_value: number;
    requester_id: number;
    music_id: number;
    request_time: string;
  };

  type LastCheckedTime = {
    type: number;
    last_checked_time: number;
  };

  type LegendRaceData = {
    legend_race_id: number;
    is_cleared: number;
    is_played: number;
  };

  type LegendRaceGetRewardList = unknown;

  type LegendRaceIndex = unknown;

  type LegendRacePlayingInfo = {
    state: number;
    group_id: number;
    next_group_id: number;
    trained_chara_id: number;
  };

  type LegendRaceRaceEntry = unknown;

  type LegendRaceRaceStart = unknown;

  type LegendRaceRecoveryTicket = unknown;

  type LegendRaceReflectItemEffect = unknown;

  type LegendRaceReplayCheck = unknown;

  type LegendRaceReset = unknown;

  type LegendRaceResume = unknown;

  type LegendRaceSetRaceScenario = unknown;

  type LimitedGoodsInfo = {
    disp_order: number;
    reward_id: number;
  };

  type LimitedShopInfo = {
    limited_exchange_id: number;
    open_flag: number;
    appear_flag: number;
    close_time: number;
    open_count: number;
  };

  type LiveLiveStart = unknown;

  type LiveTheaterIndex = unknown;

  type LiveTheaterLiveStart = unknown;

  type LiveTheaterMemberInfo = {
    chara_id: number;
    mob_id: number;
    dress_id: number;
    color_id: number;
    dress_id2: number;
    color_id2: number;
  };

  type LiveTheaterSaveInfo = {
    music_id: number;
    is_skip_story: number;
  };

  type LiveTheaterSettingInfo = {
    sound_live_music: number;
    display_lyrics: number;
    play_se: number;
    portrait_mode: number;
  };

  type LoginBonusData = {
    login_bonus_id: number;
    total_count: number;
  };

  type Login = unknown;

  type LoginUserTrophyInfo = {
    trophy_id: number;
    chara_id_array: number;
  };

  type LovePointChangeData = {
    chara_id: number;
    love_point: number;
  };

  type LovePointInfo = {
    chara_id: number;
    love_point_before: number;
    love_point_after: number;
  };

  type LoveStoryData = {
    episode_id: number;
    state: number;
  };

  type MainStoryData = {
    episode_id: number;
    state: number;
  };

  type MainStoryFirstClear = unknown;

  type MainStoryRaceEntryChara = {
    frame_order: number;
    chara_id: number;
    mob_id: number;
    dress_id: number;
    rank: number;
    chara_color_type: number;
    is_player: number;
  };

  type MainStoryRaceGetEntryList = unknown;

  type MainStoryRaceGetRaceTable = unknown;

  type MainStoryRaceRaceEnd = unknown;

  type MainStoryRaceRaceStart = unknown;

  type MenuBadgeInfo = {
    present_num: number;
    mission_num: number;
    view_limited_mission_num: number;
    legend_mission_num: number;
    training_challenge_mission_num: number;
    challenge_match_mission_num: number;
    team_building_mission_num: number;
    new_gacha_flag: number;
  };

  type MinigameResultDetail = {
    get_id: number;
    chara_id: number;
    dress_id: number;
    motion: string;
    face: string;
  };

  type MinigameResult = {
    result_state: number;
    result_value: number;
  };

  type MissionLoad = unknown;

  type MissionReceive = unknown;

  type MonthlyFanInfo = {
    ranking_year_month: number;
    num: number;
  };

  type NoReceivePresentNum = {
    no_time_limit_present_num: number;
    time_limit_present_num: number;
  };

  type NotDownParameterInfo = {
    evaluation_chara_id_array: number;
  };

  type NoteDataForDisplay = {
    chara_id: number;
    data_id: number;
    create_time: string;
    new_flag: number;
  };

  type NoteDataForRegist = {
    chara_id: number;
    data_id: number;
  };

  type NoteGetCharaData = unknown;

  type NoteGetNicknameData = unknown;

  type NoteLoad = unknown;

  type NoteSaveCharaData = unknown;

  type NoteSaveNoteData = unknown;

  type NoteSaveVoice = unknown;

  type NotGainCharaEffect = {
    effected_chara_effect_id: number;
    not_gain_chara_effect_id: number;
  };

  type NotificationInfo = {
    add_present_num: number;
    unread_information_exists: number;
    unchecked_new_follower_count: number;
    trophy_badge_flag: number;
    circle_action_flag: number;
    circle_request_latest_time: string;
    team_stadium_reward_flag: number;
    directory_guide_flag: number;
    room_match_race_result_num: number;
    fan_raid_unchecked_dialog_exists: number;
  };

  type NotUpParameterInfo = {
    status_type_array: number;
    chara_effect_id_array: number;
    skill_id_array: number;
    skill_lv_id_array: number;
    evaluation_chara_id_array: number;
    command_lv_array: number;
    has_chara_effect_id_array: number;
    unsupported_evaluation_chara_id_array: number;
  };

  type NotUpTeamParameterInfo = unknown;

  type OptionSupportCardFavoriteFlag = {
    rarity: number;
    status: number;
  };

  type PartnerCharacterLoginParam = {
    card_id: number;
    level: number;
  };

  type PaymentCancel = unknown;

  type PaymentCoinBreakDownInfo = {
    user_coin_id: number;
    product_master_id: number;
    coin: number;
    payment_money: string;
    currency_code: string;
  };

  type PaymentDummyFinishParam = {
    agegroup: number;
    signature: string;
    original_receipt: string;
    currency_code: string;
    price: string;
    purchase_id: string;
  };

  type PaymentDummy = unknown;

  type PaymentFinishParam = {
    agegroup: number;
    signature: string;
    original_receipt: string;
    currency_code: string;
    price: string;
    purchase_id: string;
    product_id: string;
    dmm_point_balance: number;
  };

  type PaymentFinish = unknown;

  type PaymentGetCoinBreakDownInfo = unknown;

  type PaymentItemList = unknown;

  type PaymentPurchasedTimes = {
    product_id: string;
    num_of_purchases: number;
    limit_type: number;
    item_pack_id: number;
    limit: number;
  };

  type PaymentPurchaseItemParam = {
    id: number;
    store_product_id: string;
    name: string;
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
  };

  type PaymentPurchaseTimesData = {
    product_id: string;
    number_of_product_purchased: number;
    limit_of_product_purchased: number;
  };

  type PaymentSeasonPackInfo = {
    product_master_id: number;
    season_end_time: number;
    repurchase_time: number;
    notice_status: number;
  };

  type PaymentSendLog = unknown;

  type PaymentStartParam = {
    product_id: string;
    price: string;
    currency_code: string;
    error_message: string;
  };

  type PaymentStart = unknown;

  type PaymentSteamMicroTxnInit = unknown;

  type PaymentTotalInfo = {
    paymentTotal: number;
  };

  type PaymentUpdateBirth = unknown;

  type PhotoSetActivity = unknown;

  type PieceData = {
    piece_id: number;
    piece_num: number;
  };

  type PracticePartnerOwnerInfo = {
    partner_trained_chara_id: number;
    owner_viewer_id: number;
    owner_name: string;
    owner_trained_chara_id: number;
    friend_state: number;
  };

  type PracticePartnerUsedHistory = {
    trained_chara_id: number;
    practice_exec_viewer_id: number;
    name: string;
    history_type: number;
    circle_name: string;
    use_time: string;
  };

  type PracticeRaceChangeFavoriteRace = unknown;

  type PracticeRaceChangePresetName = unknown;

  type PracticeRaceCreatePartnerId = unknown;

  type PracticeRaceDeletePartner = unknown;

  type PracticeRaceDeleteRace = unknown;

  type PracticeRaceEntryChara = {
    viewer_id: number;
    trained_chara_id: number;
    running_style: number;
    entry_id: number;
  };

  type PracticeRaceEntryInfo = {
    entry_id: number;
    frame_order: number;
  };

  type PracticeRaceGetFollowUserData = unknown;

  type PracticeRaceGetPartnerId = unknown;

  type PracticeRaceGetPartnerInfo = unknown;

  type PracticeRaceGetPresetArray = unknown;

  type PracticeRaceGetSavedRaceList = unknown;

  type PracticeRaceIndex = unknown;

  type PracticeRacePresetInfoForSave = {
    preset_id: number;
  };

  type PracticeRacePresetInfo = {
    preset_id: number;
    name: string;
  };

  type PracticeRaceRaceEnd = unknown;

  type PracticeRaceRaceReplay = unknown;

  type PracticeRaceRaceStart = unknown;

  type PracticeRaceSavedRaceInfo = {
    practice_race_id: number;
    race_instance_id: number;
    entry_num: number;
    user_entry_num: number;
    is_favorite: number;
    save_time: string;
  };

  type PracticeRaceSavePartner = unknown;

  type PracticeRaceSavePreset = unknown;

  type PracticeRaceSearchPartner = unknown;

  type PracticeRaceSetRaceScenario = unknown;

  type PracticeRaceUsedHistory = unknown;

  type PresentData = {
    present_id: number;
    state: number;
    reward_type: number;
    reward_id: number;
    reward_count: number;
    message_id: number;
    message_param_value_1: number;
    message_param_value_2: number;
    message_param_value_3: number;
    message_param_value_4: number;
    reward_limit_time: number;
    create_time: string;
    receive_time: string;
    free_message: string;
  };

  type PresentHistory = unknown;

  type PresentIndex = unknown;

  type PresentReceiveAll = unknown;

  type PresentReceiveOption = unknown;

  type PresentReceive = unknown;

  type PresetEntryChara = {
    viewer_id: number;
    entry_id: number;
    trained_chara_id: number;
    running_style: number;
  };

  type PresetInfo = {
    preset_id: number;
    name: string;
  };

  type PreSingleModeFriendSupportCardReload = unknown;

  type PreSingleModeIndex = unknown;

  type RaceAnalyze = unknown;

  type RaceCharaResult = {
    frame_order: number;
    finish_order: number;
    finish_time: number;
    finish_time_raw: number;
  };

  type RaceConditionInfo = {
    order: number;
    race_instance_id: number;
    season: number;
    weather: number;
    ground_condition: number;
  };

  type RaceHorseDataRaceResult = {
    turn: number;
    program_id: number;
    result_rank: number;
  };

  type RaceHorseData = {
    viewer_id: number;
    owner_viewer_id: number;
    trainer_name: string;
    owner_trainer_name: string;
    single_mode_chara_id: number;
    trained_chara_id: number;
    nickname_id: number;
    card_id: number;
    chara_id: number;
    rarity: number;
    talent_level: number;
    frame_order: number;
    stamina: number;
    speed: number;
    pow: number;
    guts: number;
    wiz: number;
    running_style: number;
    race_dress_id: number;
    chara_color_type: number;
    npc_type: number;
    final_grade: number;
    popularity: number;
    popularity_mark_rank_array: number;
    proper_distance_short: number;
    proper_distance_mile: number;
    proper_distance_middle: number;
    proper_distance_long: number;
    proper_running_style_nige: number;
    proper_running_style_senko: number;
    proper_running_style_sashi: number;
    proper_running_style_oikomi: number;
    proper_ground_turf: number;
    proper_ground_dirt: number;
    motivation: number;
    mob_id: number;
    win_saddle_id_array: number;
    team_id: number;
    team_member_id: number;
    item_id_array: number;
    motivation_change_flag: number;
    frame_order_change_flag: number;
    team_rank: number;
    single_mode_win_count: number;
  };

  type RaceInstanceInfo = {
    race_instance_id: number;
  };

  type RaceResultData = {
    viewer_id: number;
    finish_order: number;
    finish_time: number;
    finish_time_raw: number;
    bashin_diff_from_behind: number;
  };

  type RaceResultInfo = {
    race_instance_id: number;
    season: number;
    weather: number;
    ground_condition: number;
    random_seed: number;
    race_scenario: string;
  };

  type RaceRewardData = {
    item_type: number;
    item_id: number;
    item_num: number;
  };

  type RaceRewardSetData = {
    trainer_exp: number;
    love_point: number;
  };

  type RaceRotationInfo = {
    current_race_num: number;
  };

  type RaceSimulateResult = {
    viewer_id: number;
    single_mode_chara_id: number;
    finish_order: number;
    time: number;
    popularity: number;
    popularity_mark_rank_array: number;
  };

  type RaceSkipReward = {
    rank: number;
  };

  type ReadInfo = unknown;

  type RecoveryRacePoint = unknown;

  type RecoveryTrainerPoint = unknown;

  type ReleasedEpisodeDataForDisplay = {
    id: number;
  };

  type ReleasedEpisodeDataForRegist = {
    id: number;
  };

  type ReleaseNumInfo = {
    voice_num: number;
    act_num: number;
    good_end_num: number;
    music_num: number;
    main_story_num: number;
    chara_story_num: number;
    card_num: number;
    support_card_num: number;
    chara_event_num: number;
    support_event_num: number;
    scenario_event_num: number;
    home_event_num: number;
  };

  type RequestCommon = {
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
    button_info: string;
    dmm_viewer_id: string;
    dmm_onetime_token: string;
    steam_id: string;
    steam_session_ticket: string;
  };

  type ResponseCommon = unknown;

  type ResponseItem = {
    item_type: number;
    item_id: number;
    item_num: number;
  };

  type RewardAddSupportCardNum = {
    support_card_id: number;
    number: number;
    item_type: number;
  };

  type RewardSummaryInfo = {
    add_present_num: number;
    add_fcoin: number;
    add_total_fan: number;
    force_update_honor_id: number;
  };

  type RoomMatchChangeAllowDisplay = unknown;

  type RoomMatchChangeLockRaceResult = unknown;

  type RoomMatchCreateRoom = unknown;

  type RoomMatchCreateRoomSimple = unknown;

  type RoomMatchDeleteRaceResult = unknown;

  type RoomMatchDestroyRoom = unknown;

  type RoomMatchEditRoom = unknown;

  type RoomMatchEnterWaitingRoom = unknown;

  type RoomMatchEntryChara = {
    trained_chara_id: number;
    running_style: number;
    member_id: number;
  };

  type RoomMatchEntryRoom = unknown;

  type RoomMatchForceRaceStart = unknown;

  type RoomMatchGetEntryRoomList = unknown;

  type RoomMatchGetFriendList = unknown;

  type RoomMatchGetSavedRaceResultList = unknown;

  type RoomMatchGetSavedRaceResult = unknown;

  type RoomMatchIndex = unknown;

  type RoomMatchLeaveRoom = unknown;

  type RoomMatchLeaveWatching = unknown;

  type RoomMatchPolling = unknown;

  type RoomMatchRaceChangePresetName = unknown;

  type RoomMatchRaceEndResult = unknown;

  type RoomMatchRaceGetPresetArray = unknown;

  type RoomMatchRaceSavePreset = unknown;

  type RoomMatchRaceStart = unknown;

  type RoomMatchRestrictCharaInfo = {
    chara_id: number;
    dress_id_array: number;
  };

  type RoomMatchRoomDetail = unknown;

  type RoomMatchRoomInfo = {
    room_id: number;
    host_viewer_id: number;
    race_instance_id: number;
    room_name: string;
    message: string;
    season: number;
    weather: number;
    ground_condition: number;
    motivation: number;
    entry_num: number;
    current_entry_num: number;
    private_entry_type: number;
    private_entry_num: number;
    private_current_entry_num: number;
    is_allow_watching: number;
    trained_chara_restriction: number;
    restriction_type: number;
    start_time: string;
    status: number;
    is_allow_display: number;
    private_entry_status: number;
  };

  type RoomMatchRoomList = unknown;

  type RoomMatchRoomSearch = unknown;

  type RoomMatchSavedRoomInfo = {
    saved_room_id: number;
    register_id: number;
    host_viewer_id: number;
    race_instance_id: number;
    room_name: string;
    message: string;
    season: number;
    weather: number;
    ground_condition: number;
    motivation: number;
    entry_num: number;
    current_entry_num: number;
    private_entry_type: number;
    private_entry_num: number;
    private_current_entry_num: number;
    is_allow_watching: number;
    trained_chara_restriction: number;
    restriction_type: number;
    start_time: string;
    random_seed: number;
    favorite_flag: number;
    own_join_type: number;
  };

  type RoomMatchTrainedChara = {
    viewer_id: number;
    trained_chara_id: number;
    owner_viewer_id: number;
    use_type: number;
    card_id: number;
    name: string;
    stamina: number;
    speed: number;
    power: number;
    guts: number;
    wiz: number;
    fans: number;
    rank_score: number;
    rank: number;
    proper_distance_short: number;
    proper_distance_mile: number;
    proper_distance_middle: number;
    proper_distance_long: number;
    proper_running_style_nige: number;
    proper_running_style_senko: number;
    proper_running_style_sashi: number;
    proper_running_style_oikomi: number;
    proper_ground_turf: number;
    proper_ground_dirt: number;
    succession_num: number;
    is_locked: number;
    rarity: number;
    talent_level: number;
    chara_grade: number;
    running_style: number;
    nickname_id: number;
    wins: number;
    is_saved: number;
    win_saddle_id_array: number;
    nickname_id_array: number;
    factor_id_array: number;
    scenario_id: number;
    member_id: number;
    join_type: number;
    create_time: string;
  };

  type RoomMatchUserDetail = {
    viewer_id: number;
    name: string;
    leader_chara_id: number;
    leader_chara_dress_id: number;
    honor_id: number;
    user_friend_state: number;
    join_type: number;
    register_time: string;
  };

  type RoomMatchUser = {
    viewer_id: number;
    room_id: number;
    name: string;
    leader_chara_id: number;
    leader_chara_dress_id: number;
    honor_id: number;
    join_type: number;
  };

  type RoomMatchWatchRoom = unknown;

  type RpInfo = {
    current_rp: number;
    max_rp: number;
    max_recovery_time: number;
  };

  type SafetyNetAttestationGetNonce = unknown;

  type SafetyNetAttestationValidateJws = unknown;

  type ScenarioRecord = {
    scenario_id: number;
    directory_ranking: number;
  };

  type SelectSupportCardList = {
    partner_id: number;
    card_id: number;
    level: number;
    limit_break_count: number;
  };

  type SellSupportCardInfo = {
    support_card_id: number;
    stock: number;
    client_own_stock: number;
  };

  type SerialCodeRegister = unknown;

  type ServerList = {
    resource_server: string;
    resource_server_cf: string;
    resource_server_login: string;
    resource_server_ingame: string;
  };

  type ShortEpisodeDataForDisplay = {
    id: number;
  };

  type ShortEpisodeDataForRegist = {
    id: number;
  };

  type SingleModeBonusEffect = {
    target_type: number;
    min: number;
    max: number;
  };

  type SingleModeChangeRunningStyle = unknown;

  type SingleModeChangeShortCut = unknown;

  type SingleModeCharaEdit = {
    trained_chara_id: number;
    selected_skill_ids: number;
  };

  type SingleModeCharaInfo = {
    trained_chara_id: number;
    program_id: number;
    sense_bonus_ids: number;
  };

  type SingleModeCharaLight = {
    single_mode_chara_id: number;
    card_id: number;
    chara_grade: number;
    speed: number;
    stamina: number;
    power: number;
    wiz: number;
    guts: number;
    vital: number;
    max_vital: number;
    motivation: number;
    fans: number;
    rarity: number;
    race_program_id: number;
    reserve_race_turn: number;
    reserve_race_program_id: number;
    race_running_style: number;
    talent_level: number;
    proper_distance_short: number;
    proper_distance_mile: number;
    proper_distance_middle: number;
    proper_distance_long: number;
    proper_running_style_nige: number;
    proper_running_style_senko: number;
    proper_running_style_sashi: number;
    proper_running_style_oikomi: number;
    proper_ground_turf: number;
    proper_ground_dirt: number;
    turn: number;
    skill_point: number;
    short_cut_state: number;
    state: number;
    playing_state: number;
    scenario_id: number;
    route_id: number;
    succession_trained_chara_id_1: number;
    succession_trained_chara_id_2: number;
    route_race_id_array: number;
    difficulty_id: number;
    difficulty: number;
    training_challenge_id: number;
  };

  type SingleModeChara = {
    single_mode_chara_id: number;
    card_id: number;
    chara_grade: number;
    speed: number;
    stamina: number;
    power: number;
    wiz: number;
    guts: number;
    vital: number;
    max_speed: number;
    max_stamina: number;
    max_power: number;
    max_wiz: number;
    max_guts: number;
    default_max_speed: number;
    default_max_stamina: number;
    default_max_power: number;
    default_max_wiz: number;
    default_max_guts: number;
    max_vital: number;
    motivation: number;
    fans: number;
    rarity: number;
    race_program_id: number;
    reserve_race_program_id: number;
    race_running_style: number;
    is_short_race: number;
    talent_level: number;
    disable_skill_id_array: number;
    succession_trained_chara_id_1: number;
    succession_trained_chara_id_2: number;
    proper_distance_short: number;
    proper_distance_mile: number;
    proper_distance_middle: number;
    proper_distance_long: number;
    proper_running_style_nige: number;
    proper_running_style_senko: number;
    proper_running_style_sashi: number;
    proper_running_style_oikomi: number;
    proper_ground_turf: number;
    proper_ground_dirt: number;
    turn: number;
    skill_point: number;
    short_cut_state: number;
    state: number;
    playing_state: number;
    scenario_id: number;
    route_id: number;
    start_time: string;
    nickname_id_array: number;
    chara_effect_id_array: number;
    route_race_id_array: number;
  };

  type SingleModeCheckEvent = unknown;

  type SingleModeCommandInfo = {
    command_type: number;
    command_id: number;
    is_enable: number;
    training_partner_array: number;
    tips_event_partner_array: number;
    failure_rate: number;
  };

  type SingleModeCommandResult = {
    command_id: number;
    sub_id: number;
    result_state: number;
  };

  type SingleModeContinue = unknown;

  type SingleModeDifficultyBoxInfo = {
    box_id: number;
  };

  type SingleModeDifficultyBoxRewardInfo = {
    difficulty_box_reward_id: number;
    remain_num: number;
  };

  type SingleModeDifficultyInfo = {
    difficulty_id: number;
    open_difficulty_index: number;
    item_num: number;
    box_id: number;
    box_item_num: number;
    gacha_gauge: number;
  };

  type SingleModeEventInfo = {
    event_id: number;
    chara_id: number;
    story_id: number;
    play_timing: number;
  };

  type SingleModeExecCommand = unknown;

  type SingleModeExecCommand = {
    command_type: number;
    command_id: number;
    sub_id: number;
    command_num: number;
  };

  type SingleModeFinishCommon = {
    directory_ranking: number;
    trained_chara_id: number;
    release_item_flag: number;
    circle_point: number;
    campaign_id_array: number;
  };

  type SingleModeFinish = unknown;

  type SingleModeFreeChangeRunningStyle = unknown;

  type SingleModeFreeChangeShortCut = unknown;

  type SingleModeFreeCheckEvent = unknown;

  type SingleModeFreeChoiceReward = unknown;

  type SingleModeFreeCommandInfo = {
    command_type: number;
    command_id: number;
  };

  type SingleModeFreeContinue = unknown;

  type SingleModeFreeDataSet = {
    shop_id: number;
    sale_value: number;
    win_points: number;
    gained_coin_num: number;
    coin_num: number;
    twinkle_race_ranking: number;
    unchecked_event_achievement_id: number;
  };

  type SingleModeFreeExchangeItemInfo = {
    shop_item_id: number;
    current_num: number;
  };

  type SingleModeFreeExecCommand = unknown;

  type SingleModeFreeFinish = unknown;

  type SingleModeFreeGainSkills = unknown;

  type SingleModeFreeItemEffect = {
    use_id: number;
    item_id: number;
    effect_type: number;
    effect_value_1: number;
    effect_value_2: number;
    effect_value_3: number;
    effect_value_4: number;
    begin_turn: number;
    end_turn: number;
  };

  type SingleModeFreeLoad = unknown;

  type SingleModeFreeMinigameEnd = unknown;

  type SingleModeFreeMultiItemExchange2 = unknown;

  type SingleModeFreeMultiItemExchange = unknown;

  type SingleModeFreeMultiItemUse = unknown;

  type SingleModeFreeMultiRaceReserve = unknown;

  type SingleModeFreePickUpItem = {
    shop_item_id: number;
    item_id: number;
    coin_num: number;
    original_coin_num: number;
    item_buy_num: number;
    limit_buy_count: number;
    limit_turn: number;
  };

  type SingleModeFreeRaceAnalyze = unknown;

  type SingleModeFreeRaceEnd = unknown;

  type SingleModeFreeRaceEntry = unknown;

  type SingleModeFreeRaceOut = unknown;

  type SingleModeFreeRaceReserve = unknown;

  type SingleModeFreeRaceStart = unknown;

  type SingleModeFreeSaveRaceResult = unknown;

  type SingleModeFreeStart = unknown;

  type SingleModeFreeTwinkleRaceNpcInfo = {
    npc_id: number;
    chara_id: number;
    dress_id: number;
    talent_level: number;
    win_points: number;
    speed: number;
    stamina: number;
    power: number;
    guts: number;
    wiz: number;
    proper_distance_short: number;
    proper_distance_mile: number;
    proper_distance_middle: number;
    proper_distance_long: number;
    proper_running_style_nige: number;
    proper_running_style_senko: number;
    proper_running_style_sashi: number;
    proper_running_style_oikomi: number;
    proper_ground_turf: number;
    proper_ground_dirt: number;
  };

  type SingleModeFreeUseItemInfo = {
    item_id: number;
    use_num: number;
    current_num: number;
  };

  type SingleModeFreeUserItem = {
    item_id: number;
    num: number;
  };

  type SingleModeFriendSupportCardInfo = {
    viewer_id: number;
    support_card_id: number;
  };

  type SingleModeFriendSupportCard = unknown;

  type SingleModeGainSkills = unknown;

  type SingleModeGetChoiceReward = unknown;

  type SingleModeHomeInfo = {
    race_entry_restriction: number;
    disable_command_id_array: number;
    available_continue_num: number;
    available_free_continue_num: number;
    free_continue_num: number;
    free_continue_time: number;
    shortened_race_state: number;
  };

  type SingleModeInfo = {
    month: number;
    total_turn: number;
    room_num: number;
  };

  type SingleModeLoad = unknown;

  type SingleModeMinigameEnd = unknown;

  type SingleModeMultiRaceReserve = unknown;

  type SingleModeNpcResult = {
    npc_id: number;
    result_rank: number;
  };

  type SingleModeNpcTeamData = {
    distance_type: number;
    member_id: number;
    npc_id: number;
    running_style: number;
  };

  type SingleModeParamsIncDecInfo = {
    target_type: number;
    value: number;
  };

  type SingleModeRaceAddRewardInfo = {
    campaign_id: number;
    program_id: number;
    reward_date: number;
    reward_count: number;
  };

  type SingleModeRaceCharaResult = {
    single_mode_chara_id: number;
    frame_order: number;
    running_style: number;
    result_rank: number;
    result_time: number;
    result_time_raw: number;
    bashin_diff: number;
    bashin_diff_from_top: number;
    skill_activate_count: number;
    is_excitement: number;
    is_running_alone: number;
    last_straight_line_rank: number;
  };

  type SingleModeRaceCondition = {
    program_id: number;
    weather: number;
    ground_condition: number;
  };

  type SingleModeRaceEnd = unknown;

  type SingleModeRaceEntry = unknown;

  type SingleModeRaceMobNpcResult = {
    mob_id: number;
    result_rank: number;
    result_time: number;
    result_time_raw: number;
    running_style: number;
    frame_order: number;
  };

  type SingleModeRaceOut = unknown;

  type SingleModeRaceReserve = unknown;

  type SingleModeRaceResult = {
    program_id: number;
    race_instance_id: number;
    weather: number;
    ground_condition: number;
    start_dash_state: number;
  };

  type SingleModeRaceStart = unknown;

  type SingleModeRaceUniqueNpcResult = {
    chara_id: number;
    result_rank: number;
    result_time: number;
    result_time_raw: number;
    running_style: number;
    frame_order: number;
  };

  type SingleModeRentalSuccessionChara = {
    viewer_id: number;
    trained_chara_id: number;
    is_circle_member: boolean;
    is_event_rental: boolean;
  };

  type SingleModeReservedRaceDeck = {
    deck_num: number;
    deck_name: string;
  };

  type SingleModeReservedRace = {
    year: number;
    program_id: number;
  };

  type SingleModeResultBonusEffect = {
    target_type: number;
    effect_value: number;
  };

  type SingleModeResultDifficultyBox = {
    box_id: number;
  };

  type SingleModeResultDifficultyDataSet = {
    is_boost: number;
  };

  type SingleModeRivalRaceInfo = {
    program_id: number;
    chara_id: number;
  };

  type SingleModeSaveRaceResult = unknown;

  type SingleModeSelectedDifficultyInfo = {
    difficulty_id: number;
    difficulty: number;
    is_boost: number;
  };

  type SingleModeSpecialTrainingInfo = {
    command_type: number;
    command_id: number;
    support_card_position: number;
  };

  type SingleModeStartChara = {
    card_id: number;
    support_card_ids: number;
    succession_trained_chara_id_1: number;
    succession_trained_chara_id_2: number;
    scenario_id: number;
    select_deck_id: number;
    boost_story_event_id: number;
    is_play_training_challenge: boolean;
  };

  type SingleModeStartDressInfo = {
    single_mode_chara_dress_id: number;
  };

  type SingleModeStart = unknown;

  type SingleModeSuccessionDressInfo = {
    trained_chara_id: number;
    dress_id: number;
  };

  type SingleModeSuccessionEventInfo = {
    effect_type: number;
  };

  type SingleModeSuccessionTrainedChara = unknown;

  type SingleModeSupportCard = {
    position: number;
    support_card_id: number;
    limit_break_count: number;
    exp: number;
    training_partner_state: number;
    owner_viewer_id: number;
  };

  type SingleModeTargetRace = {
    target_turn: number;
    target_type: number;
    target_value: number;
  };

  type SingleModeTeamAnalyzeMarkArray = {
    distance_type: number;
    mark_type: number;
  };

  type SingleModeTeamChangeRunningStyle = unknown;

  type SingleModeTeamChangeShortCut = unknown;

  type SingleModeTeamCharaInfo = {
    training_partner_id: number;
    speed: number;
    stamina: number;
    power: number;
    wiz: number;
    guts: number;
    speed_limit: number;
    stamina_limit: number;
    power_limit: number;
    wiz_limit: number;
    guts_limit: number;
    speed_limit_base: number;
    stamina_limit_base: number;
    power_limit_base: number;
    wiz_limit_base: number;
    guts_limit_base: number;
    rank_score: number;
  };

  type SingleModeTeamCheckEvent = unknown;

  type SingleModeTeamCommandInfo = {
    command_type: number;
    command_id: number;
    guide_event_partner_array: number;
    soul_event_partner_array: number;
  };

  type SingleModeTeamCommandResult = unknown;

  type SingleModeTeamContinue = unknown;

  type SingleModeTeamDataSet = {
    scenario_progress: number;
    final_win_type: number;
  };

  type SingleModeTeamData = {
    distance_type: number;
    member_id: number;
    chara_id: number;
    running_style: number;
  };

  type SingleModeTeamEventEffectInfo = {
    is_summarize_team_member: boolean;
    gain_speed: number;
    gain_stamina: number;
    gain_power: number;
    gain_guts: number;
    gain_wiz: number;
  };

  type SingleModeTeamExecCommand = unknown;

  type SingleModeTeamFinish = unknown;

  type SingleModeTeamFrameOrder = {
    distance_type: number;
    race_order: number;
  };

  type SingleModeTeamGainSkills = unknown;

  type SingleModeTeamGetChoiceReward = unknown;

  type SingleModeTeamInfo = {
    team_name_id: number;
    speed_rank: number;
    stamina_rank: number;
    power_rank: number;
    guts_rank: number;
    wiz_rank: number;
    team_power: number;
    team_rank: number;
    team_rank_state: number;
    team_title: number;
    guide_partner_count: number;
    is_scout_enable: boolean;
    team_edit_flag: number;
  };

  type SingleModeTeamLoad = unknown;

  type SingleModeTeamMinigameEnd = unknown;

  type SingleModeTeamMultiRaceReserve = unknown;

  type SingleModeTeamOpponentList = unknown;

  type SingleModeTeamOpponentList = {
    team_race_set_id: number;
    team_power: number;
    team_rank: number;
    win_up_rank: number;
  };

  type SingleModeTeamRaceAnalyze = unknown;

  type SingleModeTeamRaceCharaResult = {
    frame_order: number;
    chara_id: number;
    npc_id: number;
    team_id: number;
    finish_order: number;
    finish_time: number;
    popularity: number;
  };

  type SingleModeTeamRaceEnd = unknown;

  type SingleModeTeamRaceEntry = unknown;

  type SingleModeTeamRaceHistory = {
    race_num: number;
    turn: number;
    team_race_set_id: number;
    result_state: number;
  };

  type SingleModeTeamRaceOut = unknown;

  type SingleModeTeamRaceReserve = unknown;

  type SingleModeTeamRaceResult = {
    distance_type: number;
    race_instance_id: number;
    season: number;
    weather: number;
    ground_condition: number;
    random_seed: number;
    race_scenario: string;
    round: number;
    win_type: number;
  };

  type SingleModeTeamRaceStart = unknown;

  type SingleModeTeamRandomInfo = {
    team_race_set_id: number;
    member_id: number;
    chara_id: number;
    npc_id: number;
    running_style: number;
    frame_order: number;
    motivation: number;
    stamina: number;
    speed: number;
    pow: number;
    guts: number;
    wiz: number;
  };

  type SingleModeTeamSaveRaceResult = unknown;

  type SingleModeTeamSaveTeamEditFlag = unknown;

  type SingleModeTeamStart = unknown;

  type SingleModeTeamTeamEdit = unknown;

  type SingleModeTeamTeamRaceAnalyze = unknown;

  type SingleModeTeamTeamRaceEnd = unknown;

  type SingleModeTeamTeamRaceOut = unknown;

  type SingleModeTeamTeamRaceStart = unknown;

  type SingleModeTwikleRaceNpcResult = {
    turn: number;
    program_id: number;
  };

  type SingleRaceHistory = {
    turn: number;
    program_id: number;
    weather: number;
    ground_condition: number;
    running_style: number;
    result_rank: number;
    frame_order: number;
  };

  type SingleRaceStartInfo = {
    program_id: number;
    random_seed: number;
    weather: number;
    ground_condition: number;
    continue_num: number;
  };

  type SkillData = {
    skill_id: number;
    level: number;
  };

  type SkillTips = {
    group_id: number;
    rarity: number;
    level: number;
  };

  type StoryDirectEventReward = {
    id: number;
    gain_id: number;
    gain_type: number;
    gain_value_1: number;
    gain_value_2: number;
    gain_value_3: number;
    gain_value_4: number;
  };

  type StoryDirectSkillSet = {
    id: number;
    skill_set: number;
    skill_id: number;
    add_skill_discount: number;
  };

  type StoryEventAddPointSummary = {
    total: number;
    rank_score: number;
    nickname_bonus: number;
    card_bonus: number;
    support_card_bonus: number;
    win_num_bonus: number;
  };

  type StoryEventAnnounce = unknown;

  type StoryEventBingoData = {
    sheet_num: number;
    line_num: number;
  };

  type StoryEventCharaBonus = {
    chara_id: number;
    card_type: number;
    card_id: number;
    bonus: number;
    is_rental: boolean;
  };

  type StoryEventIndex = unknown;

  type StoryEventReceiveMission = unknown;

  type StoryEventRouletteChangeSheet = unknown;

  type StoryEventRouletteExec = unknown;

  type StoryEventRoulette = unknown;

  type StoryEventRouletteReward = {
    reward_order: number;
    item_category: number;
    item_id: number;
    item_num: number;
  };

  type StoryEventSingleModeResult = {
    event_id: number;
    point_reward_id_list: number;
    get_all_point_reward: boolean;
    new_story_id_list: number;
    is_boost: number;
  };

  type StoryEventStoryClear = unknown;

  type StoryEventStoryData = {
    episode_id: number;
    state: number;
  };

  type StoryEventUserInfo = {
    event_point: number;
    roulette_coin_num: number;
    roulette_sheet_num: number;
  };

  type StoryExtraStoryData = {
    episode_id: number;
    state: number;
  };

  type StoryFavorite = {
    episode_type: number;
    episode_id: number;
    is_mark: number;
  };

  type SuccessionChara = {
    position_id: number;
    card_id: number;
    rank: number;
    rarity: number;
    talent_level: number;
    factor_id_array: number;
    win_saddle_id_array: number;
    owner_viewer_id: number;
  };

  type SuccessionEffectedFactor = {
    position: number;
    factor_id_array: number;
  };

  type SuccessionHistory = {
    id: number;
    viewer_id: number;
    trained_chara_id: number;
    hisotry_type: number;
    succession_card_id: number;
    date: number;
    user_name: string;
    circle_name: string;
  };

  type SupportCardChangeLock = unknown;

  type SupportCardDeckChangeName = unknown;

  type SupportCardDeckChangeParty = unknown;

  type SupportCardGetSupportCardEventSkill = unknown;

  type SupportCardLimitBreakItem = unknown;

  type SupportCardLimitBreak = unknown;

  type SupportCardRankingGetRanking = unknown;

  type SupportCardRankingGroup = {
    exam_index: number;
  };

  type SupportCardRankingItem = {
    support_card_id: number;
    percentage: number;
    rank: number;
  };

  type SupportCardSell = unknown;

  type SupportCardStrengthen = unknown;

  type TalkData = {
    story_id: number;
    is_open: boolean;
  };

  type TalkGalleryIndex = unknown;

  type TalkGalleryList = {
    home_story_trigger_id: number;
    new_flag: number;
  };

  type TeamBuidingTeamInfo = {
    team_id: number;
    viewer_id: number;
    user_name: string;
    honor_id: number;
    team_name: string;
    team_score: number;
  };

  type TeamBuildingChangeCaptain = unknown;

  type TeamBuildingChangeRunningStyle = unknown;

  type TeamBuildingChangeTeamName = unknown;

  type TeamBuildingCollectionChara = {
    chara_id: number;
    used_flag: number;
    new_flag: number;
  };

  type TeamBuildingEntryChara = {
    member_id: number;
  };

  type TeamBuildingIndex = unknown;

  type TeamBuildingLoadInfo = {
    team_building_id: number;
    state: number;
    captain_id: number;
  };

  type TeamBuildingMakeTeam = unknown;

  type TeamBuildingOpponentArray = unknown;

  type TeamBuildingRaceContinue = unknown;

  type TeamBuildingRaceEntry = unknown;

  type TeamBuildingRaceResult = unknown;

  type TeamBuildingRaceStart = unknown;

  type TeamBuildingRecoveryTicket = unknown;

  type TeamBuildingResume = unknown;

  type TeamBuildingRunningStyleInfo = {
    member_id: number;
    running_style: number;
  };

  type TeamBuildingSaveCollection = unknown;

  type TeamBuildingScoutPointInfo = {
    item_id: number;
    basic_num: number;
    total_num: number;
    straight_win_count: number;
  };

  type TeamBuildingScout = unknown;

  type TeamBuildingUseRecoveryItem = unknown;

  type TeamEvaluationInfo = {
    target_id: number;
    chara_id: number;
    member_state: number;
    soul_threshold_id: number;
    soul_event_state: number;
  };

  type TeamParameterCode = {
    training_partner_id: number;
    code: number;
  };

  type TeamSkillTips = {
    training_partner_id: number;
  };

  type TeamStadiumAddFanInfo = {
    chara_id: number;
    add_fan: number;
  };

  type TeamStadiumAllRaceEnd = unknown;

  type TeamStadiumBonusData = {
    score_bonus_id: number;
    bonus_score: number;
  };

  type TeamStadiumBorderLine = {
    promotion_rank: number;
    demotion_rank: number;
    keep_rank: number;
    promotion_point: number;
    demotion_point: number;
    keep_point: number;
  };

  type TeamStadiumDecideFrameOrder = unknown;

  type TeamStadiumFrameOrder = {
    distance_type: number;
    race_order: number;
  };

  type TeamStadiumIndex = unknown;

  type TeamStadiumOpponentList = unknown;

  type TeamStadiumOpponent = {
    strength: number;
    opponent_viewer_id: number;
    evaluation_point: number;
    winning_reward_guarantee_status: number;
  };

  type TeamStadiumRaceCharaResult = {
    viewer_id: number;
    frame_order: number;
    trained_chara_id: number;
    team_id: number;
    finish_order: number;
    finish_time: number;
  };

  type TeamStadiumRaceResult = {
    distance_type: number;
    race_scenario: string;
    round: number;
    team_total_score: number;
    win_type: number;
    current_consecutive_win_count: number;
    bonus_rate_by_next_win: number;
  };

  type TeamStadiumRaceSimulateCharaResult = {
    viewer_id: number;
    single_mode_chara_id: number;
    finish_order: number;
    finish_time: number;
    finish_time_raw: number;
    skill_activate_count_array: number;
  };

  type TeamStadiumRaceSimulateResult = {
    race_scenario: string;
  };

  type TeamStadiumRaceStartParams = {
    round: number;
    race_instance_id: number;
    season: number;
    weather: number;
    ground_condition: number;
    random_seed: number;
    self_evaluate: number;
    opponent_evaluate: number;
  };

  type TeamStadiumRandomInfo = {
    viewer_id: number;
    member_id: number;
    trained_chara_id: number;
    running_style: number;
    frame_order: number;
    motivation: number;
  };

  type TeamStadiumRanking = unknown;

  type TeamStadiumRanking = {
    term_id: number;
    viewer_id: number;
    team_class: number;
    best_point: number;
    rank: number;
  };

  type TeamStadiumReplayCheck = unknown;

  type TeamStadiumResultBonusData = {
    score_bonus_id: number;
    bonus_score: number;
    condition_type: number;
    condition_value_1: number;
    condition_value_2: number;
    score_rate: number;
  };

  type TeamStadiumResultHorseScore = unknown;

  type TeamStadiumResultScoreData = {
    raw_score_id: number;
    num: number;
    score: number;
  };

  type TeamStadiumResultTeam = {
    team_id: number;
    team_total_score: number;
  };

  type TeamStadiumSaveRaceResult = unknown;

  type TeamStadiumScoreData = {
    raw_score_id: number;
    num: number;
    score: number;
  };

  type TeamStadiumStart = unknown;

  type TeamStadiumTeamDataAtFriend = {
    distance_type: number;
    member_id: number;
    running_style: number;
  };

  type TeamStadiumTeamData = {
    distance_type: number;
    member_id: number;
    trained_chara_id: number;
    running_style: number;
  };

  type TeamStadiumTeamEdit = unknown;

  type TeamStadiumTotalScoreInfo = {
    final_total_score: number;
    all_race_result_score_bonus: number;
  };

  type TeamStadiumUserDetail = unknown;

  type TeamStadiumUser = {
    team_class: number;
    best_team_class: number;
    best_point: number;
  };

  type TeamStadiumWinningRewardContent = {
    round: number;
    item_category: number;
    item_id: number;
    item_num: number;
    box_color_type: number;
  };

  type TeamStadiumWinningRewardInfo = {
    round: number;
    box_color_type: number;
  };

  type ToolDeviceAttest = unknown;

  type ToolGetPreDownloadResourceVersion = unknown;

  type ToolGetVerifyToken = unknown;

  type ToolSendLog = unknown;

  type TpInfo = {
    current_tp: number;
    max_tp: number;
    max_recovery_time: number;
  };

  type TrainedCharaChangeLockMulti = unknown;

  type TrainedCharaChangeMemo = unknown;

  type TrainedCharaChangeNickname = unknown;

  type TrainedCharaFavorite = {
    trained_chara_id: number;
    icon_type: number;
    memo: string;
  };

  type TrainedCharaLoad = unknown;

  type TrainedCharaParam = {
    skill: number;
    stamina: number;
    speed: number;
    power: number;
    guts: number;
    wiz: number;
  };

  type TrainedCharaRaceResult = {
    turn: number;
    program_id: number;
    weather: number;
    ground_condition: number;
    running_style: number;
    result_rank: number;
  };

  type TrainedCharaRemove = unknown;

  type TrainedCharaSupportCardList = {
    position: number;
    support_card_id: number;
    exp: number;
    limit_break_count: number;
  };

  type TrainedChara = {
    viewer_id: number;
    trained_chara_id: number;
    owner_viewer_id: number;
    use_type: number;
    card_id: number;
    name: string;
    stamina: number;
    speed: number;
    power: number;
    guts: number;
    wiz: number;
    fans: number;
    rank_score: number;
    rank: number;
    proper_distance_short: number;
    proper_distance_mile: number;
    proper_distance_middle: number;
    proper_distance_long: number;
    proper_running_style_nige: number;
    proper_running_style_senko: number;
    proper_running_style_sashi: number;
    proper_running_style_oikomi: number;
    proper_ground_turf: number;
    proper_ground_dirt: number;
    succession_num: number;
    is_locked: number;
    rarity: number;
    talent_level: number;
    chara_grade: number;
    running_style: number;
    nickname_id: number;
    wins: number;
    is_saved: number;
    win_saddle_id_array: number;
    nickname_id_array: number;
    factor_id_array: number;
    scenario_id: number;
    create_time: string;
  };

  type TrainingChallengeExamInfo = {
    exam_id: number;
    high_score_value: number;
    result_type: number;
    is_challenged: boolean;
  };

  type TrainingChallengeExamSelect = unknown;

  type TrainingChallengeGetRanking = unknown;

  type TrainingChallengeIndex = unknown;

  type TrainingChallengeRankUser = {
    viewer_id: number;
    name: string;
    score: number;
  };

  type TrainingChallengeResult = {
    event_id: number;
    exam_id: number;
    next_exam_id: number;
  };

  type TrainingChallengeScoreSummary = {
    total: number;
    rank_score: number;
    base_rank_score: number;
    score_ids: number;
    add_event_coin: number;
  };

  type TrainingChallengeUserInfo = {
    event_coin: number;
    select_exam_id: number;
  };

  type TrainingLevelInfo = {
    command_id: number;
    level: number;
  };

  type TransferDetail = unknown;

  type TransferEventDetailInfo = {
    transfer_detail_id: number;
    exists_trained_chara: boolean;
    remaining_num: number;
  };

  type TransferEventInfo = {
    transfer_event_id: number;
  };

  type TransferEventRewardInfo = {
    trained_chara_id: number;
  };

  type TransferExecMulti = unknown;

  type TransferIndex = unknown;

  type TrophyCharaInfo = {
    chara_id: number;
    win_count: number;
  };

  type TrophyNumInfo = {
    grade_1: number;
    grade_2: number;
    grade_3: number;
    grade_ex: number;
  };

  type TutorialGuideDataForDisplay = {
    id: number;
  };

  type TutorialGuideDataForRegist = {
    id: number;
  };

  type Tutorial = unknown;

  type TutorialSingleModeFinish = unknown;

  type TutorialTeamEdit = unknown;

  type UpdateForceDisplayStatus = unknown;

  type UseItemData = {
    item_id: number;
    item_num: number;
  };

  type UserCardDress = {
    card_id: number;
    cloth_id: number;
  };

  type UserCard = {
    card_id: number;
    rarity: number;
    talent_level: number;
    create_time: string;
  };

  type UserChangeCardDress = unknown;

  type UserChangeDmaState = unknown;

  type UserChangeFavoriteCharacter = unknown;

  type UserChangeStoryFavorite = unknown;

  type UserChangeSupportCard = unknown;

  type UserChara = {
    chara_id: number;
    training_num: number;
    love_point: number;
    fan: number;
  };

  type UserCloth = {
    cloth_id: number;
  };

  type UserFriend = {
    friend_viewer_id: number;
    state: number;
    follow_time: string;
    follower_time: string;
  };

  type UserGetProfileCardInfo = unknown;

  type UserGetProfileInfo = unknown;

  type UserInfoAtFollower = {
    viewer_id: number;
    name: string;
    honor_id: number;
    last_login_time: string;
    support_card_id: number;
  };

  type UserInfoAtFriend = {
    viewer_id: number;
    name: string;
    honor_id: number;
    last_login_time: string;
    leader_chara_id: number;
    support_card_id: number;
    comment: string;
    fan: number;
    directory_level: number;
    rank_score: number;
    team_stadium_win_count: number;
    single_mode_play_count: number;
    team_evaluation_point: number;
    best_team_evaluation_point: number;
    friend_state: number;
    leader_chara_dress_id: number;
    state: number;
  };

  type UserInfo = {
    viewer_id: number;
    name: string;
    honor_id: number;
    sex: number;
    tutorial_step: number;
    leader_chara_id: number;
    support_card_id: number;
    partner_chara_id: number;
    bonus_follow_num: number;
    comment: string;
    birth_day: string;
    fan: number;
    directory_level: number;
    rank_score: number;
    best_team_evaluation_point: number;
    create_time: string;
    update_time: string;
    leader_chara_dress_id: number;
  };

  type UserItem = {
    item_id: number;
    number: number;
  };

  type UserMission = {
    mission_id: number;
    mission_status: number;
    exec_count: number;
  };

  type UserMusic = {
    music_id: number;
    acquisition_time: string;
  };

  type UserNoticeData = {
    event_id: number;
    notice_title: string;
    notice_text: string;
    button_type: number;
  };

  type UserProfileCardInfo = {
    chara_id: number;
    dress_id: number;
    bg_id: number;
    card_bg_id: number;
    theme_id: number;
    support_card_id: number;
    illustration_type: number;
    comment: string;
    is_trainer_info_aligned_right: boolean;
    show_back_side: boolean;
    show_trainer_id: boolean;
    image_offset_x: number;
    image_offset_y: number;
    image_rotate: number;
    image_scale: number;
    image_file_hash: string;
  };

  type UserResetAllCardDress = unknown;

  type UserResetCardDress = unknown;

  type UserSetBirthDay = unknown;

  type UserSetProfileCardInfo = unknown;

  type UserSupportCardAtFriend = {
    support_card_id: number;
    exp: number;
    limit_break_count: number;
  };

  type UserSupportCardDeckForUpdateParty = {
    deck_id: number;
    support_card_id_array: number;
    auto_deck_flag: number;
  };

  type UserSupportCardDeck = {
    deck_id: number;
    name: string;
    support_card_id_array: number;
  };

  type UserSupportCard = {
    viewer_id: number;
    support_card_id: number;
    exp: number;
    limit_break_count: number;
    favorite_flag: number;
    stock: number;
    possess_time: string;
  };

  type UserTrainedCharaAtFriend = {
    viewer_id: number;
    trained_chara_id: number;
    card_id: number;
    rank_score: number;
    rank: number;
    proper_distance_short: number;
    proper_distance_mile: number;
    proper_distance_middle: number;
    proper_distance_long: number;
    proper_running_style_nige: number;
    proper_running_style_senko: number;
    proper_running_style_sashi: number;
    proper_running_style_oikomi: number;
    proper_ground_turf: number;
    proper_ground_dirt: number;
    rarity: number;
    talent_level: number;
    register_time: string;
    factor_id_array: number;
    skill_count: number;
  };

  type UserTrophyInfo = {
    trophy_id: number;
    create_time: string;
  };

  type ValentineIndex = unknown;

  type ValentineReceivedData = {
    last_received_time: string;
    card_id_list: number;
  };

  type Module = unknown;

  type PrivateImplementationDetails = unknown;
}

export {};
