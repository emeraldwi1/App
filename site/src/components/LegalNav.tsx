import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function LegalNav() {
  return (

    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex items-center gap-3">
            <img src="/android-chrome-192x192.png" alt="KinderCompliance logo" className="object-cover h-10 w-10 rounded-xl" />
            <div className="min-w-0">
              <p className="truncate text-foreground text-xl font-semibold">
                KinderCompliance
              </p>
            </div>
          </div>
        </Link>
        <Link to="/">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
        </Link>
      </div>
    </nav>

  );
}
