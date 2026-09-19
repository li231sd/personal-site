import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t rule bg-[color-mix(in_srgb,var(--color-paper)_72%,var(--color-rule)_28%)] px-[var(--page-gutter)] py-7 mt-16 dark:bg-[color-mix(in_srgb,var(--color-slate)_88%,var(--color-chalk)_12%)]">
      <div className="mx-auto max-w-6xl grid gap-5 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
        <div className="flex items-baseline gap-3">
          <p className="font-[var(--font-sans-var)] text-sm font-medium text-[var(--color-ink)] dark:text-[var(--color-chalk)]">
            Sahil Singla
          </p>
          <p className="font-[var(--font-mono-var)] text-xs text-[var(--color-ink)] dark:text-[var(--color-chalk-muted)]">
            © {new Date().getFullYear()}
          </p>
        </div>
        <p className="font-[var(--font-mono-var)] text-xs text-[var(--color-ink)] dark:text-[var(--color-chalk-muted)] sm:text-center">
          A working notebook on physics, software, and making things.
        </p>
        <nav
          className="flex flex-wrap gap-x-5 gap-y-2 font-[var(--font-mono-var)] text-xs uppercase tracking-wide sm:justify-self-end"
          aria-label="Footer navigation"
        >
          <Link
            href="/blog"
            className="text-[var(--color-blueprint)] hover:text-[var(--color-blueprint-dark)] dark:text-[var(--color-blueprint-dark)]"
          >
            Writing
          </Link>
          <Link
            href="/projects"
            className="text-[var(--color-blueprint)] hover:text-[var(--color-blueprint-dark)] dark:text-[var(--color-blueprint-dark)]"
          >
            Current work
          </Link>
          <Link
            href="/about"
            className="text-[var(--color-blueprint)] hover:text-[var(--color-blueprint-dark)] dark:text-[var(--color-blueprint-dark)]"
          >
            About
          </Link>
        </nav>
      </div>
    </footer>
  );
}
