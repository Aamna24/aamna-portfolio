"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { experience, type Experience as ExperienceType } from "@/data/content";
import Reveal from "./Reveal";

const PREVIEW = 2;

function ExperienceItem({ job, index }: { job: ExperienceType; index: number }) {
  const [open, setOpen] = useState(false);
  const hasMore = job.bullets.length > PREVIEW;
  const visible = open ? job.bullets : job.bullets.slice(0, PREVIEW);

  return (
    <Reveal delay={Math.min(index * 60, 240)}>
      <article className="card-interactive rounded-card border border-white/10 bg-white/[0.03] p-6 md:p-7">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-xl font-bold text-white md:text-2xl">
              {job.role}
            </h3>
            <p className="mt-1 text-sm font-semibold text-accent">{job.company}</p>
          </div>
          <span className="rounded-pill border border-white/15 px-3 py-1 text-xs text-white/55">
            {job.start} — {job.end}
          </span>
        </div>

        <ul className="mt-5 space-y-3">
          {visible.map((bullet) => (
            <li
              key={bullet}
              className="relative pl-4 text-[15px] leading-relaxed text-white/70 before:absolute before:left-0 before:top-[0.65em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent"
            >
              {bullet}
            </li>
          ))}
        </ul>

        {hasMore ? (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="focus-ring mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-white"
            aria-expanded={open}
          >
            {open ? "Show less" : `Show ${job.bullets.length - PREVIEW} more`}
            <ChevronDown
              size={16}
              className={`transition-transform ${open ? "rotate-180" : ""}`}
            />
          </button>
        ) : null}
      </article>
    </Reveal>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="dark-orbits relative overflow-hidden bg-ink px-5 py-20 text-white md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Experience
          </p>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-bold tracking-tight md:text-4xl">
            Roles where speed, craft, and delivery mattered.
          </h2>
        </Reveal>

        <div className="mt-12 space-y-4">
          {experience.map((job, i) => (
            <ExperienceItem key={`${job.company}-${job.start}`} job={job} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
