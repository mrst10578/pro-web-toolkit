# Analytics Pack

## Purpose

Measure product usage and funnels without making analytics a core dependency.

## Primary

PostHog.

## Use when

- the client needs product usage, funnels, events, or session replay
- decisions depend on observed user behavior

## Do not use when

- basic server logs are sufficient
- privacy/legal requirements prohibit the intended collection

## Rules

- define events before instrumenting
- avoid collecting sensitive fields by default
- respect consent and jurisdiction-specific requirements
- keep business-critical behavior independent from analytics availability
