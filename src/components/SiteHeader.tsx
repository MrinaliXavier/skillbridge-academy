import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo WC.jpeg";

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
      <div className="mx-auto max-w-7xl pl-3 pr-4 md:pl-4 md:pr-6 h-16 md:h-20 flex items-center">
        <Link to="/" className="flex items-center gap-4">
          <img src={logo} alt="Winners College" className="h-16 w-16 md:h-20 md:w-20 rounded-full" />
          <span className="font-display text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight">
            Winners <span className="text-primary">College</span>
          </span>
        </Link>
        <nav className="hidden md:flex flex-1 justify-center items-center gap-10">
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
