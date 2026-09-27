# Pilot Evidence

## Test-SaaS — SaaS Dashboard + Auth + Database + Monitoring

Repository: `mrst10578/Test-SaaS`

Source starter: `starter-saas-dashboard@0.1.0`

Feature Packs exercised:

- `auth@0.1.0`
- `database@0.1.0`
- `monitoring@0.1.0`

## Verified by CI

The merged pilot PR passed:

- reproducible install with `npm ci`
- ESLint
- TypeScript typecheck
- unit tests
- Next.js production build
- Playwright E2E

The credential-free E2E path verifies that protected routes fail closed when Supabase is not configured and that the auth surface remains available for configuration.

The project also contains a real Supabase migration with per-user row-level-security policies for the pilot `tasks` CRUD path.

## Findings returned to the toolkit

1. New Supabase projects use a publishable key naming model. The Auth pack now documents `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` as the current default while retaining a legacy anon-key compatibility note.
2. Sentry v11 changed the Next.js integration surface. `withSentryConfig` is imported from `@sentry/nextjs/config`, and privacy configuration uses `dataCollection` instead of the removed `sendDefaultPii` option.
3. Auth composition benefits from an explicit fail-closed requirement when provider configuration is absent.
4. Monitoring composition must be SDK-major-aware rather than assuming snippets remain valid indefinitely.

## Not yet verified

This pilot does **not** claim live-provider proof for:

- real Supabase signup/sign-in/session refresh
- applying the migration to a hosted Supabase project
- cross-user RLS enforcement against live data
- real Sentry event delivery
- source-map upload to a real Sentry project

Those checks require project credentials and are intentionally left to live project verification.

## Maturity effect

This is one successful composition/build integration data point. It is not enough by itself to promote the starter or any involved Feature Pack from `experimental` to `ready`.
