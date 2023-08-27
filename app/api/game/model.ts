export interface Level {
  firstLevel?: boolean;
  slug: string;
  title: string;
  message: string;
  success_message: string;
  failure_message: string;
  solution_prompt: string;
  solution: string;
  next_slug?: string;
}

export interface Game {
  levels: Array<Level>;
}

export const prisma_classic = {
  levels: [
    {
      firstLevel: true,
      slug: "w4rmup",
      title: "Level 1",
      message: `Welcome to Prisma. This is an exit game based on a true story. If you want to know all the secrets about the background, you have to pass all the levels and enter the final solution word. 

      Prisma is a secret organization and we are looking for the most talented teams to join our organization. You have been chosen to face the tests. Ready for the challenge?`,
      success_message: "Well done.",
      failure_message: "You failed.",
      solution_prompt: "Enter solution word",
      solution: "hello world",
      next_slug: "101",
    },
    {
      slug: "101",
      title: "Level 2",
      message: "Next game, next challenge.",
      success_message: "YES!",
      failure_message: "Meeh...",
      solution_prompt: "Enter solution word",
      solution: "101011001",
    },
  ],
} as Game;
