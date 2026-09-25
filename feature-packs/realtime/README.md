# Realtime Pack

## Purpose
Add live updates for chat, presence, notifications, collaborative status, or dashboards.

## Primary
Supabase Realtime.

## Use when
- users must see changes without refresh
- chat/presence/live status is core behavior

## Do not use when
- polling or normal request/refresh behavior is sufficient
- live state adds complexity without user value

## Rules
- define the source of truth separately from the realtime transport
- handle reconnect and duplicate events
- enforce authorization on subscribed data
- keep optimistic UI reversible
