# Assignment 6 - Baseline Design

## Baseline type
Lightweight no-retrieval / prompt-only baseline

## Baseline idea
The baseline will answer the same user questions without using retrieved chunks from `chunks.json`.

Instead, it will use either:
- a much weaker direct prompt with little or no retrieved context
or
- a simplified answer flow that does not depend on the retrieval step

## Why this is a good baseline
The goal is to show that the final retrieval-first design was not arbitrary.

If the retrieval-first version performs better than a no-retrieval version on representative questions, that supports the architecture choice.

## What will be compared
- answer quality
- task success
- grounding in document evidence

## Expected result
The retrieval-first system should outperform the no-retrieval baseline on questions that depend on document-specific context.