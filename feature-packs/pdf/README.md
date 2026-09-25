# PDF Pack

## Purpose
Add PDF workflows to a web product without pretending one library handles every PDF job.

## Routing

### Generate / render new PDFs
Primary: React-PDF (`@react-pdf/renderer`).

Use for invoices, reports, certificates, exams, printable exports, and other application-generated documents.

### Manipulate existing PDFs
Primary: pdf-lib.

Use when the product must load existing PDFs and copy, add, remove, reorder, or modify pages/content.

## Use when
- the application generates PDFs
- PDF preview/download is part of the workflow
- existing PDF files must be transformed

## Do not use when
- a browser print stylesheet is sufficient
- the project only stores existing PDFs and performs no processing

## Rules
- choose the PDF tool by the actual job
- do not install both libraries unless the project needs both generation and manipulation
- separate generation/manipulation from storage
- validate uploaded PDFs before processing
- do not assume successful text extraction proves visual correctness
- use a dedicated conversion/OCR service only when the project actually requires those capabilities
