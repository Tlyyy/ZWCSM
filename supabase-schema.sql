create table if not exists public.lunch_states (
  room_id text primary key,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.lunch_states enable row level security;

drop policy if exists "lunch_states_public_select" on public.lunch_states;
drop policy if exists "lunch_states_public_insert" on public.lunch_states;
drop policy if exists "lunch_states_public_update" on public.lunch_states;

create policy "lunch_states_public_select"
on public.lunch_states
for select
using (true);

create policy "lunch_states_public_insert"
on public.lunch_states
for insert
with check (true);

create policy "lunch_states_public_update"
on public.lunch_states
for update
using (true)
with check (true);
