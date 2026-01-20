import type { Metadata } from "next";
import Link from "next/link";
import { CopyButton } from "@/components/ui/copy-button";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Guifré Ballester.",
};

const contactMethods = [
  {
    label: "Email",
    value: "guifre.ballester@gmail.com",
    href: "mailto:guifre.ballester@gmail.com",
    copyable: true,
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/guifre-ballester",
    href: "https://linkedin.com/in/guifre-ballester",
    external: true,
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Barcelona, Spain",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-2xl">
        <header className="mb-12">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">Contact</h1>
          <p className="text-lg text-[--color-muted]">
            I&apos;m always open to discussing product roles, interesting projects,
            or opportunities to collaborate.
          </p>
        </header>

        <div className="space-y-6">
          {contactMethods.map((method) => (
            <div
              key={method.label}
              className="flex items-start gap-4 rounded-lg border border-[--color-border] p-6 [html[data-theme=light]_&]:border-[--color-border-light]"
            >
              <div className="text-[--color-accent]">{method.icon}</div>
              <div className="flex-1">
                <h2 className="mb-1 font-semibold">{method.label}</h2>
                {method.href ? (
                  <Link
                    href={method.href}
                    target={method.external ? "_blank" : undefined}
                    rel={method.external ? "noopener noreferrer" : undefined}
                    className="text-[--color-muted] hover:text-[--color-accent]"
                  >
                    {method.value}
                    {method.external && (
                      <svg
                        className="ml-1 inline h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                    )}
                  </Link>
                ) : (
                  <p className="text-[--color-muted]">{method.value}</p>
                )}
              </div>
              {method.copyable && (
                <CopyButton text={method.value} label="Copy email" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-lg border border-[--color-border] bg-[--color-border]/20 p-6 [html[data-theme=light]_&]:border-[--color-border-light] [html[data-theme=light]_&]:bg-[--color-border-light]/50">
          <h2 className="mb-2 font-semibold">Prefer email?</h2>
          <p className="text-[--color-muted]">
            Feel free to reach out directly. I typically respond within 24-48
            hours.
          </p>
        </div>
      </div>
    </div>
  );
}
