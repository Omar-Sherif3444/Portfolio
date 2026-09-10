import { SectionHeading } from '../components/ui/SectionHeading'
import { Reveal } from '../components/ui/Reveal'
import { trainings } from '../data/training'
import { cn } from '../lib/utils'

const statusLabel: Record<string, string> = {
  'in-progress': 'In Progress',
  upcoming: 'Upcoming',
  complete: 'Completed',
}

export function Training() {
  return (
    <section id="training" className="py-28 sm:py-32">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Training"
          title="Continuous learning"
          description="Structured programs I'm using to sharpen the skills I apply in projects."
        />

        <div className="mt-12 flex flex-col gap-4">
          {trainings.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <div className="flex flex-col gap-4 rounded-xl border border-border-soft bg-surface/50 p-6 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-base font-semibold text-text">{item.title}</h3>
                    <span
                      className={cn(
                        'rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider',
                        item.status === 'in-progress'
                          ? 'bg-accent-2/10 text-accent-2'
                          : 'bg-surface-2 text-text-dim',
                      )}
                    >
                      {statusLabel[item.status]}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-text-muted">{item.org}</p>
                  <p className="mt-1 font-mono text-xs text-text-dim">{item.period}</p>

                  {item.focus && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {item.focus.map((f) => (
                        <span
                          key={f}
                          className="rounded-full border border-border-soft px-2.5 py-1 text-[11px] text-text-dim"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
