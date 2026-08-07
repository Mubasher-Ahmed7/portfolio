const features = [
  { icon: '⚡', title: 'Lightning Fast', desc: 'Optimized for speed and a seamless user experience on any device.' },
  { icon: '🔒', title: 'Secure by Default', desc: 'Enterprise-grade security practices built into every layer.' },
  { icon: '🤝', title: 'Team Friendly', desc: 'Collaborative tools that keep your whole team in sync.' },
  { icon: '📈', title: 'Grows With You', desc: 'Scales from a small startup to a large enterprise effortlessly.' },
]

const steps = [
  { step: '01', title: 'Create an account', desc: 'Sign up in minutes. No credit card required to start.' },
  { step: '02', title: 'Customize your workspace', desc: 'Set up your project, invite your team, and add integrations.' },
  { step: '03', title: 'Launch & scale', desc: 'Go live and watch your workflow become effortless.' },
]

const testimonials = [
  { quote: 'They transformed how our team ships. Highly recommended.', author: 'Ali R.', role: 'Product Manager' },
  { quote: 'Clean, fast, and intuitive. Our team productivity is great.', author: 'Sana K.', role: 'Startup Founder' },
]

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Nav */}
      <header className="sticky top-0 bg-white/90 backdrop-blur border-b border-slate-100">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between py-4">
          <div className="font-bold text-xl">Nexa</div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#features" className="hover:text-indigo-600">Features</a>
            <a href="#how" className="hover:text-indigo-600">How it works</a>
            <a href="#pricing" className="hover:text-indigo-600">Pricing</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
          </div>
          <a href="#contact" className="rounded-lg bg-indigo-600 text-white px-5 py-2 text-sm font-semibold hover:bg-indigo-700">
            Get Started
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          The modern platform for your growing business
        </h1>
        <p className="mt-5 text-lg text-slate-600 max-w-2xl mx-auto">
          Everything you need to build, launch, and scale your product — in one clean, powerful workspace.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="#contact" className="rounded-lg bg-indigo-600 text-white px-6 py-3 font-semibold hover:bg-indigo-700">Start free trial</a>
          <a href="#features" className="rounded-lg border border-slate-300 px-6 py-3 font-semibold hover:border-slate-500">See features</a>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center">Features</h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl">{f.icon}</div>
                <h3 className="mt-3 font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-3xl font-bold text-center">How it works</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.step} className="rounded-xl border border-slate-200 p-6">
              <div className="text-2xl font-bold text-indigo-600">{s.step}</div>
              <h3 className="mt-2 font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-white p-6">
              <div className="text-amber-400 mb-3">★★★★★</div>
              <p className="text-slate-700 italic">"{t.quote}"</p>
              <div className="mt-4 font-semibold">{t.author}</div>
              <div className="text-sm text-slate-500">{t.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h2 className="text-3xl font-bold">Ready to get started?</h2>
        <p className="mt-3 text-slate-600">Join thousands of teams building with Nexa.</p>
        <a href="#top" className="inline-block mt-6 rounded-lg bg-indigo-600 text-white px-6 py-3 font-semibold hover:bg-indigo-700">Sign up today</a>
      </section>

      <footer className="border-t border-slate-100 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Nexa. Demo landing page built by Mubasher Ahmed.
      </footer>
    </div>
  )
}