import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";

export function NotFoundPage() {
  return (
    <>
      <SEOHead title="Page Not Found | TheXbyte" description="The page you're looking for doesn't exist." path="/404" noindex />
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-24 text-center">
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">404</div>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight">Page not found</h1>
        <p className="mt-4 max-w-md text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background"
        >
          Back to home →
        </Link>
      </div>
    </>
  );
}
