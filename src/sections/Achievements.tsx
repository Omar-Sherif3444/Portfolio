import { Award, Trophy } from 'lucide-react'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Reveal } from '../components/ui/Reveal'
import { achievements } from '../data/achievements'

const icons = [Trophy, Award]

export function Achievements() {
  return (
    <section id="achievements" className="py-28 sm:py-32">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading eyebrow="Achievements" title="Recognition along the way" />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {achievements.map((item, index) => {
            const Icon = icons[index] ?? Trophy
            return (
              <Reveal key={item.title} delay={index * 0.1}>
                <div className="relative h-full overflow-hidden rounded-2xl border border-border-soft bg-surface/60 p-7 transition-colors duration-300 hover:border-accent/40">
                  <div
                    className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-accent/10 blur-2xl"
                    aria-hidden="true"
                  />
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent-2/30 bg-accent-2/10 text-accent-2">
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <p className="mt-5 font-mono text-xs text-text-dim">{item.date}</p>
                  <h3 className="mt-1 text-lg font-semibold text-text">{item.title}</h3>
                  <p className="mt-1 text-sm font-medium text-accent-2">{item.org}</p>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">{item.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
