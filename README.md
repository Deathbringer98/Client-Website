
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
next.config.mjs
tailwind.config.js
postcss.config.js
package.json
```

## Notes

- The site uses a custom Konarr visual system with a responsive layout and animated reveal effects.
- Contact form submissions are validated server-side in `app/api/contact/route.js` and return a unique reference ID.
- Existing legacy Vite files remain in the repository for reference but are not used by the Next.js runtime.
