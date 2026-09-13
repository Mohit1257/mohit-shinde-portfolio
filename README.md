# Mohit Shinde — Portfolio

Personal developer portfolio for **Mohit Shinde**, Java Full Stack Developer based in Pune, Maharashtra. Built to give recruiters and hiring managers a fast, clear read on skills, projects, and how to get in touch.

## About

A single-page React site covering: Hero, About, Skills, Projects (WorkSphere, CampusHub, Modern Employee Tracker), Education, Certification, and Contact (with a working form). No fake stats, no skill percentage bars, no invented experience — everything shown is sourced directly from the resume content provided.

## Tech Stack

- **React 18** + **Vite** — app shell and dev/build tooling
- **Tailwind CSS** — styling, with a small custom dark theme token set
- **Framer Motion** — entrance/scroll animations and the mobile menu transition
- **Lucide React** — icon set

No backend. The contact form talks directly to Web3Forms from the browser.

## Project Structure

```
mohit-shinde-portfolio/
├── public/
│   ├── favicon/favicon.svg
│   └── resume/Mohit-Shinde-Resume.pdf
├── src/
│   ├── assets/profile/            # profile photo (webp + jpg)
│   ├── components/                # Navbar, Hero, About, Skills, Projects,
│   │                               # ProjectCard, Education, Certification,
│   │                               # Contact, Footer, SectionHeader, Button
│   ├── data/portfolioData.js      # ALL site content lives here
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

To update any text, link, project, or skill on the site, edit `src/data/portfolioData.js` — nothing else needs to change.

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Opens the site locally (Vite will print the local URL, typically `http://localhost:5173`).

## Production Build

```bash
npm run build
```

Outputs a deployable build to `dist/`. Preview it locally with:

```bash
npm run preview
```

> **Note on this build:** this project was written and assembled outside of a networked environment, so `npm install` / `npm run build` have not been executed in this environment. Everything has been reviewed carefully by hand for correct imports, JSX, and Tailwind config, but please run through `npm install` → `npm run dev` → `npm run build` yourself after extracting the project, and open an issue in your own notes if anything needs a tweak.

## Contact Form Configuration

The Contact section uses [Web3Forms](https://web3forms.com) (a free, no-backend form relay) to actually deliver messages to your inbox — it does **not** fake a success state.

1. Go to [web3forms.com](https://web3forms.com) and generate a free **Access Key** using your email.
2. Copy `.env.example` to a new file named `.env`:
   ```bash
   cp .env.example .env
   ```
3. Paste your key into `.env`:
   ```
   VITE_WEB3FORMS_ACCESS_KEY=your_key_here
   ```
4. Restart the dev server (`npm run dev`) so Vite picks up the new environment variable.

If the key isn't configured, the form will show a clear message and point visitors to email you directly instead of pretending the message was sent.

**When deploying to Vercel**, add `VITE_WEB3FORMS_ACCESS_KEY` under Project → Settings → Environment Variables (see below). Never commit your real key inside `.env` to a public GitHub repo.

## Resume

The downloadable resume lives at `public/resume/Mohit-Shinde-Resume.pdf` and is served at `/resume/Mohit-Shinde-Resume.pdf`. Both the navbar and hero "Download Resume" buttons point to this file directly — replace the PDF (keeping the same filename) whenever the resume is updated.

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. In [Vercel](https://vercel.com), choose **Add New → Project** and import that repository.
3. Framework preset: **Vite**.
4. Build command: `npm run build`
5. Output directory: `dist`
6. If you're using the contact form, add `VITE_WEB3FORMS_ACCESS_KEY` as an environment variable in the Vercel project settings.
7. Click **Deploy**.

## Troubleshooting

- **Blank page after build** — make sure you're serving `dist/index.html` as the entry point (Vercel does this automatically with the Vite preset).
- **Contact form shows the "not configured" message** — confirm `.env` exists locally (or the env var is set in Vercel) and that the dev/build was restarted after adding it.
- **Resume download 404s** — confirm the file is still at `public/resume/Mohit-Shinde-Resume.pdf` after any edits; Vite serves everything in `public/` from the site root.
- **Fonts look off** — the site loads Inter and Plus Jakarta Sans from Google Fonts at runtime; make sure the deployed environment allows outbound requests to `fonts.googleapis.com`.
