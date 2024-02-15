// app/api/assistant.ts
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "lol",
});

export const config = {
  runtime: "experimental-edge",
};

export async function POST(req: NextRequest) {
  // Parse the JSON body from the request
  const body = await req.json();
  const question = body.question;

  const assistant_id = "lol";
  try {
    const threadResponse = await openai.beta.threads.create();
    const thread = threadResponse;
    await openai.beta.threads.messages.create(thread.id, {
      role: "user",
      content: question,
    });
    // Step 4: Run the Assistant
    await openai.beta.threads.runs.create(thread.id, {
      assistant_id: assistant_id,
    });
    // Retrieve the messages for response (simplified)
    const messagesResponse = await openai.beta.threads.messages.list(thread.id);
    const messages = messagesResponse.data;

    // Respond with the Assistant's messages
    return NextResponse.json(messages);
  } catch (error) {
    console.error("Error handling assistant request:", error);
    return NextResponse.json(
      { error: "Error processing your request" },
      { status: 500 }
    );
  }
}
