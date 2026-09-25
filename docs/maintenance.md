# Maintenance Policy

The goal is to keep the toolkit small, current, and trustworthy.

## Monthly

- review security/deprecation notices for primary tools
- check starter CI status
- review packs marked experimental/draft
- remove dead links and obsolete setup notes

## Quarterly

- review whether primary choices still deserve to be primary
- test clean-start setup for each active starter
- review runtime/framework major-version drift
- archive unused alternatives instead of keeping equal defaults

## Promotion rule

A pack moves from:
- draft -> experimental when it has a complete integration path and verification
- experimental -> ready after repeated successful use or equivalent strong evidence

## Deprecation rule

Deprecate instead of silently rewriting when:
- provider/library is abandoned
- security posture becomes unacceptable
- maintenance cost exceeds value
- a replacement materially simplifies the toolkit

## No-version-drift rule

Do not update every dependency merely because a new version exists. Update when there is a security, compatibility, support, or meaningful product reason.

## Project inheritance

Existing client projects do not automatically inherit toolkit upgrades. Each upgrade must be evaluated against that project's risk and needs.
