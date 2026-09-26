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

## Evidence boundary

The matrix proves that the toolkit's **declared composition rules are internally consistent**. It does not prove a live third-party service call, because credentials and client-specific infrastructure intentionally do not live in this repository.

## Promotion rule

All packs in this matrix are **experimental**. They have a complete documented integration path plus repeatable structural/compatibility validation. They are not `ready` until repeated successful project use or equivalent strong evidence satisfies `docs/maintenance.md`.
