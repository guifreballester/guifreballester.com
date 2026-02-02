import type { Metadata } from "next";
import { TimelineItem } from "@/components/ui/timeline-item";
import { SkillBadge } from "@/components/ui/skill-badge";
import { PrintButton } from "@/components/ui/print-button";
import { DownloadPDFButton } from "@/components/ui/download-pdf-button";
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
    description: "Led cross-functional team of 8 engineers and 2 designers. Coordinated with Sales, Marketing, and Customer Success to launch new product line.",
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
    description: "Built coalition of 12 engineering leads across 40 teams to drive architectural migration. Mentored 2 associate PMs.",
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
    description: "Owned developer experience for 200+ engineers. Led adoption of platform tools across 15 product teams.",
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
  {
    category: "Leadership & Influence",
    items: ["Cross-functional Leadership", "Stakeholder Management", "Technical Mentorship", "Coalition Building"],
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
            <DownloadPDFButton
              workExperience={workExperience}
              education={education}
              skills={skills}
              languages={languages}
            />
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
