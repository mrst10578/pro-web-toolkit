# RAG Pack

## Purpose

Add retrieval-augmented generation over project-owned documents or knowledge while reusing the toolkit's default Supabase data stack.

## Primary

Supabase Postgres + pgvector for embedding storage and similarity search.

Use the AI pack for model generation. Use the storage pack when original files must persist.

## Use when

- AI answers must be grounded in private or domain-specific documents
- semantic retrieval materially improves answer quality
- document/user permissions must constrain retrieval

## Do not use when

- the model already has all required public knowledge
- simple database/keyword search solves the task
- source material is too small to justify an ingestion/retrieval pipeline

## Core pipeline

1. ingest source
2. normalize and chunk
3. create embeddings
4. store chunks + metadata + embeddings
5. retrieve relevant chunks
6. apply authorization filters
7. send grounded context to the model
8. return answer with source references where the product requires them

## Security and quality rules

- retrieval authorization is enforced before context reaches the model
- preserve source/document ownership metadata
- do not put private material in a globally shared index without access controls
- treat chunking, embedding model, distance metric, and retrieval count as project decisions
- evaluate retrieval separately from answer generation
- prefer Postgres RLS for document-level permissions when using Supabase
