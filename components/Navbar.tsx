// components/Navbar.tsx
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  return (
    <header className="border-b rule px-[var(--page-gutter)] py-5 flex flex-col items-start gap-4 page-reveal sm:flex-row sm:items-center sm:justify-between">
      <Link
        href="/"
        className="font-[var(--font-sans-var)] font-medium tracking-tight hover:text-[var(--color-blueprint)] dark:hover:text-[var(--color-blueprint-dark)]"
      >
        Sahil Singla
      </Link>
      <nav className="flex w-full flex-wrap items-center justify-between gap-x-3 gap-y-2 font-[var(--font-sans-var)] text-xs sm:w-auto sm:gap-7 sm:text-sm">
        <Link
          href="/blog"
          className="hover:text-[var(--color-blueprint)] dark:hover:text-[var(--color-blueprint-dark)]"
        >
          Writing
        </Link>
        <Link
          href="/projects"
          className="hover:text-[var(--color-blueprint)] dark:hover:text-[var(--color-blueprint-dark)]"
        >
          Current work
        </Link>
        <Link
          href="/about"
          className="hover:text-[var(--color-blueprint)] dark:hover:text-[var(--color-blueprint-dark)]"
        >
          About
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}
