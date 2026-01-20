# Portfolio Website — Guifré Ballester

Build a modern, minimal portfolio and resume website using Next.js.

---

## Tech Stack

| Technology | Version/Details |
|------------|-----------------|
| Next.js | 15+ with App Router |
| TypeScript | Strict mode enabled |
| Tailwind CSS | v4 for styling |
| MDX | `next-mdx-remote` for case studies |
| Fonts | `next/font` with Inter + JetBrains Mono |
| Deployment | Vercel |

### Technical Considerations

- **View Transitions API**: Use `next-view-transitions` package with CSS fallback for unsupported browsers
- **Theme**: `next-themes` for dark/light mode with system preference detection
- **Images**: `next/image` with blur placeholders, WebP/AVIF formats
- **Analytics**: Vercel Analytics (optional, privacy-friendly)

---

## Design Direction

- Dark mode default with light mode toggle (persist preference)
- Monospace/technical aesthetic
- Subtle animations with `prefers-reduced-motion` respect
- Mobile-first responsive (breakpoints: 640px, 768px, 1024px, 1280px)
- WCAG 2.1 AA accessible
- Core Web Vitals targets: LCP < 2.5s, FID < 100ms, CLS < 0.1

---

## Site Structure

```
/                   → Home
/work               → Case Studies grid
/work/[slug]        → Individual case study (MDX)
/resume             → Timeline + downloadable PDF
/about              → Background & philosophy
/contact            → Contact info
/not-found          → Custom 404
```

---

## Pages

### 1. Home (/)

**Hero Section:**
- Name: "Guifré Ballester"
- Title: "Senior Technical Product Manager"
- Tagline: "Building API products and developer platforms. 6+ years shipping cloud infrastructure and 0-to-1 products."
- Location: Barcelona, Spain (with subtle icon)

**Quick Links:**
- View Work → /work
- Resume → /resume
- Contact → /contact

**Tech Badges:**
AWS, GCP, Kubernetes, Terraform, CI/CD, APIs, Python, ML/AI

**Social Links:**
- GitHub (if applicable)
- LinkedIn
- Email

---

### 2. Case Studies (/work)

**Grid Layout:**
- 2 columns on desktop, 1 on mobile
- Cards with hover lift effect and subtle border glow
- Filter by tag (optional enhancement)

**Each Case Study Page (/work/[slug]):**
1. Hero: Company name, role, duration, company logo placeholder
2. TL;DR: 2-3 sentence summary
3. Context & Problem
4. My Role & Approach
5. Key Decisions (with rationale)
6. Technical Details (expandable/collapsible)
7. Outcomes & Metrics (MetricCard grid)
8. Lessons Learned
9. Navigation: Previous/Next case study links

---

#### Case Study 1: SE Ranking API (Featured)

| Field | Value |
|-------|-------|
| Slug | `se-ranking-api` |
| Role | Senior Technical Product Manager - API |
| Duration | Apr 2025 - Present |
| Tags | API, AI/ML, 0-to-1 |

**Context:** SE Ranking needed to monetize its massive web crawling infrastructure and expand beyond SEO tools into AI-powered data products.

**Problem:** No existing API product, unclear market positioning, needed to establish product-market fit in competitive AI Search space.

**Approach & Decisions:**
- Launched enterprise API products from scratch with self-service trials and POC-to-paid conversion flow
- Built AI Search APIs targeting LLM/agent use cases
- Shipped MCP (Model Context Protocol) integration for AI agent compatibility
- Created n8n and Make.com integrations for no-code automation users
- Focused on minimal time-to-first-integration as key metric

**Outcomes:**
- 34% quarter-over-quarter business growth
- Expanded customer base from SEO tools to AI/automation segment
- Established new revenue stream from crawling infrastructure

**Technical Details:** API architecture, rate limiting, authentication flows, webhook design, integration patterns

---

#### Case Study 2: Eventbrite Developer Platform

| Field | Value |
|-------|-------|
| Slug | `eventbrite-platform` |
| Role | Senior Product Manager - Platform Engineering |
| Duration | Oct 2023 - Mar 2025 |
| Tags | Platform, DevEx, Cloud |

**Context:** Eventbrite's engineering teams faced slow infrastructure provisioning and deployment bottlenecks blocking feature velocity.

**Problem:** Repository creation took 2 weeks due to manual approvals and bottlenecks. DevOps could only handle ~1 deployment per week. Monorepo was slowing teams down.

**Approach & Decisions:**
- Led migration from monorepo to polyrepo architecture for team autonomy
- Built 0-to-1 developer automation platform for self-service infrastructure
- Partnered with engineering on AWS cloud modernization
- Deployed AI-powered documentation system to reduce support burden

