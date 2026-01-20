# Projects Refactor

Rename "Work" to "Projects" across the site. Reframe around **what was shipped**, not where.

---

## Project Breakdown by Role

### SE Ranking — 4 Projects
| Project | What | Outcome |
|---------|------|---------|
| **API Launch** | Shipped enterprise API from scratch | $2K MRR in 2 months, $20K in 6 months |
| **AI Search API** | New product line for AI agents | 40 customers (19.8%) drove 50% of new revenue. $10K MRR in 2 months. $30K ARR accounts |
| **MCP Integration** | First to ship MCP, iterated to remote/PAYG | 30% of signups — SEO pros querying via ChatGPT, Claude, Gemini |
| **Pricing Revamp** | Raised prices 50%, added enterprise tiers | 100+ logos in 6 months |

### Eventbrite — 2 Projects
| Project | What | Outcome |
|---------|------|---------|
| **Repo Creation Optimization** | Built self-service platform | 99% faster (2w → 30min), 150 engineers |
| **Polyrepo Migration** | Led monorepo → polyrepo shift | 2 → 40 teams (90% adoption) |

### Getir — 2 Projects
| Project | What | Outcome |
|---------|------|---------|
| **Backstage IDP** | Built IDP from scratch | 200 engineers monthly. New hire onboarding 3x faster (60→20 days to 10th PR) |
| **GitOps Migration** | Implemented ArgoCD/Flux | Hours → 5 min deploys, 60% more releases |

### Twilio — 1 Major Project
| Project | What | Outcome |
|---------|------|---------|
| **Twilio Live** | Identified gap competitors missed, built 0→1 | $200K MRR, 100+ customers, 35% enterprise growth |

---

## Display Option

**Decision: 9 Cards (One Per Project)**

Each project gets its own card on the home page. Filtering becomes more useful — clicking a badge shows only relevant projects.

---

## Filter Tag Mapping

### Product Badges (what you did)
| Badge | Internal Tag | Description |
|-------|--------------|-------------|
| 0-to-1 Products | `0-to-1` | Built something from scratch |
| Go-to-Market | `gtm` | Launched, pricing, sales enablement |
| Customer Validation | `validation` | Talked to customers, identified needs |
| Product-Market Fit | `pmf` | Found the right market positioning |
| Developer Experience | `devex` | Made developers' lives easier |
| B2B / Enterprise | `b2b` | Sold to businesses, landed logos |

### Technical Badges (what you know)
| Badge | Internal Tag | Description |
|-------|--------------|-------------|
| API Design | `api` | REST, webhooks, SDKs, rate limiting |
| Platform Engineering | `platform` | Internal tools, portals, IDPs, automation |
| Cloud (AWS/GCP) | `cloud` | Infrastructure, deployments |
| AI/ML | `ai-ml` | Machine learning, LLMs, agents |
| Data & Analytics | `data` | Metrics, analytics, pricing analysis |

### Project → Tag Mapping (9 Projects Total)

#### SE Ranking — 4 Projects
| Project | Product Tags | Technical Tags |
|---------|--------------|----------------|
| **API Launch** — $2K MRR in 2 months, $20K in 6 months | `0-to-1`, `gtm`, `b2b` | `api` |
| **AI Search API** — 40 customers (19.8%) drove 50% of new revenue, $10K MRR in 2 months | `0-to-1`, `gtm`, `b2b` | `api`, `ai-ml` |
| **MCP Integration** — Iterated local→remote, subscription→PAYG. 30% of signups | `0-to-1`, `gtm`, `pmf` | `api`, `ai-ml` |
| **Pricing Revamp** — Raised 50%, landed 100+ logos in 6 months | `pmf`, `b2b`, `validation` | `api`, `data` |

#### Eventbrite — 2 Projects
| Project | Product Tags | Technical Tags |
|---------|--------------|----------------|
| **Repo Creation Optimization** — 99% faster (2w → 30min), 150 engineers | `devex`, `0-to-1` | `platform`, `cloud` |
| **Polyrepo Migration** — 2 → 40 teams (90% adoption), independent deploys | `devex`, `b2b` | `platform`, `cloud` |

#### Getir — 2 Projects
| Project | Product Tags | Technical Tags |
|---------|--------------|----------------|
| **Backstage IDP** — 200 engineers monthly, 3x faster onboarding (60→20 days) | `devex`, `0-to-1` | `platform` |
| **GitOps Migration** — Deploys: hours → 5 min, 60% more releases | `devex` | `platform`, `cloud` |

#### Twilio — 1 Project
| Project | Product Tags | Technical Tags |
|---------|--------------|----------------|
| **Twilio Live** — $200K MRR, 100+ customers, 35% enterprise growth | `0-to-1`, `validation`, `gtm`, `b2b` | `api` |

### Filter Behavior
- Click badge → show projects with matching tag
- Click same badge again → clear filter
- Projects can match multiple badges

---

## Updated Project Cards (Home Page) — 9 Cards

### SE Ranking Projects (4)

**Card 1: API Launch**
| Field | Value |
|-------|-------|
| Title | API Launch |
| Role | Senior Technical PM · SE Ranking |
| Description | Shipped enterprise API in <2 months. $2K MRR at launch, $20K in 6 months |
| Tags | `0-to-1`, `gtm`, `b2b`, `api` |

**Card 2: AI Search API**
| Field | Value |
|-------|-------|
| Title | AI Search API |
| Role | Senior Technical PM · SE Ranking |
| Description | New product line for AI agents. 40 customers (19.8%) drove 50% of new revenue. $10K MRR in 2 months. Landed $30K ARR accounts |
| Tags | `0-to-1`, `gtm`, `b2b`, `api`, `ai-ml` |

