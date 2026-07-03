import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { allBlogPosts } from "@/content/blog";

export function BlogIndexPage() {
  return (
    <>
      <SEOHead
        title="Blog | Software Development Insights | TheXbyte"
        description="Expert insights on software development, MVP building, Flutter, IoT architecture, and choosing development partners."
        path="/blog"
      />
      <div className="border-b border-border py-16 sm:py-24">
        <div className="container-tight">
          <SectionHeader
            eyebrow="Blog"
            title="Engineering insights & guides"
            subtitle="Practical advice for founders, CTOs, and product managers building software products."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {allBlogPosts.map((post) => (
              <article key={post.slug} className="rounded-xl border border-border bg-surface/60 overflow-hidden">
                <img
                  src={post.featuredImage}
                  alt={post.featuredImageAlt}
                  className="aspect-[2/1] w-full object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="mt-3 text-xl font-semibold tracking-tight">
                    <Link to={`/blog/${post.slug}`} className="hover:text-signal">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
                  <div className="mt-4 flex gap-4 text-xs text-muted-foreground">
                    <time dateTime={post.publishedAt}>
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                    <span>{post.readingTimeMinutes} min read</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
