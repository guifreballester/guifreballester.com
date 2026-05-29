import Image from "next/image";
import Link from "next/link";
import { getAllCaseStudies } from "@/lib/mdx";
import { ProjectFilter } from "@/components/ui/project-filter";

// Headline proof points. Each links to the case study that backs the number,
// so every figure on the page is one click from its source.
const metrics = [
  { value: "~30%", label: "of signups via the MCP I built", href: "/project/mcp-integration" },
  { value: "20%", label: "of revenue from the US market I opened (2 mo)", href: "/project/stayforlong" },
  { value: "$0→1", label: "new API business line, built in 6 months", href: "/project/api-launch" },
];

export default function HomePage() {
  const projects = getAllCaseStudies().map((study) => ({
    slug: study.slug,
    title: study.title,
    description: study.description,
    month: study.month,
    tags: study.tags,
  }));

  return (
    <div className="container py-16 md:py-24">
      {/* Hero */}
      <section className="mb-16">
        <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-start">
          <Image
            src="/guifre.jpeg"
            alt="Guifré Ballester"
            width={96}
            height={96}
            priority
            className="h-20 w-20 shrink-0 rounded-full object-cover ring-1 ring-(--color-border) sm:h-24 sm:w-24 [html[data-theme=light]_&]:ring-(--color-border-light)"
          />
          <div>
            <p className="mb-2 font-mono text-sm text-(--color-muted)">
              Guifré Ballester · Senior Technical Product Manager
            </p>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              I build API &amp; AI-agent products for developers.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-(--color-muted)">
              PM who codes — I shipped SE Ranking&apos;s remote{" "}
              <Link
                href="/project/mcp-integration"
                className="text-(--color-accent) hover:underline"
              >
                MCP server
              </Link>{" "}
              (now ~30% of signups) and built its Data API business line from
              zero. I use Claude Code daily for the PM work.
            </p>
          </div>
        </div>

        {/* Key metrics — each links to its source case study */}
        <div className="mb-8 grid grid-cols-3 gap-4 sm:gap-6">
          {metrics.map((metric) => (
            <Link
              key={metric.label}
              href={metric.href}
              className="group rounded-lg border border-(--color-border) p-3 text-center transition-colors hover:border-(--color-accent) [html[data-theme=light]_&]:border-(--color-border-light)"
            >
              <div className="text-2xl font-bold text-(--color-accent)">
                {metric.value}
              </div>
              <div className="text-xs text-(--color-muted)">{metric.label}</div>
            </Link>
          ))}
        </div>

        {/* Location */}
        <p className="mb-6 flex items-center gap-2 text-sm text-(--color-muted)">
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

        {/* Now line — what he's currently building, with a live proof link */}
        <p className="mb-8 rounded-lg border border-(--color-border) bg-(--color-border)/15 px-4 py-3 text-sm leading-relaxed text-(--color-muted) [html[data-theme=light]_&]:border-(--color-border-light) [html[data-theme=light]_&]:bg-(--color-border-light)/40">
          <span className="font-medium text-(--color-foreground) [html[data-theme=light]_&]:text-(--color-foreground-light)">
            Now:
          </span>{" "}
          building API &amp; AI-agent products at SE Ranking — most recently the
          remote MCP server and the AI Search (AEO) API.{" "}
          <a
            href="https://api.seranking.com/mcp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-(--color-accent) hover:underline"
          >
            Try the live MCP →
          </a>
        </p>

        {/* CTAs */}
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          <Link
            href="/project"
            className="inline-flex items-center gap-2 self-start rounded-lg bg-(--color-accent) px-6 py-3 font-medium text-white transition-colors hover:bg-(--color-accent-hover)"
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
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-(--color-border) px-6 py-3 font-medium transition-colors hover:border-(--color-accent) hover:text-(--color-accent) sm:flex-none [html[data-theme=light]_&]:border-(--color-border-light)"
            >
              Resume
            </Link>
            <Link
              href="/contact"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-(--color-border) px-6 py-3 font-medium transition-colors hover:border-(--color-accent) hover:text-(--color-accent) sm:flex-none [html[data-theme=light]_&]:border-(--color-border-light)"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>

      {/* Skills filters + project grid (client island, driven by MDX) */}
      <ProjectFilter projects={projects} />
    </div>
  );
}
