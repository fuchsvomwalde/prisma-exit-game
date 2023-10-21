import { NextResponse } from "next/server";
import { sendMessage } from "./actions";

export const runtime = "edge";

export async function POST(request: Request) {
  const response = await sendMessage();
  return NextResponse.json({ response });
}
