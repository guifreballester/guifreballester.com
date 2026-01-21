import Image from "next/image";
import Link from "next/link";
import type { WorkExperience } from "@/types";

interface TimelineItemProps {
  experience: WorkExperience;
  isLast?: boolean;
}

export function TimelineItem({ experience, isLast = false }: TimelineItemProps) {
  return (
    <div className="relative pb-8">
      <div className="flex gap-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          {experience.logo ? (
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white p-1">
              <Image
                src={experience.logo}
                alt={`${experience.company} logo`}
                width={48}
                height={48}
                className="h-full w-full object-contain"
              />
            </div>
          ) : (
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[--color-border] text-lg font-bold text-[--color-muted] [html[data-theme=light]_&]:bg-[--color-border-light]">
              {experience.company.charAt(0)}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 space-y-1">
          <div className="flex flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="font-semibold">{experience.role}</h3>
            <span className="font-mono text-sm text-[--color-muted]">
              {experience.duration}
            </span>
          </div>
          <p className="text-[--color-accent]">{experience.company}</p>
          {experience.description && (
            <p className="mt-2 text-sm text-[--color-muted]">
              {experience.description}
            </p>
          )}
          {experience.projects && experience.projects.length > 0 && (
            <ul className="mt-2 space-y-1">
              {experience.projects.map((project) => (
                <li key={project.href} className="text-sm">
                  <Link
                    href={project.href}
                    className="text-[--color-muted] hover:text-[--color-accent] hover:underline"
                  >
                    → {project.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
