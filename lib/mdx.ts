import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { CaseStudy, CaseStudyFrontmatter } from "@/types";

const contentDirectory = path.join(process.cwd(), "content/work");

export function getCaseStudySlugs(): string[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }
  return fs.readdirSync(contentDirectory).filter((file) => file.endsWith(".mdx"));
}

export function getCaseStudyBySlug(slug: string): CaseStudy | null {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(contentDirectory, `${realSlug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const frontmatter = data as CaseStudyFrontmatter;

  return {
    slug: realSlug,
    title: frontmatter.title,
    description: frontmatter.description,
    role: frontmatter.role,
    company: frontmatter.company,
    duration: frontmatter.duration,
    tags: frontmatter.tags || [],
    featured: frontmatter.featured || false,
    image: frontmatter.image,
    content,
  };
}

export function getAllCaseStudies(): CaseStudy[] {
  const slugs = getCaseStudySlugs();
  const caseStudies = slugs
    .map((slug) => getCaseStudyBySlug(slug.replace(/\.mdx$/, "")))
    .filter((study): study is CaseStudy => study !== null)
    .sort((a, b) => {
      // Sort by featured first, then by date (newest first based on duration)
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });

  return caseStudies;
}
