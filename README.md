# GLOW — Aesthetic & Wellness Clinic Marketing Agency

An Awwwards-caliber agency website for a digital marketing agency specializing in
skin, hair, wellness and aesthetic clinics. Built with **Next.js 14 (App Router)**,
**TypeScript**, **Tailwind CSS** and **Framer Motion**.

## ✨ Features

- **Custom morphing cursor** that scales and labels on interactive elements
- **Kinetic hero typography** — words clip-reveal and stagger in on load
- **Signature "skin glow" animation** — morphing radiant gradient blobs
- **Smooth scrolling** globally via Lenis
- **Scroll-triggered reveals** — fade-up, scale-in, parallax
- **Magnetic buttons** that follow the cursor
- **Route page transitions** with a blue/yellow wipe (AnimatePresence)
- **Animated stat counters** that count up on scroll
- **Client + tag marquees** (infinite scrolling tickers)
- **Hover-reveal case study cards** with image zoom + metric overlay
- **Animated contact form** with floating labels and focus states
- Fully responsive, mobile-first, SEO-optimized (metadata, sitemap, robots)

## 🎨 Design System

| Token       | Value      | Use                          |
| ----------- | ---------- | ---------------------------- |
| `ink`       | `#0A0A0A`  | Primary background           |
| `electric`  | `#0047FF`  | Primary accent               |
| `glow`      | `#FFE600`  | Secondary / highlight accent |
| Typography  | Poppins    | 400–900 weights              |

## 🗂 Structure

```
app/
  layout.tsx          Root layout — fonts, cursor, scroll, nav, transitions
  page.tsx            Home
  services/page.tsx   Services
  work/page.tsx       Case studies
  about/page.tsx      About + team
  contact/page.tsx    Contact form
  globals.css
  sitemap.ts / robots.ts / not-found.tsx
components/
  ui/                 Button, Section, Reveal, Magnetic (reusable primitives)
  sections/           Home page sections
  CustomCursor, SmoothScroll, PageTransition, Navbar, Footer,
  GlowBlob, Marquee, StatsCounter, KineticText, CaseStudyCard, ContactForm
lib/
  data.ts             All placeholder content
```

## 🚀 Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

Placeholder imagery is loaded from Unsplash (configured in `next.config.js`).
