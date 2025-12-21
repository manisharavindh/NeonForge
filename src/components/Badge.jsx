/**
 * Badge Component
 * Small tag for skills and tech stacks
 */

import React from 'react'

const Badge = ({ children, variant = 'green', className = '' }) => {
  const variantStyles = {
    green: 'bg-neon-green/10 border border-neon-green/50 text-neon-green',
    teal: 'bg-neon-teal/10 border border-neon-teal/50 text-neon-teal',
    purple: 'bg-neon-purple/10 border border-neon-purple/50 text-neon-purple',
    gray: 'bg-gray-500/10 border border-gray-500/50 text-gray-300',
  }

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs md:text-sm font-medium transition-all duration-300 hover:shadow-glow-sm ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  )
}

export default Badge
