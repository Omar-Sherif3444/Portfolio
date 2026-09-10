import { SectionHeading } from '../components/ui/SectionHeading'
import { Reveal } from '../components/ui/Reveal'
import { skillGroups } from '../data/skills'

export function Skills() {
  return (
    <section id="skills" className="py-28 sm:py-32">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="Tech stack &amp; tools"
          description="Technologies I reach for regularly, grouped by where they sit in a project."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.06}>
              <div className="h-full rounded-2xl border border-border-soft bg-surface/60 p-6 transition-colors duration-300 hover:border-accent/40">
                <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-accent-2">{group.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border-soft bg-surface-2/60 px-3 py-1.5 text-xs font-medium text-text-muted transition-colors duration-200 hover:border-accent-2/50 hover:text-text"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
