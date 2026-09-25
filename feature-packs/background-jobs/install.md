# Background Jobs Integration

1. Confirm the work should leave the request path.
2. Identify trigger type: event, schedule, webhook, or explicit invocation.
3. Define idempotency and retry behavior before implementation.
4. Use Inngest by default for normal web workflows.
5. Use Trigger.dev instead only when runtime/compute requirements justify it.
6. Define concurrency, throttling, and rate limits.
7. Keep payloads minimal and non-sensitive.
8. Make terminal failures observable.
9. Test retry, duplicate-trigger, and partial-failure behavior.
