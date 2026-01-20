import type { MDXComponents } from "mdx/types";
import { MetricCard } from "@/components/ui/metric-card";

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="mb-4 mt-8 text-3xl font-bold">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="mb-4 mt-8 text-2xl font-bold">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="mb-3 mt-6 text-xl font-semibold">{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="mb-2 mt-4 text-lg font-semibold">{children}</h4>
  ),
  p: ({ children }) => (
    <p className="mb-4 leading-relaxed text-[--color-muted] [html[data-theme=light]_&]:text-[--color-foreground-light]/80">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="mb-4 ml-4 list-disc space-y-2 text-[--color-muted] [html[data-theme=light]_&]:text-[--color-foreground-light]/80">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-4 ml-4 list-decimal space-y-2 text-[--color-muted] [html[data-theme=light]_&]:text-[--color-foreground-light]/80">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  strong: ({ children }) => (
    <strong className="font-semibold text-[--color-foreground] [html[data-theme=light]_&]:text-[--color-foreground-light]">
      {children}
    </strong>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-[--color-accent] underline-offset-4 hover:underline"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  ),
  blockquote: ({ children }) => (
    <blockquote className="mb-4 border-l-2 border-[--color-accent] pl-4 italic text-[--color-muted]">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="rounded bg-[--color-border] px-1.5 py-0.5 font-mono text-sm [html[data-theme=light]_&]:bg-[--color-border-light]">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="mb-4 overflow-x-auto rounded-lg bg-[--color-border] p-4 font-mono text-sm [html[data-theme=light]_&]:bg-[--color-border-light]">
      {children}
    </pre>
  ),
  hr: () => (
    <hr className="my-8 border-[--color-border] [html[data-theme=light]_&]:border-[--color-border-light]" />
  ),
  MetricCard,
};
