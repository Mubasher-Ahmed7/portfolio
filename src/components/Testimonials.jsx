import { testimonials } from '../data/content'

export default function Testimonials() {
  return (
    <section id="testimonials" className="container-x py-16">
      <h2 className="section-title">What Clients Say</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="rounded-xl border border-slate-200 dark:border-slate-800 p-6 bg-slate-50 dark:bg-slate-900/40"
          >
            <div className="text-amber-400 mb-3">★★★★★</div>
            <p className="text-slate-600 dark:text-slate-300 italic leading-relaxed">"{t.quote}"</p>
            <div className="mt-4 font-semibold">{t.author}</div>
            <div className="text-sm text-slate-500 dark:text-slate-400">{t.role}</div>
          </div>
        ))}
      </div>
    </section>
  )
}