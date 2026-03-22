# LuxeService – SvelteKit + shadcn-style Template

A production-ready, multi-page website template for appointment-based service businesses, rebuilt with **SvelteKit**, **Tailwind CSS**, and **shadcn-style reusable UI components**.

## Stack
- SvelteKit
- Tailwind CSS
- TypeScript
- class-variance-authority + clsx + tailwind-merge (shadcn-style component patterns)

## Pages
- `/` Home
- `/services`
- `/about`
- `/gallery`
- `/contact`

## Component structure
- `src/lib/components/ui/*` → shadcn-style primitives (`Button`, `Card`, `Input`, `Textarea`)
- `src/lib/components/sections/*` → reusable business sections/cards (`Navbar`, `Footer`, `ServiceCard`, `TeamCard`, `GalleryGrid`, `TestimonialCard`, `OpeningHours`)
- `src/lib/data/site.ts` → central content/configuration for easy customisation

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```
