"use client";

import { jsPDF } from "jspdf";
import type { WorkExperience, Education, Skill } from "@/types";

interface DownloadPDFButtonProps {
  workExperience: WorkExperience[];
  education: Education[];
  skills: Skill[];
  languages: string[];
}

export function DownloadPDFButton({
  workExperience,
  education,
  skills,
  languages,
}: DownloadPDFButtonProps) {
  const generatePDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 20;
    const contentWidth = pageWidth - margin * 2;
    let y = 20;

    const checkPageBreak = (neededSpace: number) => {
      if (y + neededSpace > 280) {
        doc.addPage();
        y = 20;
      }
    };

    // Header
    doc.setFontSize(24);
    doc.setFont("helvetica", "bold");
    doc.text("Guifre Ballester", margin, y);
    y += 8;

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(100);
    doc.text("Senior Technical Product Manager", margin, y);
    y += 6;
    doc.setFontSize(10);
    doc.text("Barcelona, Spain  |  ", margin, y);
    const locationWidth = doc.getTextWidth("Barcelona, Spain  |  ");
    doc.setTextColor(0, 102, 204);
    doc.textWithLink("linkedin.com/in/guifre-ballester", margin + locationWidth, y, {
      url: "https://linkedin.com/in/guifre-ballester",
    });
    doc.setTextColor(100);
    y += 12;

    // Introduction
    doc.setTextColor(0);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    const intro =
      "Technical Product Manager with 6+ years of experience building API products, developer platforms, and cloud infrastructure. Engineering background (B.Sc. Electrical Engineering, M.Sc. Data Science) with deep expertise in platform engineering, DevOps tooling, and AI/ML applications. Track record of shipping 0-to-1 products at companies including Twilio, Eventbrite, and SE Ranking.";
    const introLines = doc.splitTextToSize(intro, contentWidth);
    doc.text(introLines, margin, y);
    y += introLines.length * 5 + 10;

    // Divider
    doc.setDrawColor(200);
    doc.line(margin, y, pageWidth - margin, y);
    y += 10;

    // Work Experience
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0);
    doc.text("Work Experience", margin, y);
    y += 8;

    workExperience.forEach((exp) => {
      checkPageBreak(25);

      doc.setFontSize(11);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(0);
      doc.text(exp.role, margin, y);

      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(100);
      const durationWidth = doc.getTextWidth(exp.duration);
      doc.text(exp.duration, pageWidth - margin - durationWidth, y);
      y += 5;

      doc.setFontSize(10);
      doc.setTextColor(80);
      doc.text(exp.company, margin, y);
      y += 6;

      if (exp.projects && exp.projects.length > 0) {
        doc.setFontSize(9);
        exp.projects.forEach((project) => {
          checkPageBreak(6);
          doc.setTextColor(60);
          doc.text("• ", margin + 3, y);
          const bulletWidth = doc.getTextWidth("• ");
          doc.setTextColor(0, 102, 204);
          doc.textWithLink(project.title, margin + 3 + bulletWidth, y, {
            url: `https://guifreballester.com${project.href}`,
          });
          y += 4.5;
        });
      }

      y += 4;
    });

    y += 6;

    // Education
    checkPageBreak(40);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0);
    doc.text("Education", margin, y);
    y += 8;

    education.forEach((edu) => {
      checkPageBreak(15);

      doc.setFontSize(11);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(0);
      doc.text(edu.degree, margin, y);

      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(100);
      const durationWidth = doc.getTextWidth(edu.duration);
      doc.text(edu.duration, pageWidth - margin - durationWidth, y);
      y += 5;

      doc.setFontSize(10);
      doc.setTextColor(80);
      doc.text(edu.institution, margin, y);
      y += 8;
    });

    y += 6;

    // Skills
    checkPageBreak(50);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0);
    doc.text("Skills", margin, y);
    y += 8;

    skills.forEach((skillGroup) => {
      checkPageBreak(15);

      doc.setFontSize(10);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(60);
      doc.text(skillGroup.category, margin, y);
      y += 5;

      doc.setFontSize(9);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(0);
      const skillsText = skillGroup.items.join("  |  ");
      const skillLines = doc.splitTextToSize(skillsText, contentWidth);
      doc.text(skillLines, margin, y);
      y += skillLines.length * 4 + 4;
    });

    y += 4;

    // Languages
    checkPageBreak(25);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0);
    doc.text("Languages", margin, y);
    y += 8;

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(0);
    doc.text(languages.join("  |  "), margin, y);
    y += 10;

    // Interests
    checkPageBreak(25);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0);
    doc.text("Interests", margin, y);
    y += 8;

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(0);
    doc.text(
      "AI/ML applications, DevOps tooling, Endurance sports (Ironman finisher, sub-11hr)",
      margin,
      y
    );

    // Save
    doc.save("guifre-ballester-resume.pdf");
  };

  return (
    <button
      onClick={generatePDF}
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
    </button>
  );
}
