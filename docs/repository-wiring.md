# Repository Wiring Contract

The Professional Web Toolkit uses **registry-based, low-coupling repository wiring**.

There is intentionally no Git submodule, package dependency, runtime dependency, or cross-repository write dependency between `pro-web-toolkit` and the starter repositories.

## Central → starter

`starters/catalog.yml` is the central registry. Every starter entry records:

- repository
- version
- maturity
- `starter.yml` as the machine-readable backlink
- `TOOLKIT.md` as the human-readable composition contract
- the stable README marker `TOOLKIT-LINK`

## Starter → central

Every runnable starter must contain:

- `starter.yml`
- `TOOLKIT.md`
- a README block wrapped by:
  - `<!-- TOOLKIT-LINK:BEGIN -->`
  - `<!-- TOOLKIT-LINK:END -->`

The metadata must point back to `mrst10578/pro-web-toolkit`.

## Why this is not a submodule

Generated client repositories must remain independently runnable after creation. A central runtime or source-code dependency would make templates fragile and would couple unrelated client deployments.

## Validation layers

### Local toolkit validation

`node scripts/validate-toolkit.mjs` verifies the central catalog and wiring contract declarations without network access.

### Cross-repository audit

`node scripts/audit-repository-wiring.mjs` queries GitHub and verifies the actual private starter repositories.

It requires a token with read access to all seven starter repositories:

```bash
GITHUB_TOKEN=... node scripts/audit-repository-wiring.mjs
```

The audit checks:

- repository exists
- default branch is `main`
- `starter.yml` exists and identifies the correct starter/toolkit
- `TOOLKIT.md` exists and links to the central toolkit
- README contains the stable toolkit backlink markers

The cross-repository audit is intentionally **not** part of default CI because the default token for one private repository must not be assumed to have read access to sibling private repositories.
