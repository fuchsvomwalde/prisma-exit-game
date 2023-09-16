import { getAllGames, getLinkBySlug } from "@/app/api/_lib/actions";
import {
  FORM_DATA_LINK_ACCESS_DENIED,
  FORM_DATA_LINK_PASSWORD,
} from "@/app/api/_lib/constants";
import { Game } from "@/app/api/_lib/model";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { gameSlug: string; linkSlug: string } }
) {
  const { searchParams } = new URL(request.url);
  const password = searchParams.get(FORM_DATA_LINK_PASSWORD);

  const goToLink = await getLinkBySlug(params.gameSlug, params.linkSlug);

  try {
    const isPasswordProtected = Boolean(goToLink?.password);
    const isPasswordSubmitted = Boolean(password);
    const isPasswordMatch =
      `${password}`?.trim()?.toLowerCase() === goToLink?.password;

    if (isPasswordProtected && !isPasswordMatch) {
      return NextResponse.redirect(
        new URL(
          isPasswordSubmitted
            ? `/${params.gameSlug}/go/${params.linkSlug}/password?${FORM_DATA_LINK_ACCESS_DENIED}=wrong-password`
            : `/${params.gameSlug}/go/${params.linkSlug}/password`,
          request.url
        )
      );
    }

    return NextResponse.redirect(
      goToLink?.href?.startsWith("/")
        ? new URL(goToLink?.href, request.url)
        : new URL(goToLink?.href ?? "")
    );
  } catch {
    // TODO: add fancier 404
    return new Response("Resource not found!", {
      status: 404,
    });
  }
}

export async function generateStaticParams() {
  const games: Array<Game> = await getAllGames();

  return games
    .map((game) =>
      game.links.map((link) => ({
        gameSlug: game.slug,
        linkSlug: link.slug,
      }))
    )
    .flat();
}

/**
 * important: we have to set the runtime paramter in order to get the route work in production
 */
export const dynamicParams = false;
export const runtime = "edge";
