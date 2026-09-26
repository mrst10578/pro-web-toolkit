# Feature Packs

Feature packs are reusable capabilities, not standalone applications.

## Planned catalog

Core:
- auth
- database
- storage
- email
- payments
- analytics
- monitoring
- search

Specialized:
- ai
- rag
- pdf
- scraping
- rich-text-editor
- background-jobs
- realtime
- rtl-persian

New packs begin from `_template/`.

A pack should be promoted to `ready` only after it has been used successfully in repeated real projects or has equivalent strong verification.


## Maturity

All current packs are **experimental v0.1.0**. Each pack has the required contract artifacts, a documented integration path, verification criteria, and declared starter compatibility.

Live third-party provider behavior is still verified inside the client project after credentials, authorization policy, migrations, webhook secrets, and product-specific requirements exist.

See `docs/feature-pack-compatibility.md` for the current starter × pack matrix.
