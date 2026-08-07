import { process } from '../data/content'

export default function HowIWork() {
  return (
    <section id="process" className="container-x py-16">
      <h2 className="section-title">How I Work</h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {process.map((step, i) => (
          <div key={step.title} className="relative">
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-5 h-full">
              <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{step.step}</div>
              <h3 className="mt-2 font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{step.description}</p>
            </div>
            {i < process.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-5 text-slate-300 dark:text-slate-700">→</div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}