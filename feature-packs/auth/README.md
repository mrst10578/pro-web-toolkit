# Auth Pack

## Purpose

Add production-ready user authentication without forcing auth into projects that do not need accounts.

## Use when

- users need sign-up/sign-in
- protected pages or dashboards exist
- roles or user-specific data exist

## Do not use when

- the site is public-only
- a CMS editor is the only authenticated user and the CMS already owns auth

## Supported starters

- starter-web
- starter-saas-dashboard
- starter-ai
- starter-cms
- starter-learning
- starter-commerce

## Primary

Supabase Auth.

Why: it aligns with the default Supabase database/storage stack and keeps the number of providers low.

## Alternative

Better Auth, when auth must remain independent from Supabase or the project needs its plugin/ecosystem model.

## Security rules

- never expose service-role keys to the browser
- protect authorization on the server, not only in UI
- define role/ownership checks explicitly
- rate-limit sensitive auth flows when the deployment requires it

## Removal

Remove auth routes/middleware, auth environment variables, user-bound authorization logic, and any user foreign-key dependencies deliberately.
