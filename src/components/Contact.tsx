"use client";

import { FormEvent, useState } from "react";
import { Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "@/data/content";
import Reveal from "./Reveal";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "someone"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus("ready");
  }

  return (
    <section id="contact" className="dark-orbits bg-ink px-5 py-20 pb-28 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                Contact
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
                got a project?
              </h2>
              <p className="mt-4 max-w-sm text-white/60">
                Open to Senior Frontend / Full-Stack roles and freelance
                collaborations worldwide. Email is the fastest way to reach me.
              </p>

              <div className="mt-8 space-y-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="focus-ring flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-accent"
                >
                  <Mail size={16} />
                  {profile.email}
                </a>
                <a
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className="focus-ring flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-accent"
                >
                  <Phone size={16} />
                  {profile.phone}
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-accent"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </div>
            </div>

            <form
              onSubmit={onSubmit}
              className="rounded-card bg-white p-6 text-ink shadow-lift md:p-8"
            >
              <h3 className="font-display text-2xl font-bold">Let&apos;s Talk</h3>
              <p className="mt-1 text-sm text-muted">
                Tell me about the role or project — I usually reply within a day.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className="mb-1.5 block font-medium text-muted">Name</span>
                  <input
                    name="name"
                    required
                    className="focus-ring w-full rounded-xl border border-line bg-soft px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                    placeholder="Your name"
                  />
                </label>
                <label className="block text-sm">
                  <span className="mb-1.5 block font-medium text-muted">E-mail</span>
                  <input
                    name="email"
                    type="email"
                    required
                    className="focus-ring w-full rounded-xl border border-line bg-soft px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                    placeholder="you@email.com"
                  />
                </label>
                <label className="block text-sm sm:col-span-2">
                  <span className="mb-1.5 block font-medium text-muted">Phone</span>
                  <input
                    name="phone"
                    className="focus-ring w-full rounded-xl border border-line bg-soft px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                    placeholder="+92 ..."
                  />
                </label>
                <label className="block text-sm sm:col-span-2">
                  <span className="mb-1.5 block font-medium text-muted">Message</span>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="focus-ring w-full resize-none rounded-xl border border-line bg-soft px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                    placeholder="Role, timeline, and what you're looking for..."
                  />
                </label>
              </div>
              <button
                type="submit"
                className="focus-ring mt-6 w-full rounded-pill bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent sm:w-auto"
              >
                Send Message
              </button>
              {status === "ready" ? (
                <p className="mt-3 text-xs text-muted">Opening your email client…</p>
              ) : null}
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink px-5 py-10 pb-24 text-white md:px-8 md:pb-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <p className="font-display text-xl font-bold">
            {profile.name.split(" ")[0]}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/50">
            {profile.role} based in {profile.location}.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 text-sm text-white/60">
          <a href={`mailto:${profile.email}`} className="hover:text-accent">
            Email
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent"
          >
            LinkedIn
          </a>
          <a href="/resume" className="hover:text-accent">
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
