import { projects } from '../data/content'

export default function Projects() {
  return (
    <section id="projects" className="container-x py-16">
      <h2 className="section-title">Projects</h2>
      <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl">
        Here are three projects that showcase my frontend, full-stack, and Firebase skills. Each is a live demo
        with source code — explore them below.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
          >
            <div className={`h-40 bg-gradient-to-br ${p.accent} flex items-center justify-center text-6xl`}>
              <span>{p.icon}</span>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 flex-1">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
              <div className="mt-5 flex gap-3">
                <a href={p.live} target="_blank" rel="noreferrer" className="btn-primary w-full justify-center">
                  Live Demo
                </a>
                <a href={p.repo} target="_blank" rel="noreferrer" className="btn-outline">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="text-slate-600 dark:text-slate-300 mb-4">Want a project like these?</p>
        <a href="#contact" className="btn-primary">Let's Talk</a>
      </div>
    </section>
  )
}