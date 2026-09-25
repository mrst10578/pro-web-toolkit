# RAG Verification

- A representative relevant query retrieves the expected source chunks.
- An unrelated query does not fabricate a retrieval hit.
- A user cannot retrieve chunks from a document they cannot access.
- Zero-result retrieval produces a controlled product behavior.
- Updated documents can be re-ingested without uncontrolled duplication.
- Source IDs/metadata remain traceable from the final context.
- Embedding/index settings match the selected embedding dimensions.
