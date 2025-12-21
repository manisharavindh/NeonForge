/**
 * Button Component
 * Reusable button with primary and secondary variants
 */

import React from 'react'

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseStyles = 'font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neon-green'

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
  }

  const variantStyles = {
    primary: 'bg-neon-green text-cyberpunk-dark hover:shadow-neon-green hover:shadow-lg scale-100 hover:scale-105 font-bold',
    secondary: 'border-2 border-neon-green text-neon-green hover:bg-neon-green/10 hover:shadow-neon-green',
    outline: 'border-2 border-neon-teal text-neon-teal hover:bg-neon-teal/10 hover:shadow-neon-teal',
    ghost: 'text-neon-green hover:bg-neon-green/10 hover:text-neon-teal',
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
