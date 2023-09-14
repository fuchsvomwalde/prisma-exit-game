import "server-only";

export interface Level {
  firstLevel?: boolean;
  finalLevel?: boolean;
  slug: string;
  title: string;
  message: string;
  success_message: string;
  failure_message: string;
  solution_prompt: string;
  solution: string;
  next_slug?: string;
}

export interface Link {
  slug: string;
  href: string;
}

export interface Game {
  slug: string;
  name: string;
  description: string;
  levels: Array<Level>;
  links: Array<Link>;
}

export const games: Array<Game> = [
  {
    slug: "cl4551c",
    name: "Classic",
    description: "First exit game from prisma games.",
    links: [
      {
        slug: "8170",
        href: "/",
      },
      {
        slug: "r00m",
        href: "/",
      },
      {
        slug: "h1d3",
        href: "/",
      },
      {
        slug: "57g0",
        href: "/",
      },
      {
        slug: "rvr5",
        href: "/",
      },
      {
        slug: "c0d3",
        href: "/",
      },
      // {
      //   slug: "sfg3",
      //   href: "/oh-hi-mark.mp4",
      // },
      // {
      //   slug: "kd49",
      //   href: "https://letmegooglethat.com/?q=number+to+binary",
      // },
      // {
      //   slug: "0gt5",
      //   href: "/secret.png",
      // },
      // {
      //   slug: "3hbh",
      //   href: "https://towardsdatascience.com/steganography-hiding-an-image-inside-another-77ca66b2acb1",
      // },
      // {
      //   slug: "05bw",
      //   href: "https://stegonline.georgeom.net/embed",
      // },
      // {
      //   slug: "pp2m",
      //   // TODO: create reverse mp3
      //   href: "/r3v3r53.m4a",
      // },
      // {
      //   slug: "7357",
      //   href: "/cl4551c/level/w4rmup",
      // },
    ],
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
        success_message: "Well done!",
        failure_message: "Meeh... ¯\\_(ツ)_/¯",
        solution_prompt: "Enter solution word",
        solution: "101011001",
        next_slug: "r00m",
      },
      {
        slug: "r00m",
        title: "Level 3",
        message: "Next game, next challenge.",
        success_message: "Well done!",
        failure_message: "Nope... (ﾉ◕ヮ◕)ﾉ*:・ﾟ✧",
        solution_prompt: "Add up your numbers and enter the sum",
        solution: "23", // TODO: check real number
        next_slug: "chemistry",
      },
      {
        slug: "chemistry",
        title: "Level 4",
        message: "Next game, next challenge.",
        success_message: "Well done!",
        failure_message: "Wrong, ha, ha, ha...",
        solution_prompt: "Enter solution word",
        solution: "heisenberg",
        next_slug: "noctual-animal",
      },
      {
        slug: "noctual-animal",
        title: "Level 5",
        message: "Next game, next challenge.",
        success_message: "Well done!",
        failure_message: "Nope.",
        solution_prompt: "Enter solution word",
        solution: "847m4n",
        next_slug: "pr1sm4",
      },
      {
        finalLevel: true,
        slug: "pr15m4",
        title: "Level X",
        message: "Welcome to the last challenge.",
        success_message: "Congratulation, you won!",
        failure_message: "Try again!",
        solution_prompt: "Enter solution word",
        solution: "3301",
      },
    ],
  },
];
