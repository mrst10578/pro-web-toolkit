# Search Integration

1. Confirm SQL/native filtering is insufficient.
2. Define searchable fields and ranking needs.
3. Configure index and credentials.
4. Separate server-side indexing/admin credentials from any browser-exposed search credential. A browser integration must use a restricted search-only key; never expose the indexing/admin key.
5. Record the installed search SDK version and verify its current import/API shape. The `Test-Cms` and `Test-Content` pilots resolved `meilisearch@0.62.0`, whose JavaScript client export is `Meilisearch`; stale `MeiliSearch` snippets fail TypeScript verification.
6. Add indexing/update path.
7. Add query UI/API.
8. Define rebuild/reindex behavior.
9. Verify authorization boundaries and failure fallback.
10. Keep the core content experience usable when the optional search provider is unavailable when the project brief permits a safe fallback. Static/content-first projects can use a generated public search index as a bounded local fallback when the indexed corpus is explicitly public.

## Pilot evidence

The `mrst10578/Test-Content` Astro pilot separated `MEILISEARCH_HOST` / `MEILISEARCH_API_KEY` for server-side indexing from `PUBLIC_MEILISEARCH_HOST` / `PUBLIC_MEILISEARCH_SEARCH_KEY` for browser querying. If the remote provider is absent or fails, the public search UI falls back to a generated `/search-index.json`.

The fallback and package composition passed `astro check`, production build, and smoke verification. Live remote indexing/query delivery still requires real Meilisearch credentials.
