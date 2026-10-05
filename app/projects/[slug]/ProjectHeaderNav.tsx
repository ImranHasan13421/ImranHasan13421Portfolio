"use client";

import Link from "next/link";
import ThemeToggle from "../../components/ThemeToggle";

interface ProjectHeaderNavProps {
  githubUrl: string;
}

export default function ProjectHeaderNav({ githubUrl }: ProjectHeaderNavProps) {
  return (
    <nav className="fixed left-1/2 top-4 z-50 flex w-[calc(100%-24px)] max-w-6xl -translate-x-1/2 items-center justify-between rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)]/85 px-4 py-3 backdrop-blur-xl shadow-lg transition-colors sm:px-6">
      <Link href="/" className="flex items-center gap-3 group">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--primary-blue)] text-sm font-bold text-white shadow-[0_0_20px_rgba(29,111,232,0.35)] transition-transform group-hover:scale-105">
          IH
        </div>

        <div className="hidden sm:block">
          <p className="text-sm font-semibold text-[var(--text-primary)]">MD. Imran Hasan</p>
          <p className="text-[10px] tracking-[0.18em] text-[var(--text-secondary)]">
            SOFTWARE DEVELOPER
          </p>
        </div>
      </Link>

      <div className="flex items-center gap-3">
        <Link
          href="/#projects"
          className="rounded-xl border border-transparent px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)] transition-colors hover:border-[var(--border-color)] hover:text-[var(--text-primary)]"
        >
          ← Projects
        </Link>

        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] px-3.5 py-1.5 text-xs font-semibold text-[var(--text-primary)] transition-all hover:border-[var(--primary-blue)]"
        >
          GitHub ↗
        </a>

        <ThemeToggle />
      </div>
    </nav>
  );
}
