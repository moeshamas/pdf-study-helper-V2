# Assignment 6 - Architecture Classification (V2)

## Project Continuity
This repository (pdf-study-helper-V2) is an improved version of the Assignment 5 project.

The core functionality remains the same:
- ingest PDFs
- extract and chunk content
- store processed chunks
- retrieve relevant chunks
- generate grounded answers

This version focuses on evaluation, failure analysis, and improvement based on evidence.

---

## Architecture Category
Retrieval-first / RAG-style

---

## What the app does
PDF Study Helper processes a small set of PDFs into structured chunks and allows users to ask questions about the content.

The system retrieves the most relevant chunks and generates a grounded answer with visible supporting sources.

---

## Supported tasks
- Ask questions about PDF content
- Get concise answers
- See supporting evidence (chunks)

---

## Out of scope
- authentication
- user uploads
- OCR-heavy PDFs
- web search
- large-scale vector DB
- multi-user system

---

## Why retrieval-first is correct
The system depends on:
- stored processed chunks (`chunks.json`)
- retrieval of relevant chunks
- passing retrieved context into the model

The answer is grounded in retrieved data, so retrieval is the core mechanism.

---

## Main alternative considered
Prompt-first / long-context

---

## Why I did NOT choose prompt-first
A prompt-first approach would:
- send large amounts of raw PDF text directly to the model
- increase token usage
- hit context-window limits
- make scaling harder

Retrieval-first is more efficient and scalable.

---

## Tradeoffs

### Data size / number of files
Retrieval-first scales better as documents increase.

---

### Context-window limits
Only relevant chunks are sent → avoids overflow.

---

### Storage / retrieval
Requires maintaining processed data (`chunks.json`).

---

### Determinism
Retrieval is deterministic (scoring-based), model output is not.

---

### Cost
Lower cost due to fewer tokens per request.

---

### Operational overhead
Higher than prompt-only because of ETL pipeline.

---

### Performance
Faster when dataset grows, since only relevant chunks are used.

---

### Debugging
Easier because:
- can inspect retrieved chunks
- can isolate errors (retrieval vs generation)

---

## Important capability NOT implemented
Tool-first / function-calling

---

## Would it improve the system?
Yes, for more complex workflows.

---

## What problem it would solve
- structured queries (e.g., metadata lookup)
- deterministic actions
- filtering / ranking logic outside the model

---

## What complexity it adds
- orchestration logic
- tool selection logic
- more testing
- harder debugging

---

## When I would adopt it
If the app evolves into:
- multi-step workflows
- structured document analysis
- decision-making systems

---

## Summary
This V2 system remains retrieval-first, but improves:
- evaluation rigor
- failure visibility
- system justification
- evidence-based improvement