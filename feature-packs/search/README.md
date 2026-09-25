# Search Pack

## Purpose
Add fast full-text/search-as-you-type capability for large content or product datasets.

## Primary
Meilisearch.

## Use when
- database filtering is no longer enough
- users need typo-tolerant or ranked search
- content/product/question catalogs are large

## Do not use when
- SQL queries are sufficient
- search is not user-facing or latency-sensitive

## Rules
- define the indexed fields deliberately
- keep authorization outside the search index unless the provider supports it safely
- avoid indexing sensitive fields
- define reindex/rebuild behavior
