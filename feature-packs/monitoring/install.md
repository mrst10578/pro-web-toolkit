# Monitoring Integration

1. Confirm production monitoring is justified.
2. Create separate environment/project configuration as needed.
3. Keep build/auth tokens server/CI-only.
4. Pin or record the installed Sentry SDK major version before copying integration snippets.
5. Use framework-specific integration guidance rather than assuming the Next.js surface applies everywhere.
6. For Sentry v11 with Next.js, import `withSentryConfig` from `@sentry/nextjs/config` rather than the package root.
7. For Sentry v11 with Astro, keep runtime `Sentry.init(...)` configuration in `sentry.client.config.ts` / `sentry.server.config.ts` and keep build/upload configuration in the Astro integration.
8. For Sentry v11 privacy controls, use the current `dataCollection` options instead of the removed `sendDefaultPii` option.
9. Configure client/server DSNs, error capture, environment, and release metadata. Match public DSN naming to the framework; Astro browser variables use the `PUBLIC_` prefix.
10. Add data-scrubbing rules that disable collection of sensitive request/user fields unless the project explicitly needs them.
11. Keep monitoring optional/fail-safe: missing DSN or provider failure must not break the application.
12. Add only actionable alerts.
13. Verify captured error and failure isolation using `tests-or-verification.md`.

## Pilot evidence

The `mrst10578/Test-SaaS` pilot exposed two Sentry v11 breaking changes during CI: the `withSentryConfig` export moved to `@sentry/nextjs/config`, and `sendDefaultPii` was no longer accepted by the current SDK types. Updating the integration to the v11 API restored a fully green Next.js 16 build and E2E pipeline.

The `mrst10578/Test-Content` pilot then exercised `@sentry/astro@11.0.0` in an Astro 7 static/content composition. Runtime capture is optional when no DSN exists, privacy controls use `dataCollection`, and source-map upload is disabled unless the build credentials are present. The composition passed Astro type checking, production build, and smoke verification.

These are build/integration evidence only. Live event delivery and source-map upload still require a configured Sentry project and credentials.
