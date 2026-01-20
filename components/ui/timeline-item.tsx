import Link from "next/link";
import type { WorkExperience } from "@/types";

interface TimelineItemProps {
  experience: WorkExperience;
  isLast?: boolean;
}

export function TimelineItem({ experience, isLast = false }: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-8">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[7px] top-3 h-full w-px bg-[--color-border] [html[data-theme=light]_&]:bg-[--color-border-light]" />
      )}
      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-[--color-accent] bg-[--color-background] [html[data-theme=light]_&]:bg-[--color-background-light]" />

      <div className="space-y-1">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="font-semibold">{experience.role}</h3>
          <span className="font-mono text-sm text-[--color-muted]">
            {experience.duration}
          </span>
        </div>
        {experience.link ? (
          <Link
            href={experience.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[--color-accent] hover:underline"
          >
            {experience.company}
          </Link>
        ) : (
          <p className="text-[--color-accent]">{experience.company}</p>
        )}
        {experience.description && (
          <p className="mt-2 text-sm text-[--color-muted]">
            {experience.description}
          </p>
        )}
      </div>
    </div>
  );
}
