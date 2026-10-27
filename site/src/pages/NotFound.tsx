import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main id="main-content" className="pt-32 pb-24 px-4 sm:px-6">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-foreground mb-3">404</h1>
        <p className="text-muted-foreground mb-8">Oops! Page not found</p>
        <Link to="/" className="text-primary underline hover:text-primary/90">Return to Home</Link>
      </div>
    </main>
  );
}
