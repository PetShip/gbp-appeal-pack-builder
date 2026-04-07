"use client";

import { useState } from "react";
import Link from "next/link";

interface AccordionItemProps {
  badge?: React.ReactNode;
  title: string;
  link?: { href: string; label: string };
  children: React.ReactNode;
}

export default function AccordionItem({ badge, title, link, children }: AccordionItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-start gap-3 p-5">
        {badge && <div className="shrink-0">{badge}</div>}
        <div className="flex-1 min-w-0">
          <button
            type="button"
            className="flex w-full items-center justify-between gap-2 text-left"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
          >
            <span className="text-sm font-semibold text-slate-900">{title}</span>
            <span
              className="sm:hidden ml-auto shrink-0 flex h-5 w-5 items-center justify-center rounded border border-slate-200 text-slate-400"
              aria-hidden="true"
            >
              {open ? (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M5 2v6M2 5h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              )}
            </span>
          </button>
          <div className={`sm:block sm:mt-2 ${open ? "mt-2" : "hidden"}`}>
            <div className="text-sm text-slate-500 leading-relaxed">{children}</div>
            {link && (
              <Link
                href={link.href}
                className="mt-2 inline-block text-xs font-medium text-emerald-600 hover:text-emerald-700"
              >
                {link.label} →
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
