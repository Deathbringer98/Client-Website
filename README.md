
# Konarr Business Website (Next.js)

Professional multi-page business website for Konarr built with Next.js, React, and Tailwind CSS.

## Stack

- Next.js (App Router)
- React 18
- Tailwind CSS

## Install and Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production Build

```bash
npm run build
npm run start
```

## Main Routes

- `/` Home / landing page
- `/about` Company overview and delivery model
- `/services` Service lines, offerings, and division breakdown
- `/contact` Functional contact form with API endpoint
- `/api/contact` POST endpoint for contact submissions
- `/sitemap.xml` Generated sitemap
- `/robots.txt` Generated robots directives

## Resend Email Setup (Vercel Ready)

1. Create a Resend account and API key.
2. In your Vercel project settings, add these environment variables:

```text
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=your-inbox@example.com
CONTACT_FROM_EMAIL=Konarr Website <onboarding@resend.dev>
CONTACT_RATE_WINDOW_MS=600000
CONTACT_RATE_MAX_ATTEMPTS=5
```

3. For production, switch `CONTACT_FROM_EMAIL` to a verified domain sender in Resend.
4. A local template is provided in `.env.example`.
5. The API includes a hidden honeypot field and IP-based rate limiting to reduce spam/abuse.

## Project Structure

```text
app/
  api/
    contact/
      route.js
  about/
    page.jsx
  contact/
    page.jsx
  services/
    page.jsx
  globals.css
  layout.jsx
  page.jsx
components/
  contact/
    ContactForm.jsx
  site/
    Footer.jsx
    Navbar.jsx
lib/
  konarr-content.js
public/
  assets/
    (legacy Konarr brand assets integrated into current pages)
next.config.mjs
tailwind.config.js
postcss.config.js
package.json
```

## Notes

- The site uses a custom Konarr visual system with a responsive layout and animated reveal effects.
- Contact form submissions are validated server-side and sent using Resend from `app/api/contact/route.js`.
- Contact security includes honeypot bot trapping, output sanitization, and configurable rate limiting.
- SEO includes canonical URLs, index/follow directives, Open Graph metadata, Twitter card metadata, sitemap generation, robots directives, and JSON-LD schema for `Organization` and `WebSite`.
- Original Konarr assets from the legacy project are now copied into `public/assets` and used across the Next.js pages.
