import { Link, useParams } from "react-router-dom";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import BlogPostHeader from "@/components/BlogPostHeader";
import NotFound from "@/pages/NotFound";
import { getPost, tagSlug } from "@/lib/blog";

export default function BlogPost() {
  const { slug = "" } = useParams();
  const post = getPost(slug);
  if (!post) return <NotFound />;

  return (
    <div className="min-h-screen bg-background">
      <BlogPostHeader />
      <main id="main-content" className="mx-auto max-w-3xl px-4 py-10">
        <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-card to-card p-6">
          <h1 className="text-3xl font-semibold tracking-tight">{post.title}</h1>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <span className="text-sm text-muted-foreground">{post.date}</span>
            <div className="flex flex-wrap gap-2">
              {post.tags.map(t => (
                <Link key={t} to={`/blog/topics/${tagSlug(t)}`} className="rounded-full border border-border bg-background/70 px-2.5 py-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors">{t}</Link>
              ))}
            </div>
          </div>
          {post.summary && <p className="mt-3 text-sm text-muted-foreground">{post.summary}</p>}
        </div>
        <div className="prose prose-slate mt-8 max-w-none dark:prose-invert">
          <Markdown remarkPlugins={[remarkGfm]}>{post.body}</Markdown>
        </div>
        {post.sources.length > 0 && (
          <div className="mt-10 rounded-xl border border-border bg-card p-5">
            <h2 className="text-base font-semibold">Sources</h2>
            <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground">
              {post.sources.map(s => (
                <li key={s}>
                  <a href={s} target="_blank" rel="noreferrer" className="hover:underline">{s}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </div>
  );
}
