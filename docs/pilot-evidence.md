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

- Pilot PR: `mrst10578/Test-SaaS#1`
- Pilot merge SHA: `3f579f26f63082b9a1ebd779405cc78e532f9fcc`
- CI run: `36281047941`

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

---

## Test-web — General Web + Booking Client Portal

Repository: `mrst10578/Test-web`

Source starter: `starter-web@0.1.0`

Feature Packs exercised:

- `auth@0.1.0`
- `database@0.1.0`
- `email@0.1.0`
- `payments@0.1.0`
- `analytics@0.1.0`
- `monitoring@0.1.0`
- `realtime@0.1.0`

### Composition flow

`sign up -> confirm email -> sign in -> create booking -> Stripe checkout -> signed webhook -> confirmation email -> realtime status update`

### Verified by CI

The merged pilot PR passed:

- Pilot PR: `mrst10578/Test-web#1`
- Pilot merge SHA: `1664588611bbf43f8a30d1c47de4f75ed6e95344`
- CI run: `36334400280`

The successful pipeline covered:

- reproducible install with `npm ci`
- ESLint
- TypeScript typecheck
- unit tests
- Next.js production build
- Playwright Chromium
- Playwright E2E

The credential-free E2E path verifies that `/portal` fails closed when Supabase is not configured and redirects to the login surface instead of rendering protected content.

### Real integration paths present in the pilot

The pilot contains code and migrations for:

- Supabase Auth with server-side route protection
- Supabase Postgres bookings with per-user RLS
- Stripe Checkout
- Stripe signature verification
- atomic and idempotent payment confirmation through a Postgres function
- Resend + React Email confirmation email
- Supabase Realtime booking-status updates
- PostHog opt-in analytics
- Sentry v11 opt-in monitoring with privacy-conscious data-collection defaults

The generated project records its own identity separately from the source starter, including changing the package identity from `starter-web` to `test-web`.

### Package compatibility observed

The successful lockfile/CI composition included:

- `next 16.3.5`
- `react 19.2.8`
- `@sentry/nextjs 11.0.0`
- `@supabase/ssr 0.12.7`
- `@supabase/supabase-js 2.117.2`
- `stripe 22.6.2`
- `resend 6.30.0`
- `@react-email/components 1.0.12`
- `posthog-js 1.434.15`

### Findings from this pilot

1. Generated-project identity conversion must include package metadata, not only the toolkit/starter manifest. The first lockfile pass exposed that `package.json` still identified the generated project as `starter-web`; the pilot corrected it to `test-web`.
2. A successful browser return from payment checkout is not an authorization boundary. Booking confirmation is driven only by a verified Stripe webhook.
3. Webhook idempotency and the protected state transition are implemented atomically so duplicate delivery cannot produce a second confirmation transition.
4. Email is a downstream notification side effect. Email-provider failure does not undo an already verified payment state.
5. Realtime is scoped to the authenticated user's booking rows and is paired with database RLS rather than treated as an authorization mechanism.
6. Analytics and monitoring remain optional and must not prevent the application from starting or the core booking path from functioning when their credentials are absent.

### Not yet verified

This pilot does **not** claim live-provider proof for:

- real Supabase signup, email confirmation, sign-in, session refresh, or sign-out
- applying the bookings migration to a hosted Supabase project
- live cross-user RLS isolation
- live Supabase Realtime delivery and reconnect behavior
- real Stripe Checkout payment
- real Stripe webhook delivery/retry behavior
- real Resend email delivery
- real PostHog event ingestion
- real Sentry event delivery and source-map upload

Those checks require provider projects, secrets, and external side effects.

### Maturity effect

This adds a successful `starter-web` composition/build data point.

It also provides a second independent code/CI composition data point for `auth`, `database`, and `monitoring` when considered together with Test-SaaS, and a first real composition data point for `email`, `payments`, `analytics`, and `realtime`.

The evidence is stronger, but live-provider verification and/or additional independent successful compositions are still required before any affected component should be promoted from `experimental` to `ready`.
