create table if not exists public.lunch_states (
  room_id text primary key,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.lunch_states enable row level security;

drop policy if exists "lunch_states_public_select" on public.lunch_states;
drop policy if exists "lunch_states_public_insert" on public.lunch_states;
drop policy if exists "lunch_states_public_update" on public.lunch_states;

-- Next.js API should use SUPABASE_SERVICE_ROLE_KEY on Vercel.
-- The service role bypasses RLS, so public browser access does not need table policies.
-- If you temporarily use SUPABASE_ANON_KEY instead, uncomment the policies below.

-- create policy "lunch_states_public_select"
-- on public.lunch_states
-- for select
-- using (true);

-- create policy "lunch_states_public_insert"
-- on public.lunch_states
-- for insert
-- with check (true);

-- create policy "lunch_states_public_update"
-- on public.lunch_states
-- for update
-- using (true)
-- with check (true);
