# Auth Verification

- Anonymous users cannot access a protected route.
- Missing or invalid provider configuration fails closed instead of exposing a protected route.
- A valid user can sign in and reach the intended protected route.
- Sign-out invalidates the session.
- Server-side data access rejects an unauthorized user even if client UI is bypassed.
- Invalid/expired sessions fail safely.
- Return/next URLs are constrained to safe internal paths.
- Secrets are not present in browser-exposed configuration.
