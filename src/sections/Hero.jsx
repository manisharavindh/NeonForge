/**
 * Hero Section
 * Terminal-style landing interface
 */

import React from 'react'
import Button from '../components/Button'

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 pb-10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Terminal Window */}
        <div className="terminal-window terminal-scanlines">
          {/* Terminal Header */}
          <div className="terminal-header">
            <div className="terminal-button terminal-button-red"></div>
            <div className="terminal-button terminal-button-yellow"></div>
            <div className="terminal-button terminal-button-green"></div>
            <span className="ml-3 text-xs text-neon-accent font-mono">neonforge@localhost ~ —</span>
          </div>

          {/* Terminal Body */}
          <div className="terminal-body space-y-4">
            {/* Welcome message */}
            <div>
              <span className="terminal-prompt">➜</span>
              <span className="terminal-path"> ~/portfolio</span>
              <span className="terminal-bracket"> $</span>
              <span className="terminal-command"> whoami</span>
            </div>
            <div className="terminal-output pl-6">
              AI/ML Engineer & Full-Stack Developer
            </div>

            {/* Main Title as code */}
            <div className="mt-8 mb-6">
              <span className="terminal-prompt">➜</span>
              <span className="terminal-path"> ~/portfolio</span>
              <span className="terminal-bracket"> $</span>
              <span className="terminal-command"> cat about.txt</span>
            </div>
            
            <div className="text-2xl md:text-4xl font-bold leading-tight space-y-2">
              <div className="terminal-output">
                <span className="text-neon-green">Building</span> Digital Experiences That Matter
              </div>
            </div>

            {/* Description */}
            <div className="mt-8">
              <span className="terminal-prompt">➜</span>
              <span className="terminal-path"> ~/portfolio</span>
              <span className="terminal-bracket"> $</span>
              <span className="terminal-command"> echo $MISSION</span>
            </div>
            <div className="terminal-output pl-6 text-slate-300 max-w-lg leading-relaxed">
              Passionate about transforming ideas into innovative solutions. 
              Specializing in full-stack development, machine learning, and crafting experiences 
              that push the boundaries of what's possible.
            </div>

            {/* CTA Buttons */}
            <div className="mt-12">
              <span className="terminal-prompt">➜</span>
              <span className="terminal-path"> ~/portfolio</span>
              <span className="terminal-bracket"> $</span>
              <span className="terminal-command"> ls -la projects/</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-5 mb-12 pl-6 mt-4">
              <Button size="lg" variant="primary">
                View My Work
              </Button>
              <Button size="lg" variant="secondary">
                Get in Touch
              </Button>
            </div>

            {/* Stats as code output */}
            <div className="mt-12">
              <span className="terminal-prompt">➜</span>
              <span className="terminal-path"> ~/portfolio</span>
              <span className="terminal-bracket"> $</span>
              <span className="terminal-command"> cat stats.json</span>
            </div>
            <div className="bg-cyberpunk-darker/50 border border-neon-accent/20 p-4 rounded-none mt-4 font-mono text-xs space-y-2">
              <div><span className="text-neon-purple">"projects_completed"</span><span className="text-neon-accent">:</span> <span className="text-neon-green">50+</span><span className="text-slate-400">,</span></div>
              <div><span className="text-neon-purple">"happy_clients"</span><span className="text-neon-accent">:</span> <span className="text-neon-green">30+</span><span className="text-slate-400">,</span></div>
              <div><span className="text-neon-purple">"years_experience"</span><span className="text-neon-accent">:</span> <span className="text-neon-green">5+</span></div>
            </div>

            {/* Footer command */}
            <div className="mt-12 pt-4 border-t border-neon-accent/20">
              <span className="terminal-prompt">➜</span>
              <span className="terminal-path"> ~/portfolio</span>
              <span className="terminal-bracket"> $</span>
              <span className="text-slate-400 ml-1">_</span>
              <span className="terminal-cursor"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
