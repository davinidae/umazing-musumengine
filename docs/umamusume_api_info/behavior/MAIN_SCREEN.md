# Behavior: Main Screen

Overview: Initial bootstrap and occasional random events on the main menu.

## Actions

If pre-logged data:

- Start up (bootstrap):
  - `tool/start_session` See:
    [endpoints/tool/start_session](../endpoints/tool/start_session/README.md)
  - `load/index` See: [endpoints/load/index](../endpoints/load/index/README.md)
  - `note/save_voice` See: [endpoints/note/save_voice](../endpoints/note/save_voice/README.md)
  - `read_info/index` See: [endpoints/read_info/index](../endpoints/read_info/index/README.md)

If not pre-logged data:

- Start up (bootstrap):
  - `tool/pre_signup` See: [endpoints/tool/pre_signup](../endpoints/tool/pre_signup/README.md)
  - `tool/signup` See: [endpoints/tool/signup](../endpoints/tool/signup/README.md)
  - `tool/start_session` See:
    [endpoints/tool/start_session](../endpoints/tool/start_session/README.md)
  - `load/index` See: [endpoints/load/index](../endpoints/load/index/README.md)

## Events

- At random: `jukebox/draw_random_request` See:
  [endpoints/jukebox/draw_random_request](../endpoints/jukebox/draw_random_request/README.md)
