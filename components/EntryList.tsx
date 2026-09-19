// components/EntryList.tsx
import Link from "next/link";
import { format } from "date-fns";
import type { PostMeta } from "@/lib/posts";
import Margin from "@/components/Margin";
import { ArrowUpRight } from "@phosphor-icons/react/ssr";

export default function EntryList({ posts }: { posts: PostMeta[] }) {
  return (
    <ul className="stagger-list space-y-2">
      {posts.map((post) => (
        <li
          key={post.slug}
          className="group grid grid-cols-[4rem_minmax(0,1fr)] gap-x-4 gap-y-3 border-b rule px-3 py-4 -mx-3 transition-colors first:pt-0 hover:bg-[color-mix(in_srgb,var(--color-paper)_88%,var(--color-gold)_12%)] dark:hover:bg-[color-mix(in_srgb,var(--color-slate)_88%,var(--color-gold)_12%)] sm:grid-cols-[4rem_minmax(0,1fr)_auto]"
        >
          <span className="font-[var(--font-mono-var)] text-xs w-16 shrink-0 pt-0.5 text-[var(--color-ink-muted)] dark:text-[var(--color-chalk-muted)] transition-colors group-hover:text-[var(--color-gold)]">
            {format(new Date(post.date), "dd MMM")}
          </span>
          <Link
            href={`/blog/${post.slug}`}
            className="font-[var(--font-sans-var)] flex-1 min-w-0 hover:text-[var(--color-blueprint)] dark:hover:text-[var(--color-blueprint-dark)]"
          >
            <span className="inline-flex max-w-full items-center gap-2">
              <span className="min-w-0">{post.title}</span>
              <ArrowUpRight
                aria-hidden="true"
                size={18}
                weight="bold"
                className="shrink-0 text-[var(--color-gold)] opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
              />
            </span>
            <span className="block mt-1 text-sm leading-relaxed text-[var(--color-ink-muted)] dark:text-[var(--color-chalk-muted)]">
              {post.description}
            </span>
          </Link>
          <div className="col-start-2 shrink-0 sm:col-start-3 sm:row-span-2">
            <Margin
              items={[
                { label: "Type", value: post.type },
                { label: "Read", value: post.readingTime },
              ]}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
