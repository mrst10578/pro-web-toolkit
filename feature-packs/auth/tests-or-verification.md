# Auth Verification

- Anonymous users cannot access a protected route.
- A valid user can sign in and reach the intended protected route.
- Sign-out invalidates the session.
- Server-side data access rejects an unauthorized user even if client UI is bypassed.
- Invalid/expired sessions fail safely.
- Secrets are not present in browser-exposed configuration.
