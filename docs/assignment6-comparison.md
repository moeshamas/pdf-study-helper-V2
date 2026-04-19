# Assignment 6 — Baseline vs Retrieval System Comparison

## 1. Overview

This section compares two approaches:

- **Baseline Model**: Uses only an LLM (no document retrieval)
- **Enhanced System**: Uses retrieval from processed PDFs + LLM

---

## 2. Test Results Comparison

| Question | Baseline | Retrieval System | Observation |
|----------|---------|------------------|------------|
| What does EC2 do? | Generic answer | Detailed + grounded | Retrieval improves specificity |
| What is an AMI? | Generic | Precise + sources | Retrieval improves accuracy |
| How to launch EC2? | Vague | Step-by-step | Retrieval improves completeness |
| Security groups purpose | Generic | Contextual | Retrieval adds reliability |
| EC2 vs AMI | Partial | Correct | Retrieval improves correctness |
| EC2 vs Azure | Hallucinated | Correctly refuses | Retrieval prevents hallucination |
| Graph summary | Cannot answer | Correctly refuses | Retrieval ensures safe behavior |

---

## 3. Key Differences

### Baseline Model Limitations
- No access to PDF content
- No sources or citations
- Produces generic responses
- Hallucinates when information is missing

### Retrieval System Advantages
- Uses actual PDF data
- Provides source evidence (chunks)
- Produces grounded answers
- Avoids hallucination by refusing unsupported queries

---

## 4. Important Failure Case

### Hallucination Example

**Question:**  
What are the disadvantages of EC2 compared with Azure?

- Baseline:
  → Provides fabricated comparison ❌  
- Retrieval System:
  → States information not found in context ✅  

This demonstrates improved reliability.

---

## 5. Trade-offs

| Factor | Baseline | Retrieval System |
|--------|---------|----------------|
| Speed | Faster | Slightly slower |
| Cost | Lower | Higher |
| Accuracy | Lower | Higher |
| Reliability | Low | High |
| Transparency | None | Strong |

---

## 6. Conclusion

The baseline model produces fluent but unreliable answers due to lack of grounding and susceptibility to hallucination.

The retrieval-augmented system significantly improves answer quality by incorporating relevant document context, providing sources, and safely handling missing information.

This results in a more accurate, reliable, and trustworthy question-answering system.