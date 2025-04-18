'use client'

import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  fullWidth?: boolean
}

export function Section({ children, className, id, fullWidth = false }: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className || ''}`}>
      <div className={`mx-auto px-4 sm:px-6 lg:px-8 [&:not(.full-width)]:max-w-7xl ${fullWidth ? 'full-width' : ''}`}>
        {children}
      </div>
    </section>
  )
} 