# Behavior: Daily Races

Overview: Entering daily races, selecting benefits, starting, and post-race checks.

## Actions

- Open: `daily_race/index`  
   See: [endpoints/daily_race/index](../../endpoints/daily_race/index/README.md)
- Start race (entry): `daily_race/race_entry`  
   See: [endpoints/daily_race/race_entry](../../endpoints/daily_race/race_entry/README.md)
- Select benefits: `daily_race/reflect_item_effect`  
   See: [endpoints/daily_race/reflect_item_effect](../../endpoints/daily_race/reflect_item_effect/README.md)
- View results / race: `daily_race/race_start`  
   See: [endpoints/daily_race/race_start](../../endpoints/daily_race/race_start/README.md)
- Race end (replay/validation): `daily_race/replay_check`  
   See: [endpoints/daily_race/replay_check](../../endpoints/daily_race/replay_check/README.md)
- Race again: open → start race (repeat the above)

## Notes

- The Daily Race Type (Monies vs Support Points) probably appears in the payload of `race_entry`.
- The Racing Mode (View Results vs View Race) probably appears in the payload of `race_start`.
