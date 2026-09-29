# Analytics Integration

1. Define the decisions analytics should support.
2. Create a small event taxonomy.
3. Configure provider.
4. Match browser-exposed environment variable names to the framework instead of assuming a universal public prefix. Next.js uses `NEXT_PUBLIC_`; Astro uses `PUBLIC_`. For PostHog this means, for example, `NEXT_PUBLIC_POSTHOG_KEY` / `NEXT_PUBLIC_POSTHOG_HOST` on Next.js and `PUBLIC_POSTHOG_KEY` / `PUBLIC_POSTHOG_HOST` on Astro.
5. Add consent handling where required.
6. Instrument only useful events/properties.
7. Exclude sensitive data.
8. Keep analytics optional/fail-safe so missing or blocked analytics never prevents the core product from loading.
9. Verify events and failure isolation.

## Pilot evidence

The `mrst10578/Test-Content` Astro pilot could not reuse the Next.js-specific `NEXT_PUBLIC_` naming convention for browser configuration. It used Astro's `PUBLIC_` convention and passed the full `astro check`, production build, and smoke-verification pipeline with PostHog remaining disabled when configuration or consent was absent.

This is code/build evidence only. Live PostHog event ingestion still requires a configured provider project.
