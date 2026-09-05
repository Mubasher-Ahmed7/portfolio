# Mubasher Ahmed — Portfolio

A fast, responsive, multi-page developer portfolio for **Mubasher Ahmed**, Full Stack JavaScript Developer. A customized version of the [Dopefolio](https://github.com/rammcodes/Dopefolio) template (vanilla HTML + SASS + JavaScript, no frameworks), with a working EmailJS contact form.

**Live site:** https://mubasher-ahmed.vercel.app

## Tech Stack
- **Markup/Styling:** HTML, CSS, SASS
- **Scripts:** Vanilla JavaScript
- **Contact form:** EmailJS
- **Fonts:** Source Sans Pro (Google Fonts)

## Getting Started
```bash
npm install        # installs the Sass compiler
npm run dev        # compiles SASS -> css/style.css, watch mode
npx sass sass/main.scss css/style.css   # one-off compile
```

Then open `index.html` in a browser (or use the Live Server extension).

## Pages
- `index.html` — Home: Hero, About (with skills), Projects, Contact, Footer
- `project-1.html` — Case study: Responsive Landing Page
- `project-2.html` — Case study: Full-Stack CRUD App
- `project-3.html` — Case study: Firebase Realtime App

## Customization
- **Sections:** edit `index.html`
- **Project pages:** edit `project-1.html`, `project-2.html`, `project-3.html`
- **Theme color:** change `$themeClrPrimary` in `sass/abstracts/_variables.scss`, then recompile SASS
- **Profile avatar:** replace `assets/svg/ma-avatar.svg`
- **Contact form keys:** open `index.js` and update:
  ```js
  const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
  const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
  const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'
  ```
- **Resume:** replace `assets/resume.pdf`
- **Social/SEO:** `assets/og-image.png`, `robots.txt`, `sitemap.xml`

## Demo Projects
| Project | Repo | Live |
|---|---|---|
| Landing Page | [github.com/Mubasher-Ahmed7/landing-page-demo](https://github.com/Mubasher-Ahmed7/landing-page-demo) | https://landing-page-demo-lyart.vercel.app |
| Full-Stack CRUD App | [github.com/Mubasher-Ahmed7/crud-app-demo](https://github.com/Mubasher-Ahmed7/crud-app-demo) | https://crud-app-demo-olive.vercel.app |
| Firebase Realtime App | [github.com/Mubasher-Ahmed7/firebase-app-demo](https://github.com/Mubasher-Ahmed7/firebase-app-demo) | https://firebase-app-demo.vercel.app |

## Deploying
This is a static site. Push to GitHub and import the repo into **Vercel** or **Netlify** — no build step required (publish directory is the repo root).