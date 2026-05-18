# Lian Kang · Personal Portfolio

A fast, minimal personal portfolio built with **Next.js 16**, **TypeScript**, and **Tailwind CSS v4**.

## Tech Stack

- **Framework** — Next.js 16 (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS v4 with custom design tokens
- **Fonts** — Syne (display) + JetBrains Mono (code/labels) via `next/font`
- **Animations** — CSS transitions + canvas-based dot grid in Hero

## Features

- Animated hero section with canvas dot grid background
- Project gallery with category filters (All / Full Stack / Frontend / API)
- Animated skill bars with intersection observer (triggers on scroll into view)
- Interactive experience timeline — click a role to expand details
- Contact section with direct email and social links
- Responsive navbar with active section highlight and smooth scroll
- Custom scrollbar, selection colour, and scroll-fade animations
- Fully responsive from mobile to ultrawide (up to `max-w-[1800px]`)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout, font setup, metadata
│   ├── page.tsx         # Page composition
│   └── globals.css      # Base styles, scrollbar, animations
├── components/
│   ├── Navbar.tsx       # Fixed nav with scroll-aware active state
│   ├── Hero.tsx         # Canvas animation, stats cards, CTA
│   ├── Projects.tsx     # Filterable project grid
│   ├── Skills.tsx       # Tabbed skill bars with scroll reveal
│   ├── Experience.tsx   # Interactive timeline
│   ├── Contact.tsx      # Email CTA + social links
│   └── Footer.tsx       # Copyright + status indicator
└── lib/
    └── data.ts          # All content — edit this to personalise
```

## Personalising

All content lives in **`src/lib/data.ts`**. Update the following exports:

| Export | What it controls |
|---|---|
| `personal` | Name, role, tagline, location, email, social links |
| `stats` | The three stat cards in the hero |
| `techStack` | Pill badges shown in the hero |
| `skills` | Skill bars per category |
| `projects` | Project cards (name, desc, tags, links, stars) |
| `experience` | Timeline entries with highlights and skills |
| `howIWork` | The "How I work" sidebar in Skills |
| `currentlyLearning` | Tags in the Skills sidebar |

To add a profile photo, replace the placeholder `<div>` in `Hero.tsx` with a `next/image` pointing to `/public/profile.jpg`.

## Deployment

Deploy instantly on [Vercel](https://vercel.com):

```bash
npx vercel
```

Or build for any Node host:

```bash
npm run build
npm start
```

## License

MIT — feel free to use this as a base for your own portfolio.
