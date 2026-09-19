import Link from "next/link";
import { getAllProjects } from "@/lib/projects";
import Margin from "@/components/Margin";
import TwoColumn from "@/components/TwoColumn";
import { ArrowUpRight } from "@phosphor-icons/react/ssr";

export const metadata = { title: "Current work — Sahil Singla" };

export default function ProjectsIndex() {
  const projects = getAllProjects();

  return (
    <TwoColumn>
      <h1 className="font-[var(--font-sans-var)] text-2xl mb-8">
        Current work
      </h1>
      {projects.length > 0 ? (
        <ul className="stagger-list space-y-2">
          {projects.map((project) => (
            <li
              key={project.slug}
              className="group grid grid-cols-[minmax(0,1fr)_4rem] items-start gap-4 border-b rule px-3 py-4 -mx-3 transition-colors first:pt-0 hover:bg-[color-mix(in_srgb,var(--color-paper)_88%,var(--color-gold)_12%)] dark:hover:bg-[color-mix(in_srgb,var(--color-slate)_88%,var(--color-gold)_12%)]"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="font-[var(--font-sans-var)] flex-1 min-w-0 hover:text-[var(--color-blueprint)] dark:hover:text-[var(--color-blueprint-dark)]"
              >
                <span className="inline-flex max-w-full items-center gap-2">
                  <span className="min-w-0">{project.title}</span>
                  <ArrowUpRight
                    aria-hidden="true"
                    size={18}
                    weight="bold"
                    className="shrink-0 text-[var(--color-gold)] opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                  />
                </span>
                <span className="block mt-1 text-sm leading-relaxed text-[var(--color-ink-muted)] dark:text-[var(--color-chalk-muted)]">
                  {project.description}
                </span>
              </Link>
              <Margin items={[{ label: "Status", value: project.status }]} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-[var(--color-ink-muted)] dark:text-[var(--color-chalk-muted)]">
          Nothing published yet.
        </p>
      )}
    </TwoColumn>
  );
}
