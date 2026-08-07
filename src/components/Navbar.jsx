import { useState } from 'react'
import { profile, navLinks } from '../data/content'
import { useTheme } from '../context/ThemeContext'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-950/90 backdrop-blur">
      <nav className="container-x flex items-center justify-between py-4">
        <a href="#top" className="text-lg font-bold tracking-tight">
          {profile.name}
        </a>

        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-lg p-2 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <a href={profile.resume} download className="btn-primary hidden sm:inline-flex">
            Resume
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden rounded-lg p-2 border border-slate-200 dark:border-slate-700"
            aria-label="Menu"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800">
          <ul className="container-x flex flex-col py-4 gap-4 text-sm font-medium">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href={profile.resume} download className="btn-primary justify-center w-full">
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}