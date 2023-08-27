"use server";

import { prisma_classic } from "./model";

export async function getGame() {
  return prisma_classic;
}

export async function getLinkBySlug(link_slug: string) {
  return prisma_classic.links.find((link) => link.slug === link_slug);
}

export async function getFirstLevel() {
  return prisma_classic.levels.find((level) => level.firstLevel);
}

export async function getLevelBySlug(level_slug: string) {
  return prisma_classic.levels.find((level) => level.slug === level_slug);
}

export async function getLevelByNextSlug(next_level_slug: string) {
  return prisma_classic.levels.find(
    (level) => level.next_slug === next_level_slug
  );
}
