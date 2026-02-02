import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getCaseStudyBySlug, getAllCaseStudies } from "@/lib/mdx";
import { mdxComponents } from "@/components/mdx/mdx-components";
import { calculateReadingTime } from "@/lib/utils";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const caseStudies = getAllCaseStudies();
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: `${caseStudy.title} | ${caseStudy.company}`,
    description: caseStudy.description,
    openGraph: {
      title: `${caseStudy.title} | ${caseStudy.company}`,
      description: caseStudy.description,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  const allCaseStudies = getAllCaseStudies();
  const currentIndex = allCaseStudies.findIndex((s) => s.slug === slug);
  const prevStudy = currentIndex > 0 ? allCaseStudies[currentIndex - 1] : null;
  const nextStudy =
    currentIndex < allCaseStudies.length - 1
      ? allCaseStudies[currentIndex + 1]
      : null;

  return (
    <article className="container py-12 md:py-16">
      {/* Back Link */}
      <Link
        href="/project"
        className="mb-8 inline-flex items-center gap-2 text-sm text-[--color-muted] transition-colors hover:text-[--color-accent]"
      >
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
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
        Back to Projects
      </Link>

      {/* Hero */}
      <header className="mb-12">
        <div className="mb-6 flex items-start gap-4">
          {caseStudy.image && (
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white p-1.5">
              <Image
                src={caseStudy.image}
                alt={`${caseStudy.company} logo`}
                width={56}
                height={56}
                className="h-full w-full object-contain"
              />
            </div>
          )}
          <div>
            <p className="text-lg text-[--color-accent]">
              {caseStudy.role} • {caseStudy.company}
            </p>
            <p className="font-mono text-sm text-[--color-muted]">
              {caseStudy.month} • {calculateReadingTime(caseStudy.content)} min read
            </p>
          </div>
        </div>
        <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
          {caseStudy.title}
        </h1>
        <p className="max-w-2xl text-lg text-[--color-muted]">
          {caseStudy.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {caseStudy.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[--color-border] px-3 py-1 font-mono text-xs text-[--color-muted] [html[data-theme=light]_&]:border-[--color-border-light]"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Content */}
      <div className="prose prose-invert max-w-none">
        <MDXRemote source={caseStudy.content} components={mdxComponents} />
      </div>

      {/* Navigation */}
      <nav className="mt-16 border-t border-[--color-border] pt-8 [html[data-theme=light]_&]:border-[--color-border-light]">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          {prevStudy ? (
            <Link
              href={`/project/${prevStudy.slug}`}
              className="group flex flex-col"
            >
              <span className="mb-1 text-sm text-[--color-muted]">
                ← Previous
              </span>
              <span className="font-medium group-hover:text-[--color-accent]">
                {prevStudy.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
          {nextStudy && (
            <Link
              href={`/project/${nextStudy.slug}`}
              className="group flex flex-col sm:items-end sm:text-right"
            >
              <span className="mb-1 text-sm text-[--color-muted]">Next →</span>
              <span className="font-medium group-hover:text-[--color-accent]">
                {nextStudy.title}
              </span>
            </Link>
          )}
        </div>
      </nav>
    </article>
  );
}
