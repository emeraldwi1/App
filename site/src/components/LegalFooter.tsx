import { Link } from "react-router-dom";

export default function LegalFooter() {
  return (

    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              <img src="/android-chrome-192x192.png" alt="KinderCompliance logo" className="object-cover h-8 w-8 rounded-lg" />
              <div className="min-w-0">
                <p className="truncate text-foreground text-base font-semibold">
                  KinderCompliance
                </p>
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 KinderCompliance. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">
              Terms
            </Link>
            <Link to="/contact" className="hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>

  );
}
