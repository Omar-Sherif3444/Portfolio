import { Mail, Phone } from 'lucide-react'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Reveal } from '../components/ui/Reveal'
import { MagneticButton } from '../components/ui/MagneticButton'
import { GithubIcon, LinkedinIcon } from '../components/icons/BrandIcons'
import { personal } from '../data/social'

const channels = [
  { icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
  { icon: Phone, label: 'Phone', value: personal.phone, href: personal.phoneHref },
  { icon: GithubIcon, label: 'GitHub', value: '@Omar-Sherif3444', href: personal.github },
  { icon: LinkedinIcon, label: 'LinkedIn', value: 'Omar Sherif', href: personal.linkedin },
]

export function Contact() {
  return (
    <section id="contact" className="py-28 sm:py-32">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="Open to internships, junior roles, and collaborative projects. The fastest way to reach me is email."
          align="center"
        />

        <Reveal delay={0.15} className="mt-12 flex justify-center">
          <MagneticButton href={`mailto:${personal.email}`} variant="primary" className="px-8 py-4 text-base">
            Say Hello
          </MagneticButton>
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-3xl gap-4 sm:grid-cols-2">
          {channels.map((channel, index) => (
            <Reveal key={channel.label} delay={0.2 + index * 0.06}>
              <a
                href={channel.href}
                target={channel.href.startsWith('http') ? '_blank' : undefined}
                rel={channel.href.startsWith('http') ? 'noreferrer' : undefined}
                className="group flex items-center gap-4 rounded-xl border border-border-soft bg-surface/50 p-5 transition-colors duration-300 hover:border-accent-2/40"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border-soft text-text-muted transition-colors group-hover:border-accent-2/50 group-hover:text-accent-2">
                  <channel.icon size={18} strokeWidth={1.75} />
                </span>
                <span className="min-w-0 text-left">
                  <span className="block font-mono text-[11px] uppercase tracking-widest text-text-dim">
                    {channel.label}
                  </span>
                  <span className="block truncate text-sm font-medium text-text">{channel.value}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
