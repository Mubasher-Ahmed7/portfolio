import { profile } from '../data/content'

export default function About() {
  return (
    <section id="about" className="container-x py-16">
      <h2 className="section-title">About Me</h2>
      <div className="mt-6 space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
        <p>
          I'm a passionate Full Stack JavaScript Developer focused on building modern, responsive, and
          high-performance websites and web applications. My stack covers HTML5, CSS3, JavaScript (ES6+),
          TypeScript basics, React.js, Node.js, Express.js, Tailwind CSS, MongoDB, and Firebase.
        </p>
        <p>
          I value clear communication, attention to detail, problem-solving, and delivering quality work on
          time. My goal is to help businesses turn their ideas into reliable, professional, and user-friendly
          web solutions while building long-term relationships through trust and client satisfaction.
        </p>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-semibold">Figma to Code</h3>
        <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-2xl">
          I convert Figma and PSD designs into pixel-perfect, responsive web pages using modern HTML, CSS, and
          React. Here's how a mockup becomes a live product:
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-6">
            <div className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-3">
              Design (Figma / PSD)
            </div>
            <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center text-slate-400 dark:text-slate-500 text-sm">
              🎨 Mockup Preview
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-6">
            <div className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-3">
              Live Code
            </div>
            <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-900/40 dark:to-purple-900/40 flex items-center justify-center text-slate-500 dark:text-slate-400 text-sm">
              ⚡ Responsive Implementation
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}