# Usage

This project is both:

- an npm library (`umazing-musumengine`)
- a CLI (`umazing`) shipped via the package `bin`

## Install

As a dependency:

```bash
npm i umazing-musumengine
```

Run the CLI without installing:

```bash
npx umazing-musumengine --help
```

Install globally (optional):

```bash
npm i -g umazing-musumengine
umazing --help
```

## CLI

Inputs:

- `decrypt/input/**/{request.txt,response.txt}`
- `encrypt/input/**/decoded.json`

Outputs:

- `decrypt/output/**/decoded.{bin,json}`
- `encrypt/output/**/built.b64`

Common commands:

```bash
umazing decrypt all
umazing decrypt request
umazing decrypt response
umazing encrypt build
```

If installed locally in a project, you can also run:

```bash
npm exec -- umazing decrypt all
```

## Library

```ts
import { RuntimeClient } from 'umazing-musumengine';

const client = new RuntimeClient();

const { requestB64 } = client.encodeRequest({
  blob1: {
    prefix: 'aabbcc',
    udid: '00'.repeat(16),
    session_id: '11'.repeat(16),
    response_key: '22'.repeat(32),
    auth_key: '33'.repeat(48),
  },
  payload: { x: 1 },
});

const { payload } = client.decodeResponse({
  requestB64,
  responseB64: '<base64 response blob>',
});
```

For lower-level primitives, see the generated API docs under `docs/code/`.
