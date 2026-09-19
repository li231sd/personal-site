import fs from "fs";
import path from "path";
import matter from "gray-matter";

const PROJECTS_DIR = path.join(process.cwd(), "content", "projects");

export type ProjectStatus = "Active" | "Experiment" | "Paused" | "Complete";

export interface ProjectMeta {
  slug: string;
  title: string;
  description: string;
  status: ProjectStatus;
  stack: string[];
}

export interface Project extends ProjectMeta {
  content: string;
}

function getSlugs(): string[] {
  if (!fs.existsSync(PROJECTS_DIR)) return [];
  return fs.readdirSync(PROJECTS_DIR).filter((f) => f.endsWith(".mdx")).map((f) => f.replace(/\.mdx$/, ""));
}

function readMeta(slug: string): ProjectMeta {
  const raw = fs.readFileSync(path.join(PROJECTS_DIR, `${slug}.mdx`), "utf8");
  const { data } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    status: data.status ?? "Active",
    stack: data.stack ?? [],
  };
}

export function getAllProjects(): ProjectMeta[] {
  return getSlugs().map(readMeta);
}

export function getProjectBySlug(slug: string): Project | null {
  const fullPath = path.join(PROJECTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  const raw = fs.readFileSync(fullPath, "utf8");
  const { content } = matter(raw);
  return { ...readMeta(slug), content };
}
