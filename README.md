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

### Contact form environment variables

The contact page (`contact.html`) posts to `/api/contact`, a Vercel serverless function that sends mail via [Resend](https://resend.com). Set these in **Vercel → Project → Settings → Environment Variables** (Production and Preview):

| Variable | Example | Purpose |
|---|---|---|
| `RESEND_API_KEY` | `re_...` | API key from the [Resend dashboard](https://resend.com/api-keys) |
| `CONTACT_FROM_EMAIL` | `BluDrop <hello@bludrop.in>` | Verified sender address (must match a domain verified in Resend) |
| `CONTACT_TO_EMAIL` | `bludrop16@gmail.com` | Inbox that receives contact form submissions |

**Resend domain setup:** Add and verify `bludrop.in` under [Resend → Domains](https://resend.com/domains) (SPF/DKIM DNS records at your registrar). Until the domain is verified, Resend only allows sending to the email address that owns the Resend account.

After changing environment variables, redeploy the project so the serverless function picks up the new values.

---

## Project structure

- `index.html` – Main landing page, layout, and styles.
- `contact.html` – Contact page with form wired to `/api/contact`.
- `api/contact.js` – Vercel serverless handler that sends email via Resend.
- `bludrop-logo.png` – BluDrop brand logo used in the header.
- `package.json` – Metadata, Resend dependency, and helper scripts for local preview.

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

