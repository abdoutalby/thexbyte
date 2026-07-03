import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import logo from "@/assets/thexbyte-logo.png";
import { mainNav } from "@/content/navigation";
import { MobileNav } from "./MobileNav";

export function Header() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/70 backdrop-blur-md">
      <div className="container-tight flex h-14 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="TheXbyte" className="h-7 w-7 object-contain" loading="eager" />
          <span className="text-sm font-semibold tracking-tight">
            The<span className="text-signal">X</span>byte
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-muted-foreground lg:flex" aria-label="Main">
          {mainNav.slice(0, 7).map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`transition-colors hover:text-foreground ${
                location.pathname === item.href || location.pathname.startsWith(item.href + "/")
                  ? "text-foreground"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-signal/60 hover:text-signal sm:inline-flex"
          >
            Book a Free Consultation
            <span aria-hidden>→</span>
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
