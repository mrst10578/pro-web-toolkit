# Client-to-Stack Decision Tree

Use this during intake.

## 1. Product shape

Ask:
- Is it mainly content, a tool, a dashboard, a store, education, or AI?
- Does it require login?
- Does it store user data?
- Does the client need an admin/editor?
- Does it take payments?
- Does it upload files?
- Does search matter?
- Does it need realtime behavior?
- Is SEO business-critical?

## 2. Pick one starter

Pick exactly one primary starter. Do not combine two app starters unless the architecture truly requires separate applications.

## 3. Add packs

Examples:

```text
Appointment booking
starter-web
+ auth
+ database
+ email
+ payments (optional)

Question bank
starter-learning
+ auth
+ database
+ storage
+ analytics

Chat with PDF
starter-ai
+ auth
+ database
+ storage
+ rag
+ pdf

News / magazine
starter-content
+ cms
+ search
+ analytics
```

## 4. Production gate

Before delivery, explicitly check:
- accessibility
- responsive behavior
- error/empty/loading states
- security and permissions
- SEO where relevant
- tests
- monitoring
- backups where relevant
- deployment
