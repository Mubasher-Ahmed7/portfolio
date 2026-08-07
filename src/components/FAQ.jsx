import { useState } from 'react'
import { faqs } from '../data/content'

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="container-x py-16">
      <h2 className="section-title">FAQ</h2>
      <div className="mt-8 space-y-3 max-w-3xl">
        {faqs.map((f, i) => (
          <div
            key={i}
            className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <button
              onClick={() => setOpen(open === i ? -1 : i)}
              className="w-full flex items-center justify-between p-5 text-left font-semibold hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
            >
              <span>{f.q}</span>
              <span className="ml-4 text-lg">{open === i ? '−' : '+'}</span>
            </button>
            {open === i && (
              <p className="px-5 pb-5 text-slate-600 dark:text-slate-300 leading-relaxed">{f.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}