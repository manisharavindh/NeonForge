/**
 * Badge Component
 * Terminal-style tag component
 */

import React from 'react'

const Badge = ({ children, variant = 'cyan', className = '' }) => {
  const variantStyles = {
    cyan: 'bg-neon-cyan/10 border border-neon-cyan/60 text-neon-cyan hover:bg-neon-cyan/20 hover:border-neon-cyan/80 font-mono text-xs',
    green: 'bg-neon-green/10 border border-neon-green/60 text-neon-green hover:bg-neon-green/20 hover:border-neon-green/80 font-mono text-xs',
    purple: 'bg-neon-purple/10 border border-neon-purple/60 text-neon-purple hover:bg-neon-purple/20 hover:border-neon-purple/80 font-mono text-xs',
  }

  return (
    <span
      className={`inline-block px-3 py-1.5 rounded-none text-xs font-mono transition-all duration-300 ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  )
}

export default Badge
