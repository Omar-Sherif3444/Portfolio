import { motion } from 'framer-motion'
import type { ReactNode, MouseEvent } from 'react'
import { useRef, useState } from 'react'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { cn } from '../../lib/utils'

interface MagneticButtonProps {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
  icon?: ReactNode
  external?: boolean
  className?: string
}

export function MagneticButton({
  href,
  children,
  variant = 'primary',
  icon,
  external = false,
  className,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const reducedMotion = usePrefersReducedMotion()

  function handleMouseMove(event: MouseEvent<HTMLAnchorElement>) {
    if (reducedMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = event.clientX - rect.left - rect.width / 2
    const y = event.clientY - rect.top - rect.height / 2
    setOffset({ x: x * 0.25, y: y * 0.3 })
  }

  function handleMouseLeave() {
    setOffset({ x: 0, y: 0 })
  }

  const base =
    'group relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-accent-2 focus-visible:outline-offset-2'

  const variants = {
    primary: 'bg-text text-bg hover:bg-accent-2',
    secondary: 'border border-border text-text hover:border-accent-2/60 hover:text-accent-2',
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 12, mass: 0.2 }}
      className={cn(base, variants[variant], className)}
    >
      {children}
      {icon}
    </motion.a>
  )
}
