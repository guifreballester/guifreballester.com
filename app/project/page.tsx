import type { Metadata } from "next";
import { getAllCaseStudies } from "@/lib/mdx";
import { CaseStudyCard } from "@/components/ui/case-study-card";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies from 6+ years building API products, developer platforms, and cloud infrastructure.",
};

export default function WorkPage() {
  const caseStudies = getAllCaseStudies();

  return (
    <div className="container py-12 md:py-16">
      <header className="mb-12">
        <h1 className="mb-4 text-3xl font-bold md:text-4xl">Projects</h1>
        <p className="max-w-2xl text-lg text-[--color-muted]">
          Case studies from 6+ years building API products, developer platforms,
          and cloud infrastructure.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {caseStudies.map((caseStudy) => (
          <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
        ))}
      </div>
    </div>
  );
}
