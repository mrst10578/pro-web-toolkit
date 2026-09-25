# AI Pack

## Purpose
Add model-backed generation, chat, structured output, and tool-calling without locking the app to one provider unnecessarily.

## Primary
Vercel AI SDK.

## Use when
- AI is a real product capability
- streaming, tool calling, or structured outputs are required

## Do not use when
- static content or deterministic rules solve the problem
- AI is only decorative

## Rules
- model calls stay server-side where secrets are involved
- validate tool inputs and structured outputs
- apply rate/cost controls when needed
- handle cancellation, timeout, provider failure, and empty output
- do not add RAG automatically; use the RAG pack when required
