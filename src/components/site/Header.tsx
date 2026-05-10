import { Link } from "@tanstack/react-router";
import logo from "@/assets/thexbyte-logo.png";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/70 backdrop-blur-md">
      <div className="container-tight flex h-14 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="TheXbyte" className="h-7 w-7 object-contain" />
          <span className="text-sm font-semibold tracking-tight">
            The<span className="text-signal">X</span>byte
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          <a href="#what-we-build" className="transition-colors hover:text-foreground">What we build</a>
          <a href="#approach" className="transition-colors hover:text-foreground">Approach</a>
          <a href="#projects" className="transition-colors hover:text-foreground">Projects</a>
          <a href="#stack" className="transition-colors hover:text-foreground">Stack</a>
          <a href="#about" className="transition-colors hover:text-foreground">About</a>
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-signal/60 hover:text-signal"
        >
          Start a project
          <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}
