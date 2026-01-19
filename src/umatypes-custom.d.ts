declare global {
  namespace Umatypes {
    namespace Common {
      enum DistanceType {
        Dirt = 1,
        Medium = 2,
        Mile = 3,
        Sprint = 4,
        Long = 5,
      }

      enum MotivationScore {
        Bad = 0,
        Normal = 1,
        Good = 2,
        Great = 3,
      }

      enum RunningStyle {
        FrontRunner = 1,
        PaceChaser = 2,
        LateSurger = 3,
        EndCloser = 4,
      }

      enum Weather {
        Unknown_A = 1,
      }

      enum GroundStyle {
        Unknown_A = 1,
        Unknown_B = 2,
      }

      enum RankScore {
        G = 1,
        F = 2,
        E = 3,
        D = 4,
        C = 5,
        B = 6,
        A = 7,
        APlus = 8,
        S = 9,
        SPlus = 10,
      }

      type FactorInfoItem = {
        factor_id: number;
        level: number;
      };

      type OpponentInfoItem = {
        strength: 1 | 2 | 3; // position in list
        opponent_viewer_id: number;
        evaluation_point: number; // rank score
        user_info: Common.UserInfo;
        team_data_array: Common.TeamDataItem[];
        trained_chara_array: Common.TrainedCharaItem[];
      };

      type TeamDataItem = {
        distance_type: Common.DistanceType;
        member_id: number; // character position, based on distance_type from 1 (ace) to 3
        trainer_chara_id: number;
        running_style: Common.RunningStyle;
      };

      type TrainedCharaItem = {
        viewer_id: number;
        trained_chara_id: number;
        owner_viewer_id: number;
        owner_trained_chara_id: number;
        card_id: number;
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
        proper_ground_turf: Common.RankScore;
        proper_ground_dirt: Common.RankScore;
        proper_running_style_nige: Common.RankScore;
        proper_running_style_senko: Common.RankScore;
        proper_running_style_sashi: Common.RankScore;
        proper_running_style_oikomi: Common.RankScore;
        proper_distance_short: Common.RankScore;
        proper_distance_mile: Common.RankScore;
        proper_distance_middle: Common.RankScore;
        proper_distance_long: Common.RankScore;
        succession_num: number;
        rarity: number;
        is_saved: number;
        is_locked: number;
        talent_level: number;
        chara_grade: number;
        running_style: number;
        nickname_id: number;
        wins: number;
        register_time: string;
        create_time: string;
        skill_array: {
          skill_id: number;
          level: 1 | 2 | 3 | 4;
        }[];
        support_card_list: {
          position: 1 | 2 | 3 | 4 | 5 | 6;
          support_card_id: number;
          exp: number;
          limit_break_count: 0 | 1 | 2 | 3 | 4;
        }[];
        race_result_list: {
          turn: number;
          program_id: number;
          weather: Common.Weather;
          ground_condition: Common.GroundStyle;
          running_style: Common.RunningStyle;
          popularity: number;
          result_rank: number;
          result_time: number;
          prize_money: number;
        }[];
        win_saddle_id_array: number[];
        nickname_id_array: number[];
        factor_id_array: number[];
        factor_info_array: Common.FactorInfoItem[];
        succession_chara_array: {
          position_id: number;
          card_id: number;
          rank: number;
          rarity: number;
          talent_level: number;
          factor_id_array: number[];
          factor_info_array: Common.FactorInfoItem[];
          win_saddle_id_array: number[];
          owner_viewer_id: number;
        }[];
        succession_history_array: unknown[];
      };

      type BaseUserInfo = {
        honor_id: number;
        sex: number;
        tutorial_step: number; // 1000
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

      type UserInfo = Omit<BaseUserInfo, 'birth_day'> & {
        viewer_id: number;
        trainer_point: number;
        bonus_trainer_point: number; // 0 = false | 1 = true ?
        tp_max_recovery_time: number;
        current_rp: number;
        max_rp_add_val: number;
        rp_max_recovery_time: number;
        directory_level: number;
        team_stadium_win_count: number;
        single_mode_play_count: number;
        total_login_day_count: number;
        total_login_day_count_check_time: string;
        last_information_checked_time: string;
        last_login_time: string;
      };
    }

    namespace Request {
      namespace TeamStadium {
        type Index = object;

        type OpponentList = object;

        type DecideFrameOrder = {
          opponent_info: Common.OpponentInfoItem & {
            winning_reward_guarantee_status: number;
          };
        };
      }

      namespace Presents {
        type ReceiveAll = {
          time_filter_type: number;
          category_filter_type: number[];
          is_asc: boolean;
          current_rest_present_num: number;
        };

        type Index = {
          time_filter_type: number;
          category_filter_type: number[];
          offset: number;
          limit: number;
          is_asc: boolean;
        };
      }

      namespace Tool {
        type StartSession = {
          attestation_type: number;
          device_token: string | null;
          button_info: string;
        };

        type Signup = {
          error_code: number;
          error_message: string;
          attestation_type: number;
          optin_user_birth: number;
          dma_state: number;
          country: string;
          credential: string;
        };

        type PreSignup = object;
      }

      namespace User {
        type ChangeName = {
          name: string;
        };

        type ChangeSex = {
          sex: number;
        };
      }

      namespace Tutorial {
        type Skip = object;
      }

      namespace Load {
        type Index = object;
      }
    }

    namespace Response {
      namespace TeamStadium {
        type DecideFrameOrder = {
          frame_order_info_array: {
            distance_type: Common.DistanceType;
            race_order: number;
            random_info_array: {
              viewer_id: number;
              member_id: number;
              trained_chara_id: number;
              running_style: Common.RunningStyle;
              frame_order: number;
              motivation: Common.MotivationScore;
            }[];
          }[];
          user_team_data_array_copy: Common.TeamDataItem[];
          user_trained_chara_array_copy: Common.TrainedCharaItem[];
          opponent_info_copy: Common.OpponentInfoItem;
          opponent_chara_info_array_latest_copy: (Common.TrainedCharaItem & {
            use_type: 0; // ?
            race_cloth_id: number;
          })[];
          winning_reward_guarantee_status: 0 | 1; // 0=true | 1=false ?
        };

        type Index = {
          team_stadium_id: number;
          team_stadium_user: {
            team_class: number;
            best_team_class: number;
            team_class_state: number;
            best_point: number;
          };
          ranking: {
            term_id: number;
            viewer_id: number;
            team_class: number;
            best_point: number;
            rank: number;
          };
          border_line: {
            promotion_rank: number;
            demotion_rank: number;
            keep_rank: number;
            promotion_point: number;
            demotion_point: number;
            keep_point: number;
          };
          team_class_change_state: number;
          reward_info_array: {
            item_type: number;
            item_id: number;
            item_num: number;
          }[];
          race_status: number;
          term_state: number;
        };

        type OpponentList = {
          opponent_info_array: Common.OpponentInfoItem[];
        };
      }

      namespace Presents {
        type ReceiveAll = {
          reward_summary_info: {
            add_item_list: {
              item_id: number;
              number: number;
            }[];
            add_piece_list: unknown[];
            add_card_list: unknown[];
            add_card_bonus_info: null;
            add_support_card_list: unknown[];
            add_support_card_num_array: unknown[];
            add_honor_list: unknown[];
            add_chara_list: unknown[];
            add_cloth_list: unknown[];
            add_music_list: unknown[];
            add_story_id_array: unknown[];
            add_fcoin: number;
            add_present_num: number;
            add_total_fan: number;
            new_chara_profile_array: unknown[];
            force_update_honor_id: number;
          };
          receive_present_num: number;
          rest_present_num: number;
          no_receive_support_card_count: number;
          no_receive_item_flg: boolean;
        };

        type Index = {
          present_array: {
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
            receive_time: string;
            create_time: string;
            free_message: string;
          }[];
          no_receive_present_num: {
            no_time_limit_present_num: number;
            time_limit_present_num: number;
          };
        };
      }

      namespace Load {
        type Index = {
          common_define: {
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
          user_info: Common.BaseUserInfo;
          tp_info: unknown[];
          rp_info: unknown[];
          coin_info: unknown[];
          trained_chara: unknown[];
          trained_chara_favorite_array: unknown[];
          chara_list: unknown[];
          card_dress_array: unknown[];
          card_list: unknown[];
          support_card_list: unknown[];
          support_card_deck_array: unknown[];
          last_select_support_card_deck_id: number;
          item_list: unknown[];
          piece_list: unknown[];
          cloth_list: unknown[];
          music_list: unknown[];
          user_last_checked_time_list: unknown[];
          menu_badge_info: unknown[];
          gacha_banner_info: unknown[];
          gacha_campaign_info_array: unknown[];
          payment_purchased_times_list: unknown[];
          res_version: string;
          user_birth: null;
          circle_data: unknown[];
          main_story_data_list: unknown[];
          character_story_data_list: unknown[];
          single_mode_chara_light: unknown[];
          single_mode_rental_succession_num: number;
          single_mode_difficulty_info_array: unknown[];
          home_position_info: unknown[];
          is_linkage: number;
          season_pack_info: {
            season_end_time: number;
          };
          event_data_array: unknown[];
          chara_profile_array: unknown[];
          team_data_array: unknown[];
          directory_card_array: unknown[];
          team_stadium_user: unknown[];
          daily_race_playing_info: unknown[];
          legend_race_playing_info: unknown[];
          daily_legend_race_playing_info: unknown[];
          honor_info: unknown[];
          login_trophy_info_array: unknown[];
          team_stadium_race_status: number;
          release_item_flag: number;
          home_story_data_array: unknown[];
          short_episode_data_array: unknown[];
          home_poster_data_array: unknown[];
          tutorial_guide_data_array: unknown[];
          released_episode_data_array: unknown[];
          ranking: unknown[];
          border_line: unknown[];
          last_information_update_time: null;
          release_card_array: unknown[];
          stadium_race_chara_id_array: unknown[];
          extra_story_data_list: unknown[];
          champions_info: unknown[];
          practice_partner_chara_array: unknown[];
          practice_partner_owner_info_array: unknown[];
          practice_race_state: number;
          notice_data: unknown[];
          jukebox_info: unknown[];
          jukebox_request_history: unknown[];
          training_challenge_user_info: null;
          training_challenge_exam_info: null;
          talk_gallery_list: unknown[];
          valentine_campaign_received_array: unknown[];
          story_favorite_array: unknown[];
          team_building_load_info: unknown[];
          cygames_id_apply_product_flag: boolean;
          cygames_id_serial_code_reward_info_array: unknown[];
          optin_user_birth: number;
          dma_state: number;
          country_type: number;
          parental_consent: number;
        };
      }

      namespace Tool {
        type PreSignup = {
          attest: boolean;
          nonce: string;
          country_list: {
            country: string;
            country_type: number; // 0, 1, 2; unknown meaning
          }[];
          enable_steam_account: boolean;
        };

        type Signup = {
          viewer_id: number;
          auth_key: string;
        };

        type StartSession = {
          attest: boolean;
          is_tutorial: boolean;
          nonce: string;
          resource_version: string;
          terms_updated: boolean;
        };
      }

      namespace Tutorial {
        type Skip = unknown;
      }

      namespace User {
        type ChangeSex = unknown;

        type ChangeName = unknown;
      }
    }
  }
}

export {};
