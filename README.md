# www

Personal website built with [Astro](https://astro.build/).

## Requirements

- Node.js `>=24.20.0 <25`
- pnpm `11.25.0`

## Getting Started

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Open <http://localhost:4321> in your browser. Astro reloads the page automatically when source files change.

Create a production build:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

## Project Structure

```text
.
|-- content/
|   `-- articles/       # Source articles and their assets
|-- public/             # Static assets copied directly to the output
|-- src/
|   |-- components/     # Shared UI components
|   |-- data/           # Site and project data
|   |-- layouts/        # Shared page layouts
|   `-- pages/          # Astro pages and routes
|-- astro.config.mjs    # Astro configuration
|-- package.json        # Scripts and dependencies
|-- pnpm-workspace.yaml # pnpm workspace settings
|-- tsconfig.json       # TypeScript configuration
`-- wrangler.jsonc      # Cloudflare deployment configuration
```

## Deployment

The site is generated as static files in `dist/`. To deploy those files to
Cloudflare Workers Static Assets, authenticate Wrangler and run:

```bash
pnpm exec wrangler login
pnpm deploy
```

The deploy command creates a fresh production build before uploading it.

## License

This project is licensed under the [MIT License](./LICENSE).
