# Omar Sherif — Portfolio

Personal developer portfolio built with React, TypeScript, Tailwind CSS v4, and Framer Motion.

## Stack

- [Vite](https://vite.dev) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) (CSS-first config via `@theme` in `src/index.css`)
- [Framer Motion](https://motion.dev) for scroll reveals and micro-interactions
- [Lucide React](https://lucide.dev) for icons

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check and build for production
npm run lint     # run oxlint
```

## Editing content

All personal content lives in `src/data/` as plain typed objects — no need to touch components to update text:

- `social.ts` — name, role, contact links
- `skills.ts` — skill groups
- `projects.ts` — project cards (tech stack, features, links)
- `achievements.ts` — awards / competition results
- `education.ts` — degree info
- `training.ts` — courses / programs
- `nav.ts` — navigation items (drives both the navbar and the active-section indicator)

Sections live in `src/sections/`, shared UI primitives in `src/components/ui/`, and layout chrome (navbar/footer) in `src/components/layout/`.
