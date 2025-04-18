'use client'

import { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

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
      className={clsx(
        'inline-flex items-center justify-center rounded-md font-medium transition-colors',
        'focus:outline-none focus:ring-2 focus:ring-offset-2',
        {
          'bg-yellow-400 text-black hover:bg-yellow-500 focus:ring-yellow-400': variant === 'primary',
          'bg-gray-800 text-white hover:bg-gray-900 focus:ring-gray-800': variant === 'secondary',
          'border-2 border-gray-800 text-gray-800 hover:bg-gray-100 focus:ring-gray-800': variant === 'outline',
        },
        {
          'px-3 py-1.5 text-sm': size === 'sm',
          'px-4 py-2 text-base': size === 'md',
          'px-6 py-3 text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
} 