# Search Integration

1. Confirm SQL/native filtering is insufficient.
2. Define searchable fields and ranking needs.
3. Configure index and credentials.
4. Record the installed search SDK version and verify its current import/API shape. The `Test-Cms` pilot resolved `meilisearch@0.62.0`, whose JavaScript client export is `Meilisearch`; stale `MeiliSearch` snippets fail TypeScript verification.
5. Add indexing/update path.
6. Add query UI/API.
7. Define rebuild/reindex behavior.
8. Verify authorization boundaries and failure fallback.
9. Keep the core content experience usable when the optional search provider is unavailable when the project brief permits a safe fallback.
