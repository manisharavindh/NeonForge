/**
 * Section Header Component
 * Consistent section headings with accent lines
 */

import React from 'react'

const SectionHeader = ({ title, subtitle = '', accent = 'left' }) => {
  return (
    <div className={`flex items-center gap-4 mb-12 ${accent === 'center' ? 'justify-center text-center' : ''}`}>
      {accent === 'left' && (
        <div className="w-1 h-12 bg-gradient-to-b from-neon-green to-neon-teal rounded-full" />
      )}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-glow mb-2">
          {title}
        </h2>
        {subtitle && (
          <p className="text-gray-400 text-sm md:text-base">{subtitle}</p>
        )}
      </div>
    </div>
  )
}

export default SectionHeader
