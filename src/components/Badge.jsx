/**
 * Badge Component
 * Refined tag component with soft colors
 */

import React from 'react'

const Badge = ({ children, variant = 'green', className = '' }) => {
  const variantStyles = {
    green: 'bg-neon-green/15 border border-neon-green/40 text-neon-green hover:bg-neon-green/25 hover:border-neon-green/60',
    teal: 'bg-neon-light/15 border border-neon-light/40 text-neon-light hover:bg-neon-light/25 hover:border-neon-light/60',
    purple: 'bg-neon-muted/15 border border-neon-muted/40 text-neon-muted hover:bg-neon-muted/25 hover:border-neon-muted/60',
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
