-- Tables the public site writes to. Run in the Supabase SQL editor when you
-- connect the site (see README → "Connecting Supabase later").
--
-- demo_requests already exists in the live project (mutfqtwiukvehusrqlos);
-- the columns below are the ones the site sends. Only create it in a fresh
-- project. contact_messages is new: the live contact form never stored anything.

create table if not exists public.demo_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  center_name text not null,
  admin_name text not null,
  phone_number text not null,
  email text,
  address text not null,
  license_number text
);

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  subject text not null,
  message text not null
);

-- Visitors may submit, but never read, list or change submissions.
alter table public.demo_requests enable row level security;
alter table public.contact_messages enable row level security;

drop policy if exists "public can submit demo requests" on public.demo_requests;
create policy "public can submit demo requests" on public.demo_requests
  for insert to anon, authenticated with check (true);

drop policy if exists "public can submit contact messages" on public.contact_messages;
create policy "public can submit contact messages" on public.contact_messages
  for insert to anon, authenticated with check (true);
