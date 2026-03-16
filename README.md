# BluDrop Landing Page

A minimal, production-ready landing page for **BluDrop**, designed to be deployed on **Vercel**.  
It uses a single static `index.html` file with custom styling and the official BluDrop logo.

---

## Tech stack

- **HTML + CSS**: No framework or build step required.
- **Google Fonts**: `Playfair Display` for headings and `Poppins` for body text.
- **Static assets**: BluDrop brand logo (`bludrop-logo.png`) served from the project root.

---

## Local development

You can open `index.html` directly in a browser, or use a small static server:

1. Install Node.js (if not already installed).
2. In the project root, run:
   - `npm install serve -D`
   - `npx serve .`
3. Open the printed local URL in your browser to preview the site.

The page is completely static, so no additional configuration is required.

---

## Deploying to Vercel

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. In the Vercel dashboard:
   - Click **New Project** → **Import** your BluDrop repo.
   - Vercel will auto-detect this as a **static project** with `index.html` at the root.
   - No build command is required; the default **Output Directory** can remain the project root.
3. Click **Deploy** and wait for Vercel to finish building.
4. Copy the generated URL to share the live BluDrop landing page.

---

## Project structure

- `index.html` – Main landing page, layout, and styles.
- `bludrop-logo.png` – BluDrop brand logo used in the header.
- `package.json` – Optional metadata and helper scripts for local preview.

---

## Future enhancements

Below are suggested improvements you can implement over time:

- **Add navigation and sections**
  - Create anchor links for sections like *About*, *Services*, *Case Studies*, and *Contact*.
  - Expand the layout into a multi-section single-page site.

- **Contact and lead capture**
  - Add a contact form (name, email, message) wired to an email service or backend API.
  - Integrate a simple newsletter signup (e.g., Mailchimp, ConvertKit, or a custom API).

- **Responsiveness and accessibility**
  - Add more refined responsive breakpoints for tablets and large desktops.
  - Improve keyboard navigation and ARIA labels for all interactive elements.

- **Analytics and SEO**
  - Add basic analytics (e.g., Vercel Analytics, Plausible, or Google Analytics).
  - Fine-tune meta tags, Open Graph tags, and favicons for better sharing/SEO.

- **Brand system**
  - Introduce a small design system (buttons, cards, typography scale) to reuse across future BluDrop pages.
  - Add a dedicated `brand` or `assets` section with guidelines and downloadable assets.

- **Multi-page or app shell**
  - Evolve this static landing into a small marketing site or SPA using a framework like Next.js, while keeping the same visual identity.

Feel free to edit this README and the **Future enhancements** list as BluDrop grows.

