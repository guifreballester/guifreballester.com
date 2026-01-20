# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev      # Start dev server with Turbopack
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture Overview

This is a portfolio website built with **Next.js 15** (App Router), **React 19**, **TypeScript**, and **Tailwind CSS 4**.

### Content System

Case studies are stored as MDX files in `/content/project/` with YAML frontmatter:
- Parsed with `gray-matter` for frontmatter extraction
- Rendered server-side with `next-mdx-remote`
- Static generation via `generateStaticParams()` in `/app/project/[slug]/page.tsx`

### Key Directories

- `/app` - Next.js App Router pages and layouts
- `/components/layout` - Header, Footer, ThemeProvider
- `/components/ui` - Reusable UI components (cards, badges, buttons)
- `/components/mdx` - Custom MDX component overrides
- `/lib/mdx.ts` - Content loading functions (`getCaseStudyBySlug`, `getAllCaseStudies`)
- `/lib/utils.ts` - Utilities (`cn` classname helper, `readingTime`, `formatDate`)
- `/types/index.ts` - TypeScript interfaces
- `/content/project` - MDX case study files

### Component Patterns

- Server components by default
- `"use client"` directive only on interactive components (Header, ThemeToggle, HomePage filters)
- Path alias: `@/*` maps to project root

### Theme System

- Dark/light mode via `next-themes` using `data-theme` attribute
- CSS variables defined in `/app/globals.css` for colors
- Theme toggle in header, persists across sessions
