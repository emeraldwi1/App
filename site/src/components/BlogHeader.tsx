import { Link } from "react-router-dom";

export default function BlogHeader() {
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center gap-3">
            <img src="/android-chrome-192x192.png" alt="KinderCompliance logo" className="object-cover h-9 w-9 rounded-xl" />
            <div className="min-w-0">
              <p className="truncate text-foreground text-lg font-semibold">
                KinderCompliance
              </p>
            </div>
          </div>
        </Link>
        <div className="flex items-center gap-2">
          <Link to="/" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
            Home
          </Link>
          <Link to="/blog/topics" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
            Topics
          </Link>
        </div>
      </div>
    </header>
  );
}
