/**
 * Card Component
 * Terminal-style card
 */

import React from 'react'

const Card = ({ children, className = '', glowing = false, hoverable = true }) => {
  return (
    <div
      className={`terminal-window rounded-none p-6 transition-all duration-300 ${
        glowing 
          ? 'border-neon-green/50' 
          : 'border-neon-accent/30'
      } ${
        hoverable
          ? 'hover:border-neon-green/70 hover:scale-105 hover:bg-cyberpunk-card/80'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}

export default Card
