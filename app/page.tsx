// app/page.tsx
import { getAllPosts } from "@/lib/posts";
import Link from "next/link";
import TwoColumn from "@/components/TwoColumn";
import EntryList from "@/components/EntryList";
import Margin from "@/components/Margin";
import { ArrowUpRight, Sparkle } from "@phosphor-icons/react/ssr";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <TwoColumn
      margin={
        <Margin
          items={[
            { label: "Now", value: "Building and learning" },
            { label: "Focus", value: "Physics / software / hardware" },
          ]}
        />
      }
    >
      <div className="home-intro">
        <div className="home-kicker">
          <Sparkle size={14} weight="fill" aria-hidden="true" />
          Personal field notes
        </div>
        <h1 className="home-title graphite-heading">
          I build and study things.
        </h1>
        <p className="home-description">
          Physics, CFD, hardware, and tools for learning.
        </p>
      </div>

      <h2 className="font-[var(--font-sans-var)] text-sm uppercase tracking-wide mb-4 text-[var(--color-ink-muted)] dark:text-[var(--color-chalk-muted)]">
        Recent entries
      </h2>

      {posts.length > 0 ? (
        <EntryList posts={posts} />
      ) : (
        <p className="text-sm text-[var(--color-ink-muted)] dark:text-[var(--color-chalk-muted)]">
          Nothing published yet. Add an .mdx file to content/blog/.
        </p>
      )}
      <p className="mt-6 text-sm">
        <Link
          href="/blog"
          className="back-link graphite-link text-[var(--color-blueprint)] dark:text-[var(--color-blueprint-dark)]"
        >
          <span className="inline-flex items-center gap-1.5">
            Read all writing
            <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
          </span>
        </Link>
      </p>
      <h2 className="font-[var(--font-sans-var)] text-sm uppercase tracking-wide mt-12 mb-4 text-[var(--color-ink-muted)] dark:text-[var(--color-chalk-muted)]">
        Current work
      </h2>
      <p className="text-sm">
        <Link
          href="/projects"
          className="text-[var(--color-blueprint)] dark:text-[var(--color-blueprint-dark)]"
        >
          <span className="inline-flex items-center gap-1.5">
            See current work
            <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
          </span>
        </Link>
      </p>
    </TwoColumn>
  );
}
