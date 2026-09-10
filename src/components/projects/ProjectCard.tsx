import { ArrowUpRight } from 'lucide-react'
import type { ReactNode } from 'react'
import type { Project } from '../../data/projects'
import { Reveal } from '../ui/Reveal'
import { BrowserFrame } from './BrowserFrame'
import { GithubIcon } from '../icons/BrandIcons'
import { cn } from '../../lib/utils'

interface ProjectCardProps {
  project: Project
  illustration: ReactNode
  url: string
  reverse?: boolean
}

export function ProjectCard({ project, illustration, url, reverse = false }: ProjectCardProps) {
  return (
    <Reveal>
      <article
        className={cn(
          'group grid items-center gap-8 rounded-3xl border border-border-soft bg-surface/40 p-5 transition-colors duration-500 hover:border-accent/30 sm:p-8',
          project.featured ? 'lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:p-10' : 'lg:grid-cols-2 lg:gap-10',
          reverse && 'lg:[&>*:first-child]:order-2',
        )}
      >
        <div className="relative">
          <div
            className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/10 via-transparent to-accent-2/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
            aria-hidden="true"
          />
          <div className="transition-transform duration-500 ease-out group-hover:-translate-y-1.5">
            <BrowserFrame url={url}>{illustration}</BrowserFrame>
          </div>
        </div>

        <div>
          {project.featured && (
            <span className="inline-flex items-center rounded-full border border-accent-2/30 bg-accent-2/10 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-accent-2">
              Featured Project
            </span>
          )}
          <h3 className="mt-4 text-2xl font-bold tracking-tight text-text sm:text-3xl">{project.name}</h3>
          <p className="mt-1 font-mono text-xs text-text-dim">{project.tagline}</p>
          <p className="mt-4 text-sm leading-relaxed text-text-muted">{project.description}</p>

          <ul className="mt-5 space-y-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex gap-2.5 text-sm leading-relaxed text-text-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-2" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border-soft bg-surface-2/60 px-2.5 py-1 font-mono text-[11px] text-text-muted"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-medium text-text transition-colors hover:border-accent-2/60 hover:text-accent-2"
            >
              <GithubIcon size={16} />
              View Code
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-text px-4 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-accent-2"
              >
                Live Demo
                <ArrowUpRight size={16} />
              </a>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  )
}
