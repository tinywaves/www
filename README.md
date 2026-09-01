# www

Personal website built with [Astro](https://astro.build/).

## Requirements

- Node.js `24.20` or later
- pnpm `11.25` or later

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
|-- public/             # Static files copied directly to the output
|-- src/
|   |-- pages/          # Astro pages and routes
|-- astro.config.mjs    # Astro configuration
|-- package.json        # Scripts and dependencies
|-- tsconfig.json       # TypeScript configuration
```

## Deployment

`pnpm build` generates the Astro production output. No server adapter is configured, so the project is currently intended for static hosting. Deploy the generated `dist/` directory to any static file hosting service.

## License

This project is licensed under the [MIT License](./LICENSE).
