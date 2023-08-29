import { NextResponse } from "next/server";
import { NO_LEVEL } from "../../api/game/constants";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: { gameSlug: string };
  }
) {
  const response = NextResponse.redirect(
    new URL(`/${params.gameSlug}`, request.url)
  );

  // here we write a http-only cookie :D
  response.cookies.set(params.gameSlug, NO_LEVEL, {
    httpOnly: true,
    sameSite: "lax",
  });

  return response;
}
