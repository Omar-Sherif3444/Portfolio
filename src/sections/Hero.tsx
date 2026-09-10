import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Mail } from 'lucide-react'
import { personal } from '../data/social'
import { MagneticButton } from '../components/ui/MagneticButton'
import { GithubIcon, LinkedinIcon } from '../components/icons/BrandIcons'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const roles = personal.roles

export function Hero() {
  const reducedMotion = usePrefersReducedMotion()

  return (
    <section id="hero" className="relative flex min-h-svh items-center pt-24">
      <div className="container-px mx-auto grid w-full max-w-6xl gap-12">
        <motion.p
          initial={reducedMotion ? undefined : { opacity: 0, y: 10 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 font-mono text-sm text-accent-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-2 opacity-60 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-2" />
          </span>
          Open to internships &amp; junior roles
        </motion.p>

        <div>
          <motion.h1
            initial={reducedMotion ? undefined : { opacity: 0, y: 24 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-balance text-5xl font-extrabold leading-[1.05] tracking-tight text-text sm:text-6xl lg:text-7xl"
          >
            Hi, I'm <span className="text-text">Omar Sherif</span>.
            <br />
            <span className="bg-gradient-to-r from-accent via-accent-2 to-accent bg-clip-text text-transparent">
              Building thoughtful
            </span>
            <br />
            digital experiences with code.
          </motion.h1>

          <motion.div
            initial={reducedMotion ? undefined : { opacity: 0, y: 20 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-sm text-text-muted sm:text-base"
          >
            {roles.map((role, index) => (
              <span key={role} className="flex items-center gap-3">
                {index !== 0 && <span className="text-border" aria-hidden="true">/</span>}
                {role}
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={reducedMotion ? undefined : { opacity: 0, y: 20 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-text-muted"
          >
            Computer Science student at AASTMT, focused on full-stack and React front-end development. I turn
            coursework and side projects into real, working applications — and I'm always looking for the next
            problem worth solving.
          </motion.p>

          <motion.div
            initial={reducedMotion ? undefined : { opacity: 0, y: 20 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#projects" variant="primary" icon={<ArrowUpRight size={16} />}>
              View Projects
            </MagneticButton>
            <MagneticButton href={personal.github} variant="secondary" icon={<GithubIcon size={16} />} external>
              GitHub
            </MagneticButton>
            <MagneticButton href={personal.linkedin} variant="secondary" icon={<LinkedinIcon size={16} />} external>
              LinkedIn
            </MagneticButton>
            <MagneticButton href={`mailto:${personal.email}`} variant="secondary" icon={<Mail size={16} />}>
              Email Me
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-text-dim transition-colors hover:text-accent-2 sm:flex"
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.2em]">Scroll</span>
        <motion.span
          animate={reducedMotion ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </a>
    </section>
  )
}
