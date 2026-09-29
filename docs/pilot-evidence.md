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

---

## Test-Ai — AI Document Workspace

Repository: `mrst10578/Test-Ai`

Source starter: `starter-ai@0.1.0`

Feature Packs exercised:

- `auth@0.1.0`
- `database@0.1.0`
- `storage@0.1.0`
- `ai@0.1.0`
- `rag@0.1.0`
- `pdf@0.1.0`
- `scraping@0.1.0`
- `background-jobs@0.1.0`
- `monitoring@0.1.0`

### Composition flow

`private PDF/text upload or public URL -> Inngest ingestion -> extraction -> chunking -> embeddings -> owner-scoped pgvector retrieval -> grounded streamed answer`

### Verified by CI

The merged pilot PR passed:

- Pilot PR: `mrst10578/Test-Ai#1`
- Pilot merge SHA: `6b26db1bdc6d2bb24c0c05f57106c5aecb64264f`
- Final CI run: `36334579480`

The successful final pipeline covered:

- reproducible install with `npm ci`
- ESLint
- TypeScript typecheck
- unit tests
- Next.js production build
- Playwright Chromium
- Playwright E2E

Credential-free browser verification confirms that the protected `/workspace` route fails closed when Supabase is absent. E2E also verifies that the representative PDF endpoint returns a valid PDF signature.

### Real integration paths present in the pilot

The pilot contains implementation and migrations for:

- Supabase Auth with server-side route protection and email confirmation
- Supabase Postgres document metadata with per-user RLS
- private Supabase Storage with owner-scoped object paths and policies
- pgvector-backed document chunks and owner-scoped similarity retrieval
- AI SDK generation plus embedding composition
- PDF.js extraction and pdf-lib representative generation
- bounded public URL ingestion with private-network/localhost rejection, DNS checks, redirect limits, byte limits, and request timeout
- Inngest background ingestion with retries, deterministic chunk indexes, source/chunk hashing, and idempotent upsert behavior
- Sentry v11 optional monitoring with privacy-conscious data-collection defaults

The generated project records its own identity separately from `starter-ai` and has no runtime dependency on `pro-web-toolkit`.

### Package compatibility observed

The successful lockfile/CI composition included:

- `next 16.3.6`
- `react 19.3.0`
- `ai 7.0.114`
- `inngest 4.21.0`
- `pdfjs-dist 6.3.289`
- `pdf-lib 1.17.1`
- `@sentry/nextjs 11.0.0`
- `@supabase/ssr 0.12.7`
- `@supabase/supabase-js 2.117.2`

### Findings from this pilot

1. Inngest v4 uses a different function-definition shape from older snippets: triggers live in the first configuration object and `createFunction` is used as `createFunction(configuration, handler)`.
2. PDF.js 6 changed the extraction/lifecycle assumptions used by older integration snippets. The pilot removes an unsupported document option and destroys the loading task rather than assuming the document proxy exposes the same teardown method.
3. Version-sensitive Feature Packs need real lockfile plus TypeScript verification. Documentation-only compatibility is insufficient when SDK majors evolve.
4. Independent unit-test runtimes should not rely on framework-only import markers unless that marker is explicitly installed/resolved in the test environment.
5. RAG ownership must be enforced at retrieval/storage/database boundaries rather than trusting a browser-supplied user identifier.
6. Scraping requires an explicit trust boundary. The pilot applies protocol, host, DNS, redirect, size, timeout, and content-type constraints before remote text becomes an AI source.

### Not yet verified

This pilot does **not** claim live-provider proof for:

- applying the pgvector/RLS/Storage migration to a hosted Supabase project
- real signup, confirmation, sign-in, session refresh, or sign-out
- real private upload/download/delete across two users
- live cross-user isolation for documents, chunks, Storage objects, and vector retrieval
- real AI generation or embedding delivery through the configured provider/Gateway
- embedding dimensionality and representative retrieval quality against a live provider
- real Inngest event delivery, retries, duplicate re-trigger behavior, and terminal-failure visibility
- representative deployed remote URL extraction
- real Sentry event delivery, source-map upload, and captured-event privacy inspection

Those checks require provider projects, secrets, and external side effects.

### Maturity effect

