import { Link } from "react-router-dom";
import type { BlogPost } from "@/content/types";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SEOHead } from "@/components/seo/SEOHead";
import { ArticleSchema } from "@/components/seo/StructuredData";
import { CTASection } from "@/components/shared/CTASection";
import { LeadForm } from "@/components/shared/LeadForm";
import { blogPostsBySlug } from "@/content/blog";

export function BlogPostTemplate({ post }: { post: BlogPost }) {
  const path = `/blog/${post.slug}`;

  return (
    <>
      <SEOHead
        title={post.metaTitle}
        description={post.metaDescription}
        path={path}
        ogType="article"
        ogImage={post.featuredImage}
        article={{ publishedTime: post.publishedAt, author: post.author, tags: post.tags }}
      />
      <ArticleSchema
        title={post.title}
        description={post.metaDescription}
        url={path}
        publishedAt={post.publishedAt}
        author={post.author}
        image={post.featuredImage}
      />

      <article className="border-b border-border py-16 sm:py-24">
        <div className="container-tight">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />

          <header className="max-w-3xl">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-md border border-border px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">{post.title}</h1>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span>{post.author}</span>
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span>{post.readingTimeMinutes} min read</span>
            </div>
          </header>

          <img
            src={post.featuredImage}
            alt={post.featuredImageAlt}
            className="mt-10 aspect-[2/1] w-full max-w-4xl rounded-xl border border-border object-cover"
            loading="lazy"
          />

          <nav aria-label="Table of contents" className="mt-10 max-w-3xl rounded-xl border border-border bg-surface/40 p-6">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Contents</h2>
            <ol className="mt-4 space-y-2">
              {post.tableOfContents.map((item) => (
                <li key={item.id} style={{ paddingLeft: `${(item.level - 2) * 16}px` }}>
                  <a href={`#${item.id}`} className="text-sm text-muted-foreground hover:text-signal">
                    {item.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="mt-12 max-w-3xl">
            {post.sections.map((section) => (
              <section key={section.id} id={section.id} className="mt-10 scroll-mt-24">
                <h2 className="text-2xl font-semibold tracking-tight">{section.heading}</h2>
                {section.paragraphs.map((p, i) => (
                  <p key={i} className="mt-4 text-base leading-relaxed text-muted-foreground">{p}</p>
                ))}
              </section>
            ))}
          </div>

          <aside className="mt-16 max-w-3xl rounded-xl border border-signal/30 bg-signal/5 p-8">
            <h2 className="text-xl font-semibold tracking-tight">Ready to build your project?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Book a free consultation with our engineering team.
            </p>
            <div className="mt-6">
              <LeadForm variant="compact" title="" submitLabel="Schedule a Discovery Call" />
            </div>
          </aside>

          {post.relatedSlugs.length > 0 && (
            <section className="mt-16 max-w-3xl">
              <h2 className="text-xl font-semibold tracking-tight">Related Articles</h2>
              <div className="mt-6 space-y-4">
                {post.relatedSlugs.map((slug) => {
                  const related = blogPostsBySlug[slug];
                  if (!related) return null;
                  return (
                    <Link
                      key={slug}
                      to={`/blog/${slug}`}
                      className="block rounded-lg border border-border bg-surface/40 p-4 transition-colors hover:border-signal/50"
                    >
                      <h3 className="font-medium hover:text-signal">{related.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{related.excerpt}</p>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}
        </div>
      </article>

      <CTASection variant="compact" />
    </>
  );
}
