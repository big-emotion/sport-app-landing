'use client'

import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends Readonly<ButtonHTMLAttributes<HTMLButtonElement>> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

export function Button({ 
  children, 
  className, 
  variant = 'primary', 
  size = 'md',
  ...props 
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center rounded-md font-medium transition-colors
        focus:outline-none focus:ring-2 focus:ring-offset-2
        [&.primary]:bg-yellow-400 [&.primary]:text-black [&.primary]:hover:bg-yellow-500 [&.primary]:focus:ring-yellow-400
        [&.secondary]:bg-gray-800 [&.secondary]:text-white [&.secondary]:hover:bg-gray-900 [&.secondary]:focus:ring-gray-800
        [&.outline]:border-2 [&.outline]:border-gray-800 [&.outline]:text-gray-800 [&.outline]:hover:bg-gray-100 [&.outline]:focus:ring-gray-800
        [&.sm]:px-3 [&.sm]:py-1.5 [&.sm]:text-sm
        [&.md]:px-4 [&.md]:py-2 [&.md]:text-base
        [&.lg]:px-6 [&.lg]:py-3 [&.lg]:text-lg
        ${className || ''}
      `}
      {...props}
    >
      {children}
    </button>
  )
} 