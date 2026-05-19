import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-muted/40 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Winners College" className="h-10 w-10 rounded-full" />
            <span className="font-display text-xl md:text-2xl font-semibold">Winners College</span>
          </div>
          <p className="mt-4 text-base text-muted-foreground max-w-sm">
            Sri Lanka's first trilingual microlearning platform — building a day-one-ready
            digital talent pipeline for South Asia.
          </p>
        </div>
        <div>
          <h4 className="text-base font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-base text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/programs" className="hover:text-foreground">Programs</Link></li>
            <li><Link to="/investors" className="hover:text-foreground">Investors</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-base font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-base text-muted-foreground">
            <li><a href="tel:0769321191" className="hover:text-foreground">076 932 1191</a></li>
            <li><a href="mailto:jenistonapppostha@gmail.com" className="hover:text-foreground">jenistonapppostha@gmail.com</a></li>
            <li>145/19C High Level Road, Colombo 6</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-5 text-sm text-muted-foreground flex flex-col gap-2 md:flex-row md:justify-between">
          <span>© {new Date().getFullYear()} Winners College. All rights reserved.</span>
          <span>Sinhala · Tamil · English</span>
        </div>
      </div>
    </footer>
  );
}
