# Rich Text Editor Pack

## Purpose
Add structured rich-text authoring for CMS-like pages, notes, knowledge bases, or user-generated content.

## Primary
Tiptap.

## Use when
- users need formatted editable content
- structured editor extensions are required
- content must be stored and rendered consistently

## Do not use when
- plain Markdown/text is sufficient
- the CMS already provides the required editor

## Rules
- define the document schema/extensions deliberately
- sanitize rendered content
- version stored format when schema changes can break old documents
- avoid enabling arbitrary HTML by default
