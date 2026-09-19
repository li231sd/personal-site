// app/page.tsx
import { getAllPosts } from "@/lib/posts";
import Link from "next/link";
import TwoColumn from "@/components/TwoColumn";
import EntryList from "@/components/EntryList";
import Margin from "@/components/Margin";

export default function Home() {
  const posts = getAllPosts().slice(0, 6);

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
      <p className="graphite-heading text-lg leading-relaxed mb-10">
        I build and study things! Physics, CFD, hardware, and tools for
        learning.
      </p>

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
      <h2 className="font-[var(--font-sans-var)] text-sm uppercase tracking-wide mt-12 mb-4 text-[var(--color-ink-muted)] dark:text-[var(--color-chalk-muted)]">
        Current work
      </h2>
      <p className="text-sm">
        <Link
          href="/projects"
          className="text-[var(--color-blueprint)] dark:text-[var(--color-blueprint-dark)]"
        >
          See current work →
        </Link>
      </p>
    </TwoColumn>
  );
}
