# Monitoring Verification

- A controlled test error reaches the expected environment when live credentials are configured.
- Sensitive data is not attached; verify the configured `dataCollection` policy rather than relying on defaults.
- Browser and server capture behave as intended for the selected DSNs.
- Source-map/release mapping works when build credentials are configured.
- Building and running without a DSN does not break the application.
- Provider outage or blocked requests do not break the app.
