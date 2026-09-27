# Monitoring Verification

- The installed SDK major version matches the integration code and documented import paths.
- A controlled test error reaches the expected environment when live credentials are configured.
- Sensitive request/user data is not attached unless the product explicitly requires and authorizes it.
- Source-map/release mapping works when configured.
- Missing DSN, blocked provider requests, or provider outage do not break the application.
- Build and typecheck succeed with monitoring configured but provider credentials absent.
