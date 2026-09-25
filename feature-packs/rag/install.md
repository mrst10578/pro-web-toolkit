# RAG Integration

1. Confirm RAG is necessary instead of normal search or model-only generation.
2. Define source types and ownership/permission rules.
3. Enable pgvector in Supabase Postgres.
4. Define document, chunk, metadata, and embedding schema.
5. Select the embedding model and dimension.
6. Build ingestion/chunking and embedding generation.
7. Add vector indexing when data size/query behavior justifies it.
8. Apply authorization filters during retrieval.
9. Connect retrieved context to the AI pack.
10. Evaluate retrieval and answer quality separately.
11. Define re-ingestion/versioning when sources change.
