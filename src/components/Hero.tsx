import { ArrowRight, FileDown, MapPin, Sparkles } from "lucide-react";
import { profile, stats } from "@/data/content";

export default function Hero() {
  const [first, ...rest] = profile.name.split(" ");
  const last = rest.join(" ");

  return (
    <section id="top" className="relative overflow-hidden bg-white px-5 pb-20 pt-28 md:px-8 md:pb-28 md:pt-36">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-24 h-72 w-72 rounded-full bg-accent/[0.07] blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div>
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-pill border border-line bg-soft px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Open to opportunities worldwide
          </div>

          <h1
            className="animate-fade-up mt-6 font-display text-[clamp(2.6rem,7vw,4.75rem)] font-bold leading-[1.05] tracking-tight text-ink"
            style={{ animationDelay: "80ms" }}
          >
            Hey, This is {first}{" "}
            <span className="text-accent">{last}</span>
          </h1>

          <p
            className="animate-fade-up mt-4 text-lg text-muted md:text-xl"
            style={{ animationDelay: "140ms" }}
          >
            {profile.role}
          </p>
          <p
            className="animate-fade-up mt-2 flex items-center gap-1.5 text-sm text-faint"
            style={{ animationDelay: "180ms" }}
          >
            <MapPin size={14} className="text-accent" />
            {profile.location} · Remote-friendly
          </p>
          <p
            className="animate-fade-up mt-5 max-w-lg text-[15px] leading-relaxed text-muted"
            style={{ animationDelay: "220ms" }}
          >
            {profile.tagline}. {profile.yearsExperience}+ years shipping production web &amp; mobile products.
          </p>

          <div
            className="animate-fade-up mt-8 flex flex-wrap gap-3"
            style={{ animationDelay: "280ms" }}
          >
            <a
              href="#contact"
              className="focus-ring group inline-flex items-center gap-2 rounded-pill bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent"
            >
              Let&apos;s Talk
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="/resume"
              className="focus-ring inline-flex items-center gap-2 rounded-pill border border-line bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <FileDown size={16} />
              Download Resume
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center rounded-pill px-4 py-3 text-sm font-semibold text-muted transition-colors hover:text-accent"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div
          className="animate-scale-in w-full"
          style={{ animationDelay: "200ms" }}
        >
          <div className="rounded-card border border-line bg-ink p-6 text-white shadow-lift md:p-7">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
                  Career snapshot
                </p>
                <p className="mt-2 font-display text-3xl font-bold tracking-tight">
                  {profile.yearsExperience}+ years
                </p>
                <p className="mt-1 text-sm text-white/55">shipping production apps</p>
              </div>
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-white">
                <Sparkles size={22} />
              </span>
            </div>

            <ul className="mt-6 space-y-3">
              {stats.map((stat) => (
                <li
                  key={stat.label}
                  className="flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 transition-colors hover:border-accent/40 hover:bg-white/[0.07]"
                >
                  <div>
                    <p className="text-sm font-semibold text-white">{stat.label}</p>
                    <p className="mt-0.5 text-xs text-white/45">{stat.detail}</p>
                  </div>
                  <p className="shrink-0 font-display text-2xl font-bold text-accent">
                    {stat.value}
                    {stat.suffix}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
