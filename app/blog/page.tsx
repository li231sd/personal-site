// app/blog/page.tsx
import { getAllPosts } from "@/lib/posts";
import TwoColumn from "@/components/TwoColumn";
import EntryList from "@/components/EntryList";

export const metadata = { title: "Writing — Sahil Singla" };

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <TwoColumn>
      <h1 className="font-[var(--font-sans-var)] text-2xl mb-8">Writing</h1>
      {posts.length > 0 ? (
        <EntryList posts={posts} />
      ) : (
        <p className="text-sm text-[var(--color-ink-muted)] dark:text-[var(--color-chalk-muted)]">
          Nothing published yet.
        </p>
      )}
    </TwoColumn>
  );
}
