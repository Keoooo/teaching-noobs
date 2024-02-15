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
  const coin = body.coinId;

  const assistant_id = "lol";
  try {
    // Fetch coin data from CoinGecko
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coin}&order=market_cap_desc&per_page=1&page=1`;
    const response = await fetch(url);
    const data = await response.json();
    const coinStats = data[0];
    const stats = `Price: $${coinStats.current_price}, Market Cap: $${coinStats.market_cap}, 24h Volume: $${coinStats.total_volume}`;

    const threadResponse = await openai.beta.threads.create();
    const thread = threadResponse;
    await openai.beta.threads.messages.create(thread.id, {
      role: "user",
      content: `Hello, I am looking for information about the coin and whats is shitcoin rating out of 100 .${coin} here are some stats about the coin ${stats}`,
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
