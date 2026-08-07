# Mubasher Ahmed — Portfolio

A one-page, responsive developer portfolio for **Mubasher Ahmed**, Full Stack JavaScript Developer. Built with React + Vite + Tailwind CSS, featuring dark mode, a working contact form, and three demo projects.

## Tech Stack
- **Frontend:** React 18, Vite, Tailwind CSS
- **Contact form:** EmailJS (+ WhatsApp button)
- **Dark mode:** Tailwind `darkMode: "class"` with `localStorage` persistence + system preference

## Getting Started

### Main portfolio
```bash
cd portfolio
npm install
npm run dev        # local dev at http://localhost:5173
npm run build      # production build -> dist/
```

### To make the contact form work
1. Create a free account at [emailjs.com](https://www.emailjs.com).
2. Create a Service, an Email Template (with fields `name`, `email`, `message`), and copy your keys.
3. Open `src/components/Contact.jsx` and replace:
   ```js
   const SERVICE_ID = 'YOUR_SERVICE_ID'
   const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
   const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'
   ```
4. Replace `public/resume.pdf` and `public/og-image.png` with your own files.

### Edit your info
All name, links, stats, skills, projects, and FAQ content live in one file:
```
src/data/content.js
```

## Demo Projects

### 1. Landing page — `projects/landing-page/`
A responsive SaaS-style landing page (Figma-to-code style). React + Tailwind.
```bash
cd projects/landing-page && npm install && npm run dev
```

### 2. Full-Stack CRUD App — `projects/crud-app/`
Task manager with JWT auth. React frontend + Express/MongoDB backend.
```bash
# Frontend
cd projects/crud-app && npm install && npm run dev

# Backend (separate terminal)
cd projects/crud-app/backend
npm install
cp .env.example .env   # add your MONGO_URI and JWT_SECRET
npm run dev
```
Set the frontend to your deployed API:
```
VITE_API_URL=https://your-backend-url/api   # in projects/crud-app/.env
```

### 3. Firebase App — `projects/firebase-app/`
Realtime task list using **Firebase Auth** and **Firestore**.
```bash
cd projects/firebase-app && npm install && npm run dev
```
1. Create a Firebase project, enable Email/Password auth, and create a Firestore database.
2. Paste your web config into `src/firebase/config.js`.

## Deploying to Vercel (free)

### Main portfolio
1. Push the repo to GitHub.
2. On [vercel.com](https://vercel.com), click **New Project > Import** your repo.
3. Framework: **Vite** (auto-detected). Build command `npm run build`, output `dist`.
4. Deploy → your site is live at `mubasher-ahmed.vercel.app`.

### Deploying demo sub-projects
Recommended option: **deploy each demo as its own Vercel project** (clean URLs):
- `landing-page` → project A
- `crud-app` → project B (frontend) + deploy the `/backend` to [Render](https://render.com) free tier
- `firebase-app` → project C

Then update the "Live Demo" links in `src/data/content.js` to the deployed URLs.

> Note: The sub-projects are separate `package.json` apps. If you want them served under one domain, deploy each as its own Vercel project or set up a monorepo root with framework-preset auto-detection.

## Customization checklist
- [ ] `src/data/content.js` — your name, links, projects, FAQ
- [ ] `src/components/Contact.jsx` — EmailJS keys
- [ ] `public/resume.pdf` — your CV
- [ ] `public/og-image.png` — social share thumbnail
- [ ] Deployed URLs in `public/sitemap.xml` + `public/robots.txt`

## License
Use freely for your personal portfolio.