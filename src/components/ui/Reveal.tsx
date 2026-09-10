import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'li'
}

export function Reveal({ children, delay = 0, className, as = 'div' }: RevealProps) {
  const reducedMotion = usePrefersReducedMotion()

  if (reducedMotion) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  const Component = as === 'li' ? motion.li : motion.div

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Component>
  )
}
