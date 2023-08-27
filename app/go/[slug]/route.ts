import { getGame, getLinkBySlug } from "@/app/api/game/actions";
import { Game } from "@/app/api/game/model";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const currentLink = await getLinkBySlug(params.slug);

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
  const game: Game = await getGame();

  return game.links.map((link) => ({
    slug: link.slug,
  }));
}
