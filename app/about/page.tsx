import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "Engineer turned PM, bridging technical depth with commercial success. Based in Barcelona.",
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

        <div className="space-y-6 text-lg leading-relaxed text-[--color-muted] [html[data-theme=light]_&]:text-[--color-foreground-light]/80">
          <p>
            I&apos;m a <strong className="text-[--color-foreground] [html[data-theme=light]_&]:text-[--color-foreground-light]">Senior Technical Product Manager</strong> based in Barcelona, Spain.
            My work focuses on building API products and developer platforms that
            make complex infrastructure accessible.
          </p>

          <section>
            <h2 className="mb-4 text-xl font-bold text-[--color-foreground] [html[data-theme=light]_&]:text-[--color-foreground-light]">
              Background
            </h2>
            <p>
              I started my career as an Electrical Engineer before transitioning
              into product management. This technical foundation shapes how I
              approach problems—I can go deep on architecture decisions, speak
              the language of engineering teams, and translate complex technical
              concepts for stakeholders.
            </p>
            <p className="mt-4">
              I later earned a Master&apos;s in Data Science, which gave me a solid
              grounding in ML/AI—skills that are increasingly relevant as I work
              on AI-powered products and LLM integrations.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-[--color-foreground] [html[data-theme=light]_&]:text-[--color-foreground-light]">
              PM Philosophy
            </h2>
            <p>
              I&apos;m a <strong className="text-[--color-foreground] [html[data-theme=light]_&]:text-[--color-foreground-light]">0-to-1 builder</strong>. I thrive in ambiguous environments where
              the product doesn&apos;t exist yet and the market isn&apos;t fully defined.
              My approach is grounded in:
            </p>
            <ul className="mt-4 ml-4 list-disc space-y-2">
              <li>
                <strong className="text-[--color-foreground] [html[data-theme=light]_&]:text-[--color-foreground-light]">Customer validation</strong>: Every feature starts with talking to
                users. I&apos;ve learned to validate before building.
              </li>
              <li>
                <strong className="text-[--color-foreground] [html[data-theme=light]_&]:text-[--color-foreground-light]">Metrics obsession</strong>: If we can&apos;t measure it, we can&apos;t
                improve it. I define success metrics early and track them
                religiously.
              </li>
              <li>
                <strong className="text-[--color-foreground] [html[data-theme=light]_&]:text-[--color-foreground-light]">Technical depth</strong>: I can read code, understand system
                architecture, and have productive conversations with engineers
                about trade-offs.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold text-[--color-foreground] [html[data-theme=light]_&]:text-[--color-foreground-light]">
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
          </section>
        </div>
      </div>
    </div>
  );
}
