# iBenz ka Baba — The Legendary Mercedes Experience

A production-ready React + Vite website for a luxury vintage Mercedes-Benz chauffeur
service. Black-and-gold design system, Framer Motion animations, and an EmailJS-powered
booking flow with automatic owner notification + customer confirmation emails.

---

## Tech Stack

- **React 18 + Vite** — app shell and build tooling
- **React Router** — page routing
- **Tailwind CSS** — styling, design tokens in `tailwind.config.js`
- **Framer Motion** — scroll reveals, page/menu transitions
- **React Hook Form** — booking & contact form state + validation
- **React Datepicker** — themed date selection on the booking form
- **EmailJS** (`@emailjs/browser`) — sends booking + contact emails straight from the browser, no backend required
- **React Toastify** — success/error toasts
- **React Helmet Async** — per-page SEO titles/meta

---

## 1. Install Dependencies

```bash
npm install
```

## 2. Run Locally

```bash
npm run dev
```

Opens at `http://localhost:5173`.

## 3. Configure EmailJS (required for Booking + Contact forms to actually send)

The site uses [EmailJS](https://www.emailjs.com) so bookings and enquiries can be emailed
directly from the browser — no server needed.

1. Create a free EmailJS account.
2. **Add an Email Service** (e.g. Gmail, Outlook) → copy the **Service ID**.
3. **Create two Email Templates:**
   - **Owner template** — sent to you for every new booking/enquiry. Add these
     placeholders to the template body: `{{first_name}}`, `{{surname}}`,
     `{{customer_email}}`, `{{phone}}`, `{{event_type}}`, `{{pickup_address}}`,
     `{{destination}}`, `{{date}}`, `{{time}}`, `{{hours_needed}}`, `{{passengers}}`,
     `{{special_requests}}`, `{{to_email}}`.
   - **Customer template** — the thank-you / payment-instructions email sent back to the
     customer after booking. Add: `{{first_name}}`, `{{event_type}}`, `{{date}}`,
     `{{time}}`, `{{bank_name}}`, `{{account_holder}}`, `{{account_number}}`,
     `{{branch_code}}`, `{{reference}}`, `{{proof_of_payment_email}}`, `{{to_email}}`.
   - Copy each template's **Template ID**.
4. Copy your **Public Key** from *Account → API Keys*.
5. Copy `.env.example` to `.env` and fill in the values:

```bash
cp .env.example .env
```

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_OWNER_TEMPLATE_ID=your_owner_template_id
VITE_EMAILJS_CUSTOMER_TEMPLATE_ID=your_customer_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> The Contact page reuses the **owner template** for general enquiries (it sends
> `event_type: "General Enquiry (Contact Page)"`). Make sure your owner template
> reads sensibly for both bookings and general messages, or create a dedicated
> third template and wire it up in `src/services/emailService.js`.

## 4. Add Your Business Details

Still in `.env`, update:

```env
VITE_OWNER_EMAIL=bookings@yourdomain.co.za
VITE_BUSINESS_PHONE=+27 XX XXX XXXX
VITE_WHATSAPP_NUMBER=27XXXXXXXXX     # international format, no + or spaces
VITE_BUSINESS_ADDRESS=Your City, Province, South Africa
```

These flow automatically into the Navbar, Footer, Contact page, and the floating
WhatsApp button — no code changes needed.

## 5. Update Banking Details

These appear in the **customer confirmation email** (via your EmailJS customer
template) so they can pay the deposit:

```env
VITE_BANK_NAME=Your Bank
VITE_BANK_ACCOUNT_HOLDER=Your Business (Pty) Ltd
VITE_BANK_ACCOUNT_NUMBER=0000000000
VITE_BANK_BRANCH_CODE=000000
VITE_BANK_PROOF_OF_PAYMENT_EMAIL=payments@yourdomain.co.za
```

## 6. Update the Map

Open `src/data/siteConfig.js` and replace `mapEmbedSrc` with your own Google Maps
embed URL (Google Maps → Share → Embed a map → copy the `src` from the iframe code).

## 7. Replace Placeholder Photography

`src/data/gallery.js` currently uses placeholder images from picsum.photos so the
masonry gallery has something to display. Swap each `src` for your own event
photography before going live. The hero and About page images
(`src/assets/hero-photo.jpg`, `src/assets/about-photo.jpg`) were cropped from your
original branding poster — replace with real photography whenever you have it.

## 8. Build for Production

```bash
npm run build
```

Output goes to `dist/`. Preview the production build locally with:

```bash
npm run preview
```

Deploy `dist/` to any static host (Vercel, Netlify, Cloudflare Pages, etc.) — just
remember to add the same environment variables in your host's dashboard, since
`.env` is never committed to git.

---

## Folder Structure

```
src/
  assets/        Images (hero/about photography)
  components/    Reusable UI: Navbar, Footer, cards, lightbox, etc.
  data/          Editable content: services, pricing, gallery, nav links, site config
  hooks/         useScrollPosition, useLockBodyScroll
  pages/         One file per route: Home, About, Services, Gallery, Pricing, Booking, Contact
  services/      emailService.js — all EmailJS sending logic
  utils/         Shared Framer Motion animation variants
  App.jsx        Routes + global layout (Navbar, Footer, toasts, floating buttons)
  main.jsx       App entry point
```

## Editing Content

Almost everything is data-driven, so you rarely need to touch component code:

| What | File |
|---|---|
| Services offered | `src/data/services.js` |
| Pricing packages | `src/data/pricing.js` |
| Gallery images | `src/data/gallery.js` |
| Event type dropdown (Booking form) | `src/data/eventTypes.js` |
| Nav menu links | `src/data/navLinks.js` |
| Business info, banking, EmailJS keys | `src/data/siteConfig.js` (reads from `.env`) |

## Connecting a Real Database Later

The booking form currently emails details straight to you via EmailJS. If you later
want bookings stored somewhere (to check date availability, build an admin view,
etc.), the cleanest path is to add a call inside `submitBooking()` in
`src/services/emailService.js` that also writes to Firebase, Supabase, or another
backend of your choice — the form and UI won't need to change.

## A Note on the Logo

The current emblem (`src/components/StarEmblem.jsx`, used in the Navbar, Footer,
loading screen, and favicon) is a three-pointed star inside a ring — deliberately
evocative of the Mercedes-Benz badge to tie into the brand's "vintage Mercedes"
identity. Because that shape is closely associated with Mercedes-Benz's own
registered trademark, it's worth having a quick look (or a chat with a local
trademark advisor) before this goes live commercially, since implying an
affiliation that doesn't exist can carry real legal risk. Swapping it for an
original mark is a small, contained change if you'd like one — it's used in
exactly one place, `StarEmblem.jsx`, plus the favicon.
