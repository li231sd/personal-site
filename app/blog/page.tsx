// app/blog/page.tsx
import { getAllPosts } from "@/lib/posts";
import TwoColumn from "@/components/TwoColumn";
import EntryList from "@/components/EntryList";
import Link from "next/link";
import { ArrowUpRight, BookOpenText, Sparkle } from "@phosphor-icons/react/ssr";

export const metadata = { title: "Writing — Sahil Singla" };

export default function BlogIndex() {
  const posts = getAllPosts();
  const [featuredPost, ...archivePosts] = posts;

  return (
    <TwoColumn
      margin={
        <div className="blog-index-margin">
          <div className="blog-index-stat">
            <span className="blog-index-stat-label">Archive</span>
            <span className="blog-index-stat-value">
              {posts.length.toString().padStart(2, "0")} entries
            </span>
          </div>
          <div className="blog-index-stat">
            <span className="blog-index-stat-label">Usually about</span>
            <span className="blog-index-stat-value">
              Physics, software, building
            </span>
          </div>
          <div className="blog-index-stat">
            <span className="blog-index-stat-label">A good place to start</span>
            <span className="blog-index-stat-value">
              The latest project log
            </span>
          </div>
        </div>
      }
    >
      <div className="blog-index-intro">
        <div className="blog-index-kicker">
          <Sparkle size={15} weight="fill" aria-hidden="true" />
          Field notes from the workbench
        </div>
        <h1 className="graphite-heading blog-index-title">Writing</h1>
        <p className="blog-index-dek">
          Long-form notes on the questions I keep coming back to, the things I
          am building, and the trade-offs that only show up once the prototype
          works.
        </p>
      </div>

      {featuredPost ? (
        <>
          <section className="blog-featured" aria-labelledby="featured-heading">
            <div className="blog-featured-topline">
              <span>Start here</span>
              <span>{featuredPost.type}</span>
            </div>
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="blog-featured-link group"
            >
              <span className="blog-featured-title" id="featured-heading">
                {featuredPost.title}
              </span>
              <ArrowUpRight
                size={28}
                weight="bold"
                aria-hidden="true"
                className="blog-featured-arrow"
              />
            </Link>
            <p className="blog-featured-description">
              {featuredPost.description}
            </p>
            <div className="blog-featured-footer">
              <span className="blog-read-label">
                <BookOpenText size={16} aria-hidden="true" />{" "}
                {featuredPost.readingTime}
              </span>
              <span>{featuredPost.tags.slice(0, 3).join(" / ")}</span>
            </div>
          </section>

          {archivePosts.length > 0 && (
            <section className="blog-archive" aria-labelledby="archive-heading">
              <div className="blog-section-heading">
                <h2 id="archive-heading">The archive</h2>
                <span>More things worth opening</span>
              </div>
              <EntryList posts={archivePosts} />
            </section>
          )}
        </>
      ) : (
        <p className="text-sm text-[var(--color-ink-muted)] dark:text-[var(--color-chalk-muted)]">
          Nothing published yet.
        </p>
      )}
    </TwoColumn>
  );
}
