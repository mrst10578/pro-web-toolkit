# Background Jobs Pack

## Purpose

Move slow, retryable, scheduled, or multi-step work out of the request/response path.

## Primary

Inngest for general web application background jobs and durable workflows.

It is the default when we want retries, events/cron, durable steps, concurrency controls, and observability without maintaining our own queue/worker infrastructure.

## Alternative

Trigger.dev when the workload specifically benefits from separate long-running compute, custom runtime/system packages, heavy AI/media processing, browser workloads, Python/FFmpeg, or other jobs that should not run on the web application's compute.

## Use when

- work can outlive an HTTP request
- retryable external calls are required
- jobs run on schedules
- workflows wait between steps
- file/AI/data processing should not block the UI

## Do not use when

- the work is fast and belongs in the request
- a simple platform-native scheduled function already satisfies the requirement
- adding durable orchestration gives no user or reliability benefit

## Rules

- make side effects idempotent
- define retry behavior and terminal failure
- use stable event/job IDs
- never assume a retry starts from a clean external state
- set concurrency/rate limits where downstream systems require them
- keep secrets out of payloads and logs
