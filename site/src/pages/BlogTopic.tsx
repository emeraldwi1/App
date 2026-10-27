import { Link, useParams } from "react-router-dom";
import BlogTopicHeader from "@/components/BlogTopicHeader";
import { allTags, postsForTag, tagSlug } from "@/lib/blog";

export default function BlogTopic() {
  const { tag = "" } = useParams();
  const slug = tagSlug(decodeURIComponent(tag));
  const label = allTags().find(t => t.slug === slug)?.tag ?? decodeURIComponent(tag);
  const list = postsForTag(tag);

  return (
    <div className="min-h-screen bg-background">
      <BlogTopicHeader />
      <main id="main-content" className="mx-auto max-w-5xl px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-semibold tracking-tight">Topic: {label}</h1>
          <p className="mt-2 max-w-3xl text-sm text-muted-foreground">Posts tagged with "{label}".</p>
        </div>
        <div className="grid gap-4">
          {list.length === 0 && <p className="text-sm text-muted-foreground">No posts for this topic yet.</p>}
          {list.map(p => (
            <article key={p.slug} className="rounded-xl border border-border bg-card p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="text-xl font-semibold">
                  <Link to={`/blog/${p.slug}`} className="hover:underline">{p.title}</Link>
                </h2>
                <span className="text-xs text-muted-foreground">{p.date}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
              <div className="mt-3">
                <Link to={`/blog/${p.slug}`} className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
                  Read
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
