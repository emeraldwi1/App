# KinderCompliance — public website

A rebuild of the public marketing site at kindercompliance.com, made from the
live site's shipped code. It is a standalone Vite + React + TypeScript +
Tailwind project with no backend, accounts or tracking. Everything runs locally.

## Run it

Needs Node 22.12+ (or 20.19+).

```bash
npm install
npm run dev        # http://localhost:8080
npm run build      # production build in dist/
npm run preview    # serve the build
```

## What's included

| Route | Page |
|---|---|
| `/` | Home, including the working demo-request form |
| `/pricing` | Pricing |
| `/contact` | Contact, with a working form |
| `/privacy`, `/terms` | Legal pages |
| `/blog` | Blog index |
| `/blog/topics`, `/blog/topics/:tag` | Topic catalog and topic pages |
| `/blog/:slug` | Blog posts |

Also: the cookie banner (choice saved), the floating chat widget, toasts, and
the Calendly "Schedule Meeting" popup.

**Left out on purpose:** the app and everything behind sign-in (dashboard,
staff, families, CACFP, documents, admin, blog admin, onboarding, billing).
`/login`, `/register` and `/trail` show a "not part of this build" page, and
every other app URL is a 404.

## Project layout

```
src/
  pages/          one file per page
  components/     nav, footers, blog headers, forms, chat, cookie banner, toasts
  content/blog/   blog posts as markdown (the original source files)
  lib/
    supabase.ts   optional client; null unless env vars are set
    leads.ts      demo-request + contact-form storage
    chat.ts       chat widget backend
    blog.ts       loads and parses the markdown posts
    calendly.ts   loads Calendly on first click
supabase/schema.sql   tables + security policies for when you connect
```

The styling uses the live site's own theme: colour tokens (light and dark),
type scale, radii and custom component classes, all copied from its compiled CSS.

## Where submissions go right now

With no Supabase configured, form submissions are saved in the visitor's
browser (localStorage):

- Demo requests: `kc_demo_requests`, same row shape the live site sends to `demo_requests`
- Contact messages: `kc_contact_messages`
- Cookie choice: `kc_cookie_consent`

To see them, open the browser dev tools → Application → Local Storage. They
only exist in the browser that submitted them, so this is for local testing,
not collecting real leads.

## Connecting Supabase later

1. Copy `.env.example` to `.env` and fill in `VITE_SUPABASE_URL` and
   `VITE_SUPABASE_ANON_KEY` (Supabase → Project Settings → API). `.env` is gitignored.
2. Run `supabase/schema.sql` in the Supabase SQL editor. Your live project
   already has `demo_requests`; `contact_messages` is new.
3. For the chat widget, deploy an edge function named `openai-chat` that takes
   `{ messages }` and returns `{ content }`, as the live site's does.

Nothing else changes. Each feature switches from local to Supabase on its own.

## Adding a blog post

Add a markdown file to `src/content/blog/`. The filename becomes the URL slug:

```markdown
---
title: "Post title"
date: "2026-03-01"
summary: "One-line summary for cards."
tags: ["ohio", "licensing"]
sources:
  - "https://example.gov/rule"
---

# Post title

Body in markdown…
```

Posts are sorted newest first, then by slug. Topic pages are generated from tags.

## Differences from the live site

These are deliberate. Everything else matches the live site pixel for pixel
at desktop (1440px) and mobile (390px) widths.

- **Contact form now saves messages.** The live form only shows "Message
  Sent!" and discards what was typed.
- **No tracking or third-party scripts.** Google Analytics, Stripe.js and
  Lovable's scripts are removed. Calendly loads only when someone clicks
  "Schedule Meeting". Read `getCookieConsent()` before adding any analytics back.
- **Admin links removed** from the blog header and blog index ("Blog Admin",
  "Review drafts"). This also fixes the blog index scrolling sideways on phones.

## Known issues copied from the live site

Kept so the copy stays exact. Each is a small fix if you want it.

- **Blog post bodies are nearly unstyled.** The live site uses `prose` classes
  without the Tailwind Typography plugin, so headings and lists render as plain
  text. Fix: `npm i -D @tailwindcss/typography` and add it to `plugins` in
  `tailwind.config.ts`.
- **The cookie banner covers the chat button** until a choice is made.
