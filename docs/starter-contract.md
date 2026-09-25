# Starter Contract

A starter is a runnable project foundation and should become a GitHub Template Repository.

## Required properties

Every starter must:
- boot successfully from a clean clone
- include a clear README
- define supported runtime/package-manager versions
- include responsive and accessible baseline UI
- include loading, empty, error, and not-found patterns where relevant
- include environment-variable documentation
- include a verification command or procedure
- include CI appropriate to its stack
- avoid optional business features in core
- explain deployment assumptions

## Starter boundaries

A starter should provide architecture, not a finished business product.

Examples:
- `starter-web` may include layout, navigation, UI foundation, metadata, testing, and CI.
- It should not include Stripe, Supabase, AI, CMS, or file upload unless that starter's core purpose requires them.

## Versioning

Use semantic versions for meaningful starter releases.

Breaking changes include:
- changing framework/runtime assumptions
- replacing the primary UI architecture
- changing environment contracts
- changing default deployment model

## AI compatibility

Each starter should include an `AGENTS.md` that tells AI coding tools:
- what the starter is for
- what is core vs optional
- architecture boundaries
- verification commands
- rules against speculative dependencies
