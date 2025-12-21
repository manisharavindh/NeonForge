/**
 * Badge Component
 * Terminal-style tag component
 */

import React from 'react'

const Badge = ({ children, variant = 'green', className = '' }) => {
  const variantStyles = {
    green: 'bg-neon-green/10 border border-neon-green/60 text-neon-green hover:bg-neon-green/20 hover:border-neon-green/80 font-mono text-xs',
    teal: 'bg-neon-accent/10 border border-neon-accent/60 text-neon-accent hover:bg-neon-accent/20 hover:border-neon-accent/80 font-mono text-xs',
    purple: 'bg-neon-purple/10 border border-neon-purple/60 text-neon-purple hover:bg-neon-purple/20 hover:border-neon-purple/80 font-mono text-xs',
    gray: 'bg-slate-700/20 border border-slate-600/60 text-slate-300 hover:bg-slate-700/40 hover:border-slate-500/80 font-mono text-xs',
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
