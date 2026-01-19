// Auto-generated from docs/umamusume_api_info/umamusume.Http by scripts/generate-umatypes.ts

declare global {
  namespace Umatypes {
    type AccountChainDisconnectResponseMetadata = unknown;

    type AccountDeletionCancelResponseMetadata = unknown;

    type AccountDeletionRequestResponseMetadata = unknown;

    type AccountSteamChainDisconnectResponseMetadata = unknown;

    type AddedGachaStockInfoMetadata = {
      gacha_stock_id: number;
      remain_stock_count: number;
      expiration_time: string;
    };

    type AddMatchPointDataMetadata = {
      add_match_point_total: number;
      add_match_point_base: number;
      add_match_point_match_bonus_skill: number;
    };

    type AppAnnounceMetadata = {
      app_announce_id: number;
      message: string;
      begin_date: string;
      end_date: string;
      announce2_date: string;
      announce3_date: string;
      announce4_date: string;
    };

    type BannerUrlResponseMetadata = unknown;

    type BestRankInfoMetadata = {
      race_instance_id: number;
      best_rank: number;
    };

    type CabinedAccountGetMailInfoResponseMetadata = unknown;

    type CabinedAccountRegisterEmailAddressResponseMetadata = unknown;

    type CabinedAccountSendAuthCodeResponseMetadata = unknown;

    type CabinedAccountSendVerificationUrlResponseMetadata = unknown;

    type CardGetCardEventSkillResponseMetadata = unknown;

    type CardGetReleaseCardResponseMetadata = unknown;

    type CardRarityUpgradeResponseMetadata = unknown;

    type CardSellPieceResponseMetadata = unknown;

    type CardSkillUpgradeResponseMetadata = unknown;

    type CardTalentStrengthenResponseMetadata = unknown;

    type CardUnlockResponseMetadata = unknown;

    type ChallengeMatchIndexResponseMetadata = unknown;

    type ChallengeMatchLoadInfoMetadata = {
      challenge_match_id: number;
      match_point: number;
      resume_state: number;
      resume_trained_chara_id: number;
    };

    type ChallengeMatchRaceDataMetadata = {
      challenge_match_race_id: number;
      is_cleared: number;
    };

    type ChallengeMatchRaceEndResponseMetadata = unknown;

    type ChallengeMatchRaceEntryResponseMetadata = unknown;

    type ChallengeMatchRaceOpenResponseMetadata = unknown;

    type ChallengeMatchRaceRewardLimitMetadata = {
      item_category: number;
      item_id: number;
      item_num: number;
      current_count: number;
      limit_count: number;
    };

    type ChallengeMatchRaceStartResponseMetadata = unknown;

    type ChallengeMatchReflectItemEffectResponseMetadata = unknown;

    type ChallengeMatchResetResponseMetadata = unknown;

    type ChallengeMatchResultPointMetadata = {
      raw_point_id: number;
      num: number;
      point: number;
      point_bonus: number;
    };

    type ChallengeMatchResumeResponseMetadata = unknown;

    type ChampionsCancelResponseMetadata = unknown;

    type ChampionsEntryCharaMetadata = {
      trained_chara_id: number;
      running_style: number;
      team_member_id: number;
    };

    type ChampionsEntryResponseMetadata = unknown;

    type ChampionsFinalRaceEndResponseMetadata = unknown;

    type ChampionsFinalRaceRankingResponseMetadata = unknown;

    type ChampionsFinalRaceStartResponseMetadata = unknown;

    type ChampionsFinalRoundEndResponseMetadata = unknown;

    type ChampionsGetNewsInfoResponseMetadata = unknown;

    type ChampionsGetNewsWinInfoResponseMetadata = unknown;

    type ChampionsGetRaceHistoryInfoResponseMetadata = unknown;

    type ChampionsGetRaceResultChartResponseMetadata = unknown;

    type ChampionsGetRankingCharaInfoResponseMetadata = unknown;

    type ChampionsGetRewardArrayResponseMetadata = unknown;

    type ChampionsIndexResponseMetadata = unknown;

    type ChampionsInfoMetadata = {
      champions_id: number;
      league_type: number;
      entry_times: number;
      free_entry_times: number;
      round_id: number;
      next_tier: number;
      state: number;
      entry_trained_chara_id_array: number;
    };

    type ChampionsLobbyResponseMetadata = unknown;

    type ChampionsNewsCharaInfoMetadata = {
      viewer_id: number;
      team_id: number;
      team_member_id: number;
      news_chara_id_array: number;
      news_chara_comment_id: number;
    };

    type ChampionsNewsCharaRaceHistoryMetadata = {
      round_id: number;
      set_num: number;
      race_num: number;
      rank: number;
      finish_time: number;
      frame_order: number;
      popularity: number;
      race_horse_num: number;
    };

    type ChampionsNewsCharaResultInfoMetadata = {
      viewer_id: number;
      team_id: number;
      team_member_id: number;
      rank_count_1: number;
      rank_count_2: number;
      rank_count_3: number;
      rank_count_unplaced: number;
      race_win_5: number;
    };

    type ChampionsNewsRankCountInfoMetadata = {
      trained_chara_id: number;
      rank_count_1: number;
      rank_count_2: number;
      rank_count_3: number;
      rank_count_unplaced: number;
    };

    type ChampionsNewsTrainerInfoMetadata = {
      viewer_id: number;
      total_win: number;
      total_race_count: number;
      race_win_5: number;
      news_trainer_id_array: number;
    };

    type ChampionsNewsWinInfoMetadata = {
      news_win_title_id: number;
      news_win_comment_id: number;
      news_win_id_array: number;
    };

    type ChampionsPaddockIndexResponseMetadata = unknown;

    type ChampionsPollResponseMetadata = unknown;

    type ChampionsRaceEndResponseMetadata = unknown;

    type ChampionsRaceEntryResponseMetadata = unknown;

    type ChampionsRaceHistoryCharaResultInfoMetadata = {
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

    type ChampionsRaceHistoryInfoMetadata = {
      race_num: number;
    };

    type ChampionsRaceResultMetadata = {
      race_num: number;
      result: number;
      user_rank: number;
    };

    type ChampionsRaceStartResponseMetadata = unknown;

    type ChampionsRankingEntryCharaInfoMetadata = {
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

    type ChampionsRankingInfoMetadata = {
      viewer_id: number;
      last_round_id: number;
      rank: number;
      is_same_final: number;
    };

    type ChampionsRankingUserInfoMetadata = {
      viewer_id: number;
      name: string;
      honor_id: number;
      leader_chara_id: number;
      leader_chara_dress_id: number;
    };

    type ChampionsRewardInfoMetadata = {
      league_type: number;
      round_id: number;
      win_count: number;
      ranking: number;
    };

    type ChampionsRoomInfoMetadata = {
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

    type ChampionsRoomUserMetadata = {
      room_id: number;
      viewer_id: number;
      name: string;
      honor_id: number;
      team_id: number;
    };

    type ChampionsRoundEndResponseMetadata = unknown;

    type ChampionsSelectLeagueResponseMetadata = unknown;

    type ChampionsSetEntryCharaResponseMetadata = unknown;

    type ChampionsStampInfoMetadata = {
      viewer_id: number;
      stamp_id: number;
      send_time: number;
    };

    type ChampionsStampPollResponseMetadata = unknown;

    type ChampionsStampSendStampResponseMetadata = unknown;

    type ChampionsUserCharaTopMetadata = {
      card_id: number;
      chara_id: number;
      race_cloth_id: number;
      nick_name_id: number;
      team_member_id: number;
    };

    type ChampionsUserCharaMetadata = {
      chara_id: number;
      race_cloth_id: number;
      nick_name_id: number;
      team_member_id: number;
    };

    type ChangeCommentResponseMetadata = unknown;

    type ChangeLeaderCardResponseMetadata = unknown;

    type ChangeNameResponseMetadata = unknown;

    type ChangePracticePartnerResponseMetadata = unknown;

    type CharacterStoryDataMetadata = {
      episode_id: number;
      state: number;
    };

    type CharacterStoryFirstClearResponseMetadata = unknown;

    type CharaProfileDataMetadata = {
      chara_id: number;
      data_id: number;
      new_flag: number;
    };

    type CharaRaceRewardMetadata = {
      result_rank: number;
      result_time: number;
      gained_fans: number;
      campaign_id_array: number;
    };

    type ChoiceArrayMetadata = {
      select_index: number;
      receive_item_id: number;
      target_race_id: number;
    };

    type CircleAtLoadMetadata = unknown;

    type CircleBreakUpResponseMetadata = unknown;

    type CircleChatInviteRoomMatchResponseMetadata = unknown;

    type CircleChatMessageMetadata = {
      post_id: number;
      viewer_id: number;
      message_type: number;
      message_id: number;
      message_data: string;
      create_time: string;
    };

    type CircleChatPollingResponseMetadata = unknown;

    type CircleChatPostPartnerResponseMetadata = unknown;

    type CircleChatSendItemRequestResponseMetadata = unknown;

    type CircleChatSendMessageResponseMetadata = unknown;

    type CircleChatSendStampResponseMetadata = unknown;

    type CircleChatUserMetadata = {
      viewer_id: number;
      name: string;
      leader_chara_id: number;
      leader_chara_dress_id: number;
    };

    type CircleCheckJoinResponseMetadata = unknown;

    type CircleConditionalSearchResponseMetadata = unknown;

    type CircleDetailResponseMetadata = unknown;

    type CircleDirectResponseMetadata = unknown;

    type CircleGetPostPartnerDataResponseMetadata = unknown;

    type CircleGetRankingTopResponseMetadata = unknown;

    type CircleInfoAtFriendMetadata = {
      circle_id: number;
      name: string;
      monthly_rank: number;
    };

    type CircleInfoMetadata = {
      circle_id: number;
      leader_viewer_id: number;
      name: string;
      comment: string;
      member_num: number;
      join_style: number;
      policy: number;
      make_time: string;
    };

    type CircleItemDonateMetadata = {
      donate_id: number;
      request_id: number;
      viewer_id: number;
      item_num: number;
      state: number;
      create_time: string;
    };

    type CircleItemRequestDonateMultipleResponseMetadata = unknown;

    type CircleItemRequestDonateResponseMetadata = unknown;

    type CircleItemRequestGetRequestDataResponseMetadata = unknown;

    type CircleItemRequestReceiveResponseMetadata = unknown;

    type CircleItemRequestMetadata = {
      request_id: number;
      viewer_id: number;
      item_id: number;
      end_time: string;
      state: number;
    };

    type CircleListResponseMetadata = unknown;

    type CircleMakeResponseMetadata = unknown;

    type CirclePostPartnerMetadata = {
      post_comment_id: number;
      post_time: string;
    };

    type CircleRankingMetadata = {
      circle_id: number;
      point: number;
      monthly: number;
      rank: number;
    };

    type CircleRequestMetadata = {
      circle_id: number;
      viewer_id: number;
      update_time: string;
    };

    type CircleRoomEnterResponseMetadata = unknown;

    type CircleScoutMetadata = {
      circle_id: number;
      viewer_id: number;
    };

    type CircleUpdateResponseMetadata = unknown;

    type CircleUserApproveJoinRequestResponseMetadata = unknown;

    type CircleUserApproveScoutResponseMetadata = unknown;

    type CircleUserCancelJoinRequestResponseMetadata = unknown;

    type CircleUserCancelScoutResponseMetadata = unknown;

    type CircleUserChangeLeaderResponseMetadata = unknown;

    type CircleUserChangeSubLeaderResponseMetadata = unknown;

    type CircleUserCheckedRequestResponseMetadata = unknown;

    type CircleUserDeclineJoinRequestResponseMetadata = unknown;

    type CircleUserGetProfileCardInfoResponseMetadata = unknown;

    type CircleUserGetProfileResponseMetadata = unknown;

    type CircleUserKickResponseMetadata = unknown;

    type CircleUserLeaveResponseMetadata = unknown;

    type CircleUserScoutResponseMetadata = unknown;

    type CircleUserSetProfileCardInfoResponseMetadata = unknown;

    type CircleUserSetProfileResponseMetadata = unknown;

    type CircleUserUserJoinRequestResponseMetadata = unknown;

    type CircleUserMetadata = {
      viewer_id: number;
      circle_id: number;
      membership: number;
      join_time: string;
      penalty_end_time: string;
      item_request_end_time: string;
    };

    type CoinInfoMetadata = {
      coin: number;
      fcoin: number;
    };

    type CommonDefineMetadata = {
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

    type CountryInfoMetadata = {
      country: string;
      country_type: number;
    };

    type DailyLegendRaceDataMetadata = {
      daily_legend_race_id: number;
      is_cleared: number;
      is_played: number;
    };

    type DailyLegendRaceGetRewardListResponseMetadata = unknown;

    type DailyLegendRaceIndexResponseMetadata = unknown;

    type DailyLegendRacePlayingInfoMetadata = {
      state: number;
      trained_chara_id: number;
      new_flag: number;
    };

    type DailyLegendRaceRaceEntryResponseMetadata = unknown;

    type DailyLegendRaceRaceStartResponseMetadata = unknown;

    type DailyLegendRaceReflectItemEffectResponseMetadata = unknown;

    type DailyLegendRaceReplayCheckResponseMetadata = unknown;

    type DailyLegendRaceResetResponseMetadata = unknown;

    type DailyLegendRaceResumeResponseMetadata = unknown;

    type DailyRaceDataMetadata = {
      daily_race_id: number;
      is_cleared: number;
      is_played: number;
    };

    type DailyRaceGetRewardListResponseMetadata = unknown;

    type DailyRaceIndexResponseMetadata = unknown;

    type DailyRacePlayingInfoMetadata = {
      state: number;
      trained_chara_id: number;
    };

    type DailyRacePreReplayCheckResponseMetadata = unknown;

    type DailyRaceRaceEntryResponseMetadata = unknown;

    type DailyRaceRaceStartResponseMetadata = unknown;

    type DailyRaceRecoveryTicketResponseMetadata = unknown;

    type DailyRaceReflectItemEffectResponseMetadata = unknown;

    type DailyRaceReplayCheckResponseMetadata = unknown;

    type DailyRaceResetResponseMetadata = unknown;

    type DailyRaceResumeResponseMetadata = unknown;

    type DailyRaceSetRaceScenarioResponseMetadata = unknown;

    type DailyRaceSkipResponseMetadata = unknown;

    type DataHeaderMetadata = {
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

    type DataLinkChainBySocialAccountResponseMetadata = unknown;

    type DataLinkChainByTransitionCodeResponseMetadata = unknown;

    type DataLinkCreateFacebookNonceResponseMetadata = unknown;

    type DataLinkGetByTransitionCodeResponseMetadata = unknown;

    type DataLinkGetGameDataBySocialAccountResponseMetadata = unknown;

    type DataLinkPublishTransitionCodeResponseMetadata = unknown;

    type DebugRaceInfoLoadResponseMetadata = unknown;

    type DebugRaceSimulateDirectResponseMetadata = unknown;

    type DebugRaceSimulateResponseMetadata = unknown;

    type DebugSingleModeStoryDirectResponseMetadata = unknown;

    type DebugTutorialSkipResponseMetadata = unknown;

    type DirectoryCardMetadata = {
      card_id: number;
      directory_ranking: number;
    };

    type DirectoryCategoryScoreSummaryMetadata = {
      score: number;
      number: number;
    };

    type DirectoryScoreSummaryMetadata = {
      directory_card: number;
    };

    type DisplayRewardInfoMetadata = {
      item_type: number;
      item_id: number;
      item_num: number;
    };

    type EntryMobCharaMetadata = {
      npc_id: number;
      rank: number;
      rank_score: number;
      running_style: number;
    };

    type EvaluationInfoMetadata = {
      target_id: number;
      evaluation: number;
      is_outing: number;
      story_step: number;
      is_appear: number;
    };

    type EventChoiceRewardGainParamMetadata = {
      display_id: number;
      effect_value_0: number;
      effect_value_1: number;
      effect_value_2: number;
    };

    type EventChoiceRewardMetadata = {
      select_index: number;
    };

    type EventContentsInfoMetadata = {
      support_card_id: number;
      show_clear: number;
      show_clear_sort_id: number;
      is_effected_multi_chara: boolean;
    };

    type EventSkillMetadata = {
      story_id: number;
      skill_id_array: number;
    };

    type ExtraStoryDataMetadata = unknown;

    type ExtraStoryFirstClearResponseMetadata = unknown;

    type FactorInfoMetadata = {
      factor_id: number;
      level: number;
    };

    type FanRaidFansInfoMetadata = {
      all_gained_fans: number;
      individual_gained_fans: number;
    };

    type FanRaidIndexResponseMetadata = unknown;

    type FanRaidPollingResponseMetadata = unknown;

    type FanRaidSingleModeResultMetadata = {
      fan_raid_id: number;
      gain_fans: number;
      bonus_gain_fans: number;
      total_gain_fans: number;
      get_all_individual_reward: boolean;
      individual_reward_id_list: number;
    };

    type FriendFollowResponseMetadata = unknown;

    type FriendGetTeamStadiumTeamDataResponseMetadata = unknown;

    type FriendLoadResponseMetadata = unknown;

    type FriendRenewRecommendListResponseMetadata = unknown;

    type FriendSearchResponseMetadata = unknown;

    type FriendUnFollowerResponseMetadata = unknown;

    type FriendUnFollowResponseMetadata = unknown;

    type GachaBannerInfoMetadata = {
      id: number;
    };

    type GachaCampaignInfoMetadata = {
      id: number;
      is_campaign_draw_enable_single: number;
      is_campaign_draw_enable_multi: number;
    };

    type GachaExecHistoryMetadata = {
      exec_history_id: number;
      gacha_id: number;
      gacha_card_type: number;
      draw_type: number;
      draw_num: number;
      cost_id: number;
      cost_count: number;
      create_time: string;
    };

    type GachaExecResponseMetadata = unknown;

    type GachaGetHistoryResponseMetadata = unknown;

    type GachaGetPrizeHistoryResponseMetadata = unknown;

    type GachaInfoListMetadata = {
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

    type GachaLimitExchangeResponseMetadata = unknown;

    type GachaLimitInfoMetadata = unknown;

    type GachaLimitItemInfoMetadata = {
      gacha_id: number;
      num: number;
      converted_item_num: number;
    };

    type GachaLoadResponseMetadata = unknown;

    type GachaPrizeHistoryMetadata = {
      exec_time: string;
    };

    type GachaPrizeResultInfoMetadata = {
      place: number;
      num: number;
    };

    type GachaResultDataMetadata = {
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

    type GachaRewardHistoryMetadata = {
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

    type GachaSelectPrizeResponseMetadata = unknown;

    type GainSkillInfoMetadata = {
      skill_id: number;
      level: number;
    };

    type GalleryEventContentsInfoMetadata = {
      support_card_id: number;
      month: number;
      race_id: number;
    };

    type GalleryPlayEventResponseMetadata = unknown;

    type GallerySaveGalleryDataResponseMetadata = unknown;

    type GallopResultCodeMetadata = unknown;

    type GetTrophyDetailResponseMetadata = unknown;

    type GetTrophyInfoResponseMetadata = unknown;

    type GroupOutingInfoMetadata = {
      chara_id: number;
      is_outing: number;
      story_step: number;
    };

    type GuestOutingInfoMetadata = {
      support_card_id: number;
      story_step: number;
    };

    type HomeCharacterDressInfoMetadata = {
      position1_chara_id: number;
      position2_chara_id: number;
      position3_chara_id: number;
      position4_chara_id: number;
      position1_cloth_id: number;
      position2_cloth_id: number;
      position3_cloth_id: number;
      position4_cloth_id: number;
    };

    type HomePosterDataForDisplayMetadata = {
      id: number;
    };

    type HomePosterDataForRegistMetadata = {
      id: number;
    };

    type HomeStoryDataForDisplayMetadata = {
      id: number;
    };

    type HomeStoryDataForRegistMetadata = {
      id: number;
    };

    type HonorChangeHonorResponseMetadata = unknown;

    type HonorDataMetadata = {
      honor_id: number;
      create_time: string;
    };

    type HonorInfoMetadata = {
      last_checked_time: number;
    };

    type HonorListResponseMetadata = unknown;

    type InviteHistoryMetadata = {
      circle_id: number;
      room_id: number;
      viewer_id: number;
      race_type: number;
      create_time: string;
    };

    type ItemCheckAnivShopResponseMetadata = unknown;

    type ItemExchangeAddFrameResponseMetadata = unknown;

    type ItemExchangeLimitMetadata = {
      item_exchange_id: number;
      exchange_count: number;
    };

    type ItemExchangeResponseMetadata = unknown;

    type ItemManualCloseResponseMetadata = unknown;

    type ItemSellResponseMetadata = unknown;

    type ItemShowExchangeResponseMetadata = unknown;

    type ItemUseRecoveryItemResponseMetadata = unknown;

    type JukeboxChangePlayMusicResponseMetadata = unknown;

    type JukeboxChangeRandomRequestResponseMetadata = unknown;

    type JukeboxChangeUserRequestResponseMetadata = unknown;

    type JukeboxDrawRandomRequestResponseMetadata = unknown;

    type JukeboxExecLikeResponseMetadata = unknown;

    type JukeboxHistoryResponseMetadata = unknown;

    type JukeboxIndexResponseMetadata = unknown;

    type JukeboxInfoMetadata = {
      play_music_flag: number;
      random_request_flag: number;
      user_request_flag: number;
      next_random_request_time: string;
      music_size: number;
    };

    type JukeboxLikeMetadata = {
      request_id: number;
      sort_id: number;
      like_chara_id: number;
      like_viewer_id: number;
    };

    type JukeboxPlayUserRequestResponseMetadata = unknown;

    type JukeboxRequestMetadata = {
      request_id: number;
      request_type: number;
      request_value: number;
      requester_id: number;
      music_id: number;
      request_time: string;
    };

    type LastCheckedTimeMetadata = {
      type: number;
      last_checked_time: number;
    };

    type LegendRaceDataMetadata = {
      legend_race_id: number;
      is_cleared: number;
      is_played: number;
    };

    type LegendRaceGetRewardListResponseMetadata = unknown;

    type LegendRaceIndexResponseMetadata = unknown;

    type LegendRacePlayingInfoMetadata = {
      state: number;
      group_id: number;
      next_group_id: number;
      trained_chara_id: number;
    };

    type LegendRaceRaceEntryResponseMetadata = unknown;

    type LegendRaceRaceStartResponseMetadata = unknown;

    type LegendRaceRecoveryTicketResponseMetadata = unknown;

    type LegendRaceReflectItemEffectResponseMetadata = unknown;

    type LegendRaceReplayCheckResponseMetadata = unknown;

    type LegendRaceResetResponseMetadata = unknown;

    type LegendRaceResumeResponseMetadata = unknown;

    type LegendRaceSetRaceScenarioResponseMetadata = unknown;

    type LimitedGoodsInfoMetadata = {
      disp_order: number;
      reward_id: number;
    };

    type LimitedShopInfoMetadata = {
      limited_exchange_id: number;
      open_flag: number;
      appear_flag: number;
      close_time: number;
      open_count: number;
    };

    type LiveLiveStartResponseMetadata = unknown;

    type LiveTheaterIndexResponseMetadata = unknown;

    type LiveTheaterLiveStartResponseMetadata = unknown;

    type LiveTheaterMemberInfoMetadata = {
      chara_id: number;
      mob_id: number;
      dress_id: number;
      color_id: number;
      dress_id2: number;
      color_id2: number;
    };

    type LiveTheaterSaveInfoMetadata = {
      music_id: number;
      is_skip_story: number;
    };

    type LiveTheaterSettingInfoMetadata = {
      sound_live_music: number;
      display_lyrics: number;
      play_se: number;
      portrait_mode: number;
    };

    type LoginBonusDataMetadata = {
      login_bonus_id: number;
      total_count: number;
    };

    type LoginResponseMetadata = unknown;

    type LoginUserTrophyInfoMetadata = {
      trophy_id: number;
      chara_id_array: number;
    };

    type LovePointChangeDataMetadata = {
      chara_id: number;
      love_point: number;
    };

    type LovePointInfoMetadata = {
      chara_id: number;
      love_point_before: number;
      love_point_after: number;
    };

    type LoveStoryDataMetadata = {
      episode_id: number;
      state: number;
    };

    type MainStoryDataMetadata = {
      episode_id: number;
      state: number;
    };

    type MainStoryFirstClearResponseMetadata = unknown;

    type MainStoryRaceEntryCharaMetadata = {
      frame_order: number;
      chara_id: number;
      mob_id: number;
      dress_id: number;
      rank: number;
      chara_color_type: number;
      is_player: number;
    };

    type MainStoryRaceGetEntryListResponseMetadata = unknown;

    type MainStoryRaceGetRaceTableResponseMetadata = unknown;

    type MainStoryRaceRaceEndResponseMetadata = unknown;

    type MainStoryRaceRaceStartResponseMetadata = unknown;

    type MenuBadgeInfoMetadata = {
      present_num: number;
      mission_num: number;
      view_limited_mission_num: number;
      legend_mission_num: number;
      training_challenge_mission_num: number;
      challenge_match_mission_num: number;
      team_building_mission_num: number;
      new_gacha_flag: number;
    };

    type MinigameResultDetailMetadata = {
      get_id: number;
      chara_id: number;
      dress_id: number;
      motion: string;
      face: string;
    };

    type MinigameResultMetadata = {
      result_state: number;
      result_value: number;
    };

    type MissionLoadResponseMetadata = unknown;

    type MissionReceiveResponseMetadata = unknown;

    type MonthlyFanInfoMetadata = {
      ranking_year_month: number;
      num: number;
    };

    type NoReceivePresentNumMetadata = {
      no_time_limit_present_num: number;
      time_limit_present_num: number;
    };

    type NotDownParameterInfoMetadata = {
      evaluation_chara_id_array: number;
    };

    type NoteDataForDisplayMetadata = {
      chara_id: number;
      data_id: number;
      create_time: string;
      new_flag: number;
    };

    type NoteDataForRegistMetadata = {
      chara_id: number;
      data_id: number;
    };

    type NoteGetCharaDataResponseMetadata = unknown;

    type NoteGetNicknameDataResponseMetadata = unknown;

    type NoteLoadResponseMetadata = unknown;

    type NoteSaveCharaDataResponseMetadata = unknown;

    type NoteSaveNoteDataResponseMetadata = unknown;

    type NoteSaveVoiceResponseMetadata = unknown;

    type NotGainCharaEffectMetadata = {
      effected_chara_effect_id: number;
      not_gain_chara_effect_id: number;
    };

    type NotificationInfoMetadata = {
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

    type NotUpParameterInfoMetadata = {
      status_type_array: number;
      chara_effect_id_array: number;
      skill_id_array: number;
      skill_lv_id_array: number;
      evaluation_chara_id_array: number;
      command_lv_array: number;
      has_chara_effect_id_array: number;
      unsupported_evaluation_chara_id_array: number;
    };

    type NotUpTeamParameterInfoMetadata = unknown;

    type OptionSupportCardFavoriteFlagMetadata = {
      rarity: number;
      status: number;
    };

    type PartnerCharacterLoginParamMetadata = {
      card_id: number;
      level: number;
    };

    type PaymentCancelResponseMetadata = unknown;

    type PaymentCoinBreakDownInfoMetadata = {
      user_coin_id: number;
      product_master_id: number;
      coin: number;
      payment_money: string;
      currency_code: string;
    };

    type PaymentDummyFinishParamMetadata = {
      agegroup: number;
      signature: string;
      original_receipt: string;
      currency_code: string;
      price: string;
      purchase_id: string;
    };

    type PaymentDummyResponseMetadata = unknown;

    type PaymentFinishParamMetadata = {
      agegroup: number;
      signature: string;
      original_receipt: string;
      currency_code: string;
      price: string;
      purchase_id: string;
      product_id: string;
      dmm_point_balance: number;
    };

    type PaymentFinishResponseMetadata = unknown;

    type PaymentGetCoinBreakDownInfoResponseMetadata = unknown;

    type PaymentItemListResponseMetadata = unknown;

    type PaymentPurchasedTimesMetadata = {
      product_id: string;
      num_of_purchases: number;
      limit_type: number;
      item_pack_id: number;
      limit: number;
    };

    type PaymentPurchaseItemParamMetadata = {
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

    type PaymentPurchaseTimesDataMetadata = {
      product_id: string;
      number_of_product_purchased: number;
      limit_of_product_purchased: number;
    };

    type PaymentSeasonPackInfoMetadata = {
      product_master_id: number;
      season_end_time: number;
      repurchase_time: number;
      notice_status: number;
    };

    type PaymentSendLogResponseMetadata = unknown;

    type PaymentStartParamMetadata = {
      product_id: string;
      price: string;
      currency_code: string;
      error_message: string;
    };

    type PaymentStartResponseMetadata = unknown;

    type PaymentSteamMicroTxnInitResponseMetadata = unknown;

    type PaymentTotalInfoMetadata = {
      paymentTotal: number;
    };

    type PaymentUpdateBirthResponseMetadata = unknown;

    type PhotoSetActivityResponseMetadata = unknown;

    type PieceDataMetadata = {
      piece_id: number;
      piece_num: number;
    };

    type PracticePartnerOwnerInfoMetadata = {
      partner_trained_chara_id: number;
      owner_viewer_id: number;
      owner_name: string;
      owner_trained_chara_id: number;
      friend_state: number;
    };

    type PracticePartnerUsedHistoryMetadata = {
      trained_chara_id: number;
      practice_exec_viewer_id: number;
      name: string;
      history_type: number;
      circle_name: string;
      use_time: string;
    };

    type PracticeRaceChangeFavoriteRaceResponseMetadata = unknown;

    type PracticeRaceChangePresetNameResponseMetadata = unknown;

    type PracticeRaceCreatePartnerIdResponseMetadata = unknown;

    type PracticeRaceDeletePartnerResponseMetadata = unknown;

    type PracticeRaceDeleteRaceResponseMetadata = unknown;

    type PracticeRaceEntryCharaMetadata = {
      viewer_id: number;
      trained_chara_id: number;
      running_style: number;
      entry_id: number;
    };

    type PracticeRaceEntryInfoMetadata = {
      entry_id: number;
      frame_order: number;
    };

    type PracticeRaceGetFollowUserDataResponseMetadata = unknown;

    type PracticeRaceGetPartnerIdResponseMetadata = unknown;

    type PracticeRaceGetPartnerInfoResponseMetadata = unknown;

    type PracticeRaceGetPresetArrayResponseMetadata = unknown;

    type PracticeRaceGetSavedRaceListResponseMetadata = unknown;

    type PracticeRaceIndexResponseMetadata = unknown;

    type PracticeRacePresetInfoForSaveMetadata = {
      preset_id: number;
    };

    type PracticeRacePresetInfoMetadata = {
      preset_id: number;
      name: string;
    };

    type PracticeRaceRaceEndResponseMetadata = unknown;

    type PracticeRaceRaceReplayResponseMetadata = unknown;

    type PracticeRaceRaceStartResponseMetadata = unknown;

    type PracticeRaceSavedRaceInfoMetadata = {
      practice_race_id: number;
      race_instance_id: number;
      entry_num: number;
      user_entry_num: number;
      is_favorite: number;
      save_time: string;
    };

    type PracticeRaceSavePartnerResponseMetadata = unknown;

    type PracticeRaceSavePresetResponseMetadata = unknown;

    type PracticeRaceSearchPartnerResponseMetadata = unknown;

    type PracticeRaceSetRaceScenarioResponseMetadata = unknown;

    type PracticeRaceUsedHistoryResponseMetadata = unknown;

    type PresentDataMetadata = {
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

    type PresentHistoryResponseMetadata = unknown;

    type PresentIndexResponseMetadata = unknown;

    type PresentReceiveAllResponseMetadata = unknown;

    type PresentReceiveOptionMetadata = unknown;

    type PresentReceiveResponseMetadata = unknown;

    type PresetEntryCharaMetadata = {
      viewer_id: number;
      entry_id: number;
      trained_chara_id: number;
      running_style: number;
    };

    type PresetInfoMetadata = {
      preset_id: number;
      name: string;
    };

    type PreSingleModeFriendSupportCardReloadResponseMetadata = unknown;

    type PreSingleModeIndexResponseMetadata = unknown;

    type RaceAnalyzeResponseMetadata = unknown;

    type RaceCharaResultMetadata = {
      frame_order: number;
      finish_order: number;
      finish_time: number;
      finish_time_raw: number;
    };

    type RaceConditionInfoMetadata = {
      order: number;
      race_instance_id: number;
      season: number;
      weather: number;
      ground_condition: number;
    };

    type RaceHorseDataRaceResultMetadata = {
      turn: number;
      program_id: number;
      result_rank: number;
    };

    type RaceHorseDataMetadata = {
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

    type RaceInstanceInfoMetadata = {
      race_instance_id: number;
    };

    type RaceResultDataMetadata = {
      viewer_id: number;
      finish_order: number;
      finish_time: number;
      finish_time_raw: number;
      bashin_diff_from_behind: number;
    };

    type RaceResultInfoMetadata = {
      race_instance_id: number;
      season: number;
      weather: number;
      ground_condition: number;
      random_seed: number;
      race_scenario: string;
    };

    type RaceRewardDataMetadata = {
      item_type: number;
      item_id: number;
      item_num: number;
    };

    type RaceRewardSetDataMetadata = {
      trainer_exp: number;
      love_point: number;
    };

    type RaceRotationInfoMetadata = {
      current_race_num: number;
    };

    type RaceSimulateResultMetadata = {
      viewer_id: number;
      single_mode_chara_id: number;
      finish_order: number;
      time: number;
      popularity: number;
      popularity_mark_rank_array: number;
    };

    type RaceSkipRewardMetadata = {
      rank: number;
    };

    type ReadInfoResponseMetadata = unknown;

    type RecoveryRacePointResponseMetadata = unknown;

    type RecoveryTrainerPointResponseMetadata = unknown;

    type ReleasedEpisodeDataForDisplayMetadata = {
      id: number;
    };

    type ReleasedEpisodeDataForRegistMetadata = {
      id: number;
    };

    type ReleaseNumInfoMetadata = {
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

    type RequestCommonMetadata = {
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

    type ResponseCommonMetadata = unknown;

    type ResponseItemMetadata = {
      item_type: number;
      item_id: number;
      item_num: number;
    };

    type RewardAddSupportCardNumMetadata = {
      support_card_id: number;
      number: number;
      item_type: number;
    };

    type RewardSummaryInfoMetadata = {
      add_present_num: number;
      add_fcoin: number;
      add_total_fan: number;
      force_update_honor_id: number;
    };

    type RoomMatchChangeAllowDisplayResponseMetadata = unknown;

    type RoomMatchChangeLockRaceResultResponseMetadata = unknown;

    type RoomMatchCreateRoomResponseMetadata = unknown;

    type RoomMatchCreateRoomSimpleResponseMetadata = unknown;

    type RoomMatchDeleteRaceResultResponseMetadata = unknown;

    type RoomMatchDestroyRoomResponseMetadata = unknown;

    type RoomMatchEditRoomResponseMetadata = unknown;

    type RoomMatchEnterWaitingRoomResponseMetadata = unknown;

    type RoomMatchEntryCharaMetadata = {
      trained_chara_id: number;
      running_style: number;
      member_id: number;
    };

    type RoomMatchEntryRoomResponseMetadata = unknown;

    type RoomMatchForceRaceStartResponseMetadata = unknown;

    type RoomMatchGetEntryRoomListResponseMetadata = unknown;

    type RoomMatchGetFriendListResponseMetadata = unknown;

    type RoomMatchGetSavedRaceResultListResponseMetadata = unknown;

    type RoomMatchGetSavedRaceResultResponseMetadata = unknown;

    type RoomMatchIndexResponseMetadata = unknown;

    type RoomMatchLeaveRoomResponseMetadata = unknown;

    type RoomMatchLeaveWatchingResponseMetadata = unknown;

    type RoomMatchPollingResponseMetadata = unknown;

    type RoomMatchRaceChangePresetNameResponseMetadata = unknown;

    type RoomMatchRaceEndResultResponseMetadata = unknown;

    type RoomMatchRaceGetPresetArrayResponseMetadata = unknown;

    type RoomMatchRaceSavePresetResponseMetadata = unknown;

    type RoomMatchRaceStartResponseMetadata = unknown;

    type RoomMatchRestrictCharaInfoMetadata = {
      chara_id: number;
      dress_id_array: number;
    };

    type RoomMatchRoomDetailResponseMetadata = unknown;

    type RoomMatchRoomInfoMetadata = {
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

    type RoomMatchRoomListResponseMetadata = unknown;

    type RoomMatchRoomSearchResponseMetadata = unknown;

    type RoomMatchSavedRoomInfoMetadata = {
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

    type RoomMatchTrainedCharaMetadata = {
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

    type RoomMatchUserDetailMetadata = {
      viewer_id: number;
      name: string;
      leader_chara_id: number;
      leader_chara_dress_id: number;
      honor_id: number;
      user_friend_state: number;
      join_type: number;
      register_time: string;
    };

    type RoomMatchUserMetadata = {
      viewer_id: number;
      room_id: number;
      name: string;
      leader_chara_id: number;
      leader_chara_dress_id: number;
      honor_id: number;
      join_type: number;
    };

    type RoomMatchWatchRoomResponseMetadata = unknown;

    type RpInfoMetadata = {
      current_rp: number;
      max_rp: number;
      max_recovery_time: number;
    };

    type SafetyNetAttestationGetNonceResponseMetadata = unknown;

    type SafetyNetAttestationValidateJwsResponseMetadata = unknown;

    type ScenarioRecordMetadata = {
      scenario_id: number;
      directory_ranking: number;
    };

    type SelectSupportCardListMetadata = {
      partner_id: number;
      card_id: number;
      level: number;
      limit_break_count: number;
    };

    type SellSupportCardInfoMetadata = {
      support_card_id: number;
      stock: number;
      client_own_stock: number;
    };

    type SerialCodeRegisterResponseMetadata = unknown;

    type ServerListMetadata = {
      resource_server: string;
      resource_server_cf: string;
      resource_server_login: string;
      resource_server_ingame: string;
    };

    type ShortEpisodeDataForDisplayMetadata = {
      id: number;
    };

    type ShortEpisodeDataForRegistMetadata = {
      id: number;
    };

    type SingleModeBonusEffectMetadata = {
      target_type: number;
      min: number;
      max: number;
    };

    type SingleModeChangeRunningStyleResponseMetadata = unknown;

    type SingleModeChangeShortCutResponseMetadata = unknown;

    type SingleModeCharaEditMetadata = {
      trained_chara_id: number;
      selected_skill_ids: number;
    };

    type SingleModeCharaInfoMetadata = {
      trained_chara_id: number;
      program_id: number;
      sense_bonus_ids: number;
    };

    type SingleModeCharaLightMetadata = {
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

    type SingleModeCharaMetadata = {
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

    type SingleModeCheckEventResponseMetadata = unknown;

    type SingleModeCommandInfoMetadata = {
      command_type: number;
      command_id: number;
      is_enable: number;
      training_partner_array: number;
      tips_event_partner_array: number;
      failure_rate: number;
    };

    type SingleModeCommandResultMetadata = {
      command_id: number;
      sub_id: number;
      result_state: number;
    };

    type SingleModeContinueResponseMetadata = unknown;

    type SingleModeDifficultyBoxInfoMetadata = {
      box_id: number;
    };

    type SingleModeDifficultyBoxRewardInfoMetadata = {
      difficulty_box_reward_id: number;
      remain_num: number;
    };

    type SingleModeDifficultyInfoMetadata = {
      difficulty_id: number;
      open_difficulty_index: number;
      item_num: number;
      box_id: number;
      box_item_num: number;
      gacha_gauge: number;
    };

    type SingleModeEventInfoMetadata = {
      event_id: number;
      chara_id: number;
      story_id: number;
      play_timing: number;
    };

    type SingleModeExecCommandResponseMetadata = unknown;

    type SingleModeExecCommandMetadata = {
      command_type: number;
      command_id: number;
      sub_id: number;
      command_num: number;
    };

    type SingleModeFinishCommonMetadata = {
      directory_ranking: number;
      trained_chara_id: number;
      release_item_flag: number;
      circle_point: number;
      campaign_id_array: number;
    };

    type SingleModeFinishResponseMetadata = unknown;

    type SingleModeFreeChangeRunningStyleResponseMetadata = unknown;

    type SingleModeFreeChangeShortCutResponseMetadata = unknown;

    type SingleModeFreeCheckEventResponseMetadata = unknown;

    type SingleModeFreeChoiceRewardResponseMetadata = unknown;

    type SingleModeFreeCommandInfoMetadata = {
      command_type: number;
      command_id: number;
    };

    type SingleModeFreeContinueResponseMetadata = unknown;

    type SingleModeFreeDataSetMetadata = {
      shop_id: number;
      sale_value: number;
      win_points: number;
      gained_coin_num: number;
      coin_num: number;
      twinkle_race_ranking: number;
      unchecked_event_achievement_id: number;
    };

    type SingleModeFreeExchangeItemInfoMetadata = {
      shop_item_id: number;
      current_num: number;
    };

    type SingleModeFreeExecCommandResponseMetadata = unknown;

    type SingleModeFreeFinishResponseMetadata = unknown;

    type SingleModeFreeGainSkillsResponseMetadata = unknown;

    type SingleModeFreeItemEffectMetadata = {
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

    type SingleModeFreeLoadResponseMetadata = unknown;

    type SingleModeFreeMinigameEndResponseMetadata = unknown;

    type SingleModeFreeMultiItemExchange2ResponseMetadata = unknown;

    type SingleModeFreeMultiItemExchangeResponseMetadata = unknown;

    type SingleModeFreeMultiItemUseResponseMetadata = unknown;

    type SingleModeFreeMultiRaceReserveResponseMetadata = unknown;

    type SingleModeFreePickUpItemMetadata = {
      shop_item_id: number;
      item_id: number;
      coin_num: number;
      original_coin_num: number;
      item_buy_num: number;
      limit_buy_count: number;
      limit_turn: number;
    };

    type SingleModeFreeRaceAnalyzeResponseMetadata = unknown;

    type SingleModeFreeRaceEndResponseMetadata = unknown;

    type SingleModeFreeRaceEntryResponseMetadata = unknown;

    type SingleModeFreeRaceOutResponseMetadata = unknown;

    type SingleModeFreeRaceReserveResponseMetadata = unknown;

    type SingleModeFreeRaceStartResponseMetadata = unknown;

    type SingleModeFreeSaveRaceResultResponseMetadata = unknown;

    type SingleModeFreeStartResponseMetadata = unknown;

    type SingleModeFreeTwinkleRaceNpcInfoMetadata = {
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

    type SingleModeFreeUseItemInfoMetadata = {
      item_id: number;
      use_num: number;
      current_num: number;
    };

    type SingleModeFreeUserItemMetadata = {
      item_id: number;
      num: number;
    };

    type SingleModeFriendSupportCardInfoMetadata = {
      viewer_id: number;
      support_card_id: number;
    };

    type SingleModeFriendSupportCardMetadata = unknown;

    type SingleModeGainSkillsResponseMetadata = unknown;

    type SingleModeGetChoiceRewardResponseMetadata = unknown;

    type SingleModeHomeInfoMetadata = {
      race_entry_restriction: number;
      disable_command_id_array: number;
      available_continue_num: number;
      available_free_continue_num: number;
      free_continue_num: number;
      free_continue_time: number;
      shortened_race_state: number;
    };

    type SingleModeInfoMetadata = {
      month: number;
      total_turn: number;
      room_num: number;
    };

    type SingleModeLoadResponseMetadata = unknown;

    type SingleModeMinigameEndResponseMetadata = unknown;

    type SingleModeMultiRaceReserveResponseMetadata = unknown;

    type SingleModeNpcResultMetadata = {
      npc_id: number;
      result_rank: number;
    };

    type SingleModeNpcTeamDataMetadata = {
      distance_type: number;
      member_id: number;
      npc_id: number;
      running_style: number;
    };

    type SingleModeParamsIncDecInfoMetadata = {
      target_type: number;
      value: number;
    };

    type SingleModeRaceAddRewardInfoMetadata = {
      campaign_id: number;
      program_id: number;
      reward_date: number;
      reward_count: number;
    };

    type SingleModeRaceCharaResultMetadata = {
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

    type SingleModeRaceConditionMetadata = {
      program_id: number;
      weather: number;
      ground_condition: number;
    };

    type SingleModeRaceEndResponseMetadata = unknown;

    type SingleModeRaceEntryResponseMetadata = unknown;

    type SingleModeRaceMobNpcResultMetadata = {
      mob_id: number;
      result_rank: number;
      result_time: number;
      result_time_raw: number;
      running_style: number;
      frame_order: number;
    };

    type SingleModeRaceOutResponseMetadata = unknown;

    type SingleModeRaceReserveResponseMetadata = unknown;

    type SingleModeRaceResultMetadata = {
      program_id: number;
      race_instance_id: number;
      weather: number;
      ground_condition: number;
      start_dash_state: number;
    };

    type SingleModeRaceStartResponseMetadata = unknown;

    type SingleModeRaceUniqueNpcResultMetadata = {
      chara_id: number;
      result_rank: number;
      result_time: number;
      result_time_raw: number;
      running_style: number;
      frame_order: number;
    };

    type SingleModeRentalSuccessionCharaMetadata = {
      viewer_id: number;
      trained_chara_id: number;
      is_circle_member: boolean;
      is_event_rental: boolean;
    };

    type SingleModeReservedRaceDeckMetadata = {
      deck_num: number;
      deck_name: string;
    };

    type SingleModeReservedRaceMetadata = {
      year: number;
      program_id: number;
    };

    type SingleModeResultBonusEffectMetadata = {
      target_type: number;
      effect_value: number;
    };

    type SingleModeResultDifficultyBoxMetadata = {
      box_id: number;
    };

    type SingleModeResultDifficultyDataSetMetadata = {
      is_boost: number;
    };

    type SingleModeRivalRaceInfoMetadata = {
      program_id: number;
      chara_id: number;
    };

    type SingleModeSaveRaceResultResponseMetadata = unknown;

    type SingleModeSelectedDifficultyInfoMetadata = {
      difficulty_id: number;
      difficulty: number;
      is_boost: number;
    };

    type SingleModeSpecialTrainingInfoMetadata = {
      command_type: number;
      command_id: number;
      support_card_position: number;
    };

    type SingleModeStartCharaMetadata = {
      card_id: number;
      support_card_ids: number;
      succession_trained_chara_id_1: number;
      succession_trained_chara_id_2: number;
      scenario_id: number;
      select_deck_id: number;
      boost_story_event_id: number;
      is_play_training_challenge: boolean;
    };

    type SingleModeStartDressInfoMetadata = {
      single_mode_chara_dress_id: number;
    };

    type SingleModeStartResponseMetadata = unknown;

    type SingleModeSuccessionDressInfoMetadata = {
      trained_chara_id: number;
      dress_id: number;
    };

    type SingleModeSuccessionEventInfoMetadata = {
      effect_type: number;
    };

    type SingleModeSuccessionTrainedCharaMetadata = unknown;

    type SingleModeSupportCardMetadata = {
      position: number;
      support_card_id: number;
      limit_break_count: number;
      exp: number;
      training_partner_state: number;
      owner_viewer_id: number;
    };

    type SingleModeTargetRaceMetadata = {
      target_turn: number;
      target_type: number;
      target_value: number;
    };

    type SingleModeTeamAnalyzeMarkArrayMetadata = {
      distance_type: number;
      mark_type: number;
    };

    type SingleModeTeamChangeRunningStyleResponseMetadata = unknown;

    type SingleModeTeamChangeShortCutResponseMetadata = unknown;

    type SingleModeTeamCharaInfoMetadata = {
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

    type SingleModeTeamCheckEventResponseMetadata = unknown;

    type SingleModeTeamCommandInfoMetadata = {
      command_type: number;
      command_id: number;
      guide_event_partner_array: number;
      soul_event_partner_array: number;
    };

    type SingleModeTeamCommandResultMetadata = unknown;

    type SingleModeTeamContinueResponseMetadata = unknown;

    type SingleModeTeamDataSetMetadata = {
      scenario_progress: number;
      final_win_type: number;
    };

    type SingleModeTeamDataMetadata = {
      distance_type: number;
      member_id: number;
      chara_id: number;
      running_style: number;
    };

    type SingleModeTeamEventEffectInfoMetadata = {
      is_summarize_team_member: boolean;
      gain_speed: number;
      gain_stamina: number;
      gain_power: number;
      gain_guts: number;
      gain_wiz: number;
    };

    type SingleModeTeamExecCommandResponseMetadata = unknown;

    type SingleModeTeamFinishResponseMetadata = unknown;

    type SingleModeTeamFrameOrderMetadata = {
      distance_type: number;
      race_order: number;
    };

    type SingleModeTeamGainSkillsResponseMetadata = unknown;

    type SingleModeTeamGetChoiceRewardResponseMetadata = unknown;

    type SingleModeTeamInfoMetadata = {
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

    type SingleModeTeamLoadResponseMetadata = unknown;

    type SingleModeTeamMinigameEndResponseMetadata = unknown;

    type SingleModeTeamMultiRaceReserveResponseMetadata = unknown;

    type SingleModeTeamOpponentListResponseMetadata = unknown;

    type SingleModeTeamOpponentListMetadata = {
      team_race_set_id: number;
      team_power: number;
      team_rank: number;
      win_up_rank: number;
    };

    type SingleModeTeamRaceAnalyzeResponseMetadata = unknown;

    type SingleModeTeamRaceCharaResultMetadata = {
      frame_order: number;
      chara_id: number;
      npc_id: number;
      team_id: number;
      finish_order: number;
      finish_time: number;
      popularity: number;
    };

    type SingleModeTeamRaceEndResponseMetadata = unknown;

    type SingleModeTeamRaceEntryResponseMetadata = unknown;

    type SingleModeTeamRaceHistoryMetadata = {
      race_num: number;
      turn: number;
      team_race_set_id: number;
      result_state: number;
    };

    type SingleModeTeamRaceOutResponseMetadata = unknown;

    type SingleModeTeamRaceReserveResponseMetadata = unknown;

    type SingleModeTeamRaceResultMetadata = {
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

    type SingleModeTeamRaceStartResponseMetadata = unknown;

    type SingleModeTeamRandomInfoMetadata = {
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

    type SingleModeTeamSaveRaceResultResponseMetadata = unknown;

    type SingleModeTeamSaveTeamEditFlagResponseMetadata = unknown;

    type SingleModeTeamStartResponseMetadata = unknown;

    type SingleModeTeamTeamEditResponseMetadata = unknown;

    type SingleModeTeamTeamRaceAnalyzeResponseMetadata = unknown;

    type SingleModeTeamTeamRaceEndResponseMetadata = unknown;

    type SingleModeTeamTeamRaceOutResponseMetadata = unknown;

    type SingleModeTeamTeamRaceStartResponseMetadata = unknown;

    type SingleModeTwikleRaceNpcResultMetadata = {
      turn: number;
      program_id: number;
    };

    type SingleRaceHistoryMetadata = {
      turn: number;
      program_id: number;
      weather: number;
      ground_condition: number;
      running_style: number;
      result_rank: number;
      frame_order: number;
    };

    type SingleRaceStartInfoMetadata = {
      program_id: number;
      random_seed: number;
      weather: number;
      ground_condition: number;
      continue_num: number;
    };

    type SkillDataMetadata = {
      skill_id: number;
      level: number;
    };

    type SkillTipsMetadata = {
      group_id: number;
      rarity: number;
      level: number;
    };

    type StoryDirectEventRewardMetadata = {
      id: number;
      gain_id: number;
      gain_type: number;
      gain_value_1: number;
      gain_value_2: number;
      gain_value_3: number;
      gain_value_4: number;
    };

    type StoryDirectSkillSetMetadata = {
      id: number;
      skill_set: number;
      skill_id: number;
      add_skill_discount: number;
    };

    type StoryEventAddPointSummaryMetadata = {
      total: number;
      rank_score: number;
      nickname_bonus: number;
      card_bonus: number;
      support_card_bonus: number;
      win_num_bonus: number;
    };

    type StoryEventAnnounceResponseMetadata = unknown;

    type StoryEventBingoDataMetadata = {
      sheet_num: number;
      line_num: number;
    };

    type StoryEventCharaBonusMetadata = {
      chara_id: number;
      card_type: number;
      card_id: number;
      bonus: number;
      is_rental: boolean;
    };

    type StoryEventIndexResponseMetadata = unknown;

    type StoryEventReceiveMissionResponseMetadata = unknown;

    type StoryEventRouletteChangeSheetResponseMetadata = unknown;

    type StoryEventRouletteExecResponseMetadata = unknown;

    type StoryEventRouletteResponseMetadata = unknown;

    type StoryEventRouletteRewardMetadata = {
      reward_order: number;
      item_category: number;
      item_id: number;
      item_num: number;
    };

    type StoryEventSingleModeResultMetadata = {
      event_id: number;
      point_reward_id_list: number;
      get_all_point_reward: boolean;
      new_story_id_list: number;
      is_boost: number;
    };

    type StoryEventStoryClearResponseMetadata = unknown;

    type StoryEventStoryDataMetadata = {
      episode_id: number;
      state: number;
    };

    type StoryEventUserInfoMetadata = {
      event_point: number;
      roulette_coin_num: number;
      roulette_sheet_num: number;
    };

    type StoryExtraStoryDataMetadata = {
      episode_id: number;
      state: number;
    };

    type StoryFavoriteMetadata = {
      episode_type: number;
      episode_id: number;
      is_mark: number;
    };

    type SuccessionCharaMetadata = {
      position_id: number;
      card_id: number;
      rank: number;
      rarity: number;
      talent_level: number;
      factor_id_array: number;
      win_saddle_id_array: number;
      owner_viewer_id: number;
    };

    type SuccessionEffectedFactorMetadata = {
      position: number;
      factor_id_array: number;
    };

    type SuccessionHistoryMetadata = {
      id: number;
      viewer_id: number;
      trained_chara_id: number;
      hisotry_type: number;
      succession_card_id: number;
      date: number;
      user_name: string;
      circle_name: string;
    };

    type SupportCardChangeLockResponseMetadata = unknown;

    type SupportCardDeckChangeNameResponseMetadata = unknown;

    type SupportCardDeckChangePartyResponseMetadata = unknown;

    type SupportCardGetSupportCardEventSkillResponseMetadata = unknown;

    type SupportCardLimitBreakItemResponseMetadata = unknown;

    type SupportCardLimitBreakResponseMetadata = unknown;

    type SupportCardRankingGetRankingResponseMetadata = unknown;

    type SupportCardRankingGroupMetadata = {
      exam_index: number;
    };

    type SupportCardRankingItemMetadata = {
      support_card_id: number;
      percentage: number;
      rank: number;
    };

    type SupportCardSellResponseMetadata = unknown;

    type SupportCardStrengthenResponseMetadata = unknown;

    type TalkDataMetadata = {
      story_id: number;
      is_open: boolean;
    };

    type TalkGalleryIndexResponseMetadata = unknown;

    type TalkGalleryListMetadata = {
      home_story_trigger_id: number;
      new_flag: number;
    };

    type TeamBuidingTeamInfoMetadata = {
      team_id: number;
      viewer_id: number;
      user_name: string;
      honor_id: number;
      team_name: string;
      team_score: number;
    };

    type TeamBuildingChangeCaptainResponseMetadata = unknown;

    type TeamBuildingChangeRunningStyleResponseMetadata = unknown;

    type TeamBuildingChangeTeamNameResponseMetadata = unknown;

    type TeamBuildingCollectionCharaMetadata = {
      chara_id: number;
      used_flag: number;
      new_flag: number;
    };

    type TeamBuildingEntryCharaMetadata = {
      member_id: number;
    };

    type TeamBuildingIndexResponseMetadata = unknown;

    type TeamBuildingLoadInfoMetadata = {
      team_building_id: number;
      state: number;
      captain_id: number;
    };

    type TeamBuildingMakeTeamResponseMetadata = unknown;

    type TeamBuildingOpponentArrayResponseMetadata = unknown;

    type TeamBuildingRaceContinueResponseMetadata = unknown;

    type TeamBuildingRaceEntryResponseMetadata = unknown;

    type TeamBuildingRaceResultResponseMetadata = unknown;

    type TeamBuildingRaceStartResponseMetadata = unknown;

    type TeamBuildingRecoveryTicketResponseMetadata = unknown;

    type TeamBuildingResumeResponseMetadata = unknown;

    type TeamBuildingRunningStyleInfoMetadata = {
      member_id: number;
      running_style: number;
    };

    type TeamBuildingSaveCollectionResponseMetadata = unknown;

    type TeamBuildingScoutPointInfoMetadata = {
      item_id: number;
      basic_num: number;
      total_num: number;
      straight_win_count: number;
    };

    type TeamBuildingScoutResponseMetadata = unknown;

    type TeamBuildingUseRecoveryItemResponseMetadata = unknown;

    type TeamEvaluationInfoMetadata = {
      target_id: number;
      chara_id: number;
      member_state: number;
      soul_threshold_id: number;
      soul_event_state: number;
    };

    type TeamParameterCodeMetadata = {
      training_partner_id: number;
      code: number;
    };

    type TeamSkillTipsMetadata = {
      training_partner_id: number;
    };

    type TeamStadiumAddFanInfoMetadata = {
      chara_id: number;
      add_fan: number;
    };

    type TeamStadiumAllRaceEndResponseMetadata = unknown;

    type TeamStadiumBonusDataMetadata = {
      score_bonus_id: number;
      bonus_score: number;
    };

    type TeamStadiumBorderLineMetadata = {
      promotion_rank: number;
      demotion_rank: number;
      keep_rank: number;
      promotion_point: number;
      demotion_point: number;
      keep_point: number;
    };

    type TeamStadiumDecideFrameOrderResponseMetadata = unknown;

    type TeamStadiumFrameOrderMetadata = {
      distance_type: number;
      race_order: number;
    };

    type TeamStadiumIndexResponseMetadata = unknown;

    type TeamStadiumOpponentListResponseMetadata = unknown;

    type TeamStadiumOpponentMetadata = {
      strength: number;
      opponent_viewer_id: number;
      evaluation_point: number;
      winning_reward_guarantee_status: number;
    };

    type TeamStadiumRaceCharaResultMetadata = {
      viewer_id: number;
      frame_order: number;
      trained_chara_id: number;
      team_id: number;
      finish_order: number;
      finish_time: number;
    };

    type TeamStadiumRaceResultMetadata = {
      distance_type: number;
      race_scenario: string;
      round: number;
      team_total_score: number;
      win_type: number;
      current_consecutive_win_count: number;
      bonus_rate_by_next_win: number;
    };

    type TeamStadiumRaceSimulateCharaResultMetadata = {
      viewer_id: number;
      single_mode_chara_id: number;
      finish_order: number;
      finish_time: number;
      finish_time_raw: number;
      skill_activate_count_array: number;
    };

    type TeamStadiumRaceSimulateResultMetadata = {
      race_scenario: string;
    };

    type TeamStadiumRaceStartParamsMetadata = {
      round: number;
      race_instance_id: number;
      season: number;
      weather: number;
      ground_condition: number;
      random_seed: number;
      self_evaluate: number;
      opponent_evaluate: number;
    };

    type TeamStadiumRandomInfoMetadata = {
      viewer_id: number;
      member_id: number;
      trained_chara_id: number;
      running_style: number;
      frame_order: number;
      motivation: number;
    };

    type TeamStadiumRankingResponseMetadata = unknown;

    type TeamStadiumRankingMetadata = {
      term_id: number;
      viewer_id: number;
      team_class: number;
      best_point: number;
      rank: number;
    };

    type TeamStadiumReplayCheckResponseMetadata = unknown;

    type TeamStadiumResultBonusDataMetadata = {
      score_bonus_id: number;
      bonus_score: number;
      condition_type: number;
      condition_value_1: number;
      condition_value_2: number;
      score_rate: number;
    };

    type TeamStadiumResultHorseScoreMetadata = unknown;

    type TeamStadiumResultScoreDataMetadata = {
      raw_score_id: number;
      num: number;
      score: number;
    };

    type TeamStadiumResultTeamMetadata = {
      team_id: number;
      team_total_score: number;
    };

    type TeamStadiumSaveRaceResultResponseMetadata = unknown;

    type TeamStadiumScoreDataMetadata = {
      raw_score_id: number;
      num: number;
      score: number;
    };

    type TeamStadiumStartResponseMetadata = unknown;

    type TeamStadiumTeamDataAtFriendMetadata = {
      distance_type: number;
      member_id: number;
      running_style: number;
    };

    type TeamStadiumTeamDataMetadata = {
      distance_type: number;
      member_id: number;
      trained_chara_id: number;
      running_style: number;
    };

    type TeamStadiumTeamEditResponseMetadata = unknown;

    type TeamStadiumTotalScoreInfoMetadata = {
      final_total_score: number;
      all_race_result_score_bonus: number;
    };

    type TeamStadiumUserDetailResponseMetadata = unknown;

    type TeamStadiumUserMetadata = {
      team_class: number;
      best_team_class: number;
      best_point: number;
    };

    type TeamStadiumWinningRewardContentMetadata = {
      round: number;
      item_category: number;
      item_id: number;
      item_num: number;
      box_color_type: number;
    };

    type TeamStadiumWinningRewardInfoMetadata = {
      round: number;
      box_color_type: number;
    };

    type ToolDeviceAttestResponseMetadata = unknown;

    type ToolGetPreDownloadResourceVersionResponseMetadata = unknown;

    type ToolGetVerifyTokenResponseMetadata = unknown;

    type ToolPreSignupResponseMetadata = unknown;

    type ToolSendLogResponseMetadata = unknown;

    type ToolSignupResponseMetadata = unknown;

    type ToolStartSessionResponseMetadata = unknown;

    type TpInfoMetadata = {
      current_tp: number;
      max_tp: number;
      max_recovery_time: number;
    };

    type TrainedCharaChangeLockMultiResponseMetadata = unknown;

    type TrainedCharaChangeMemoResponseMetadata = unknown;

    type TrainedCharaChangeNicknameResponseMetadata = unknown;

    type TrainedCharaFavoriteMetadata = {
      trained_chara_id: number;
      icon_type: number;
      memo: string;
    };

    type TrainedCharaLoadResponseMetadata = unknown;

    type TrainedCharaParamMetadata = {
      skill: number;
      stamina: number;
      speed: number;
      power: number;
      guts: number;
      wiz: number;
    };

    type TrainedCharaRaceResultMetadata = {
      turn: number;
      program_id: number;
      weather: number;
      ground_condition: number;
      running_style: number;
      result_rank: number;
    };

    type TrainedCharaRemoveResponseMetadata = unknown;

    type TrainedCharaSupportCardListMetadata = {
      position: number;
      support_card_id: number;
      exp: number;
      limit_break_count: number;
    };

    type TrainedCharaMetadata = {
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

    type TrainingChallengeExamInfoMetadata = {
      exam_id: number;
      high_score_value: number;
      result_type: number;
      is_challenged: boolean;
    };

    type TrainingChallengeExamSelectResponseMetadata = unknown;

    type TrainingChallengeGetRankingResponseMetadata = unknown;

    type TrainingChallengeIndexResponseMetadata = unknown;

    type TrainingChallengeRankUserMetadata = {
      viewer_id: number;
      name: string;
      score: number;
    };

    type TrainingChallengeResultMetadata = {
      event_id: number;
      exam_id: number;
      next_exam_id: number;
    };

    type TrainingChallengeScoreSummaryMetadata = {
      total: number;
      rank_score: number;
      base_rank_score: number;
      score_ids: number;
      add_event_coin: number;
    };

    type TrainingChallengeUserInfoMetadata = {
      event_coin: number;
      select_exam_id: number;
    };

    type TrainingLevelInfoMetadata = {
      command_id: number;
      level: number;
    };

    type TransferDetailResponseMetadata = unknown;

    type TransferEventDetailInfoMetadata = {
      transfer_detail_id: number;
      exists_trained_chara: boolean;
      remaining_num: number;
    };

    type TransferEventInfoMetadata = {
      transfer_event_id: number;
    };

    type TransferEventRewardInfoMetadata = {
      trained_chara_id: number;
    };

    type TransferExecMultiResponseMetadata = unknown;

    type TransferIndexResponseMetadata = unknown;

    type TrophyCharaInfoMetadata = {
      chara_id: number;
      win_count: number;
    };

    type TrophyNumInfoMetadata = {
      grade_1: number;
      grade_2: number;
      grade_3: number;
      grade_ex: number;
    };

    type TutorialGuideDataForDisplayMetadata = {
      id: number;
    };

    type TutorialGuideDataForRegistMetadata = {
      id: number;
    };

    type TutorialResponseMetadata = unknown;

    type TutorialSingleModeFinishResponseMetadata = unknown;

    type TutorialSkipResponseMetadata = unknown;

    type TutorialTeamEditResponseMetadata = unknown;

    type UpdateForceDisplayStatusResponseMetadata = unknown;

    type UseItemDataMetadata = {
      item_id: number;
      item_num: number;
    };

    type UserCardDressMetadata = {
      card_id: number;
      cloth_id: number;
    };

    type UserCardMetadata = {
      card_id: number;
      rarity: number;
      talent_level: number;
      create_time: string;
    };

    type UserChangeCardDressResponseMetadata = unknown;

    type UserChangeDmaStateResponseMetadata = unknown;

    type UserChangeFavoriteCharacterResponseMetadata = unknown;

    type UserChangeSexResponseMetadata = unknown;

    type UserChangeStoryFavoriteResponseMetadata = unknown;

    type UserChangeSupportCardResponseMetadata = unknown;

    type UserCharaMetadata = {
      chara_id: number;
      training_num: number;
      love_point: number;
      fan: number;
    };

    type UserClothMetadata = {
      cloth_id: number;
    };

    type UserFriendMetadata = {
      friend_viewer_id: number;
      state: number;
      follow_time: string;
      follower_time: string;
    };

    type UserGetProfileCardInfoResponseMetadata = unknown;

    type UserGetProfileInfoResponseMetadata = unknown;

    type UserInfoAtFollowerMetadata = {
      viewer_id: number;
      name: string;
      honor_id: number;
      last_login_time: string;
      support_card_id: number;
    };

    type UserInfoAtFriendMetadata = {
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

    type UserInfoMetadata = {
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

    type UserItemMetadata = {
      item_id: number;
      number: number;
    };

    type UserMissionMetadata = {
      mission_id: number;
      mission_status: number;
      exec_count: number;
    };

    type UserMusicMetadata = {
      music_id: number;
      acquisition_time: string;
    };

    type UserNoticeDataMetadata = {
      event_id: number;
      notice_title: string;
      notice_text: string;
      button_type: number;
    };

    type UserProfileCardInfoMetadata = {
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

    type UserResetAllCardDressResponseMetadata = unknown;

    type UserResetCardDressResponseMetadata = unknown;

    type UserSetBirthDayResponseMetadata = unknown;

    type UserSetProfileCardInfoResponseMetadata = unknown;

    type UserSupportCardAtFriendMetadata = {
      support_card_id: number;
      exp: number;
      limit_break_count: number;
    };

    type UserSupportCardDeckForUpdatePartyMetadata = {
      deck_id: number;
      support_card_id_array: number;
      auto_deck_flag: number;
    };

    type UserSupportCardDeckMetadata = {
      deck_id: number;
      name: string;
      support_card_id_array: number;
    };

    type UserSupportCardMetadata = {
      viewer_id: number;
      support_card_id: number;
      exp: number;
      limit_break_count: number;
      favorite_flag: number;
      stock: number;
      possess_time: string;
    };

    type UserTrainedCharaAtFriendMetadata = {
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

    type UserTrophyInfoMetadata = {
      trophy_id: number;
      create_time: string;
    };

    type ValentineIndexResponseMetadata = unknown;

    type ValentineReceivedDataMetadata = {
      last_received_time: string;
      card_id_list: number;
    };

    type ModuleMetadata = unknown;

    type PrivateImplementationDetailsMetadata = unknown;
  }
}

export {};
