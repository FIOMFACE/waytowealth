-- Supabase/Postgres schema for PureWayWealth MVP
create table if not exists users_public (
  id bigserial primary key,
  email text unique not null,
  created_at timestamptz default now()
);

create table if not exists profiles (
  id bigserial primary key,
  user_email text references users_public(email) on delete cascade,
  h_weight int check (h_weight between 0 and 100),
  f_weight int check (f_weight between 0 and 100),
  p_weight int check (p_weight between 0 and 100),
  streak int default 0,
  last_login timestamptz default now()
);

create table if not exists courses (
  id bigserial primary key,
  title text not null,
  slug text unique not null,
  pillar text check (pillar in ('Health','Finance','Peace')) not null,
  price int default 0,
  level text default 'Beginner',
  status text default 'draft',
  description text
);

create table if not exists modules (
  id bigserial primary key,
  course_id bigint references courses(id) on delete cascade,
  title text not null,
  "order" int default 0
);

create table if not exists lessons (
  id bigserial primary key,
  module_id bigint references modules(id) on delete cascade,
  title text not null,
  type text check (type in ('video','text','pdf','quiz')) default 'video',
  url text,
  "order" int default 0,
  duration int
);

create table if not exists enrollments (
  id bigserial primary key,
  user_email text references users_public(email) on delete cascade,
  course_id bigint references courses(id) on delete cascade,
  status text default 'active',
  access_till timestamptz
);

create table if not exists progress (
  id bigserial primary key,
  user_email text references users_public(email) on delete cascade,
  lesson_id bigint references lessons(id) on delete cascade,
  completed_at timestamptz,
  score int
);

create table if not exists payments (
  id bigserial primary key,
  user_email text references users_public(email) on delete cascade,
  course_id bigint references courses(id) on delete cascade,
  provider text,
  amount int,
  status text,
  order_id text
);

create table if not exists quiz_questions (
  id bigserial primary key,
  lesson_id bigint references lessons(id) on delete cascade,
  question text not null,
  options jsonb,
  answer_index int
);
