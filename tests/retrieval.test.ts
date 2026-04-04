import { describe, expect, it } from "vitest";
import { getTopChunks, scoreChunk } from "../lib/retrieval";
import type { Chunk } from "../lib/types";

const chunks: Chunk[] = [
  {
    id: "1",
    document: "bio.pdf",
    pageStart: null,
    pageEnd: null,
    chunkIndex: 0,
    text: "Photosynthesis converts light energy into chemical energy in plants.",
  },
  {
    id: "2",
    document: "history.pdf",
    pageStart: null,
    pageEnd: null,
    chunkIndex: 1,
    text: "The French Revolution started in 1789.",
  },
];

describe("retrieval", () => {
  it("scores a relevant chunk higher than an irrelevant chunk", () => {
    const relevantScore = scoreChunk("What is photosynthesis?", chunks[0]);
    const irrelevantScore = scoreChunk("What is photosynthesis?", chunks[1]);

    expect(relevantScore).toBeGreaterThan(irrelevantScore);
  });

  it("returns the most relevant chunk first", () => {
    const result = getTopChunks("What is photosynthesis?", chunks, 1);
    expect(result[0].document).toBe("bio.pdf");
  });
});