import { getAllGames, getLinkBySlug } from "@/app/api/game/actions";
import { Game } from "@/app/api/game/model";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { gameSlug: string; linkSlug: string } }
) {
  const currentLink = await getLinkBySlug(params.gameSlug, params.linkSlug);

  try {
    return NextResponse.redirect(
      currentLink?.href?.startsWith("/")
        ? new URL(currentLink?.href, request.url)
        : new URL(currentLink?.href ?? "")
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

export const dynamicParams = false;
