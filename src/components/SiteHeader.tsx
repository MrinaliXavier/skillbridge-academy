import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/investors", label: "Investors" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-7xl pl-4 pr-6 md:pl-6 md:pr-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Winners College" className="h-12 w-12 rounded-full" />
          <span className="font-display text-xl md:text-2xl font-semibold tracking-tight">
            Winners <span className="text-primary">College</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-base text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground font-medium" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/investors"
          className="hidden md:inline-flex items-center rounded-full bg-secondary px-4 py-2 text-base font-medium text-secondary-foreground hover:opacity-90 transition shadow-warm"
        >
          Partner with us
        </Link>
      </div>
    </header>
  );
}
