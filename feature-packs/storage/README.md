# Storage Pack

## Purpose

Add managed file/object storage for user uploads, images, PDFs, media, and generated artifacts.

## Use when

- users upload files
- the product stores private or public media
- generated files must persist
- another pack depends on durable object storage

## Do not use when

- all assets are static and versioned with the application
- temporary files can remain ephemeral

## Primary

Supabase Storage.

## Security rules

- private buckets are private by default
- authorization must be enforced at the storage boundary
- validate file type and size before accepting uploads
- never trust client-supplied MIME type alone
- use signed URLs for private downloads when appropriate

## Removal

Delete application references first, then storage policies/buckets only after retention requirements are satisfied.
