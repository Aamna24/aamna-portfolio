"use client";

import { useScrollProgress } from "@/hooks/useScrollSpy";

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      className="no-print fixed left-0 right-0 top-0 z-[60] h-1 bg-transparent"
      aria-hidden
    >
      <div
        className="h-full origin-left bg-accent transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
