# Monitoring Integration

1. Confirm production monitoring is justified.
2. Create separate environment/project configuration as needed.
3. Keep build/auth tokens server/CI-only.
4. Pin or record the installed Sentry SDK major version before copying integration snippets.
5. For Sentry v11 with Next.js, import `withSentryConfig` from `@sentry/nextjs/config` rather than the package root.
6. For Sentry v11 privacy controls, use the current `dataCollection` options instead of the removed `sendDefaultPii` option.
7. Configure client/server DSNs, error capture, environment, and release metadata.
8. Add data-scrubbing rules that disable collection of sensitive request/user fields unless the project explicitly needs them.
9. Keep monitoring optional/fail-safe: missing DSN or provider failure must not break the application.
10. Add only actionable alerts.
11. Verify captured error and failure isolation using `tests-or-verification.md`.

## Pilot evidence

The `mrst10578/Test-SaaS` pilot exposed two Sentry v11 breaking changes during CI: the `withSentryConfig` export moved to `@sentry/nextjs/config`, and `sendDefaultPii` was no longer accepted by the current SDK types. Updating the integration to the v11 API restored a fully green Next.js 16 build and E2E pipeline.

This is build/integration evidence only. Live event delivery still requires a configured Sentry project and credentials.
