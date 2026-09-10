import { GraduationCap } from 'lucide-react'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Reveal } from '../components/ui/Reveal'
import { education } from '../data/education'

export function Education() {
  return (
    <section id="education" className="py-28 sm:py-32">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading eyebrow="Education" title="Academic background" />

        <Reveal delay={0.1} className="mt-12">
          <div className="flex flex-col gap-6 rounded-2xl border border-border-soft bg-surface/60 p-8 sm:flex-row sm:items-start">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent-2/30 bg-accent-2/10 text-accent-2">
              <GraduationCap size={22} strokeWidth={1.75} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-text">{education.degree}</h3>
              <p className="mt-1 text-sm font-medium text-accent-2">{education.school}</p>
              <p className="mt-1 font-mono text-xs text-text-dim">{education.period}</p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-text-muted">{education.description}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
