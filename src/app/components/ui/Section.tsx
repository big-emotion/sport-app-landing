'use client'

import { ReactNode } from 'react'
import clsx from 'clsx'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  fullWidth?: boolean
}

export function Section({ children, className, id, fullWidth = false }: SectionProps) {
  return (
    <section id={id} className={clsx('py-16 md:py-24', className)}>
      <div className={clsx(
        'mx-auto px-4 sm:px-6 lg:px-8',
        !fullWidth && 'max-w-7xl'
      )}>
        {children}
      </div>
    </section>
  )
} 