# Assignment 6 - Architecture Speaking Notes (V2)

This is version 2 of my Assignment 5 project, where I focused on evaluation and improvement rather than building a new system.

The architecture is retrieval-first.

The app processes PDFs into chunks, stores them, retrieves relevant chunks for a question, and generates a grounded answer using those chunks.

I chose retrieval-first because it scales better than sending all PDF text directly into a single prompt.

The main alternative was prompt-first, but I did not choose it due to context limits, cost, and debugging difficulty.

Retrieval-first improves efficiency, reduces token usage, and makes the system easier to debug because I can inspect the retrieved chunks.

One important capability I did not implement is tool calling. I would add it in the future if the system needed structured operations or multi-step workflows.