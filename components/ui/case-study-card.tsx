import Link from "next/link";
import type { CaseStudy } from "@/types";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <Link
      href={`/project/${caseStudy.slug}`}
      className="group relative flex flex-col rounded-lg border border-[--color-border] p-6 transition-all hover:border-[--color-accent] hover:shadow-lg hover:shadow-[--color-accent]/5 [html[data-theme=light]_&]:border-[--color-border-light]"
    >
      {caseStudy.featured && (
        <span className="absolute right-4 top-4 rounded-full bg-[--color-accent]/10 px-2 py-0.5 font-mono text-xs text-[--color-accent]">
          Featured
        </span>
      )}
      <div className="mb-4">
        <h3 className="mb-1 text-lg font-semibold group-hover:text-[--color-accent]">
          {caseStudy.title}
        </h3>
        <p className="text-sm text-[--color-muted]">{caseStudy.company}</p>
      </div>
      <p className="mb-2 text-sm font-medium text-[--color-accent]">
        {caseStudy.role}
      </p>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-[--color-muted]">
        {caseStudy.description}
      </p>
      <div className="mt-auto">
        <p className="mb-3 font-mono text-xs text-[--color-muted]">
          {caseStudy.duration}
        </p>
        <div className="flex flex-wrap gap-2">
          {caseStudy.tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-[--color-border] px-2 py-0.5 font-mono text-xs text-[--color-muted] [html[data-theme=light]_&]:bg-[--color-border-light]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
