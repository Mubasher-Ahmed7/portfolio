import { skills } from '../data/content'

export default function Skills() {
  return (
    <section id="skills" className="container-x py-16">
      <h2 className="section-title">Skills</h2>
      <div className="mt-8 space-y-8">
        {Object.entries(skills).map(([category, list]) => (
          <div key={category}>
            <h3 className="mb-3 text-lg font-semibold text-slate-700 dark:text-slate-200">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {list.map((skill) => (
                <span key={skill} className="chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}