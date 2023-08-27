import { NextResponse } from "next/server";
import { COOKIE_KEY, NO_LEVEL } from "../constants";

export async function GET(request: Request) {
  const response = NextResponse.redirect(new URL("/", request.url));

  // here we write a http-only cookie :D
  response.cookies.set(COOKIE_KEY, NO_LEVEL, {
    httpOnly: true,
    sameSite: "lax",
  });

  return response;
}
