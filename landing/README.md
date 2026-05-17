# CodexOne Landing

Independent Astro-based landing site for CodexOne.

## Development

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

## Environment Variables

- `SITE_URL`: canonical site URL, defaults to `https://codex.aieania.tech`
- `LANDING_DOC_URL`: external documentation URL used by CTA links

## Output

Build artifacts are generated in `dist/`.

## Routing Expectations

- `https://codex.aieania.tech/` -> Chinese landing page
- `https://codex.aieania.tech/en` -> English landing page
- CTA login/dashboard actions open the existing main application on `https://codexone.aieania.tech`
- The old `/home` page on the main application remains untouched
