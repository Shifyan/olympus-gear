# Tendaki - Peer-to-Peer Rental Gear untuk Mendaki & Trip

**Tendaki** adalah platform web untuk menyewa gear mendaki dan trip (tenda, sleeping bag, backpack) secara peer-to-peer di Indonesia. User bisa listing gear sebagai owner, cari gear berdasarkan lokasi atau harga, dan booking dengan kalender availability. Fokus: membantu traveler hemat biaya untuk petualangan outdoor, dengan UX simpel dan lokal-friendly (integrasi payment Midtrans, lokasi gunung Indo).

> **Status:** Proyek dalam pengembangan (MVP target selesai November 2025). Database dan fitur tambahan masih dievaluasi, expect changes!

## Tujuan Proyek

Solve masalah akses gear mendaki yang mahal dan susah ditemukan di daerah outdoor (misal Lombok, Bandung). Tendaki bikin rental:

- **Cepat:** Cari dan booking gear <5 menit, filter by lokasi/harga.
- **Peer-to-Peer:** Owner listing gear, user review post-rental, mirip Airbnb.
- **Interaktif:** Realtime availability (lihat slot booking live), visual listing dengan foto.
- **Lokal:** Dukung payment Midtrans, info cuaca gunung via API gratis (TBD).
- **Fun:** UI ramah, potensi komunitas hiking via forum (future).

## Tech Stack

- **Frontend:** Next.js (App Router) - Server-side rendering untuk SEO listing, UI interaktif.
- **Backend:** Bun + Elysia.js - API cepat untuk CRUD listing/booking, WebSocket untuk realtime.
- **Database:** Supabase (PostgreSQL serverless) - Realtime subscriptions untuk availability, RLS untuk keamanan.
- **Libraries:** Tailwind CSS (styling), React Hook Form (form validation), Chart.js (dashboard owner).
- **Integrasi:** Midtrans (payment Indo, TBD), Nodemailer (email konfirmasi).
- **Deployment:** Vercel (frontend), Railway (backend) - Free tier untuk MVP.

## Fitur Utama (MVP)

- **Listing Gear:** Owner tambah gear (nama, harga/hari, lokasi pickup, foto).
- **Search & Filter:** User cari gear by lokasi, harga, atau tipe (tenda/backpack).
- **Booking:** Pilih tanggal via kalender, bayar via Midtrans (opsional manual dulu).
- **Realtime Availability:** Update slot booking live (Supabase subscriptions).
- **Review System:** Rating post-rental untuk trust.
- **(Future)** Bundle trip (paket gear), forum komunitas, API cuaca gunung.

## Prasyarat

- **Bun**: Install via `curl -fsSL https://bun.sh/install | bash` (v1.1.0+).
- **Node.js**: Untuk Next.js (v18+ recommended).
- **Supabase**: Daftar di [supabase.com](https://supabase.com), buat project (region Asia untuk low latency).
- **(Opsional)** Midtrans sandbox untuk test payment.

## Setup Awal

1. **Clone repo**:
   ```bash
   git clone https://github.com/your-username/tendaki.git
   cd tendaki
   ```
2. **Frontend Setup**:
   ```bash
   cd frontend
   bun install
   bun run dev
   ```
   Buka `http://localhost:3000` untuk test UI (listing, search, booking).
3. **Backend Setup**:
   ```bash
   cd backend
   bun install
   bun run src/server.ts
   ```
   API jalan di `http://localhost:3001` (endpoints: /gear, /bookings).
4. **Database Setup**:
   - Buat Supabase project, tambah table:
     - `gear_listings` (id: uuid, name: string, price: float, location: string, owner_id: uuid, availability: jsonb).
     - `bookings` (id: uuid, gear_id: uuid, user_id: uuid, date_start: date, date_end: date).
   - Enable Row-Level Security (RLS) untuk keamanan.
   - Tambah `.env` di frontend & backend:
     ```plaintext
     NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
     SUPABASE_SERVICE_KEY=your-service-key
     ```
5. **Test Lokal**:
   - Listing gear di `/listing`, cari di `/search`, booking, cek availability update live.

## Struktur Folder (Kasar)

```plaintext
tendaki/
├── frontend/         # Next.js app (routes: /listing, /search, /booking/[id])
│   ├── app/         # Routes
│   ├── components/  # ListingForm, BookingCalendar
│   ├── lib/         # supabase.ts
```
