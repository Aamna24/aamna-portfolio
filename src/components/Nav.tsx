"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/content";
import { useActiveSection } from "@/hooks/useScrollSpy";

const links = [
  { href: "#about", id: "about", label: "About" },
  { href: "#experience", id: "experience", label: "Experience" },
  { href: "#projects", id: "projects", label: "Projects" },
  { href: "#skills", id: "skills", label: "Skills" },
  { href: "#contact", id: "contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const brand = profile.name.split(" ")[0];

  return (
    <header
      className={`no-print fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-line bg-white/90 shadow-sm backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="focus-ring font-display text-xl font-bold tracking-tight text-ink">
          {brand}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-1 text-sm font-medium md:flex">
          {links.map((link) => {
            const isActive = active === link.id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`focus-ring rounded-pill px-3.5 py-2 transition-colors ${
                    isActive
                      ? "bg-accent-soft text-accent"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="/resume"
            className="focus-ring text-sm font-semibold text-ink transition-colors hover:text-accent"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="focus-ring rounded-pill bg-ink px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent"
          >
            Hire me
          </a>
        </div>

        <button
          type="button"
          className="focus-ring relative z-50 flex h-10 w-10 items-center justify-center text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={`block h-0.5 w-full bg-current transition-transform ${
                open ? "translate-y-[4px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-current transition-transform ${
                open ? "-translate-y-[4px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {open ? (
        <div className="fixed inset-0 z-40 bg-white px-6 pt-24 md:hidden">
          <ul className="flex flex-col gap-5">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="focus-ring font-display text-3xl font-bold text-ink"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume"
                className="focus-ring font-display text-3xl font-bold text-accent"
                onClick={() => setOpen(false)}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
