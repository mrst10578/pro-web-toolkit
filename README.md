# Pro Web Toolkit

A private, AI-assisted toolkit for starting client web projects quickly without rebuilding the same foundations every time.

## Operating model

Choose a **starter** for the project's shape, then add only the **feature packs** the project actually needs.

```text
Client idea
  -> choose project type
  -> choose starter
  -> add feature packs
  -> verify
  -> deploy
```

## Core starters

- `starter-web` — general web apps and product sites
- `starter-content` — content-heavy sites
- `starter-saas-dashboard` — SaaS, portals, admin dashboards
- `starter-ai` — chat, AI tools, RAG
- `starter-cms` — editor-managed content
- `starter-learning` — LMS, quiz, exam, question bank
- `starter-commerce` — storefronts, catalog, cart, and checkout-shell projects

## Starter maturity

All seven starters are currently **experimental v0.1.0**: usable baselines with CI and verification, but not yet declared production-stable across arbitrary client deployments.

## Feature packs

Reusable capabilities such as auth, database, storage, email, payments, analytics, monitoring, search, AI, RAG, PDF, scraping, and RTL/Persian support.

Feature packs are **not standalone apps**. They must be composable, documented, testable, and removable.

## Defaults

- App framework: Next.js + TypeScript
- Content framework: Astro
- UI: Tailwind CSS + shadcn/ui
- Database/Auth/Storage default: Supabase
- CMS: Payload
- Search: Meilisearch
- Email: React Email + Resend
- Payments: Stripe
- Analytics: PostHog
- Monitoring: Sentry
- AI: Vercel AI SDK
- E2E testing: Playwright
- Unit testing: Vitest
- CI: GitHub Actions

These are defaults, not mandatory dependencies.

## Repository philosophy

1. Prefer composition over giant all-in-one templates.
2. Keep one primary choice per capability, plus at most one justified alternative.
3. Never install a feature just because it may be useful later.
4. Do not fork frameworks/libraries; depend on them.
5. Turn repeated project work into feature packs only after the pattern is real.
6. Every starter must be independently usable as a GitHub Template Repository.
7. Every feature pack must define setup, env vars, data changes, verification, and rollback/removal notes.

Start with:
- `docs/choosing-a-starter.md`
- `docs/decision-tree.md`
- `docs/feature-pack-contract.md`
