# Scraping Pack

## Purpose
Collect structured data from external websites when no supported API or direct data source exists.

## Primary
Crawlee.

## Use when
- client workflows depend on public web data
- repeated extraction must be automated
- pages require browser automation or resilient crawling

## Do not use when
- an official API or data export exists
- terms, robots rules, authentication, or legal constraints prohibit the intended collection

## Rules
- prefer official APIs first
- respect rate limits and site constraints
- make retries bounded
- record provenance and timestamps where data freshness matters
- do not store secrets/session data in logs
