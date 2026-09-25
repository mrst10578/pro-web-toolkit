# Monitoring Pack

## Purpose

Capture production errors and diagnostic context so failures can be found and fixed.

## Primary

Sentry.

## Use when

- the project has production users
- silent frontend/backend failures would be costly
- release health or error tracing is required

## Do not use when

- the project is a disposable local prototype

## Rules

- scrub secrets and sensitive fields
- separate environments
- upload source maps securely when used
- alerts should map to actionable failure classes
- monitoring failure must not break the application
