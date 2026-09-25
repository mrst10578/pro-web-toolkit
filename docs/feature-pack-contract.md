# Feature Pack Contract

Every feature pack must satisfy this contract before it is marked ready.

## Required files

```text
feature-packs/<name>/
├── README.md
├── pack.yml
├── env.example
├── install.md
└── tests-or-verification.md
```

Optional:
- `schema/`
- `src/`
- `examples/`
- `migrations/`

## Required README content

- What problem this pack solves
- When to use it
- When not to use it
- Supported starters
- Primary provider/library
- Alternative, only if justified
- Security/privacy notes
- Removal/rollback notes

## Required manifest fields

```yaml
name:
version:
status:
category:
supported_starters:
dependencies:
env:
data_changes:
verification:
```

## Status lifecycle

- `draft` — shape is being designed
- `experimental` — usable but not yet proven on repeated projects
- `ready` — proven and documented
- `deprecated` — do not use for new projects

## Acceptance rule

A pack is not ready because installation succeeds. It is ready only when:
1. the intended behavior works,
2. failure states are documented,
3. verification is repeatable,
4. removal is understood,
5. no unrelated core dependency is introduced.
