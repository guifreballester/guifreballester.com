"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

// Badge → Project tag mapping
// When a badge is clicked, projects with matching tags are shown

const productBadges = [
  { name: "0-to-1 Products", tags: ["0-to-1"] },
  { name: "Go-to-Market", tags: ["gtm"] },
  { name: "Customer Validation", tags: ["validation"] },
  { name: "Product-Market Fit", tags: ["pmf"] },
  { name: "Developer Experience", tags: ["devex"] },
  { name: "B2B / Enterprise", tags: ["b2b"] },
];

const technicalBadges = [
  { name: "API Design", tags: ["api"] },
  { name: "Platform Engineering", tags: ["platform"] },
  { name: "Cloud (AWS/GCP)", tags: ["cloud"] },
  { name: "AI/ML", tags: ["ai-ml"] },
  { name: "Data & Analytics", tags: ["data"] },
];

const allBadges = [...productBadges, ...technicalBadges];

function parseMonth(month: string): Date {
  const [mon, year] = month.split(" ");
  const monthMap: Record<string, number> = {
    Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
    Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
  };
  return new Date(parseInt(year), monthMap[mon] || 0);
}

const allProjects = [
  // SE Ranking — 4 Projects
  {
    title: "MCP Driving 30% of Signups",
    description:
      "First to ship MCP. Iterated from local/subscription to remote/pay-as-you-go. Now 30% of signups — SEO pros querying via ChatGPT, Claude, Gemini",
    month: "Jan 2026",
    tags: ["0-to-1", "gtm", "pmf", "api", "ai-ml"],
    href: "/project/mcp-integration",
  },
  {
    title: "AI Shift in SEO",
    description:
      "New product line for AI agents. 40 customers (19.8%) drove 50% of new revenue. $10K MRR in 2 months. Landed $30K ARR accounts",
    month: "Nov 2025",
    tags: ["0-to-1", "gtm", "b2b", "api", "ai-ml"],
    href: "/project/ai-search-api",
  },
  {
    title: "B2B SEO API: Ship in Under 2 Months",
    description:
      "Launched enterprise API from scratch in <2 months. Built with customer feedback and self-service trials",
    month: "Jun 2025",
    tags: ["0-to-1", "gtm", "b2b", "api"],
    href: "/project/api-launch",
  },
  {
    title: "Repricing to Create a Business",
    description:
      "Raised prices 50% ($99→$149). Added enterprise tiers. 100+ logos in 6 months",
    month: "Aug 2025",
    tags: ["pmf", "b2b", "validation", "api", "data"],
    href: "/project/pricing-revamp",
  },
  // Eventbrite — 2 Projects
  {
    title: "Fortune 500 Architecture Migration",
    description:
      "Scaled from 2 to 40 teams (90% adoption). Unblocked independent deployments",
    month: "Jun 2024",
    tags: ["devex", "b2b", "platform", "cloud"],
    href: "/project/polyrepo-migration",
  },
  {
    title: "Repo Provisioning in 30 Minutes",
    description:
      "Built self-service platform. 99% faster (2 weeks → 30 min). Serving 150 engineers",
    month: "Jan 2024",
    tags: ["devex", "0-to-1", "platform", "cloud"],
    href: "/project/repo-creation",
  },
  // Getir — 2 Projects
  {
    title: "60% More Releases",
    description:
      "Implemented ArgoCD/Flux. Deploys: hours → 5 min. 60% more frequent releases",
    month: "Aug 2023",
    tags: ["devex", "platform", "cloud"],
    href: "/project/gitops-migration",
  },
  {
    title: "Implemented IDP for Faster Onboarding",
    description:
      "Built IDP from scratch. 200 engineers monthly. New hire onboarding 3x faster (60→20 days to 10th PR)",
    month: "Mar 2023",
    tags: ["devex", "0-to-1", "platform"],
    href: "/project/backstage-idp",
  },
  // Twilio — 1 Project
  {
    title: "Post-COVID Video Streaming",
    description:
      "Identified gap competitors missed. Built 0→1 streaming product. $200K MRR, 100+ customers, 35% enterprise growth",
    month: "Apr 2022",
    tags: ["0-to-1", "validation", "gtm", "b2b", "api"],
    href: "/project/twilio-live",
  },
];

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredProjects = (activeFilter
    ? allProjects.filter((project) => {
        const badge = allBadges.find((b) => b.name === activeFilter);
        if (!badge) return true;
        return project.tags.some((tag) => badge.tags.includes(tag));
      })
    : allProjects
  ).sort((a, b) => parseMonth(b.month).getTime() - parseMonth(a.month).getTime());

  const handleBadgeClick = (badgeName: string) => {
    setActiveFilter(activeFilter === badgeName ? null : badgeName);
  };

  return (
    <div className="container py-16 md:py-24">
      {/* Hero Section */}
      <section className="mb-16">
        <h1 className="mb-4 font-mono text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          Guifré Ballester
        </h1>
        <p className="mb-6 text-xl text-[--color-accent] md:text-2xl">
          Senior Technical Product Manager
        </p>
        <p className="mb-8 max-w-2xl text-lg leading-relaxed text-[--color-muted]">
          Building API products and developer platforms. 6+ years shipping cloud
          infrastructure and 0-to-1 products.
        </p>
        <p className="mb-8 flex items-center gap-2 text-sm text-[--color-muted]">
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          Barcelona, Spain
        </p>

        {/* Quick Links - View Projects on first line, Resume + Contact on second line for mobile */}
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          <Link
            href="/project"
            className="inline-flex items-center gap-2 self-start rounded-lg bg-[--color-accent] px-6 py-3 font-medium text-white transition-colors hover:bg-[--color-accent-hover]"
          >
            View Projects
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
          <div className="flex gap-3 sm:gap-4">
            <Link
              href="/resume"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-[--color-border] px-6 py-3 font-medium transition-colors hover:border-[--color-accent] hover:text-[--color-accent] sm:flex-none [html[data-theme=light]_&]:border-[--color-border-light]"
            >
              Resume
            </Link>
            <Link
              href="/contact"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-[--color-border] px-6 py-3 font-medium transition-colors hover:border-[--color-accent] hover:text-[--color-accent] sm:flex-none [html[data-theme=light]_&]:border-[--color-border-light]"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Sections - Clickable filters */}
      <section className="space-y-6">
        {activeFilter && (
          <button
            onClick={() => setActiveFilter(null)}
            className="text-xs text-[--color-accent] hover:underline"
          >
            Clear filter ✕
          </button>
        )}

        {/* Product Skills */}
        <div>
          <h2 className="mb-3 text-sm font-medium uppercase tracking-wider text-[--color-muted]">
            Product
          </h2>
          <div className="flex flex-wrap gap-2">
            {productBadges.map((badge) => (
              <button
                key={badge.name}
                onClick={() => handleBadgeClick(badge.name)}
                className={cn(
                  "inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs transition-colors",
                  activeFilter === badge.name
                    ? "border-[--color-accent] bg-[--color-accent] text-white"
                    : "border-[--color-border] bg-[--color-background] text-[--color-muted] hover:border-[--color-accent] hover:text-[--color-accent] [html[data-theme=light]_&]:border-[--color-border-light] [html[data-theme=light]_&]:bg-[--color-background-light]"
                )}
              >
                {badge.name}
              </button>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div>
          <h2 className="mb-3 text-sm font-medium uppercase tracking-wider text-[--color-muted]">
            Technical
          </h2>
          <div className="flex flex-wrap gap-2">
            {technicalBadges.map((badge) => (
              <button
                key={badge.name}
                onClick={() => handleBadgeClick(badge.name)}
                className={cn(
                  "inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs transition-colors",
                  activeFilter === badge.name
                    ? "border-[--color-accent] bg-[--color-accent] text-white"
                    : "border-[--color-border] bg-[--color-background] text-[--color-muted] hover:border-[--color-accent] hover:text-[--color-accent] [html[data-theme=light]_&]:border-[--color-border-light] [html[data-theme=light]_&]:bg-[--color-background-light]"
                )}
              >
                {badge.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Work Section - All projects with filtering */}
      <section className="mt-16 border-t border-[--color-border] pt-16 [html[data-theme=light]_&]:border-[--color-border-light]">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            Projects
            {activeFilter && (
              <span className="ml-2 text-base font-normal text-[--color-muted]">
                · {activeFilter}
              </span>
            )}
          </h2>
          <Link
            href="/project"
            className="text-sm text-[--color-muted] transition-colors hover:text-[--color-accent]"
          >
            View all →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <FeaturedCard
              key={project.title}
              title={project.title}
              month={project.month}
              description={project.description}
              tags={project.tags}
              href={project.href}
            />
          ))}
        </div>
        {filteredProjects.length === 0 && (
          <p className="text-center text-[--color-muted]">
            No projects match this filter.{" "}
            <button
              onClick={() => setActiveFilter(null)}
              className="text-[--color-accent] hover:underline"
            >
              Clear filter
            </button>
          </p>
        )}
      </section>
    </div>
  );
}

function FeaturedCard({
  title,
  month,
  description,
  tags,
  href,
}: {
  title: string;
  month: string;
  description: string;
  tags: string[];
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-lg border border-[--color-border] p-6 transition-all hover:border-[--color-accent] hover:shadow-lg hover:shadow-[--color-accent]/5 [html[data-theme=light]_&]:border-[--color-border-light]"
    >
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-lg font-semibold group-hover:text-[--color-accent]">
          {title}
        </h3>
        <span className="font-mono text-xs text-[--color-muted]">{month}</span>
      </div>
      <p className="mb-4 text-sm leading-relaxed text-[--color-muted]">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded bg-[--color-border] px-2 py-0.5 font-mono text-xs text-[--color-muted] [html[data-theme=light]_&]:bg-[--color-border-light]"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
