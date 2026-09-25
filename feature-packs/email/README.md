# Email Pack

## Purpose

Send transactional product email such as verification, password reset, receipts, alerts, and workflow notifications.

## Primary

Resend + React Email.

## Use when

- product events require email
- auth or billing flows need transactional messages
- users need durable notifications

## Do not use when

- email is only a future idea
- a platform already owns and satisfies the required transactional flow

## Rules

- keep templates versioned
- do not send secrets or sensitive data unnecessarily
- separate transactional mail from marketing campaigns
- make retries idempotent where duplicate sends matter
