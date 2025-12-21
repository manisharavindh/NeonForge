/**
 * Section Header Component
 * Terminal-style section headings
 */

import React from 'react'

const SectionHeader = ({ title, subtitle = '', accent = 'left' }) => {
  return (
    <div className={`flex items-center gap-5 mb-14 font-mono ${accent === 'center' ? 'justify-center text-center flex-col' : ''}`}>
      {accent === 'left' && (
        <div className="h-14 w-1 bg-gradient-to-b from-neon-green via-neon-accent to-transparent rounded-none" />
      )}
      <div>
        <h2 className="text-4xl md:text-5xl font-bold text-glow mb-3">
          <span className="terminal-bracket">$</span> {title}
        </h2>
        {subtitle && (
          <p className="text-slate-400 text-base md:text-lg font-mono"># {subtitle}</p>
        )}
      </div>
    </div>
  )
}

export default SectionHeader
