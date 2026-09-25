# Payments Pack

## Purpose

Add payments, subscriptions, billing state, and webhook-driven entitlement changes.

## Primary

Stripe for projects where Stripe is supported and appropriate.

## Use when

- the product sells access, subscriptions, or one-time purchases
- billing state changes product permissions

## Do not use when

- the project only displays pricing
- the target market requires a different payment provider

## Critical rules

- server/webhook state is authoritative
- never grant paid access only from client redirect state
- verify webhook signatures
- make webhook processing idempotent
- store provider IDs, not raw card data
