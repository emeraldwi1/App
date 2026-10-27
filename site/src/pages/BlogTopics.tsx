import { Link } from "react-router-dom";
import BlogHeader from "@/components/BlogHeader";
import { allTags } from "@/lib/blog";

export default function BlogTopics() {
  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <main id="main-content" className="mx-auto max-w-5xl px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-semibold tracking-tight">Topics Catalog</h1>
          <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
            A tag catalog of published posts. This helps navigation now and provides a clean topic map for later SEO work.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {allTags().map(t => (
            <Link key={t.slug} to={`/blog/topics/${t.slug}`} className="rounded-xl border border-border bg-card p-4 hover:bg-muted/30 transition-colors">
              <div className="flex items-baseline justify-between gap-2">
                <div className="text-base font-semibold">{t.tag}</div>
                <div className="text-xs text-muted-foreground">{t.count}</div>
              </div>
              <div className="mt-2 text-xs text-muted-foreground">View posts</div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
