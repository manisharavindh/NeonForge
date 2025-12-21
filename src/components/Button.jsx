/**
 * Button Component
 * Modern professional button with variants
 */

import React from 'react'

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseStyles = 'font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neon-accent disabled:opacity-50 disabled:cursor-not-allowed'

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const variantStyles = {
    primary: 'bg-gradient-to-r from-neon-green to-neon-accent text-slate-900 scale-100 hover:scale-105 font-bold',
    secondary: 'border-2 border-neon-accent text-neon-accent hover:bg-neon-accent/10',
    outline: 'border-2 border-slate-600 text-slate-300 hover:border-neon-light hover:bg-neon-light/5 hover:text-neon-light',
    ghost: 'text-neon-accent hover:bg-neon-accent/10 hover:text-neon-light',
  }

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
