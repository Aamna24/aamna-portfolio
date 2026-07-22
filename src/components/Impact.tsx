import { stats } from "@/data/content";
import CountUp from "./CountUp";
import Reveal from "./Reveal";

export default function Impact() {
  return (
    <section aria-label="Impact" className="border-y border-line bg-soft">
      <div className="mx-auto grid max-w-6xl gap-4 px-5 py-10 sm:grid-cols-3 md:gap-5 md:px-8 md:py-12">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 80}>
            <div className="card-interactive rounded-card border border-line bg-white px-6 py-7">
              <p className="font-display text-4xl font-bold tracking-tight text-accent md:text-5xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-base font-semibold text-ink">{stat.label}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{stat.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
