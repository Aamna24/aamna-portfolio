"use client";

import { Printer, ArrowLeft } from "lucide-react";
import Link from "next/link";
import {
  certifications,
  education,
  experience,
  profile,
  projects,
  skillGroups,
  stats,
} from "@/data/content";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-soft text-ink">
      <div className="no-print mx-auto flex max-w-3xl items-center justify-between gap-4 px-5 py-6">
        <Link
          href="/"
          className="focus-ring inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-accent"
        >
          <ArrowLeft size={16} />
          Back to portfolio
        </Link>
        <button
          type="button"
          onClick={() => window.print()}
          className="focus-ring inline-flex items-center gap-2 rounded-pill bg-ink px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent"
        >
          <Printer size={16} />
          Download / Print PDF
        </button>
      </div>

      <article className="mx-auto mb-16 max-w-3xl bg-white px-8 py-10 shadow-soft print:mb-0 print:max-w-none print:shadow-none md:px-12 md:py-12">
        <header className="border-b border-line pb-6">
          <h1 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            {profile.name}
          </h1>
          <p className="mt-1 text-lg text-accent">{profile.role}</p>
          <p className="mt-3 text-sm text-muted">
            {profile.location} · {profile.email} · {profile.phone}
            {profile.linkedin ? ` · ${profile.linkedin}` : ""}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted">{profile.summary}</p>
        </header>

        <section className="mt-8">
          <h2 className="font-display text-lg font-bold uppercase tracking-wide text-ink">
            Impact
          </h2>
          <ul className="mt-3 space-y-1 text-sm text-muted">
            {stats.map((s) => (
              <li key={s.label}>
                <strong className="text-ink">
                  {s.value}
                  {s.suffix}
                </strong>{" "}
                {s.label} — {s.detail}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="font-display text-lg font-bold uppercase tracking-wide text-ink">
            Experience
          </h2>
          <div className="mt-4 space-y-5">
            {experience.map((job) => (
              <div key={`${job.company}-${job.start}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-semibold">
                    {job.role} · {job.company}
                  </p>
                  <p className="text-xs text-faint">
                    {job.start} — {job.end}
                  </p>
                </div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="font-display text-lg font-bold uppercase tracking-wide text-ink">
            Selected work
          </h2>
          <ul className="mt-3 space-y-3">
            {projects.map((p) => (
              <li key={p.title} className="text-sm">
                <span className="font-semibold text-ink">{p.title}</span>
                <span className="text-muted"> — {p.company}. </span>
                <span className="text-muted">{p.description}</span>
                <span className="mt-0.5 block text-xs text-faint">
                  {p.impact} · {p.tech.join(", ")}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="font-display text-lg font-bold uppercase tracking-wide text-ink">
            Skills
          </h2>
          <div className="mt-3 space-y-2 text-sm text-muted">
            {skillGroups.map((g) => (
              <p key={g.category}>
                <strong className="text-ink">{g.category.replace(/-/g, " ")}:</strong>{" "}
                {g.items.join(", ")}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="font-display text-lg font-bold uppercase tracking-wide text-ink">
            Education &amp; certifications
          </h2>
          <p className="mt-3 text-sm text-muted">
            {education.degree}, {education.school} ({education.date})
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
            {certifications.map((c) => (
              <li key={c.name}>
                {c.name} — {c.issuer} ({c.date})
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}
