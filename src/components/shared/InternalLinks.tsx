import { Link } from "react-router-dom";

type InternalLink = { label: string; href: string; description?: string };

export function InternalLinks({
  title,
  links,
}: {
  title: string;
  links: InternalLink[];
}) {
  return (
    <section className="border-t border-border py-12">
      <div className="container-tight">
        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="group rounded-lg border border-border bg-surface/40 p-4 transition-colors hover:border-signal/50"
            >
              <span className="font-medium text-foreground group-hover:text-signal">{link.label}</span>
              {link.description && (
                <p className="mt-1 text-sm text-muted-foreground">{link.description}</p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
