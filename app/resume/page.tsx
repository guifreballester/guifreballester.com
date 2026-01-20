import type { Metadata } from "next";
import Link from "next/link";
import { TimelineItem } from "@/components/ui/timeline-item";
import { SkillBadge } from "@/components/ui/skill-badge";
import { PrintButton } from "@/components/ui/print-button";
import type { WorkExperience, Education, Skill } from "@/types";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "6+ years of experience as a Technical Product Manager building API products, developer platforms, and cloud infrastructure.",
};

const workExperience: WorkExperience[] = [
  {
    role: "Senior Technical Product Manager - API",
    company: "SE Ranking",
    duration: "Apr 2025 - Present",
    logo: "/logos/seranking.png",
    projects: [
      { title: "MCP Driving 30% of Signups", href: "/project/mcp-integration" },
      { title: "AI Shift in SEO", href: "/project/ai-search-api" },
      { title: "Repricing to Create a Business", href: "/project/pricing-revamp" },
      { title: "B2B SEO API: Ship in Under 2 Months", href: "/project/api-launch" },
    ],
  },
  {
    role: "Senior Product Manager - Platform Engineering",
    company: "Eventbrite",
    duration: "Oct 2023 - Mar 2025",
    logo: "/logos/eventbrite.png",
    projects: [
      { title: "Fortune 500 Architecture Migration", href: "/project/polyrepo-migration" },
      { title: "Repo Provisioning in 30 Minutes", href: "/project/repo-creation" },
    ],
  },
  {
    role: "Technical Product Manager",
    company: "Getir",
    duration: "Oct 2022 - Oct 2023",
    logo: "/logos/getir.png",
    projects: [
      { title: "60% More Releases", href: "/project/gitops-migration" },
      { title: "Implemented IDP for Faster Onboarding", href: "/project/backstage-idp" },
    ],
  },
  {
    role: "Product Manager - Video",
    company: "Twilio",
    duration: "Oct 2021 - Sep 2022",
    logo: "/logos/twilio.png",
    projects: [
      { title: "Post-COVID Video Streaming", href: "/project/twilio-live" },
    ],
  },
  {
    role: "Product Manager",
    company: "Stayforlong",
    duration: "Jan 2020 - Oct 2021",
  },
  {
    role: "Product Owner",
    company: "PayFit",
    duration: "Jan 2019 - Jan 2020",
  },
  {
    role: "Co-founder",
    company: "Skuld",
    duration: "Aug 2018 - Nov 2019",
  },
];

const education: Education[] = [
  {
    degree: "M.Sc. Data Science",
    institution: "Universitat Politècnica de Catalunya",
    duration: "2017 - 2021",
  },
  {
    degree: "B.Sc. Electrical Engineering",
    institution: "Universitat Politècnica de Catalunya",
    duration: "2011 - 2016",
  },
];

const skills: Skill[] = [
  {
    category: "Cloud & Infrastructure",
    items: ["AWS", "GCP", "Azure", "CI/CD", "GitOps", "Kubernetes", "Terraform", "IaC"],
  },
  {
    category: "Developer Experience",
    items: ["Backstage IDP", "API Design", "Developer Portals", "Observability", "Microservices"],
  },
  {
    category: "AI/ML & Automation",
    items: ["Machine Learning", "LLM/Agent Automation", "Data Analytics", "ETL"],
  },
  {
    category: "Product & Commercial",
    items: ["0-to-1 Launches", "PMF", "Customer Validation", "ARR/NDR", "Go-to-Market"],
  },
];

const languages = ["English (Proficient)", "Spanish (Native)", "Catalan (Native)"];

export default function ResumePage() {
  return (
    <div className="container py-12 md:py-16">
      <header className="mb-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="mb-2 text-3xl font-bold md:text-4xl">Resume</h1>
            <p className="text-lg text-[--color-muted]">
              6+ years building technical products
            </p>
          </div>
          <div className="flex gap-3 no-print">
            <PrintButton />
            <Link
              href="/resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-lg bg-[--color-accent] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[--color-accent-hover]"
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
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              Download PDF
            </Link>
          </div>
        </div>
      </header>

      <div className="grid gap-12 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Work Experience */}
          <section className="mb-12">
            <h2 className="mb-6 text-xl font-bold">Work Experience</h2>
            <div>
              {workExperience.map((exp, index) => (
                <TimelineItem
                  key={`${exp.company}-${exp.role}`}
                  experience={exp}
                  isLast={index === workExperience.length - 1}
                />
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="mb-6 text-xl font-bold">Education</h2>
            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.degree}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="font-semibold">{edu.degree}</h3>
                    <span className="font-mono text-sm text-[--color-muted]">
                      {edu.duration}
                    </span>
                  </div>
                  <p className="text-[--color-muted]">{edu.institution}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Skills */}
          <section>
            <h2 className="mb-4 text-xl font-bold">Skills</h2>
            <div className="space-y-4">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category}>
                  <h3 className="mb-2 text-sm font-medium text-[--color-muted]">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <SkillBadge key={skill}>{skill}</SkillBadge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Languages */}
          <section>
            <h2 className="mb-4 text-xl font-bold">Languages</h2>
            <ul className="space-y-2 text-[--color-muted]">
              {languages.map((lang) => (
                <li key={lang}>{lang}</li>
              ))}
            </ul>
          </section>

          {/* Interests */}
          <section>
            <h2 className="mb-4 text-xl font-bold">Interests</h2>
            <p className="text-[--color-muted]">
              AI/ML applications, DevOps tooling, Endurance sports (Ironman
              finisher, sub-11hr)
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
