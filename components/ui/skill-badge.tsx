import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function SkillBadge({ children, className }: SkillBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[--color-border] bg-[--color-background] px-3 py-1 font-mono text-xs text-[--color-muted] transition-colors hover:border-[--color-accent] hover:text-[--color-accent] [html[data-theme=light]_&]:border-[--color-border-light] [html[data-theme=light]_&]:bg-[--color-background-light]",
        className
      )}
    >
      {children}
    </span>
  );
}
