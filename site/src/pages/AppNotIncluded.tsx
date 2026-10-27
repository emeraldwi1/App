import { Link } from "react-router-dom";
import { LayoutDashboard } from "lucide-react";

// Stands in for /login, /register and /trail. The app itself isn't part of
// this build; point these routes at it once it exists.
export default function AppNotIncluded() {
  return (
    <main id="main-content" className="pt-32 pb-24 px-4 sm:px-6">
      <div className="max-w-xl mx-auto text-center">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
          <LayoutDashboard className="h-7 w-7 text-primary" />
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-3">The KinderCompliance app isn't part of this site build</h1>
        <p className="text-muted-foreground mb-8">
          Sign in, registration and the free-trial flow live in the app, which isn't included here. Request a demo and we'll be in touch.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/#demo-request" className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            Request Demo
          </Link>
          <Link to="/" className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
