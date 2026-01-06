/**
 * Card Component
 * Terminal-style card
 */

import React from 'react'

const Card = ({ children, className = '', glowing = false, hoverable = true, color = 'cyan' }) => {
  const colorMap = {
    cyan: 'border-neon-cyan/40 hover:border-neon-cyan/70 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]',
    green: 'border-neon-green/40 hover:border-neon-green/70 hover:shadow-[0_0_15px_rgba(0,255,136,0.2)]',
    blue: 'border-neon-blue/40 hover:border-neon-blue/70 hover:shadow-[0_0_15px_rgba(0,153,255,0.2)]',
    purple: 'border-neon-purple/40 hover:border-neon-purple/70 hover:shadow-[0_0_15px_rgba(217,70,239,0.2)]',
    pink: 'border-neon-pink/40 hover:border-neon-pink/70 hover:shadow-[0_0_15px_rgba(255,0,110,0.2)]',
  };

  return (
    <div
      className={`terminal-window rounded-none p-6 transition-all duration-300 ${
        glowing 
          ? 'border-neon-cyan/70' 
          : colorMap[color]
      } ${
        hoverable
          ? 'hover:scale-105 hover:bg-cyberpunk-card/80'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}

export default Card