This adds the first successful `starter-ai` composition/build data point and the first real code/CI composition data point for `storage`, `ai`, `rag`, `pdf`, `scraping`, and `background-jobs`.

It also adds another independent code/CI data point for `auth`, `database`, and `monitoring`.

The evidence is materially stronger, but live-provider verification and/or further independent successful compositions are still required before promotion from `experimental` to `ready`.



---

## Test-Cms — CMS Knowledge Hub

Repository: `mrst10578/Test-Cms`

Source starter: `starter-cms@0.1.0`

Feature Packs exercised:

- `email@0.1.0`
- `analytics@0.1.0`
- `monitoring@0.1.0`
- `search@0.1.0`
- `pdf@0.1.0`
- `background-jobs@0.1.0`
- `rtl-persian@0.1.0`

Payload baseline capabilities intentionally remained the owner of authentication, SQLite persistence, media uploads, drafts/preview, and Lexical rich text instead of duplicating those responsibilities with a second provider stack.

RAG was intentionally deferred because the toolkit RAG contract depends on AI plus vector-capable database/storage responsibilities that this pilot does not own.

### Verified by CI

The merged pilot PR passed:

- Pilot PR: `mrst10578/Test-Cms#1`
- Pilot merge SHA: `35b48de4066721a6c1412c2ea97ad6fcc0e5bd32`
- Successful application CI run: `36334615282`
- Final head CI run after evidence documentation: `36334855584`

The successful pipeline covered:

- reproducible install with `npm ci`
- ESLint
- Payload type generation
- Payload import-map generation
- TypeScript typecheck
- Vitest
- Next.js production build
- Playwright Chromium
- Playwright E2E

E2E verifies the Persian/RTL public shell, fail-closed controlled email/monitoring test routes when disabled, and a representative generated PDF with a valid PDF signature.

### Real integration paths present in the pilot

The pilot contains implementation for:

- Meilisearch content search with a Payload published-content fallback if search is unavailable
- PostHog analytics that remains disabled when configuration is absent
- Sentry v11 monitoring with privacy-restricted data collection
- controlled Resend verification endpoint
- generated PDF verification route using pdf-lib
- Inngest background reindexing for published content
- Persian `lang="fa"` / `dir="rtl"` public experience

### Package compatibility observed

The successful lockfile/CI composition included:

- `next 16.3.3`
- `payload 3.90.2`
- `typescript 5.9.3`
- `@sentry/nextjs 11.0.0`
- `inngest 4.21.0`
- `meilisearch 0.62.0`
- `resend 6.30.0`
- `posthog-js 1.434.15`
- `pdf-lib 1.17.1`

### Findings from this pilot

1. `inngest@4.21.0` requires TypeScript `>=5.8.0`; the CMS starter originally pinned TypeScript `5.7.3`. The pilot upgraded to `5.9.3` and revalidated the full composition instead of bypassing npm peer checks.
2. The current Inngest v4 two-argument `createFunction(configuration, handler)` API reinforces the version-aware background-jobs guidance already observed in the AI pilot.
3. `meilisearch@0.62.0` exports `Meilisearch`; stale `MeiliSearch` examples fail current TypeScript verification.
4. Provider-backed search should fail safely when the product can support a local published-content fallback.
5. A generated PDF route needs framework-level build/E2E verification, not only a library-level generation call.
6. A CMS starter with built-in auth/database/media/editor capabilities should not compose duplicate providers merely to increase Feature Pack coverage. Capability ownership must remain explicit.

### Not yet verified

This pilot does **not** claim live-provider proof for:

- real Meilisearch indexing and remote query delivery
- real PostHog event ingestion
- real Sentry event delivery and captured-event privacy inspection
- real Resend email delivery
- real Inngest remote execution, retry visibility, and duplicate-trigger behavior

The representative PDF is structurally verified in CI. Production Persian PDF body content still requires an embedded Persian-capable font plus visual inspection.

### Maturity effect

This adds the first successful `starter-cms` composition/build data point.

It also adds another independent code/CI data point for `monitoring`, `pdf`, and `background-jobs`, and a first CMS-specific composition data point for `search`, `email`, `analytics`, and `rtl-persian`.