**Card 3: MCP Integration**
| Field | Value |
|-------|-------|
| Title | MCP Integration |
| Role | Senior Technical PM · SE Ranking |
| Description | First to ship MCP. Iterated from local/subscription to remote/pay-as-you-go. Now 30% of signups — SEO pros querying via ChatGPT, Claude, Gemini |
| Tags | `0-to-1`, `gtm`, `pmf`, `api`, `ai-ml` |

**Card 4: Pricing Revamp**
| Field | Value |
|-------|-------|
| Title | Pricing Revamp |
| Role | Senior Technical PM · SE Ranking |
| Description | Raised prices 50% ($99→$149). Added enterprise tiers. 100+ logos in 6 months |
| Tags | `pmf`, `b2b`, `validation`, `api`, `data` |

### Eventbrite Projects (2)

**Card 5: Repo Creation Optimization**
| Field | Value |
|-------|-------|
| Title | Repo Creation Optimization |
| Role | Senior PM · Eventbrite |
| Description | Built self-service platform. 99% faster (2 weeks → 30 min). Serving 150 engineers |
| Tags | `devex`, `0-to-1`, `platform`, `cloud` |

**Card 6: Polyrepo Migration**
| Field | Value |
|-------|-------|
| Title | Polyrepo Migration |
| Role | Senior PM · Eventbrite |
| Description | Scaled from 2 to 40 teams (90% adoption). Unblocked independent deployments |
| Tags | `devex`, `b2b`, `platform`, `cloud` |

### Getir Projects (2)

**Card 7: Backstage IDP**
| Field | Value |
|-------|-------|
| Title | Backstage IDP |
| Role | Technical PM · Getir |
| Description | Built IDP from scratch. 200 engineers monthly. New hire onboarding 3x faster (60→20 days to 10th PR) |
| Tags | `devex`, `0-to-1`, `platform` |

**Card 8: GitOps Migration**
| Field | Value |
|-------|-------|
| Title | GitOps Migration |
| Role | Technical PM · Getir |
| Description | Implemented ArgoCD/Flux. Deploys: hours → 5 min. 60% more frequent releases |
| Tags | `devex`, `platform`, `cloud` |

### Twilio Projects (1)

**Card 9: Twilio Live**
| Field | Value |
|-------|-------|
| Title | Twilio Live |
| Role | Product Manager · Twilio |
| Description | Identified gap competitors missed. Built 0→1 streaming product. $200K MRR, 100+ customers, 35% enterprise growth |
| Tags | `0-to-1`, `validation`, `gtm`, `b2b`, `api` |

---

## MDX Case Study Structure

Each case study should now cover **multiple projects** within the role:

### /content/work/se-ranking-api.mdx
```markdown
## Projects

### 1. API Launch
- Context: No existing API product
- Shipped in under 2 months
- Self-service trials, POC-to-paid flow

### 2. AI Search API
- New product line as SEO market evolved toward AI
- Built at scale: 250 RPS per account
- 40 customers (19.8%) drove 50% of new revenue
- $10K MRR in 2 months, secured $30K ARR accounts

### 3. MCP Integration
- First to ship MCP in the space
- V1: Local setup, subscription model — poor retention
- V2: Remote + pay-as-you-go — signups skyrocketed
- Now 30% of signups — SEO pros querying via ChatGPT, Claude, Gemini

### 4. Pricing Revamp
- Started at $99 — too cheap, low MRR
- Moved to $149
- Added 100-300M credit tiers for enterprise
- Result: Landed big logos, sustainable business
```

### /content/work/eventbrite-platform.mdx
```markdown
## Projects

### 1. Repo Creation Optimization
- Problem: 2 weeks to create a repo
- Built self-service automation
- Result: 30 minutes

### 2. Polyrepo Migration
- Problem: Monorepo slowing teams down
- Led architecture shift to polyrepo
- Result: Team autonomy, governance via templates
```

### /content/work/getir-backstage.mdx
```markdown
## Projects

### 1. Backstage IDP
- Problem: No visibility, manual requests, slow onboarding
- Implemented Backstage from scratch
- 200 engineers using it monthly
- Result: New hire time-to-10th-PR dropped from 60 to 20 days (3x faster)

### 2. GitOps Migration
- Problem: Slow, inconsistent deployments
- Implemented ArgoCD/Flux
- Result: Ship fast, ship often
```

### /content/work/twilio-video.mdx
```markdown
## Projects

### 1. Twilio Live
- Context: Post-COVID, everyone needed video
- Insight: Unserved need for streaming at scale (not just meetings)
- Ideated and launched Twilio Live
- Result: $200K MRR, 100+ customers, 35% enterprise growth
```

---

## Navigation & Labels

| Location | Current | New |
|----------|---------|-----|
| Nav link | Work | Projects |
| Home section title | Work | Projects |
| /work page title | Work | Projects |
| Back link on case study | Back to Work | Back to Projects |

---

## Files to Update

- [ ] `/app/page.tsx` — Project cards with new titles/descriptions
- [ ] `/components/layout/header.tsx` — Nav: "Work" → "Projects"
- [ ] `/app/work/page.tsx` — Title: "Work" → "Projects"
- [ ] `/app/work/[slug]/page.tsx` — "Back to Work" → "Back to Projects"
- [ ] `/content/work/se-ranking-api.mdx` — Add 4 projects structure
- [ ] `/content/work/eventbrite-platform.mdx` — Add 2 projects structure
- [ ] `/content/work/getir-backstage.mdx` — Add 2 projects structure
- [ ] `/content/work/twilio-video.mdx` — Reframe around Twilio Live

---

## Summary

**Before:** "I worked at SE Ranking as a PM"
**After:** "I launched an API in 2 months, pivoted to AI Search, shipped MCP, and fixed pricing to land enterprise"

Outcomes > Affiliations.
