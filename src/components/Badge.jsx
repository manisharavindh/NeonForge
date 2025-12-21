/**
 * Badge Component
 * Refined tag component with soft colors
 */

import React from 'react'

const Badge = ({ children, variant = 'green', className = '' }) => {
  const variantStyles = {
    green: 'bg-neon-green/15 border border-neon-green/40 text-neon-green hover:bg-neon-green/25 hover:border-neon-green/60',
    teal: 'bg-neon-teal/15 border border-neon-teal/40 text-neon-teal hover:bg-neon-teal/25 hover:border-neon-teal/60',
    purple: 'bg-neon-purple/15 border border-neon-purple/40 text-neon-purple hover:bg-neon-purple/25 hover:border-neon-purple/60',
    gray: 'bg-slate-700/30 border border-slate-600/40 text-slate-300 hover:bg-slate-700/50 hover:border-slate-500/60',
  }

  return (
    <span
      className={`inline-block px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  )
}

export default Badge
