# Monitoring Integration

1. Confirm production monitoring is justified.
2. Create separate environment/project configuration as needed.
3. Keep build/auth tokens server/CI-only.
4. Configure browser and server DSNs only where error delivery is required.
5. Configure error capture and release metadata.
6. Add explicit data-scrubbing/data-collection rules.
7. Add only actionable alerts.
8. Verify captured error and failure isolation.

## Sentry v11 compatibility

For `@sentry/nextjs` v11:

- import `withSentryConfig` from `@sentry/nextjs/config`, not the package root
- use granular `dataCollection` controls instead of the removed `sendDefaultPii` option
- prefer restrictive defaults for user info, cookies, request/response headers, bodies, query parameters, GenAI content, database query data, queues, and GraphQL values unless the product explicitly requires collection
- monitoring must remain disabled/fail-safe when no DSN is configured

The first `starter-saas-dashboard + monitoring` pilot caught these v11 breaking changes during CI before merge.
