import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <div className="container-x py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-5 text-sm">
          <a href={profile.socials.github} target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
          <a href={profile.resume} download className="hover:underline">Resume</a>
        </div>
      </div>
      <div className="pb-6 text-center text-xs text-slate-400 dark:text-slate-600">
        Built with React & Tailwind CSS
      </div>
    </footer>
  )
}