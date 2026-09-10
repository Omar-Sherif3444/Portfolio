import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'
import { navItems } from '../../data/nav'
import { personal } from '../../data/social'
import { useActiveSection } from '../../hooks/useActiveSection'
import { cn } from '../../lib/utils'

const sectionIds = navItems.map((item) => item.id)

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const activeId = useActiveSection(sectionIds)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'bg-bg/80 backdrop-blur-lg border-b border-border-soft' : 'bg-transparent',
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:rounded-md focus:bg-accent-2 focus:px-4 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>

      <nav className="container-px mx-auto flex h-16 max-w-6xl items-center justify-between">
        <a href="#hero" className="font-mono text-sm font-semibold tracking-tight text-text">
          <span className="text-accent-2">&lt;</span>Omar Sherif<span className="text-accent-2">/&gt;</span>
        </a>

        <ul className="hidden items-center gap-0.5 xl:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={activeId === item.id ? 'true' : undefined}
                className={cn(
                  'relative rounded-full px-3 py-2 text-sm font-medium transition-colors duration-200',
                  activeId === item.id ? 'text-text' : 'text-text-muted hover:text-text',
                )}
              >
                {activeId === item.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-surface-2"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 xl:flex">
          <a
            href={personal.resumeUrl}
            download="Omar-Sherif-CV.pdf"
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium text-text transition-colors duration-200 hover:border-accent-2/60 hover:text-accent-2"
          >
            <Download size={14} />
            Download CV
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-text px-4 py-2 text-sm font-medium text-bg transition-colors duration-200 hover:bg-accent-2"
          >
            Let's talk
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-text xl:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden border-b border-border-soft bg-bg/95 backdrop-blur-lg xl:hidden"
          >
            <ul className="container-px mx-auto flex max-w-6xl flex-col gap-1 py-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'block rounded-lg px-3 py-3 text-base font-medium transition-colors',
                      activeId === item.id ? 'bg-surface-2 text-text' : 'text-text-muted hover:text-text',
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href={personal.resumeUrl}
                  download="Omar-Sherif-CV.pdf"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-lg border border-border px-3 py-3 text-base font-medium text-text transition-colors hover:border-accent-2/60 hover:text-accent-2"
                >
                  <Download size={16} />
                  Download CV
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
