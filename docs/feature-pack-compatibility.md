# Feature Pack Compatibility Matrix

This matrix records the **declared starter compatibility** for Feature Packs at toolkit version 0.1.0.

It is intentionally different from provider-runtime proof: live Supabase, Stripe, Resend, Sentry, PostHog, Meilisearch, Inngest, Trigger.dev, and similar behavior is verified inside the client project after credentials and product-specific policy exist.

Legend: ✅ supported by the pack contract · — not a default supported target

| Feature Pack | Web | Content | SaaS Dashboard | AI | CMS | Learning | Commerce |
| --- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| auth | ✅ | — | ✅ | ✅ | ✅ | ✅ | ✅ |
| database | ✅ | — | ✅ | ✅ | ✅ | ✅ | ✅ |
| storage | ✅ | — | ✅ | ✅ | ✅ | ✅ | ✅ |
| email | ✅ | — | ✅ | ✅ | ✅ | ✅ | ✅ |
| payments | ✅ | — | ✅ | — | — | ✅ | ✅ |
| analytics | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| monitoring | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| search | ✅ | ✅ | ✅ | — | ✅ | ✅ | ✅ |
| ai | ✅ | — | ✅ | ✅ | — | ✅ | — |
| rag | ✅ | — | ✅ | ✅ | ✅ | ✅ | — |
| pdf | ✅ | — | ✅ | ✅ | ✅ | ✅ | ✅ |
| scraping | ✅ | — | ✅ | ✅ | — | ✅ | — |
| rich-text-editor | ✅ | — | ✅ | — | ✅ | ✅ | — |
| background-jobs | ✅ | — | ✅ | ✅ | ✅ | ✅ | ✅ |
| realtime | ✅ | — | ✅ | ✅ | — | ✅ | ✅ |
| rtl-persian | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

## How to use this matrix

1. Choose the starter from the client brief.
2. Add only packs whose capability is required now.
3. Follow that pack's `install.md` and `tests-or-verification.md`.
4. Treat provider credentials, authorization policies, migrations, webhooks, external services, and production recovery as project-specific verification.
5. If a project needs a combination marked unsupported, design that combination explicitly instead of silently widening the pack contract.

## Observed integration evidence

| Composition | Evidence | Live provider status |
| --- | --- | --- |
| `starter-saas-dashboard + auth + database + monitoring` | `mrst10578/Test-SaaS` PR #1: npm ci, lint, typecheck, unit tests, Next build, and Playwright E2E passed; auth fails closed without credentials; Supabase RLS migration and Sentry integration are present | Not yet verified with real Supabase/Sentry credentials |
| `starter-web + auth + database + email + payments + analytics + monitoring + realtime` | `mrst10578/Test-web` PR #1: npm ci, lint, typecheck, unit tests, Next build, and Playwright E2E passed; protected portal fails closed without credentials; booking/payment/email/realtime integration paths are present | Not yet verified with live Supabase/Stripe/Resend/PostHog/Sentry providers |
| `starter-ai + auth + database + storage + ai + rag + pdf + scraping + background-jobs + monitoring` | `mrst10578/Test-Ai` PR #1: npm ci, lint, typecheck, unit tests, Next build, and Playwright E2E passed; protected workspace fails closed; pgvector/RLS/Storage, AI/RAG, PDF, bounded scraping, Inngest, and Sentry integration paths are present | Not yet verified with live Supabase/AI/Inngest/Sentry providers |\n| `starter-cms + email + analytics + monitoring + search + pdf + background-jobs + rtl-persian` | `mrst10578/Test-Cms` PR #1: npm ci, lint, Payload generation, typecheck, unit tests, Next build, and Playwright E2E passed; Persian RTL shell, fail-safe optional providers, search fallback, PDF generation, and Inngest reindex path are present | Not yet verified with live Resend/PostHog/Sentry/Meilisearch/Inngest providers |

These rows prove the current code compositions and CI-observed behavior. They do **not** prove live provider delivery, provider-side migration application, cross-user isolation against hosted data, payment/email/event delivery, remote-source behavior, vector retrieval quality, or monitoring event delivery.

## Evidence boundary

The matrix proves that the toolkit's **declared composition rules are internally consistent**. It does not prove a live third-party service call, because credentials and client-specific infrastructure intentionally do not live in this repository.

## Promotion rule

All packs in this matrix are **experimental**. They have a complete documented integration path plus repeatable structural/compatibility validation. They are not `ready` until repeated successful project use or equivalent strong evidence satisfies `docs/maintenance.md`.
