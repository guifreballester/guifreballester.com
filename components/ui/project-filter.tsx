"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProjectCard {
  slug: string;
  title: string;
  description: string;
  month: string;
  tags: string[];
}

// Badge → project tag mapping. Clicking a badge filters the grid below.
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

export function ProjectFilter({ projects }: { projects: ProjectCard[] }) {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredProjects = activeFilter
    ? projects.filter((project) => {
        const badge = allBadges.find((b) => b.name === activeFilter);
        if (!badge) return true;
        return project.tags.some((tag) => badge.tags.includes(tag));
      })
    : projects;

  const handleBadgeClick = (badgeName: string) => {
    setActiveFilter(activeFilter === badgeName ? null : badgeName);
  };

  return (
    <>
      {/* Skills — clickable filters */}
      <section className="space-y-6">
        {activeFilter && (
          <button
            onClick={() => setActiveFilter(null)}
            className="text-xs text-(--color-accent) hover:underline"
          >
            Clear filter ✕
          </button>
        )}

        <div>
          <h2 className="mb-3 text-sm font-medium uppercase tracking-wider text-(--color-muted)">
            Product
          </h2>
          <div className="flex flex-wrap gap-2">
            {productBadges.map((badge) => (
              <FilterBadge
                key={badge.name}
                name={badge.name}
                active={activeFilter === badge.name}
                onClick={() => handleBadgeClick(badge.name)}
              />
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-3 text-sm font-medium uppercase tracking-wider text-(--color-muted)">
            Technical
          </h2>
          <div className="flex flex-wrap gap-2">
            {technicalBadges.map((badge) => (
              <FilterBadge
                key={badge.name}
                name={badge.name}
                active={activeFilter === badge.name}
                onClick={() => handleBadgeClick(badge.name)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="mt-16 border-t border-(--color-border) pt-16 [html[data-theme=light]_&]:border-(--color-border-light)">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            Projects
            {activeFilter && (
              <span className="ml-2 text-base font-normal text-(--color-muted)">
                · {activeFilter}
              </span>
            )}
          </h2>
          <Link
            href="/project"
            className="text-sm text-(--color-muted) transition-colors hover:text-(--color-accent)"
          >
            View all →
          </Link>
        </div>
        <p className="sr-only" aria-live="polite">
          {filteredProjects.length} project
          {filteredProjects.length === 1 ? "" : "s"} shown
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <ProjectCardLink key={project.slug} project={project} />
          ))}
        </div>
        {filteredProjects.length === 0 && (
          <p className="text-center text-(--color-muted)">
            No projects match this filter.{" "}
            <button
              onClick={() => setActiveFilter(null)}
              className="text-(--color-accent) hover:underline"
            >
              Clear filter
            </button>
          </p>
        )}
      </section>
    </>
  );
}

function FilterBadge({
  name,
  active,
  onClick,
}: {
  name: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs transition-colors",
        active
          ? "border-(--color-accent) bg-(--color-accent) text-white"
          : "border-(--color-border) bg-(--color-background) text-(--color-muted) hover:border-(--color-accent) hover:text-(--color-accent) [html[data-theme=light]_&]:border-(--color-border-light) [html[data-theme=light]_&]:bg-(--color-background-light)"
      )}
    >
      {name}
    </button>
  );
}

function ProjectCardLink({ project }: { project: ProjectCard }) {
  return (
    <Link
      href={`/project/${project.slug}`}
      className="group rounded-lg border border-(--color-border) p-6 transition-all hover:border-(--color-accent) hover:shadow-lg hover:shadow-(--color-accent)/5 [html[data-theme=light]_&]:border-(--color-border-light)"
    >
      <div className="mb-2 flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold group-hover:text-(--color-accent)">
          {project.title}
        </h3>
        <span className="shrink-0 font-mono text-xs text-(--color-muted)">
          {project.month}
        </span>
      </div>
      <p className="mb-4 text-sm leading-relaxed text-(--color-muted)">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded bg-(--color-border) px-2 py-0.5 font-mono text-xs text-(--color-muted) [html[data-theme=light]_&]:bg-(--color-border-light)"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