**Outcomes:**
- Reduced repo creation from 2 weeks → 30 minutes
- Cut infrastructure provisioning from 1 week → minutes for 30+ services
- Reduced Largest Contentful Paint by 34%
- Accelerated backend-for-frontend creation by 70%
- AI docs system reduced internal support burden by 63%

**Technical Details:** CI/CD pipeline architecture, polyrepo governance, IaC templates, AI documentation RAG system

---

#### Case Study 3: Getir Platform Engineering

| Field | Value |
|-------|-------|
| Slug | `getir-backstage` |
| Role | Technical Product Manager |
| Duration | Oct 2022 - Oct 2023 |
| Tags | Platform, IDP, GitOps |

**Context:** Rapid-scaling delivery startup needed standardized infrastructure and developer experience across multiple teams.

**Problem:** Manual infrastructure requests, inconsistent security configurations, slow deployments, lack of visibility into services.

**Approach & Decisions:**
- Drove 0-to-1 implementation of Backstage IDP (Internal Developer Portal)
- Led GitOps migration initiative for declarative infrastructure
- Built self-service infrastructure automation on AWS/GCP
- Standardized security configurations across engineering teams

**Outcomes:**
- Reduced deployment time to 5 minutes (from hours)
- Improved deployment efficiency by 60%
- Reduced security configuration errors significantly
- Improved audit trails and infrastructure security posture

**Technical Details:** Backstage architecture, GitOps workflows (ArgoCD/Flux), Terraform modules, service catalog design

---

#### Case Study 4: Twilio Video & Twilio Live

| Field | Value |
|-------|-------|
| Slug | `twilio-video` |
| Role | Product Manager - Video |
| Duration | Oct 2021 - Sep 2022 |
| Tags | API, Video, 0-to-1 |

**Context:** Twilio needed to expand its video product capabilities and launch new real-time streaming products for enterprise customers.

**Problem:** Building 0-to-1 video features in competitive market, needed to drive adoption and prove commercial viability.

**Approach & Decisions:**
- Built zero-to-one video features from concept to launch through direct customer validation
- Supported go-to-market for enterprise segment
- Created technical sales materials and training programs

**Outcomes:**
- Drove MRR to $200K
- Acquired 100+ monthly active customers
- 35% revenue increase from key enterprise accounts in 6 months

**Technical Details:** WebRTC architecture, video streaming infrastructure, SDK design, API documentation

---

### 3. Resume (/resume)

**Layout:** Vertical timeline with alternating cards (left/right on desktop)

**Work Experience:**
| Role | Company | Duration |
|------|---------|----------|
| Senior Technical Product Manager - API | SE Ranking | Apr 2025 - Present |
| Senior Product Manager - Platform Engineering | Eventbrite | Oct 2023 - Mar 2025 |
| Technical Product Manager | Getir | Oct 2022 - Oct 2023 |
| Product Manager - Video | Twilio | Oct 2021 - Sep 2022 |
| Product Manager | Stayforlong | Jan 2020 - Oct 2021 |
| Product Owner | PayFit | Jan 2019 - Jan 2020 |
| Co-founder | Skuld | Aug 2018 - Nov 2019 |

**Education:**
- M.Sc. Data Science — Universitat Politècnica de Catalunya (2017-2021)
- B.Sc. Electrical Engineering — Universitat Politècnica de Catalunya (2011-2016)

**Skills:**
| Category | Skills |
|----------|--------|
| Cloud & Infrastructure | AWS, GCP, Azure, CI/CD, GitOps, Kubernetes, Terraform, IaC |
| Developer Experience | Backstage IDP, API design, Developer portals, Observability, Microservices |
| AI/ML & Automation | Machine Learning, LLM/Agent automation, Data Analytics, ETL |
| Product & Commercial | 0-to-1 launches, PMF, Customer validation, ARR/NDR, Go-to-Market |

**Languages:** English (Proficient), Spanish (Native), Catalan (Native)

**Interests:** AI/ML applications, DevOps tooling, Endurance sports (Ironman finisher, sub-11hr)

**Features:**
- Download PDF button (pre-generated static PDF in `/public`)
- Print button with print-optimized CSS (`@media print`)

---

### 4. About (/about)

- Professional photo placeholder (aspect ratio 1:1, ~400px)
- **Background:** Engineer turned PM, bridging technical depth with commercial success
- **PM Philosophy:** 0-to-1 builder, customer validation driven, metrics obsessed
- **Personal:** Based in Barcelona, Ironman finisher
- Optional: Current reading list or "what I'm working on"

---

### 5. Contact (/contact)

| Method | Value | Action |
|--------|-------|--------|
| Email | guifre.ballester@gmail.com | Copy to clipboard with toast feedback |
| LinkedIn | linkedin.com/in/guifre-ballester | External link (new tab) |
| Location | Barcelona, Spain | — |

