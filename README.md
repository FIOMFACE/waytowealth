# PureWayWealth – Starter (Next.js + Supabase + Razorpay)

## Quick start
1) `npm i`
2) Copy `.env.example` to `.env.local` and fill SUPABASE + RAZORPAY vars
3) Run SQL in Supabase SQL editor: `schema.sql`
4) `npm run dev`
5) Visit `http://localhost:3000` → try the quiz → see `/dashboard`

## Deploy
- Push to GitHub → connect Netlify → set env vars → deploy

## Where to edit
- Landing: `src/pages/index.tsx`
- Quiz: `src/pages/quiz.tsx`
- Dashboard logic: `src/pages/dashboard.tsx`
- Courses: `src/pages/courses/*`
- Razorpay webhook: `src/pages/api/webhooks/razorpay.ts`

## Notes
- MVP scaffold. Add proper auth (OAuth), RLS, and secure order creation before going live.
