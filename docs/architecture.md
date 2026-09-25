# Architecture

## Model

The toolkit uses three layers:

```text
Starter
  + Feature Packs
  + Production Baseline
  = Client Project
```

### Starter

A standalone GitHub Template Repository that provides the minimum architecture for a project type.

### Feature Pack

A reusable capability added only when the project needs it. Examples: auth, database, payments, PDF, RAG, search.

### Production Baseline

Cross-cutting requirements that every real project should explicitly consider: testing, accessibility, security, observability, environment separation, deployment, backup, and recovery.

## Repository boundaries

This repository owns:
- engineering rules
- decision guides
- feature-pack contracts
- reusable pack source where practical
- starter registry
- maintenance policy

Separate repositories own:
- runnable starter applications
- project-specific code

## Anti-patterns

Do not:
- create one mega-starter with every feature installed
- create one repository per tiny capability
- copy framework source code
- add vendor integrations without a real project need
- keep abandoned alternatives as equal defaults
