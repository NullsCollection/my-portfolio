# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Location

All source code lives under `my-portfolio/`. Run all commands from that directory.

## Commands

```bash
# Development (uses Turbopack)
npm run dev

# Production build
npm run build

# Lint
npm run lint

# Type check (no emit)
npm run type-check
```

There is no test suite configured.

## Architecture

### Pages & Routing

This is a **Next.js 15 App Router** project with two routes:

- `/` — `src/app/page.tsx`: Single-page portfolio. Renders all sections in order: `NavBar → Hero → Services → Projects → AboutMe → FAQ → Contact → Footer`.
- `/projects` — `src/app/projects/page.tsx`: Full-screen Pinterest-style gallery of all project images using `GALLERY_IMAGES` from `src/data/gallery.ts`.

All page sections are imported from `@/features` (barrel export at `src/features/index.ts` → `src/features/sections/index.ts`). Each section lives in `src/features/sections/<name>/`.

### Data Layer

All content is statically defined in `src/data/`:
- `projects.ts` — `PROJECTS` array with `ProjectData` interface. This is the source of truth for the projects grid.
- `gallery.ts` — `GALLERY_IMAGES` for the `/projects` full gallery page.
- `skills.ts`, `achievements.ts`, `services.ts`, `faqs.ts`, `contact.ts` — section-specific data.

`src/data/index.ts` re-exports everything.

### Project Image System

When a project modal opens, images are resolved via `src/utils/projectImageLoader.ts`:
1. If the `ProjectData` entry has an `images[]` array, use those.
2. Otherwise, look up `PROJECT_FOLDER_MAP[id]` to get the folder name, then return paths from `PROJECT_IMAGES[folder]`.
3. Fallback to `imageUrl` or a placeholder.

**To add images for a new project:** update both `PROJECT_FOLDER_MAP` and `PROJECT_IMAGES` in `projectImageLoader.ts`, add physical files to `public/assets/Projects/<FolderName>/`, and add the `ProjectData` entry in `src/data/projects.ts`.

### Animation System

`src/hooks/ScrollAnimation/useScrollAnimation.ts` is the unified animation hook. It returns four Framer Motion `Variants` objects (`sectionVariants`, `titleVariants`, `descriptionVariants`, `cardVariants`) plus `viewportOptions`.

Usage pattern across all sections:
```tsx
const { sectionVariants, titleVariants, cardVariants, viewportOptions } = useScrollAnimation({ animationType: 'fade', threshold: 0.2 });

<motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={viewportOptions}>
  <motion.h2 variants={titleVariants}>...</motion.h2>
</motion.section>
```

`useScrollReveal` and `useExitAnimation` are convenience wrappers around the same hook (backward-compatible aliases).

### Configuration

`src/config/` contains static config — not runtime data:
- `site.ts` — `siteConfig` (name, URLs, SEO metadata) and `structuredData` (JSON-LD schema).
- `design-tokens.ts` — color, spacing, breakpoint, and animation constants (teal primary `#01c2b2`, dark bg `#131626`).
- `navigation.ts` — nav link definitions.
- `social.ts` — social media links.

### Styling

Tailwind CSS v4 with custom CSS variables. Styles are split across `src/styles/`:
- `globals.css` — imports Tailwind, Google Fonts (Poppins), and all partials.
- `variables.css` — CSS custom properties for the design system.
- `themes/dark.css` / `themes/light.css` — theme-specific overrides.
- `animations.css` — CSS animation keyframes (supplements Framer Motion).

Color tokens used in Tailwind classes: `bg-dark`, `text-light`, `text-secondary`, `text-primary`, `bg-light-bg-color`, `bg-dark-bg-color`.

### Path Aliases

```
@/*          → src/*
@/config/*   → src/config/*
@/data/*     → src/data/*
@/features/* → src/features/*
@/styles/*   → src/styles/*
```

### Contact Form API

`src/pages/api/contact.ts` — a Next.js API route (Pages Router style, coexisting with App Router) that proxies form submissions to Formspree. Requires `NEXT_PUBLIC_FORMSPREE_ENDPOINT` environment variable.

### Project Modal

`src/components/Modal/ProjectModal/FullScreenModal.tsx` — full-screen modal with a scrollable image gallery on the left and project details panel on the right. Supports keyboard navigation (←/→ to switch projects, Esc to close). All hooks must be declared before the early `return null` guard — maintain this pattern to avoid React rules-of-hooks violations.
