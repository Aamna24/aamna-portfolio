import { Check } from "lucide-react";
import { certifications, education, profile } from "@/data/content";
import Reveal from "./Reveal";

const highlights = [
  "Architects and ships production React, Next.js, and React Native apps end-to-end.",
  "Delivers measurable wins — faster loads, reusable systems, and ops tooling.",
  "Partners cross-functionally and raises quality through reviews and testing.",
  "Comfortable across web, mobile WebView integrations, and responsive UI systems.",
];

export default function About() {
  return (
    <section id="about" className="bg-white px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl items-start gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            About
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Senior engineer. Measurable impact.
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted md:text-base">
            {profile.summary}
          </p>
          <ul className="mt-8 space-y-4">
            {highlights.map((item) => (
              <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-ink">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                  <Check size={12} strokeWidth={3} />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <div className="space-y-4">
            <div className="rounded-card border border-line bg-soft p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-faint">
                Education
              </p>
              <p className="mt-3 font-display text-xl font-semibold text-ink">
                {education.degree}
              </p>
              <p className="mt-1 text-sm text-muted">
                {education.school} · {education.date}
              </p>
            </div>
            <div className="rounded-card border border-line bg-white p-6 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-faint">
                Certifications
              </p>
              <ul className="mt-4 space-y-3">
                {certifications.map((cert) => (
                  <li key={cert.name} className="border-t border-line pt-3 first:border-0 first:pt-0">
                    <p className="text-sm font-semibold text-ink">{cert.name}</p>
                    <p className="text-xs text-muted">
                      {cert.issuer} · {cert.date}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
