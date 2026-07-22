# Aamna Majid — Portfolio

A developer-console themed portfolio built with Next.js 14 (App Router),
TypeScript, and Tailwind CSS. All content is pulled from a single data file,
so updating your info doesn't require touching any component.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Edit your content

Everything — name, summary, stats, skills, experience, projects, contact
info — lives in **`src/data/content.ts`**. Edit that file and the whole site
updates. A few things worth doing before you share this publicly:

- Add your **GitHub URL** in `profile.github` (left blank for now).
- Add `liveUrl` / `repoUrl` to entries in the `projects` array once you have
  public links to point to (they're optional — cards without them just skip
  the icon row).
- Swap in real project names/screenshots if you build out personal projects
  alongside your work experience — right now the project cards are drawn
  directly from your resume's experience bullets.

## Deploy to Vercel

1. Push this project to a GitHub repo.
2. Go to https://vercel.com/new and import the repo.
3. Framework preset: **Next.js** (auto-detected). No environment variables
   are required.
4. Click **Deploy**.

Or, from the CLI:

```bash
npm install -g vercel
vercel
```

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- lucide-react (icons)
- Fonts: Inter (body) + JetBrains Mono (display/mono), loaded via
  `next/font/google`
