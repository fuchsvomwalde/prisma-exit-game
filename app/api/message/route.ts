import { NextResponse } from "next/server";
import { sendMessage } from "./actions";

export async function POST(request: Request) {
  const response = await sendMessage();
  return NextResponse.json({ response });
}

/**
 * important: we have to set the runtime paramter in order to get the route work in production
 */
export const runtime = "edge";
