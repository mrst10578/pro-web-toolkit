# PDF Integration

1. Define whether the project generates, previews, extracts, or transforms PDFs.
2. Use the library that matches the job:
   - React-PDF for component-driven generated documents when suitable.
   - pdf-lib for low-level generation/manipulation when suitable.
   - PDF.js for parsing, text extraction, or rendering when suitable.
3. Record the installed PDF library major and verify its current API before copying integration snippets.
4. For PDF.js 6, treat the `PDFDocumentLoadingTask` as the loading lifecycle and destroy that task during cleanup; do not assume the resolved `PDFDocumentProxy` exposes the same teardown API.
5. Add storage only if files must persist.
6. Validate uploaded/processed files and bound accepted size/type.
7. Define naming, retention, and download behavior.
8. Test representative documents visually and functionally.
