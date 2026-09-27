# Auth Integration

1. Confirm the project actually needs accounts.
2. Create/configure the Supabase project for the client environment.
3. Add the public Supabase URL and current publishable key. Accept the legacy anon key only for projects that still use it.
4. For Next.js, use `@supabase/ssr` and separate browser/server client helpers.
5. On Next.js 16+, use `proxy.ts` for session refresh and route gating instead of the older middleware filename.
6. Validate the user server-side for protected routes. Do not treat client UI state as authorization.
7. Add only the required auth screens and confirmation flow.
8. Add authorization/ownership checks for protected data.
9. Add role tables only when roles are part of the product.
10. Run verification in `tests-or-verification.md`.

Do not add social providers, MFA, organizations, or RBAC unless the brief requires them.

## Compatibility note

The first `starter-saas-dashboard + auth` pilot compiled successfully with Next.js 16.3.6, `@supabase/ssr` 0.12.7, and `@supabase/supabase-js` 2.117.2. Live Supabase behavior still requires project credentials and the provider-side checklist.
