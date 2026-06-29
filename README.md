# Void & Key — Next.js Recreation

A Next.js 14 (App Router) + TypeScript + Tailwind CSS recreation of the **Void & Key** Figma design.

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## What's included

- `src/app/page.tsx` — homepage assembling every section in Figma order
- `src/components/` — one component per section (Navbar, Hero, Marquee, About, Services, Portfolio, Team, Testimonials, TechStack, CTA, Footer)
- `src/data/content.ts` — all copy/content in one place, pulled from the Figma layer text
- `public/images/` — your uploaded image assets, wired into the matching sections
- `tailwind.config.js` — design tokens (colors, gradients, fonts) extracted directly from the Figma file

## About the fonts

The Figma file uses two licensed typefaces:

- **Franie** (display/headlines)
- **Aeonik** (body text)

These aren't on Google Fonts, so they're **not bundled**. The site currently falls back to system sans-serif fonts (`Poppins`/`Inter`-style stacks) defined in `globals.css`:

```css
--font-franie: 'Franie Fallback', 'Poppins', sans-serif;
--font-aeonik: 'Aeonik Fallback', 'Inter', sans-serif;
```

**To use the real fonts:**
1. If you have a license/files for Franie and Aeonik, drop the `.woff2` files into `src/app/fonts/`.
2. Add `@font-face` rules in `globals.css` (or use `next/font/local`) pointing to those files, named `Franie Fallback` and `Aeonik Fallback` — or update the `--font-franie` / `--font-aeonik` variables to match whatever family name you load.
3. No other code changes are needed — every component already references `font-display` / `font-body`, which map to these CSS variables.

## Sections

- **Hero** — headline, gradient text, social links, CTA pill, stats row
- **Top nav** — floating glass pill nav
- **Marquee** — scrolling services strip
- **About** — overlapping image composition, numbered services
- **Services** — 3-column card grid with hover effects
- **Portfolio** — filterable image gallery
- **Team** — horizontal scrollable cards with navigation
- **Testimonials** — quote carousel with dots
- **Tech Stack** — hoverable technology cards
- **CTA** — gradient banner with pill button
- **Footer** — newsletter, quick links, contact info, socials

## Notes

- Built with the App Router, Tailwind, and `lucide-react` for icons.
- Mobile responsive throughout, with a hamburger menu on the navbar below the `lg` breakpoint.
- Respects `prefers-reduced-motion` (marquee animation disabled).
