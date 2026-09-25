# Choosing a Starter

Use the smallest starter that matches the client's product shape.

| Client need | Start with | Typical packs |
| --- | --- | --- |
| General website / web app | starter-web | auth, database, email |
| Content-heavy site / publication | starter-content | cms, search, analytics |
| SaaS / portal / admin dashboard | starter-saas-dashboard | auth, database, payments, analytics |
| AI chat / AI tool / RAG | starter-ai | auth, database, storage, rag |
| Editor-managed marketing/content site | starter-cms | cms, forms, search |
| LMS / quiz / exam / question bank | starter-learning | auth, database, storage, analytics |
| Repeated commerce work | starter-commerce | auth, database, payments, email |

## Fast decision tree

1. Is the primary value reading content?
   - Yes -> content.
2. Is the primary value an interactive logged-in product?
   - Yes -> web or saas-dashboard.
3. Is AI the core product behavior?
   - Yes -> ai.
4. Is education/testing the core domain?
   - Yes -> learning.
5. Does the client mainly need to manage content through an editor?
   - Yes -> cms.
6. Is commerce the core product and recurring enough to justify its own starter?
   - Yes -> commerce.
7. Otherwise -> web.

After starter selection, add only the feature packs required by the brief.
