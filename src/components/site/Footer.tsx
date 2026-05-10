import logo from "@/assets/thexbyte-logo.png";

export function Footer() {
  return (
    <footer className="py-10">
      <div className="container-tight flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2">
          <img src={logo} alt="TheXbyte" className="h-6 w-6 object-contain" />
          <span className="text-sm font-semibold tracking-tight">
            The<span className="text-signal">X</span>byte
          </span>
          <span className="ml-3 font-mono text-[11px] text-muted-foreground">
            The byte that makes the difference.
          </span>
        </div>
        <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          © {new Date().getFullYear()} TheXbyte · Tunis
        </div>
      </div>
    </footer>
  );
}
