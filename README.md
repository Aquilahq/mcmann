# AQUILA — James McMann Portfolio

AQUILA portfolio site for actor, voice-over artist, writer, and producer James McMann.

## Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

The production build is generated in `.output/` for Cloudflare Workers.

## Cloudflare deployment

The Worker is configured in `wrangler.jsonc` and deploys the static assets from `.output/public`:

```sh
npm run deploy:cloudflare
```

GitHub Actions deploys automatically on every push to `main`. Configure `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` as repository Actions secrets.
