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

- [ ] add i18n multi language model
  - [ ] add language switch to global app bar
  - [ ] translate all languages
  - [ ] update html lang attribute on locale change
- [ ] get video streaming to work on iPhone/mobile (byte range support)
- [ ] check why mp4 can not be played in iOS
- [ ] protect access of future levels by checking cookie

### NICE TO HAVE

- [ ] add fancier 404 for go/ links
- [ ] send sms/mails with hints and infos depending on level and state
- [ ] add small database (supabase) to memorize game state
- [ ] customize 404 page
- [ ] add countdown (also via cookie possible)
- [ ] add top scores
