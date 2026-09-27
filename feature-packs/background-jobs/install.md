# Background Jobs Integration

1. Confirm the work should leave the request path.
2. Identify trigger type: event, schedule, webhook, or explicit invocation.
3. Define idempotency and retry behavior before implementation.
4. Use Inngest by default for normal web workflows.
5. Record the installed SDK major and follow that major's current API rather than copying an older snippet.
6. For Inngest v4, define triggers inside the first configuration object and use the two-argument `createFunction(configuration, handler)` form.
7. Use Trigger.dev instead only when runtime/compute requirements justify it.
8. Define concurrency, throttling, and rate limits.
9. Keep payloads minimal and non-sensitive.
10. Make terminal failures observable.
11. Test retry, duplicate-trigger, and partial-failure behavior.

## Inngest v4 shape

```ts
const fn = inngest.createFunction(
  {
    id: "example-job",
    retries: 3,
    triggers: { event: "example/run.requested" },
  },
  async ({ event }) => {
    // Handle the event.
  },
);
```

Do not silently reuse the older three-argument trigger form when the project has Inngest v4 installed. Treat an SDK-major change as a compatibility boundary and verify it with the real project lockfile and TypeScript compiler.
