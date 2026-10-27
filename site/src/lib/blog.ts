// Posts are plain markdown files in src/content/blog, same as the original
// project. Add a new .md file with frontmatter and it appears automatically.
const files = import.meta.glob("../content/blog/*.md", { query: "?raw", import: "default", eager: true }) as Record<string, string>;

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  sources: string[];
  body: string;
};

const unquote = (v: string) => v.trim().replace(/^(["'])(.*)\1$/, "$2");

function parse(slug: string, raw: string): BlogPost {
  const meta: Record<string, string> = {};
  const sources: string[] = [];
  let body = raw;
  if (raw.startsWith("---")) {
    const end = raw.indexOf("\n---", 3);
    let listKey: string | null = null;
    for (const line of raw.slice(4, end).split("\n")) {
      const item = line.match(/^\s+-\s+(.*)$/);
      if (item && listKey === "sources") { sources.push(unquote(item[1])); continue; }
      const kv = line.match(/^(\w+):\s*(.*)$/);
      if (kv) { listKey = kv[2] === "" ? kv[1] : null; meta[kv[1]] = kv[2]; }
    }
    body = raw.slice(end + 4).replace(/^\s+/, "");
  }
  let tags: string[] = [];
  try { tags = JSON.parse(meta.tags ?? "[]"); } catch { /* malformed tags */ }
  return { slug, title: unquote(meta.title ?? slug), date: unquote(meta.date ?? ""), summary: unquote(meta.summary ?? ""), tags, sources, body };
}

export const posts: BlogPost[] = Object.entries(files)
  .map(([path, raw]) => parse(path.split("/").pop()!.replace(/\.md$/, ""), raw))
  .sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));

export const tagSlug = (tag: string) => tag.toLowerCase().replace(/\s+/g, "-");

export function allTags(): { tag: string; slug: string; count: number }[] {
  const counts = new Map<string, { tag: string; count: number }>();
  for (const p of posts) for (const t of p.tags) {
    const s = tagSlug(t);
    counts.set(s, { tag: t, count: (counts.get(s)?.count ?? 0) + 1 });
  }
  return [...counts.entries()].map(([slug, v]) => ({ slug, ...v })).sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

export const postsForTag = (slug: string) => posts.filter(p => p.tags.some(t => tagSlug(decodeURIComponent(slug)) === tagSlug(t)));
export const getPost = (slug: string) => posts.find(p => p.slug === slug);

export const formatDate = (iso: string) =>
  iso ? new Date(iso + "T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) : "";
