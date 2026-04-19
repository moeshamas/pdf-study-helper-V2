import { NextResponse } from "next/server";

const HF_API_KEY = process.env.HUGGINGFACE_API_KEY;
const MODEL = "mistralai/Mistral-7B-Instruct-v0.2";

export async function POST(req: Request) {
  try {
    const { question } = await req.json();

    const response = await fetch(
      "https://router.huggingface.co/hf-inference/models/" + MODEL,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${HF_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: `Answer the following question:\n${question}`,
        }),
      }
    );

    const data = await response.json();

    const answer =
      data?.[0]?.generated_text ||
      "No response from baseline model.";

    return NextResponse.json({
      answer,
      sources: []
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Baseline API error" },
      { status: 500 }
    );
  }
}