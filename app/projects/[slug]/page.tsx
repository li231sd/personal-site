import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";
import Margin from "@/components/Margin";

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="mx-auto max-w-4xl px-[var(--page-gutter)] py-16 md:py-24 page-reveal">
      <Link
        href="/projects"
        className="graphite-link font-[var(--font-mono-var)] text-xs uppercase tracking-wide text-[var(--color-ink-muted)] dark:text-[var(--color-chalk-muted)]"
      >
        ← Current work
      </Link>
      <div className="mt-4 mb-8 md:flex md:items-start md:justify-between md:gap-12">
        <h1 className="graphite-heading font-[var(--font-sans-var)] text-3xl leading-tight">
          {project.title}
        </h1>
        <div className="mt-6 md:mt-1 md:w-48 shrink-0">
          <Margin
            items={[
              { label: "Status", value: project.status },
              { label: "Stack", value: project.stack.join(" / ") },
            ]}
          />
        </div>
      </div>
      <div className="prose-notebook max-w-[70ch]">
        <MDXRemote
          source={project.content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkMath],
              rehypePlugins: [rehypeKatex],
            },
          }}
        />
      </div>
    </div>
  );
}
