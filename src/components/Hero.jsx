import { profile, stats } from '../data/content'

export default function Hero() {
  return (
    <section id="top" className="container-x pt-20 pb-16 sm:pt-28 sm:pb-20">
      <div className="max-w-3xl">
        <p className="mb-4 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
          👋 Hi, I'm {profile.name}
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
          {profile.title}
        </h1>
        <p className="mt-5 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          {profile.tagline}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#contact" className="btn-primary">
            Hire Me
          </a>
          <a href="#projects" className="btn-outline">
            View Projects
          </a>
          <a href={profile.resume} download className="btn-outline">
            Download Resume
          </a>
        </div>

        <div className="mt-6 flex items-center gap-4">
          <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:opacity-70 transition-opacity">
            GitHub
          </a>
          <span className="text-slate-300 dark:text-slate-700">•</span>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:opacity-70 transition-opacity">
            LinkedIn
          </a>
          <span className="text-slate-300 dark:text-slate-700">•</span>
          <a href={profile.socials.upwork} target="_blank" rel="noreferrer" aria-label="Upwork" className="hover:opacity-70 transition-opacity">
            Upwork
          </a>
          <span className="text-slate-300 dark:text-slate-700">•</span>
          <a href={profile.socials.freelancer} target="_blank" rel="noreferrer" aria-label="Freelancer" className="hover:opacity-70 transition-opacity">
            Freelancer
          </a>
        </div>
      </div>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-slate-200 dark:border-slate-800 p-6 text-center hover:shadow-lg transition-shadow"
          >
            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">{s.value}</div>
            <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}