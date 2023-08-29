"use server";

import { prisma_classic } from "./model";

export async function getAllGames() {
  return [prisma_classic];
}

export async function getGame(game_slug: string) {
  if (game_slug === "classic") {
    return prisma_classic;
  }

  // TODO: support other games
  return prisma_classic;
}

export async function getLinkBySlug(game_slug: string, link_slug: string) {
  return prisma_classic.links.find((link) => link.slug === link_slug);
}

export async function getFirstLevel(game_slug: string) {
  return prisma_classic.levels.find((level) => level.firstLevel);
}

export async function getLevelBySlug(game_slug: string, level_slug: string) {
  return prisma_classic.levels.find((level) => level.slug === level_slug);
}

export async function getLevelByNextSlug(
  game_slug: string,
  next_level_slug: string
) {
  return prisma_classic.levels.find(
    (level) => level.next_slug === next_level_slug
  );
}
