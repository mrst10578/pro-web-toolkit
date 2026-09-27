# Toolkit Status

Last synchronized: 2026-09-27

## Starter repositories

| Starter | Version | Status | Verification baseline |
| --- | --- | --- | --- |
| starter-web | 0.1.0 | experimental | existing baseline |
| starter-content | 0.1.0 | experimental | existing baseline |
| starter-saas-dashboard | 0.1.0 | experimental | npm ci + lint + typecheck + unit + build + Playwright |
| starter-ai | 0.1.0 | experimental | npm ci + lint + typecheck + unit + build + Playwright |
| starter-cms | 0.1.0 | experimental | npm ci + lint + generated Payload types/import map + unit + build + Playwright |
| starter-learning | 0.1.0 | experimental | npm ci + lint + typecheck + deterministic scoring tests + build + Playwright |
| starter-commerce | 0.1.0 | experimental | npm ci + lint + typecheck + money/cart tests + build + Playwright |

## Architecture rules now enforced

- Starter cores remain provider-light unless the provider is intrinsic to the starter, such as Payload in starter-cms and the AI SDK in starter-ai.
- Auth, database, payments, email, analytics, monitoring, storage, RAG, search, and similar integrations stay as feature packs until selected by a project brief.
- Reproducible installs use committed lockfiles and npm ci.
- Commerce uses integer minor-unit money arithmetic and leaves payment authority to the payments feature pack.
- Learning keeps deterministic assessment scoring separate from persistence.
- CMS follows the Payload 3.90.2 compatibility baseline and keeps preview secrets server-side.

## Feature Pack status

All 16 Feature Packs remain **experimental v0.1.0**. Their required contract artifacts, declared starter compatibility, catalog/manifest status consistency, and unresolved-primary checks are enforced by Toolkit Validation.

## First real composition evidence

`mrst10578/Test-SaaS` is the first integration pilot created from `starter-saas-dashboard` with `auth + database + monitoring`.

PR #1 passed:

- npm ci
- lint
- typecheck
- unit tests
- Next.js build
- Playwright E2E

The pilot also exposed and corrected current provider integration details:

- current Supabase projects use a publishable key, while the legacy anon key remains a compatibility fallback
- Next.js 16 uses `proxy.ts` for the Supabase session-refresh/gating path
- Sentry v11 moves `withSentryConfig` to `@sentry/nextjs/config`
- Sentry v11 replaces `sendDefaultPii` with granular `dataCollection` policy

Live Supabase authentication/RLS and Sentry event delivery remain unverified until real provider credentials are attached to the pilot.

## Next maintenance phase

Complete the live provider checklist in `Test-SaaS`, then run additional real-project compositions before promoting any starter or pack to `ready`.
