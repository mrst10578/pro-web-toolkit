# Toolkit Status

Last synchronized: 2026-09-26

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
- Reproducible installs use committed lockfiles and npm ci for the five newly built Next.js starters.
- Commerce uses integer minor-unit money arithmetic and leaves payment authority to the payments feature pack.
- Learning keeps deterministic assessment scoring separate from persistence.
- CMS follows the Payload 3.90.2 compatibility baseline and keeps preview secrets server-side.

## Next maintenance phase

The next toolkit phase is feature-pack implementation and compatibility testing across starter + pack combinations. Do not duplicate the same provider integration inside every starter.
