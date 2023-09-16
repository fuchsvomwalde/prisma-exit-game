import { games } from "./model";
import "server-only";

export async function getAllGames() {
  return games;
}

export async function getGame(game_slug: string) {
  return games.find((game) => game.slug === game_slug);
}

export async function getLinkBySlug(game_slug: string, link_slug: string) {
  const game = await getGame(game_slug);

  return game?.links.find((link) => link.slug === link_slug);
}

export async function getFirstLevel(game_slug: string) {
  const game = await getGame(game_slug);

  return game?.levels.find((level) => level.firstLevel);
}

export async function getLevelBySlug(game_slug: string, level_slug: string) {
  const game = await getGame(game_slug);

  return game?.levels.find((level) => level.slug === level_slug);
}

export async function getLevelByNextSlug(
  game_slug: string,
  next_level_slug: string
) {
  const game = await getGame(game_slug);

  return game?.levels.find((level) => level.next_slug === next_level_slug);
}
