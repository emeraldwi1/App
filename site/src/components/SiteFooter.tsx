import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <>
    <footer className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-4 sm:gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-3">
              <img src="/android-chrome-192x192.png" alt="KinderCompliance logo" className="object-cover h-7 w-7 sm:h-8 sm:w-8 rounded-lg" />
              <div className="min-w-0">
                <p className="truncate text-foreground text-sm sm:text-base font-semibold">
                  KinderCompliance
                </p>
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground text-center">
            © 2026 KinderCompliance. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">
              Terms
            </Link>
            <Link to="/contact" className="hover:text-foreground transition-colors">
              Contact
            </Link>
            <button className="hover:text-foreground transition-colors cursor-pointer">
              Cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
