import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function SiteNav() {
  const { pathname } = useLocation();
  const navClass = (to: string) =>
    (to === "/" ? pathname === "/" : pathname.startsWith(to))
      ? "text-sm text-foreground font-medium"
      : "text-sm text-muted-foreground hover:text-foreground transition-colors";
  return (
    <>
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-3">
            <img src="/android-chrome-192x192.png" alt="KinderCompliance logo" className="object-cover h-8 w-8 sm:h-10 sm:w-10 rounded-lg sm:rounded-xl" />
            <div className="min-w-0">
              <p className="truncate text-foreground text-lg sm:text-xl font-semibold">
                KinderCompliance
              </p>
            </div>
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className={navClass("/")}>
            Home
          </Link>
          <Link to="/blog" className={navClass("/blog")}>
            Blog
          </Link>
          <Link to="/pricing" className={navClass("/pricing")}>
            Pricing
          </Link>
          <Link to="/contact" className={navClass("/contact")}>
            Contact
          </Link>
          <Link to="/trail" className={navClass("/trail")}>
            Trial
          </Link>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <Link to="/login">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent h-9 rounded-md text-muted-foreground hover:text-foreground text-sm sm:text-base px-2 sm:px-4">
              Sign In
            </button>
          </Link>
          <Link to="/register">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 rounded-md bg-primary hover:bg-primary/90 text-primary-foreground shadow-button text-sm sm:text-base px-3 sm:px-4">
              <span className="hidden sm:inline">
                Get Started
              </span>
              <span className="sm:hidden">
                Get Started
              </span>
              <ArrowRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4" />
            </button>
          </Link>
        </div>
      </div>
    </nav>
    </>
  );
}
