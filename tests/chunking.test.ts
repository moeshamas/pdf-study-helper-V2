import { describe, expect, it } from "vitest";
import { splitIntoChunks } from "../lib/chunking";

describe("splitIntoChunks", () => {
  it("returns an empty array for empty text", () => {
    const result = splitIntoChunks("", { document: "test.pdf" });
    expect(result).toEqual([]);
  });

  it("creates multiple chunks for long text", () => {
    const text = "A".repeat(2500);

    const chunks = splitIntoChunks(text, {
      document: "test.pdf",
      chunkSize: 1000,
      overlap: 100,
    });

    expect(chunks.length).toBeGreaterThan(1);
    expect(chunks[0].document).toBe("test.pdf");
    expect(chunks[0].id).toContain("test.pdf-chunk-0");
  });
});