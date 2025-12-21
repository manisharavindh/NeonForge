/**
 * Button Component
 * Terminal-style button with variants
 */

import React from 'react'

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseStyles = 'font-mono font-semibold rounded-none transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neon-accent disabled:opacity-50 disabled:cursor-not-allowed'

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const variantStyles = {
    primary: 'bg-neon-green text-cyberpunk-darker border-2 border-neon-green hover:bg-neon-green/90 hover:scale-105 font-bold shadow-lg',
    secondary: 'border-2 border-neon-accent text-neon-accent hover:bg-neon-accent/10 hover:shadow-lg',
    outline: 'border-2 border-neon-accent text-neon-accent hover:border-neon-green hover:bg-neon-green/5 hover:text-neon-green',
    ghost: 'text-neon-accent hover:bg-neon-accent/10 hover:text-neon-green border border-neon-accent/30',
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
