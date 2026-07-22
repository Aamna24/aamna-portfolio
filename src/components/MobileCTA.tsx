"use client";

import { FileDown, Mail } from "lucide-react";
import { profile } from "@/data/content";

export default function MobileCTA() {
  return (
    <div className="no-print fixed inset-x-0 bottom-0 z-50 border-t border-line bg-white/95 p-3 backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-lg gap-2">
        <a
          href="/resume"
          className="focus-ring inline-flex flex-1 items-center justify-center gap-2 rounded-pill border border-line bg-soft px-4 py-3 text-sm font-semibold text-ink"
        >
          <FileDown size={16} />
          Resume
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="focus-ring inline-flex flex-1 items-center justify-center gap-2 rounded-pill bg-accent px-4 py-3 text-sm font-semibold text-white"
        >
          <Mail size={16} />
          Email
        </a>
      </div>
    </div>
  );
}
