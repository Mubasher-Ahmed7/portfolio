import { services } from '../data/content'

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 dark:bg-slate-900/40">
      <div className="container-x py-16">
        <h2 className="section-title">Services</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href="#contact" className="btn-primary">Ready to start? Let's talk</a>
        </div>
      </div>
    </section>
  )
}