"use client";

import type { LinkItem } from "@/lib/links";

export default function LinkCard({ link }: { link: LinkItem }) {
  function handleClick() {
    fetch("/api/clicks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ linkId: link.id }),
    }).catch(() => {
      // click tracking is best-effort; don't block navigation on failure
    });
  }

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="block w-full rounded-2xl border border-black/10 bg-white/80 px-5 py-4 text-center font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/5"
    >
      {link.label}
    </a>
  );
}
