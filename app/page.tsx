import Link from "next/link";
import { SkillBadge } from "@/components/ui/skill-badge";

const techBadges = [
  "AWS",
  "GCP",
  "Kubernetes",
  "Terraform",
  "CI/CD",
  "APIs",
  "Python",
  "ML/AI",
];

export default function HomePage() {
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

        {/* Quick Links */}
        <div className="flex flex-wrap gap-4">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-lg bg-[--color-accent] px-6 py-3 font-medium text-white transition-colors hover:bg-[--color-accent-hover]"
          >
            View Work
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
          <Link
            href="/resume"
            className="inline-flex items-center gap-2 rounded-lg border border-[--color-border] px-6 py-3 font-medium transition-colors hover:border-[--color-accent] hover:text-[--color-accent] [html[data-theme=light]_&]:border-[--color-border-light]"
          >
            Resume
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg border border-[--color-border] px-6 py-3 font-medium transition-colors hover:border-[--color-accent] hover:text-[--color-accent] [html[data-theme=light]_&]:border-[--color-border-light]"
          >
            Contact
          </Link>
        </div>
      </section>

      {/* Tech Badges */}
      <section>
        <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-[--color-muted]">
          Technical Expertise
        </h2>
        <div className="flex flex-wrap gap-2">
          {techBadges.map((badge) => (
            <SkillBadge key={badge}>{badge}</SkillBadge>
          ))}
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="mt-16 border-t border-[--color-border] pt-16 [html[data-theme=light]_&]:border-[--color-border-light]">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Featured Work</h2>
          <Link
            href="/work"
            className="text-sm text-[--color-muted] transition-colors hover:text-[--color-accent]"
          >
            View all →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <FeaturedCard
            title="SE Ranking API"
            role="Senior Technical PM - API"
            description="Launched enterprise API products for AI Search with 34% QoQ growth"
            tags={["API", "AI/ML", "0-to-1"]}
            href="/work/se-ranking-api"
          />
          <FeaturedCard
            title="Eventbrite Platform"
            role="Senior PM - Platform Engineering"
            description="Built developer automation platform reducing repo creation from 2 weeks to 30 minutes"
            tags={["Platform", "DevEx", "Cloud"]}
            href="/work/eventbrite-platform"
          />
        </div>
      </section>
    </div>
  );
}

function FeaturedCard({
  title,
  role,
  description,
  tags,
  href,
}: {
  title: string;
  role: string;
  description: string;
  tags: string[];
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-lg border border-[--color-border] p-6 transition-all hover:border-[--color-accent] hover:shadow-lg hover:shadow-[--color-accent]/5 [html[data-theme=light]_&]:border-[--color-border-light]"
    >
      <h3 className="mb-1 text-lg font-semibold group-hover:text-[--color-accent]">
        {title}
      </h3>
      <p className="mb-3 text-sm text-[--color-muted]">{role}</p>
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
