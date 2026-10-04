import Link from "next/link";
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react/ssr";

const navLink =
  "site-link text-[var(--color-blueprint)] dark:text-[var(--color-blueprint-dark)]";

export default function Footer() {
  return (
    <footer className="site-footer border-t rule bg-[color-mix(in_srgb,var(--color-paper)_72%,var(--color-rule)_28%)] py-7 dark:bg-[color-mix(in_srgb,var(--color-slate)_88%,var(--color-chalk)_12%)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-[var(--page-gutter)] text-center lg:flex-row lg:justify-between lg:text-left">
        {/* Identity + tagline */}
        <div className="flex flex-col items-center gap-2 lg:items-start">
          <div className="flex items-baseline gap-2">
            <p className="font-[var(--font-sans-var)] text-sm font-medium leading-4 text-[var(--color-ink)] dark:text-[var(--color-chalk)]">
              Sahil Singla
            </p>
            <p className="font-[var(--font-mono-var)] text-xs leading-4 text-[var(--color-ink)] dark:text-[var(--color-chalk-muted)]">
              © {new Date().getFullYear()}
            </p>
          </div>
          <p className="text-balance font-[var(--font-mono-var)] text-xs leading-4 text-[var(--color-ink)] dark:text-[var(--color-chalk-muted)]">
            A working notebook on physics, software, and making things.
          </p>
        </div>

        {/* Nav */}
        <nav
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 whitespace-nowrap font-[var(--font-mono-var)] text-xs uppercase leading-4 tracking-wide lg:flex-nowrap lg:justify-end"
          aria-label="Footer navigation"
        >
          <Link href="/blog" className={navLink}>
            Writing
          </Link>
          <Link href="/projects" className={navLink}>
            Current work
          </Link>
          <Link href="/about" className={navLink}>
            About
          </Link>
          <a
            href="https://github.com/li231sd"
            target="_blank"
            rel="noreferrer"
            className={`${navLink} inline-flex items-center gap-2`}
            aria-label="GitHub profile"
          >
            <GithubLogo size={16} weight="regular" className="shrink-0" aria-hidden="true" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sahil-singla-6b590b379/"
            target="_blank"
            rel="noreferrer"
            className={`${navLink} inline-flex items-center gap-2`}
            aria-label="LinkedIn profile"
          >
            <LinkedinLogo size={16} weight="regular" className="shrink-0" aria-hidden="true" />
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
}
