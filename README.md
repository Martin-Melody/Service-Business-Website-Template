# LuxeService – Reusable Service Business Website Template

Production-ready, multi-page website template for appointment-based service businesses.

## Stack
- Semantic HTML5
- Tailwind CSS (CDN)
- Vanilla JavaScript reusable components

## Pages
- `index.html` (Home)
- `services.html`
- `about.html`
- `gallery.html`
- `contact.html`

## Reusable Components
Implemented in `assets/js/components.js` + `assets/js/common.js`:
- `Navbar`
- `Footer`
- `ServiceCard` + service grid injection
- `TeamCard` + team grid injection
- `GalleryGrid` with lightbox modal
- `TestimonialCard` + section injection
- `OpeningHours`

## Customisation
1. Update brand/business details and navigation in `siteData`.
2. Replace placeholder copy/content arrays (`services`, `teamMembers`, `galleryImages`, `testimonials`).
3. Replace section imagery with your own optimised assets.
4. Adjust colour classes (`teal`, `slate`) to theme for any industry.

## Local preview
```bash
python3 -m http.server 4173
```
Then open `http://localhost:4173`.