The evidence is stronger, but live-provider verification and/or additional independent successful compositions are still required before promotion from `experimental` to `ready`.



---

## Test-Learning — Learning Question Bank / Exam Platform

Repository: `mrst10578/test-learning`

Source starter: `starter-learning@0.1.0`

Selected scenario packs:

- `auth@0.1.0`
- `database@0.1.0`
- `storage@0.1.0`
- `email@0.1.0`
- `analytics@0.1.0`
- `monitoring@0.1.0`
- `search@0.1.0`
- `ai@0.1.0`
- `rag@0.1.0`
- `pdf@0.1.0`
- `scraping@0.1.0`
- `rich-text-editor@0.1.0`
- `background-jobs@0.1.0`
- `realtime@0.1.0`
- `rtl-persian@0.1.0`

### Evidence boundary

This pilot is a **code/CI provider-boundary composition test**, not full SDK-compatibility proof for every selected Feature Pack.

Several capabilities intentionally use isolated HTTP/provider boundaries or local contract implementations so CI can attribute failures cleanly and run without external credentials. Pack-specific SDK compatibility is only claimed where the actual pack SDK/runtime was exercised.

### Verified by CI

The merged pilot PR passed:

- Pilot PR: `mrst10578/test-learning#1`
- Pilot merge SHA: `1a127b76f5ed7aa3c413297662ed7555140793a9`
- Final CI run: `36335133055`

The successful pipeline covered:

- reproducible install with `npm ci`
- ESLint
- TypeScript typecheck
- unit tests
- Next.js production build
- Playwright Chromium
- Playwright E2E

The browser tests verify a Persian-first `lang="fa"` / `dir="rtl"` composition and the representative learning-ingestion workflow surface.

### Contracts and boundaries present in the pilot

The pilot contains:

- deterministic assessment scoring kept independent from AI/provider availability
- Supabase-style auth boundary with fail-closed configuration behavior
- Postgres schema plus RLS ownership policies for learning sources, questions, assessments, attempts, and source chunks
- private source-storage ownership policies
- pgvector retrieval function constrained by `auth.uid()`
- owner filtering before local retrieval context can be selected
- exact-host allowlist-gated scraping plus localhost/private-IPv4 rejection
- authenticated storage, search, AI, email, and controlled monitoring routes
- deterministic background-job IDs
- Realtime publication contract for attempts
- structured human-review editing before publication
- Persian RTL document/layout semantics

### Findings from this pilot

1. The first CI attempt exposed a unit-test module-resolution mismatch when a new module used the TypeScript `@/*` alias but the starter Vitest configuration did not resolve that alias. The pilot corrected the module boundary and reran the full pipeline.
2. Next.js lint caught internal navigation implemented with `window.location.assign`; the pilot replaced it with the Next router.
3. Generated-project identity was still inherited from `starter-learning` in starter/package metadata. Before merge, the pilot was corrected to identify as `test-learning@0.1.0`, preserve `starter-learning@0.1.0` separately as `source_starter`, and mark the generated project as non-template.
4. This repeats the earlier Test-SaaS lesson that generated-project identity and source-starter identity must be separate across all project metadata surfaces.
5. A broad composition can produce useful architecture evidence without proving the current SDK surface of every selected pack. The evidence registry must distinguish provider-boundary proof from actual package/version compatibility.

### Not yet verified

This pilot does **not** claim:

- live Supabase signup/login/logout, migration application, RLS isolation, Storage, or Realtime delivery
- live Resend, PostHog, Sentry, or Meilisearch delivery
- live model-generation or embedding delivery
- real Inngest durable execution/retry behavior
- production scraping against an approved target host
- real PDF extraction/manipulation through the toolkit PDF libraries
- Tiptap-specific rich-text-editor compatibility
- Vercel AI SDK-specific compatibility
- Sentry SDK-specific compatibility in this pilot
- SDK/package compatibility for provider packs implemented here only through isolated HTTP boundaries

Those checks require a dedicated SDK/live-provider verification phase.

### Maturity effect

This adds the first successful `starter-learning` project-specific composition/build data point.

It strengthens evidence for the starter's deterministic scoring contract, Persian RTL composition, ownership-oriented data design, guarded ingestion, and credential-free fail-closed behavior.

