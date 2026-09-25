# Database Pack

## Purpose

Add durable application data using the toolkit's default relational database path.

## Primary

Supabase Postgres.

Use it for users, products, questions, exams, bookings, orders, content metadata, and most structured client data.

## Use when

- data must persist
- users create or modify data
- the project needs querying/filtering/reporting
- other packs need durable state

## Do not use when

- the project is fully static
- local/static files are sufficient
- a specialized external system is already the system of record

## ORM rule

Do not add Prisma or Drizzle automatically. Add an ORM only when it materially improves the selected architecture.

## Data rules

- define ownership and access before exposing tables
- use migrations for schema changes
- add indexes for demonstrated query needs
- keep seeds/fixtures non-sensitive
- establish backup/recovery expectations before production launch
