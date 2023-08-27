import { getLevelByNextSlug, getLevelBySlug } from "@/app/api/game/actions";
import { COOKIE_KEY, NO_LEVEL } from "@/app/api/game/constants";
import { NextResponse } from "next/server";

export const SUBMISSION_KEY = "passcode";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { searchParams } = new URL(request.url);
  const submissionValue = searchParams.get(SUBMISSION_KEY);

  const currentLevel = await getLevelBySlug(params.slug);

  if (`${submissionValue}`?.trim()?.toLowerCase() === currentLevel?.solution) {
    const response = NextResponse.redirect(
      new URL(`/level/${params.slug}/result`, request.url)
    );

    // here we write a http-only cookie :D`
    response.cookies.set(COOKIE_KEY, params.slug, {
      httpOnly: true,
      sameSite: "lax",
    });

    return response;
  }

  const response = NextResponse.redirect(
    new URL(`/level/${params.slug}/result`, request.url)
  );
  const previousLevel = await getLevelByNextSlug(params.slug);

  // here we write a http-only cookie :D
  response.cookies.set(
    COOKIE_KEY,
    previousLevel ? previousLevel?.slug : NO_LEVEL,
    {
      httpOnly: true,
      sameSite: "lax",
    }
  );

  return response;
}
