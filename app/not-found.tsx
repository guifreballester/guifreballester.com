import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center py-12 text-center">
      <h1 className="mb-4 font-mono text-6xl font-bold text-[--color-accent]">
        404
      </h1>
      <h2 className="mb-4 text-2xl font-semibold">Page not found</h2>
      <p className="mb-8 max-w-md text-[--color-muted]">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-[--color-accent] px-6 py-3 font-medium text-white transition-colors hover:bg-[--color-accent-hover]"
        >
          Go home
        </Link>
        <Link
          href="/work"
          className="inline-flex items-center gap-2 rounded-lg border border-[--color-border] px-6 py-3 font-medium transition-colors hover:border-[--color-accent] hover:text-[--color-accent] [html[data-theme=light]_&]:border-[--color-border-light]"
        >
          View work
        </Link>
      </div>
    </div>
  );
}
