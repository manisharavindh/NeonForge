/**
 * Card Component
 * Refined glassmorphic card with smooth effects
 */

import React from 'react'

const Card = ({ children, className = '', glowing = false, hoverable = true }) => {
  return (
    <div
      className={`glass rounded-2xl p-7 transition-all duration-300 ${
        glowing 
          ? 'border-neon-accent/50 shadow-glow-md' 
          : 'border-slate-700/30'
      } ${
        hoverable
          ? 'hover:border-neon-accent/60 hover:shadow-glow-md hover:scale-105 hover:bg-slate-900/60'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}

export default Card
