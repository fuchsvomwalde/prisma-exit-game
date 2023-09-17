import { getLevelByNextSlug, getLevelBySlug } from "@/app/api/_lib/actions";
import {
  FORM_DATA_LEVEL_SUBMIT_PASSCODE,
  NO_LEVEL,
} from "@/app/api/_lib/constants";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: { gameSlug: string; levelSlug: string };
  }
) {
  const { searchParams } = new URL(request.url);
  const passcode = searchParams.get(FORM_DATA_LEVEL_SUBMIT_PASSCODE);

  const currentLevel = await getLevelBySlug(params.gameSlug, params.levelSlug);

  if (`${passcode}`?.trim()?.toLowerCase() === currentLevel?.solution) {
    const response = NextResponse.redirect(
      new URL(
        `/${params.gameSlug}/level/${params.levelSlug}/result`,
        request.url
      )
    );

    // here we write a http-only cookie :D`
    response.cookies.set(params.gameSlug, params.levelSlug, {
      httpOnly: true,
      sameSite: "lax",
    });

    return response;
  }

  const response = NextResponse.redirect(
    new URL(`/${params.gameSlug}/level/${params.levelSlug}/result`, request.url)
  );
  const previousLevel = await getLevelByNextSlug(
    params.gameSlug,
    params.levelSlug
  );

  // here we write a http-only cookie :D
  response.cookies.set(
    params.gameSlug,
    previousLevel ? previousLevel?.slug : NO_LEVEL,
    {
      httpOnly: true,
      sameSite: "lax",
    }
  );

  return response;
}

export const dynamicParams = false;
