import { Reveal } from './Reveal'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <Reveal className={align === 'center' ? 'text-center' : 'text-left'}>
      <div className={align === 'center' ? 'flex flex-col items-center' : ''}>
        <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent-2">
          <span className="h-px w-6 bg-accent-2/60" aria-hidden="true" />
          {eyebrow}
        </span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-text sm:text-4xl">{title}</h2>
        {description ? (
          <p className={`mt-4 max-w-2xl text-base text-text-muted ${align === 'center' ? 'mx-auto' : ''}`}>
            {description}
          </p>
        ) : null}
      </div>
    </Reveal>
  )
}
