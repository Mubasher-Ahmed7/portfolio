# Setup Guide — Wire Up & Deploy Your Portfolio

Complete the steps below in order. Each step has exact click paths and where to paste values.
Everything that's a placeholder right now is marked with `YOUR_`.

---

## 1. Contact form → EmailJS

**Goal:** your `Contact` form sends messages to `mubasherahmed131@gmail.com`.

1. Go to https://www.emailjs.com and **Sign Up** (free).
2. On the dashboard: **Email Services → Add New Service** → pick your mail provider (Gmail).
   - For Gmail you'll be asked to link your Gmail account — allow it.
   - Name the service, e.g. `portfolio`. Copy the **Service ID**.
3. **Email Templates → Create New Template**.
   - Set **To Email**: `mubasherahmed131@gmail.com`
   - Add these template variables exactly (they map to the form):
     ```
     {{name}}
     {{email}}
     {{message}}
     ```
   - Save → copy the **Template ID**.
4. **Account → General → API Keys**: copy the **Public Key**.
5. Open `src/components/Contact.jsx` and replace:
   ```js
   const SERVICE_ID = 'YOUR_SERVICE_ID'   // -> your Service ID
   const TEMPLATE_ID = 'YOUR_TEMPLATE_ID' // -> your Template ID
   const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'   // -> your Public Key
   ```
6. Test: `npm run dev`, submit the form, confirm you receive the email.

---

## 2. Firebase web app (`projects/firebase-app`)

**Goal:** Realtime task list with login works.

1. Go to https://console.firebase.google.com → **Add project** → name it (e.g. `portfolio-app`).
2. In the project: **Authentication → Sign-in method → Email/Password → Enable → Save**.
3. **Firestore Database → Create database** → Production mode → Region `asia-south1` (Mumbai, closest to you).
   - **Rules tab → Security rules** set to:
     ```
     rules_version = '2';
     service cloud.firestore {
       match /databases/{database}/documents {
         match /{document=**} {
           allow read, write: if request.auth != null;
         }
       }
     }
     ```
4. **Project settings (gear) → Your apps → `</>` (Web)** → register app → copy the whole `firebaseConfig` object.
5. Open `projects/firebase-app/src/firebase/config.js` and **paste your config** over the placeholder object (replace the `YOUR_*` values).
6. Move your project into "Go Live" for the demo: **Build → App Check → Enforce** (optional) — or keep it in test mode with the auth rule above.
7. Run and test registration + adding/deleting tasks.

> Tip: Firestore rules require `request.auth != null` so only logged-in users (you) can read/write your tasks. The app also filters by `t.uid === user.uid`.

---

## 3. Full-Stack CRUD backend → MongoDB + JWT

**Goal:** The task manager authenticates and stores tasks.

1. Create a free MongoDB cluster:
   - Go to https://www.mongodb.com/atlas → **Start Free** → build a Shared (M0) cluster.
   - Under **Database Access**: create a DB user with a strong password.
   - Under **Network Access**: click **Add IP Address → Allow access from anywhere** (`0.0.0.0/0`) for now.
2. **Connect → Drivers** → copy the connection string, e.g.
   ```
   mongodb+srv://<user>:<password>@cluster0.xxxx.mongodb.net/taskmanager
   ```
3. In `projects/crud-app/backend`:
   ```bash
   cp .env.example .env     # replace .env with your values
   ```
   Edit `.env`:
   ```
   MONGO_URI=mongodb+srv://<user>:<password>@cluster0.xxxx.mongodb.net/taskmanager
   JWT_SECRET=<any long random string>
   PORT=5000
   ```
4. Install + run locally:
   ```bash
   cd projects/crud-app/backend
   npm install
   npm run dev
   ```
   You should see `MongoDB connected` and `Server running on port 5000`.
5. **Frontend points to backend**: create `projects/crud-app/.env`:
   ```
   VITE_API_URL=http://localhost:5000/api
   ```
   (Change to your deployed Render URL after step 5 of the deploy section.)

---

## 4. Replace placeholder public files

Replace these so nothing looks unfinished:
- `public/resume.pdf` → your real CV (written in English, one page).
- `public/og-image.png` → a 1200x630 image with your name/title (used when your link is shared on WhatsApp/Facebook).

---

## 5. Deploy to Vercel (main portfolio)

1. Push this repo to GitHub:
   ```bash
   cd ~/portfolio
   git remote add origin git@github.com:Mubasher-Ahmed7/portfolio.git  # or your repo URL
   git push -u origin main
   ```
2. Go to https://vercel.com → **New Project → Import** your `portfolio` repo.
3. Vercel auto-detects **Vite**. Confirm:
   - Build command: `npm run build`
   - Output directory: `dist`
4. **Deploy**. Your URL: `https://mubasher-ahmed-<rand>.vercel.app` (you can add a custom domain later).
5. Update `public/sitemap.xml` and `public/robots.txt` `Sitemap:` line to your real domain.

### Deploy the demo projects (best: separate Vercel projects)
- **landing-page**: Import `projects/landing-page`, framework Vite. Live URL → put into `projects/landing-page` Project card link.
- **firebase-app**: Import `projects/firebase-app`, framework Vite → same.
- **crud-app**:
  - Frontend: import `projects/crud-app`, framework Vite.
  - Backend: deploy `projects/crud-app/backend` to **Render** (https://render.com, free tier): **New → Web Service → connect your repo folder `backend`** → set env vars (`MONGO_URI`, `JWT_SECRET`) → start command `node server.js`.
  - Point frontend to backend with a Vercel **Environment Variable** `VITE_API_URL=https://your-render-url/api`.

<br/>

---

### Quick checklist
- [ ] EmailJS Service ID, Template ID, Public Key → in `Contact.jsx`
- [ ] Firebase config → in `firebase-app/src/firebase/config.js` + auth + Firestore enabled
- [ ] MongoDB URI + JWT secret → in `crud-app/backend/.env`
- [ ] Real `resume.pdf` + `og-image.png`
- [ ] Pushed to GitHub and deployed on Vercel
- [ ] Live Demo links in `src/data/content.js` updated to real URLs