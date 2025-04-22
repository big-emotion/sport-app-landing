'use client'

import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends Readonly<ButtonHTMLAttributes<HTMLButtonElement>> {
  readonly variant?: 'primary' | 'secondary' | 'outline'
  readonly size?: 'sm' | 'md' | 'lg'
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
        ${variant === 'primary' ? 'bg-yellow-400 text-black hover:bg-yellow-500 focus:ring-yellow-400' : ''}
        ${variant === 'secondary' ? 'bg-gray-800 text-white hover:bg-gray-900 focus:ring-gray-800' : ''}
        ${variant === 'outline' ? 'border-2 border-gray-800 text-gray-800 hover:bg-gray-100 focus:ring-gray-800' : ''}
        ${size === 'sm' ? 'px-3 py-1.5 text-sm' : ''}
        ${size === 'md' ? 'px-4 py-2 text-base' : ''}
        ${size === 'lg' ? 'px-6 py-3 text-lg' : ''}
        ${className || ''}
      `}
      {...props}
    >
      {children}
    </button>
  )
} 