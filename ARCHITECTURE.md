# Autobody Republic — booking app architecture

## Stack (matches JTS proven patterns)
- **Frontend:** vite + react SPA (existing landing + new booking/admin views)
- **API:** CF Pages Functions (`functions/` — edge runtime, free tier)
- **DB:** Supabase (Postgres) — same pattern as turnover-agent/skate
- **Payments:** Stripe Checkout (placeholder envs now; Caytlin's live keys later)
- **Deploy:** existing cf-pages.yml pipeline (PR preview / merge prod)

## Data model (Supabase)
- dealers(id, name, address, contact_email, is_pilot)
- availability(weekday, start_min, end_min)         — her weekly windows
- blocks(id, date, start_min, end_min, reason)      — manual blackouts
- bookings(id, date, slot_min, dealer_id, vin, ro_number, doors(1|2),
           job_type('kit'|'replacement'), status('booked'|'done'|'canceled'),
           stripe_session_id, payment_status)
- Travel buffer: 45min auto-gap between bookings (mobile rig drive time)

## Booking rules (phase 2 scope lock)
- Slots = per-VEHICLE, 1 hour each (both doors in one visit)
- Self-serve: dealer picks any open slot — instant confirm, no approval
- Service A only (kit repair); door replacement = "quote follow-up" flag
- Payment: $220/door at booking via Stripe Checkout (placeholder)

## Routes
- /                — landing (done)
- /book            — dealer self-serve booking + Stripe checkout
- /admin           — Caytlin: calendar, bookings, block-out, payments
- /api/book        (POST — create booking + stripe session)
- /api/availability (GET — open slots for date)
- /api/stripe/webhook (POST — confirm payment → status paid)
- /api/admin/*     (CRUD bookings/blocks, admin key auth)