It must **not** be counted as full SDK compatibility evidence for all selected Feature Packs. No component should be promoted from `experimental` to `ready` based on this pilot alone.


---

## Test-Commerace — Commerce Storefront Pilot

Repository: `mrst10578/Test-Commerace`

Source starter: `starter-commerce@0.1.0`

Feature Packs exercised:

- `payments@0.1.0`
- `email@0.1.0`
- `analytics@0.1.0`
- `monitoring@0.1.0`
- `search@0.1.0`
- `pdf@0.1.0`
- `background-jobs@0.1.0`
- `rtl-persian@0.1.0`

### Evidence boundary

This pilot is an **independent generated-project code/CI composition test**.

Sentry is exercised through its installed SDK. Stripe Checkout creation, Resend, PostHog, Meilisearch, and Inngest are exercised through isolated server-side HTTP/provider boundaries. The PDF route verifies representative generated-PDF behavior but does not claim compatibility with every library in the PDF pack.

Accordingly, this pilot must not be counted as official SDK-version compatibility proof for provider packs that do not install their SDK.

### Verified by CI

The merged pilot PR passed:

- Pilot PR: `mrst10578/Test-Commerace#1`
- Pilot merge SHA: `f4b40321d4ab50710cdeb8c458bc5929f04f6c36`
- PR CI run: `36533103488`
- Final `main` CI run: `36533317063`

The successful pipeline covered:

- reproducible install with `npm ci`
- ESLint
- TypeScript typecheck
- Vitest
- Next.js production build
- Playwright Chromium
- Playwright E2E

E2E verifies the Persian-first `lang="fa"` / `dir="rtl"` storefront, fail-safe checkout behavior without Stripe credentials, and a representative PDF endpoint with a valid PDF signature.

### Real integration paths present in the pilot

The pilot contains:

- server-side Stripe Checkout Session creation
- Stripe-style webhook HMAC verification with timestamp tolerance
- webhook-driven order-paid handling rather than trusting browser redirect state
- Resend transactional receipt boundary
- PostHog server-event boundary
- Meilisearch query boundary with a safe local catalog fallback
- generated invoice PDF endpoint
- Inngest event-enqueue boundary for post-payment work
- Sentry v11 monitoring with privacy-restricted data collection
- Persian-first RTL document semantics
- provider-unconfigured paths that fail safely

The generated project records its own identity as `mrst10578/Test-Commerace` separately from `starter-commerce` and has no runtime dependency on the starter or toolkit repositories.

### Findings from this pilot

1. The first full CI attempt exposed a unit-test module-resolution mismatch: a reusable library module used the Next.js `@/*` alias while the existing Vitest configuration did not resolve that alias. Switching the reusable module to relative imports restored the complete pipeline.
2. Generated-project identity must be updated across repository metadata, README, package metadata, and lockfile while preserving the source starter separately.
3. Payment success is server-authoritative. Browser redirect state is not trusted as proof of payment; the webhook boundary verifies the signed payload.
4. Optional external providers must not break credential-free CI or application startup.
5. Search can fail safely when the product has a deliberate local fallback.
6. Broad composition evidence must distinguish official SDK compatibility from HTTP/provider-boundary compatibility.

### Not yet verified

This pilot does **not** claim:

- real Stripe Checkout payment or provider-delivered webhook/retry behavior
- real Resend email delivery
- real PostHog event ingestion
- real Meilisearch indexing/query delivery
- real Inngest execution, retry behavior, or terminal-failure observability
- real Sentry event delivery/source-map upload
- official SDK compatibility for Stripe, Resend, PostHog, Meilisearch, or Inngest in this pilot
- production PDF visual correctness across representative invoices/viewers beyond the CI structural check

Those checks require provider projects, credentials, official SDK-specific pilots where applicable, and external side effects.

### Maturity effect

This adds the first successful `starter-commerce` independent project-specific composition/build data point.

It strengthens code/CI evidence for commerce-specific provider boundaries, Persian RTL composition, PDF endpoint behavior, fail-safe optional integrations, and generated-project independence.

No component should be promoted from `experimental` to `ready` based on this pilot alone.
