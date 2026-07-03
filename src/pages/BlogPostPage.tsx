import { useParams, Navigate } from "react-router-dom";
import { getBlogPost } from "@/content/blog";
import { BlogPostTemplate } from "@/components/templates/BlogPostTemplate";

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  return <BlogPostTemplate post={post} />;
}
