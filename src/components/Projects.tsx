"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { projects, type Project } from "@/data/content";
import Reveal from "./Reveal";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal delay={Math.min(index * 70, 280)}>
      <article className="card-interactive flex h-full flex-col rounded-card border border-line bg-white p-6 md:p-7">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-faint">
              {project.company}
            </p>
            <h3 className="mt-2 font-display text-xl font-bold text-ink md:text-2xl">
              {project.title}
            </h3>
          </div>
          <span className="shrink-0 rounded-pill bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
            {project.impact}
          </span>
        </div>

        <p
          className={`mt-4 text-sm leading-relaxed text-muted ${
            open ? "" : "line-clamp-2"
          }`}
        >
          {project.description}
        </p>

        <div
          className={`grid transition-all duration-300 ${
            open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-faint">
              Stack
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-pill border border-line px-2.5 py-1 text-xs font-medium text-ink"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="focus-ring mt-5 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-ink transition-colors hover:text-accent"
          aria-expanded={open}
        >
          {open ? "Hide details" : "View details"}
          <ChevronDown
            size={16}
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-soft px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Projects
          </p>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Selected production work
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            A selection of production work from recent roles.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
