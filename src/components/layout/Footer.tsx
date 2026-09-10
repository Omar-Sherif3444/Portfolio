import { Mail } from 'lucide-react'
import { navItems } from '../../data/nav'
import { personal } from '../../data/social'
import { GithubIcon, LinkedinIcon } from '../icons/BrandIcons'

export function Footer() {
  return (
    <footer className="border-t border-border-soft">
      <div className="container-px mx-auto max-w-6xl py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <a href="#hero" className="font-mono text-sm font-semibold text-text">
              <span className="text-accent-2">&lt;</span>Omar Sherif<span className="text-accent-2">/&gt;</span>
            </a>
            <p className="mt-3 text-sm leading-relaxed text-text-dim">
              Computer Science student building full-stack and React front-end projects — one deliberate commit at a
              time.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="font-mono text-xs uppercase tracking-widest text-text-dim">Navigate</p>
            <ul className="mt-3 grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-sm text-text-muted transition-colors hover:text-accent-2">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-text-dim">Connect</p>
            <ul className="mt-3 flex gap-3">
              <li>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-muted transition-colors hover:border-accent-2/60 hover:text-accent-2"
                >
                  <GithubIcon size={17} />
                </a>
              </li>
              <li>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-muted transition-colors hover:border-accent-2/60 hover:text-accent-2"
                >
                  <LinkedinIcon size={17} />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${personal.email}`}
                  aria-label="Send an email"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-muted transition-colors hover:border-accent-2/60 hover:text-accent-2"
                >
                  <Mail size={17} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border-soft pt-6 text-xs text-text-dim sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Omar Sherif. Built from scratch with React, TypeScript &amp; Tailwind.</p>
          <p className="font-mono">Designed &amp; developed by Omar Sherif</p>
        </div>
      </div>
    </footer>
  )
}
