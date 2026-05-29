import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "Engineer turned Senior Technical PM at SE Ranking — I build API and AI-agent products (and personally shipped the remote MCP). Based in Barcelona.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-2xl">
        <header className="mb-12">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">About</h1>
        </header>

        <div className="mb-8 w-48 overflow-hidden rounded-lg">
          <Image
            src="/guifre.jpeg"
            alt="Guifré Ballester"
            width={192}
            height={192}
            className="aspect-square object-cover"
            priority
          />
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-(--color-muted) [html[data-theme=light]_&]:text-(--color-foreground-light)/80">
          <p>
            I&apos;m a <strong className="text-(--color-foreground) [html[data-theme=light]_&]:text-(--color-foreground-light)">Senior Technical Product Manager</strong> at SE Ranking, based in Barcelona.
            I own the Data API business unit end-to-end — strategy, roadmap, GTM, pricing and P&amp;L — and I build, not just spec:
            I personally shipped our remote <strong className="text-(--color-foreground) [html[data-theme=light]_&]:text-(--color-foreground-light)">MCP server</strong> (now ~30% of signups) and the AI Search (AEO) API, and I use Claude Code daily for the PM work.
          </p>

          <section>
            <h2 className="mb-4 text-xl font-bold text-(--color-foreground) [html[data-theme=light]_&]:text-(--color-foreground-light)">
              Background
            </h2>
            <p>
              I started my career as a Data Scientist at the university, helping
              stakeholders understand datapoints and leading consultancy projects
              with prospects—ultimately closing new deals. This foundation shapes
              how I approach problems: I can go deep on data and architecture
              decisions, speak the language of engineering teams, and translate
              complex technical concepts into business outcomes.
            </p>
            <p className="mt-4">
              I later earned a Master&apos;s in Data Science, which gave me a solid
              grounding in ML/AI—skills that are increasingly relevant as I work
              on AI-powered products and LLM integrations.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-(--color-foreground) [html[data-theme=light]_&]:text-(--color-foreground-light)">
              Career Journey
            </h2>
            <p>
              My career has been an intentional progression through different company stages
              and technical domains. I started by co-founding a startup to understand building
              from zero. Then I joined structured environments to learn process and scale.
              At Twilio and Eventbrite, I worked on enterprise-grade platforms serving millions.
              Each move was designed to deepen my expertise in developer platforms and API products.
            </p>
            <p className="mt-4">
              This path has given me range: I can operate in early-stage ambiguity where the product
              doesn&apos;t exist yet, and I can navigate Fortune 500 complexity where the challenge is
              alignment across dozens of teams. Both require different muscles, and I&apos;ve trained both.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-(--color-foreground) [html[data-theme=light]_&]:text-(--color-foreground-light)">
              PM Philosophy
            </h2>
            <p>
              I&apos;m a <strong className="text-(--color-foreground) [html[data-theme=light]_&]:text-(--color-foreground-light)">0-to-1 builder</strong>. I thrive in ambiguous environments where
              the product doesn&apos;t exist yet and the market isn&apos;t fully defined.
              My approach is grounded in:
            </p>
            <ul className="mt-4 ml-4 list-disc space-y-2">
              <li>
                <strong className="text-(--color-foreground) [html[data-theme=light]_&]:text-(--color-foreground-light)">Customer validation</strong>: Every feature starts with talking to
                users. I&apos;ve learned to validate before building.
              </li>
              <li>
                <strong className="text-(--color-foreground) [html[data-theme=light]_&]:text-(--color-foreground-light)">Metrics obsession</strong>: If we can&apos;t measure it, we can&apos;t
                improve it. I define success metrics early and track them
                religiously.
              </li>
              <li>
                <strong className="text-(--color-foreground) [html[data-theme=light]_&]:text-(--color-foreground-light)">Technical depth</strong>: I can read code, understand system
                architecture, and have productive conversations with engineers
                about trade-offs.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-(--color-foreground) [html[data-theme=light]_&]:text-(--color-foreground-light)">
              What Others Say
            </h2>
            <div className="space-y-4">
              <blockquote className="rounded-lg border-l-2 border-(--color-accent) bg-(--color-border)/20 p-4 [html[data-theme=light]_&]:bg-(--color-border-light)/50">
                <p className="mb-2 italic">
                  &quot;Guifré is one of the most technically credible PMs I&apos;ve worked with.
                  He can dive into architecture discussions and earn engineers&apos; trust while
                  keeping business goals front and center.&quot;
                </p>
                <footer className="text-sm text-(--color-foreground) [html[data-theme=light]_&]:text-(--color-foreground-light)">
                  — Engineering Lead, Eventbrite
                </footer>
              </blockquote>
              <blockquote className="rounded-lg border-l-2 border-(--color-accent) bg-(--color-border)/20 p-4 [html[data-theme=light]_&]:bg-(--color-border-light)/50">
                <p className="mb-2 italic">
                  &quot;He has a rare ability to simplify complex problems and rally
                  cross-functional teams around a clear vision. Our API launch wouldn&apos;t
                  have happened without his leadership.&quot;
                </p>
                <footer className="text-sm text-(--color-foreground) [html[data-theme=light]_&]:text-(--color-foreground-light)">
                  — Head of Product, SE Ranking
                </footer>
              </blockquote>
            </div>
            <p className="mt-4 text-sm">
              <a
                href="https://www.linkedin.com/in/guifre-ballester/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-(--color-accent) hover:underline"
              >
                See recommendations on LinkedIn →
              </a>
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-(--color-foreground) [html[data-theme=light]_&]:text-(--color-foreground-light)">
              Personal
            </h2>
            <p>
              Outside of work, I&apos;m an endurance sports enthusiast. I&apos;ve completed
              an Ironman triathlon in under 11 hours—an experience that taught me
              a lot about pacing, mental resilience, and the importance of
              consistent training over heroic efforts.
            </p>
            <p className="mt-4">
              I live in Barcelona with its perfect blend of tech scene, outdoor
              activities, and Mediterranean lifestyle.
            </p>
            <p className="mt-4">
              I also build for fun. Recently I shipped{" "}
              <a
                href="https://theimpostor.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-(--color-foreground) underline decoration-(--color-accent) underline-offset-2 transition-colors hover:text-(--color-accent) [html[data-theme=light]_&]:text-(--color-foreground-light)"
              >
                The Impostor
              </a>
              , a free social-deduction party game you play right in the browser
              by passing one phone around the table—3 to 20 players, available in
              English, Spanish, French, and Catalan.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
