import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { CaseStudy, CaseStudyFrontmatter } from "@/types";

const contentDirectory = path.join(process.cwd(), "content/project");

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
    month: frontmatter.month,
    tags: frontmatter.tags || [],
    featured: frontmatter.featured || false,
    image: frontmatter.image,
    content,
  };
}

function parseMonth(month: string): Date {
  // Parse "Apr 2024" format to Date
  const [mon, year] = month.split(" ");
  const monthMap: Record<string, number> = {
    Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
    Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
  };
  return new Date(parseInt(year), monthMap[mon] || 0);
}

export function getAllCaseStudies(): CaseStudy[] {
  const slugs = getCaseStudySlugs();
  const caseStudies = slugs
    .map((slug) => getCaseStudyBySlug(slug.replace(/\.mdx$/, "")))
    .filter((study): study is CaseStudy => study !== null)
    .sort((a, b) => {
      // Sort by date (newest first)
      const dateA = parseMonth(a.month);
      const dateB = parseMonth(b.month);
      return dateB.getTime() - dateA.getTime();
    });

  return caseStudies;
}
