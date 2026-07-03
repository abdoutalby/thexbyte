import { Link } from "react-router-dom";
import logo from "@/assets/thexbyte-logo.png";
import { footerNav } from "@/content/navigation";
import { company, COMPANY_PROFILE_URL } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="container-tight">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="TheXbyte" className="h-6 w-6 object-contain" loading="lazy" />
              <span className="text-sm font-semibold tracking-tight">
                The<span className="text-signal">X</span>byte
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Premium software development partner for startups and enterprises across Europe and Tunisia.
            </p>
            <a
              href={COMPANY_PROFILE_URL}
              className="mt-4 inline-block text-sm text-signal hover:underline"
            >
              Download company profile (PDF)
            </a>
          </div>

          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Services</h3>
            <ul className="mt-4 space-y-2">
              {footerNav.services.slice(0, 6).map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Industries</h3>
            <ul className="mt-4 space-y-2">
              {footerNav.industries.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Company</h3>
            <ul className="mt-4 space-y-2">
              {footerNav.company.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-sm text-muted-foreground">
              <a href={`mailto:${company.email}`} className="hover:text-foreground">{company.email}</a>
              <br />
              <a href={`tel:${company.phone}`} className="hover:text-foreground">{company.phoneDisplay}</a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            © {new Date().getFullYear()} TheXbyte · {company.address.city}, Tunisia
          </p>
          <p className="text-xs text-muted-foreground">
            Serving {company.markets.join(" · ")}
          </p>
        </div>
      </div>
    </footer>
  );
}
