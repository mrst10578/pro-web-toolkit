# AI Engineering Rules

This repository is the source of truth for the Pro Web Toolkit.

## Core rules

1. Do not add a dependency without a current consumer.
2. Do not turn optional features into core requirements.
3. Prefer one primary implementation per capability.
4. Feature packs must be composable and removable.
5. Never fork frameworks or libraries just to customize them; use dependencies and adapters.
6. Starters are separate repositories. This repository stores contracts, shared guidance, and reusable packs.
7. Every feature pack must document:
   - purpose
   - when to use / not use
   - dependencies
   - environment variables
   - data/schema changes
   - integration steps
   - tests
   - removal/rollback
8. Every starter must document:
   - target project type
   - included features
   - excluded features
   - deployment assumptions
   - verification steps
9. Avoid speculative infrastructure.
10. Before introducing a new primary tool, compare it against the current primary and record why the default changes.

## Default technical choices

- General web app: Next.js + TypeScript
- Content-heavy site: Astro
- UI: Tailwind CSS + shadcn/ui
- Database/Auth/Storage: Supabase
- CMS: Payload
- Search: Meilisearch
- Email: React Email + Resend
- Payments: Stripe
- Analytics: PostHog
- Monitoring: Sentry
- AI: Vercel AI SDK
- E2E: Playwright
- Unit tests: Vitest
- CI: GitHub Actions

Defaults are not mandatory. Use the smallest stack that fulfills the project.
