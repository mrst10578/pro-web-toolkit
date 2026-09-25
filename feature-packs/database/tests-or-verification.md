# Database Verification

- Schema/migrations apply from a clean state.
- The main create/read/update path works.
- Invalid writes fail predictably.
- Authorization rules reject unauthorized reads/writes.
- Required relations preserve integrity.
- A restore or recovery path is documented for production data.
