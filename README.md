This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## TODO

### IMPORTANT

- [ ] get video streaming to work on iPhone/mobile (byte range support)
- [ ] add i18n multi language model
  - [x] add language switch to global app bar
  - [x] translate all languages
  - [x] update html lang attribute on locale change
  - [ ] AidAccordion and ClueCard are missing translations
  - [x] locale gets gesetted on navigation
- [ ] protect access of future levels by checking cookie

### NICE TO HAVE

- [ ] add fancier 404 for go/ links
- [ ] send sms/mails with hints and infos depending on level and state
- [ ] add small database (supabase) to memorize game state and to show top scores
- [ ] customize 404 page
- [ ] add countdown (also via cookie possible)

### FEEDBACK

- LEVEL 2
  - [ ] binary code could also be a clue for a song / melody
- LEVEL 3
  - [ ] shorten / replace video and move to local storage
- LEVEL 4
  - [ ] story is too confusing
- LEVEL 5
  - [ ] provide audio file in english, too
  - [ ] record audiop again as it is hard to understand
- LEVEL 6
  - [ ] each previous level should provide movement instructions that in combination will unlock the cryptex
  - [ ] make last riddle more clear: patterns have no meaning, arrow on prisma should be explained,
- COMMON
  - [ ] poems are confusing and should be replaced at all if they are not used as riddle
  - [ ] add input placeholder to give clue for final code word
  - [ ] after passed level, show back and next button only after 5s
  - [ ] add final password to helper texts as final solution
  - [ ] add info to instruction that game requires technical affinity and that game utilities are not intended to get destroyed
  - [ ] add clue to batternies that they are just a replacement for just in case
  - [ ] steps in helper texts need indicator like 1/3 helper texts to understand that more will follow

### NEXT STAGE

- [ ] add possibility to solve complete game online (w/o) offline case
- [ ] add donate button
- [ ] add paywall with account management
