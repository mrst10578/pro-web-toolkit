# Auth Integration

1. Confirm the project actually needs accounts.
2. Create/configure the Supabase project for the client environment.
3. Add the public Supabase URL and current publishable key. Support the legacy anon-key variable only when the selected Supabase project still uses it.
4. Add server/client Supabase helpers using the starter's current framework conventions.
5. For current Next.js App Router projects, use the framework's current proxy/session-refresh convention instead of copying an older middleware example.
6. Validate authenticated identity on the server before protected data access. For current Supabase SSR flows, prefer the current claims/session verification guidance rather than trusting browser state.
7. Add only the required auth screens.
8. Add route protection and make missing/invalid provider configuration fail closed for protected routes.
9. Add authorization/ownership checks for protected data.
10. Add role tables only when roles are part of the product.
11. Run verification in `tests-or-verification.md`.

Do not add social providers, MFA, organizations, or RBAC unless the brief requires them.

## Pilot evidence

The `mrst10578/Test-SaaS` pilot successfully compiled and exercised the provider-unconfigured fail-closed path using Next.js 16 plus the Supabase SSR packages. Live Supabase sign-in and session behavior still requires project credentials and must be verified in the target project.
