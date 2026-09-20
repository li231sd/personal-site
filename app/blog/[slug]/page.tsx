// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { format } from "date-fns";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import TwoColumn from "@/components/TwoColumn";
import Margin from "@/components/Margin";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <TwoColumn
      margin={
        <Margin
          items={[
            {
              label: "Date",
              value: format(new Date(post.date), "dd MMM yyyy"),
            },
            { label: "Type", value: post.type },
            { label: "Tags", value: post.tags.join(" / ") },
            { label: "Read", value: post.readingTime },
          ]}
        />
      }
    >
      <Link
        href="/blog"
        className="back-link graphite-link font-[var(--font-mono-var)] text-xs uppercase tracking-wide text-[var(--color-ink-muted)] dark:text-[var(--color-chalk-muted)]"
      >
        ← Writing
      </Link>
      <h1 className="article-title graphite-heading font-[var(--font-sans-var)] text-3xl mt-4 mb-8 leading-tight">
        {post.title}
      </h1>
      <div className="prose-notebook">
        <MDXRemote
          source={post.content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkMath],
              rehypePlugins: [rehypeKatex],
            },
          }}
        />
      </div>
    </TwoColumn>
  );
}
