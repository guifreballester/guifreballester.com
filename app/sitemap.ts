import type { MetadataRoute } from "next";
import { getAllCaseStudies } from "@/lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://guifreballester.com";

  const caseStudies = getAllCaseStudies();
  // getAllCaseStudies is sorted newest-first; use the most recent dated study
  // as the "last modified" for the index pages so it only moves when content does.
  const latest = caseStudies.find((s) => s.date)?.date;
  const latestModified = latest ? new Date(latest) : new Date();

  const caseStudyUrls = caseStudies.map((study) => ({
    url: `${baseUrl}/project/${study.slug}`,
    lastModified: study.date ? new Date(study.date) : latestModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: latestModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/project`,
      lastModified: latestModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...caseStudyUrls,
    {
      url: `${baseUrl}/resume`,
      lastModified: latestModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: latestModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: latestModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