**Optional:** Simple contact form (Formspree/Resend integration)

---

### 6. Not Found (/not-found)

- Friendly 404 message
- Link back to home
- Search suggestion or recent case studies

---

## Components

| Component | Description |
|-----------|-------------|
| `Header` | Navigation + theme toggle + mobile hamburger menu |
| `Footer` | Social links + copyright + "Built with Next.js" |
| `CaseStudyCard` | Hover lift, border glow, tags, duration badge |
| `TimelineItem` | For resume, connecting line, date badge |
| `SkillBadge` | Pill-style badge with optional icon |
| `MetricCard` | Large number + label (e.g., "34%" + "QoQ Growth") |
| `Seo` | Meta tags, Open Graph, Twitter cards, JSON-LD |
| `ThemeToggle` | Sun/moon icon with animation |
| `BackToTop` | Appears on scroll, smooth scroll to top |
| `CopyButton` | For email, with checkmark feedback |
| `MDXComponents` | Custom components for MDX (callouts, code blocks) |

---

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts, theme provider
│   ├── page.tsx            # Home
│   ├── work/
│   │   ├── page.tsx        # Case studies grid
│   │   └── [slug]/
│   │       └── page.tsx    # Dynamic case study page
│   ├── resume/
│   │   └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── not-found.tsx
│   ├── sitemap.ts          # Dynamic sitemap generation
│   └── robots.ts           # Robots.txt generation
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── layout/             # Header, Footer
│   └── mdx/                # MDX-specific components
├── content/
│   └── work/
│       ├── se-ranking-api.mdx
│       ├── eventbrite-platform.mdx
│       ├── getir-backstage.mdx
│       └── twilio-video.mdx
├── lib/
│   ├── mdx.ts              # MDX utilities (get posts, parse frontmatter)
│   └── utils.ts            # General utilities
├── public/
│   ├── images/
│   ├── resume.pdf
│   ├── favicon.ico
│   └── og-image.png        # Default Open Graph image
├── styles/
│   └── globals.css         # Tailwind imports + custom styles
└── types/
    └── index.ts            # TypeScript types
```

---

## Content Files (MDX)

Each case study MDX file should have this frontmatter:

```yaml
---
title: "SE Ranking API"
description: "Launching enterprise API products for AI Search"
role: "Senior Technical Product Manager - API"
company: "SE Ranking"
duration: "Apr 2025 - Present"
tags: ["API", "AI/ML", "0-to-1"]
featured: true
image: "/images/work/se-ranking.png"
---
```

---

## SEO & Metadata

- **Title template:** `%s | Guifré Ballester`
- **Default description:** "Senior Technical Product Manager building API products and developer platforms."
- **Open Graph images:** Per-page or default fallback
- **JSON-LD:** Person schema on home, Article schema on case studies
- **Sitemap:** Auto-generated at `/sitemap.xml`
- **Robots:** Allow all, reference sitemap

---

## Accessibility Checklist

- [ ] Skip to main content link
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] Focus visible states on all interactive elements
- [ ] ARIA labels on icon-only buttons
- [ ] Alt text on all images
- [ ] Color contrast ratio ≥ 4.5:1
- [ ] Keyboard navigation for all features
- [ ] Reduced motion support (`prefers-reduced-motion`)

---

## Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | ≥ 95 |
| Lighthouse Accessibility | 100 |
| Lighthouse SEO | 100 |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |

---

## Environment Variables

```env
# .env.local (optional)
NEXT_PUBLIC_SITE_URL=https://guifreballester.com
NEXT_PUBLIC_GA_ID=              # Optional: Google Analytics
```

---

## Deployment Checklist

- [ ] Verify all links work (internal and external)
- [ ] Test on mobile devices
- [ ] Check dark/light mode transitions
- [ ] Validate Open Graph with social debuggers
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Vercel Analytics (optional)
- [ ] Configure custom domain
- [ ] Enable Vercel Speed Insights (optional)

---

## Implementation Priority

1. **Phase 1 — Foundation**
   - Project setup (Next.js, TypeScript, Tailwind)
   - Layout components (Header, Footer)
   - Theme system (dark/light)
   - Home page

2. **Phase 2 — Core Content**
   - MDX setup and utilities
   - Case study pages (all 4)
   - Work grid page

3. **Phase 3 — Supporting Pages**
   - Resume page with timeline
   - About page
   - Contact page
   - 404 page

4. **Phase 4 — Polish**
   - SEO optimization (meta, JSON-LD, sitemap)
   - Accessibility audit
   - Performance optimization
   - View transitions
   - Final testing

---

## Future Enhancements (Out of Scope)

- Blog section for thought leadership
- RSS feed
- Newsletter signup
- Case study filtering by tag
- Search functionality
- Testimonials/recommendations section
- i18n (Spanish/Catalan versions)
