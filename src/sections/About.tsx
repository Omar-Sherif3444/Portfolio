import { GraduationCap, Code, Sparkles } from 'lucide-react'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Reveal } from '../components/ui/Reveal'

const facts = [
  {
    icon: GraduationCap,
    title: 'CS Student',
    body: 'B.Sc. in Computer Science at AASTMT, graduating 2028.',
  },
  {
    icon: Code,
    title: 'Full-Stack Practice',
    body: 'Hands-on with Java/Spring Boot, Node.js, React, Next.js, TypeScript, PHP & MySQL.',
  },
  {
    icon: Sparkles,
    title: 'Problem Solver',
    body: 'Drawn to algorithms, competitive programming, and clean UI/UX.',
  },
]

export function About() {
  return (
    <section id="about" className="py-28 sm:py-32">
      <div className="container-px mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div>
            <SectionHeading eyebrow="About Me" title="A student who builds, not just studies." />

            <Reveal delay={0.1} className="mt-8 space-y-5 text-base leading-relaxed text-text-muted">
              <p>
                I'm a Computer Science student specializing in full-stack and React front-end web development. Over
                the past couple of years I've moved from coursework into building real applications — from a
                cinema booking system with seat-level reservation logic to responsive e-commerce interfaces —
                because I learn fastest by shipping something that actually has to work.
              </p>
              <p>
                My stack spans Java, Spring Boot, Node.js, React, Next.js, TypeScript, PHP, and MySQL, and I care
                as much about the details that don't show — validated inputs, transactional data writes, sensible
                database design — as I do about the interface on top of them.
              </p>
              <p>
                Outside of project work, I'm active in problem solving and competitive programming, and I'm
                currently deepening my front-end and DevOps skills through the Digital Egypt Pioneers Initiative
                (DEPI) while continuing to build.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {facts.map((fact, index) => (
              <Reveal key={fact.title} delay={0.15 + index * 0.08}>
                <div className="group rounded-2xl border border-border-soft bg-surface/60 p-6 transition-colors duration-300 hover:border-accent-2/40">
                  <fact.icon className="text-accent-2" size={22} strokeWidth={1.75} />
                  <h3 className="mt-4 text-sm font-semibold text-text">{fact.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-dim">{fact.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
