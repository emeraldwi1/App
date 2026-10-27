import { Link } from "react-router-dom";
import BlogHeader from "@/components/BlogHeader";
import { posts } from "@/lib/blog";

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <main id="main-content" className="mx-auto max-w-5xl px-4 py-8">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/15 via-card to-card p-6">
          <div className="pointer-events-none absolute -top-16 -left-16 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
          <div className="pointer-events-none absolute top-12 right-0 h-64 w-64 rounded-full bg-chart-blue/20 blur-3xl" />
          <div className="relative">
            <h1 className="text-3xl font-semibold tracking-tight">Ohio Childcare Compliance Blog</h1>
            <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
              A reference library of Ohio rules, updates, and operational checklists for childcare programs.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link to="/blog/topics" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
                Browse topics
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map(p => (
            <Link key={p.slug} to={`/blog/${p.slug}`} className="group flex flex-col rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-md hover:border-primary/30 hover:-translate-y-0.5">
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <time>{p.date}</time>
                  {p.tags[0] && (
                    <>
                      <span className="text-border">·</span>
                      <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-medium text-primary">{p.tags[0]}</span>
                    </>
                  )}
                </div>
                <h2 className="mt-2 text-base font-semibold leading-snug group-hover:text-primary transition-colors line-clamp-2">{p.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.summary}</p>
                <div className="mt-auto pt-4">
                  <span className="text-sm font-medium text-primary group-hover:underline">Read article →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
