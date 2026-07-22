import { skillGroups } from "@/data/content";
import Reveal from "./Reveal";

const categoryLabels: Record<string, string> = {
  "languages-frameworks": "Languages & Frameworks",
  "ui-styling": "UI & Styling",
  testing: "Testing",
  practices: "Practices",
};

export default function Skills() {
  return (
    <section id="skills" className="bg-white px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Skills
          </p>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Tools and practices used to ship.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 70}>
              <div className="card-interactive h-full rounded-card border border-line bg-soft p-5">
                <h3 className="border-b border-line pb-3 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
                  {categoryLabels[group.category] ?? group.category}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg bg-white px-3 py-2 text-[14px] font-medium text-ink shadow-sm shadow-black/5 transition-colors hover:bg-accent-soft hover:text-accent"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
