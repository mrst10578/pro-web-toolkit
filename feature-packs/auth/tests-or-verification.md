# Auth Verification

- Anonymous users cannot access a protected route.
- Missing provider configuration fails closed rather than exposing protected content.
- A valid user can sign in and reach the intended protected route.
- Sign-out invalidates the session.
- Email-confirmation handling fails safely for invalid or expired tokens when confirmation is used.
- Server-side data access rejects an unauthorized user even if client UI is bypassed.
- Invalid/expired sessions fail safely.
- Secrets and service-role credentials are not present in browser-exposed configuration.
