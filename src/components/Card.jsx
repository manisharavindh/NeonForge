/**
 * Card Component
 * Glassmorphic card with glow effect
 */

import React from 'react'

const Card = ({ children, className = '', glowing = false, hoverable = true }) => {
  return (
    <div
      className={`glass rounded-xl p-6 transition-all duration-300 ${
        glowing ? 'shadow-neon-green border-neon-green/50' : 'border-white/10'
      } ${
        hoverable
          ? 'hover:shadow-neon-teal hover:border-neon-teal/50 hover:scale-105'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}

export default Card
