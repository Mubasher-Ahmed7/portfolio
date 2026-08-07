# Mubasher Ahmed — Portfolio

A one-page, responsive developer portfolio for **Mubasher Ahmed**, Full Stack JavaScript Developer. Built with React + Vite + Tailwind CSS, featuring dark mode, a working contact form, and links to three standalone demo projects.

**Live site:** https://mubasher-ahmed.vercel.app

## Tech Stack
- **Frontend:** React 18, Vite, Tailwind CSS
- **Contact form:** EmailJS (+ WhatsApp button)
- **Dark mode:** Tailwind `darkMode: "class"` with `localStorage` persistence + system preference

## Getting Started
```bash
npm install
npm run dev        # local dev at http://localhost:5173
npm run build      # production build -> dist/
```

### Make the contact form work
1. Create a free account at [emailjs.com](https://www.emailjs.com).
2. Create a Service, an Email Template (fields `name`, `email`, `message`), and copy your keys.
3. Open `src/components/Contact.jsx` and replace:
   ```js
   const SERVICE_ID = 'YOUR_SERVICE_ID'
   const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
   const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'
   ```

### Edit your info
All name, links, stats, skills, projects, and FAQ content live in one file:
```
src/data/content.js
```

## Demo Projects (standalone repos)
Each demo is a separate GitHub repo with its own README and Vercel deployment:

| Project | Repo | Live |
|---|---|---|
| Landing Page | [github.com/Mubasher-Ahmed7/landing-page-demo](https://github.com/Mubasher-Ahmed7/landing-page-demo) | https://landing-page-demo-lyart.vercel.app |
| Full-Stack CRUD App | [github.com/Mubasher-Ahmed7/crud-app-demo](https://github.com/Mubasher-Ahmed7/crud-app-demo) | https://crud-app-demo-olive.vercel.app |
| Firebase Realtime App | [github.com/Mubasher-Ahmed7/firebase-app-demo](https://github.com/Mubasher-Ahmed7/firebase-app-demo) | https://firebase-app-demo.vercel.app |

## Deploying to Vercel (free)
1. Push the repo to GitHub.
2. On [vercel.com](https://vercel.com), click **New Project > Import** your repo.
3. Framework: **Vite** (auto-detected). Build command `npm run build`, output `dist`.
4. Deploy → your site is live at `mubasher-ahmed.vercel.app`.

> The CRUD app's backend runs as a **Vercel serverless function** (free). See [crud-app-demo/README.md](https://github.com/Mubasher-Ahmed7/crud-app-demo) for details.

## Customization checklist
- [ ] `src/data/content.js` — your name, links, projects, FAQ
- [ ] `src/components/Contact.jsx` — EmailJS keys
- [ ] `public/resume.pdf` — your CV
- [ ] `public/og-image.png` — social share thumbnail
- [ ] Deployed URLs in `public/sitemap.xml` + `public/robots.txt`

## License
Use freely for your personal portfolio.
