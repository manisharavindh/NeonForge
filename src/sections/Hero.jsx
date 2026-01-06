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
        <div className="terminal-window terminal-scanlines">
          <div className="terminal-header">
            <span className="ml-3 text-xs text-neon-accent font-mono">neonforge@localhost ~</span>
          </div>
          <div className="terminal-body space-y-4">
            <div>
              <span className="terminal-prompt">➜</span>
              <span className="terminal-path"> ~/home</span>
              <span className="terminal-bracket">$ </span>
              <span className="terminal-command">whoami</span>
            </div>
            <div className="terminal-output pl-6">
              AI/ML Engineer & Full-Stack Developer
            </div>

            <div className="mt-8 mb-6">
              <span className="terminal-prompt">➜</span>
              <span className="terminal-path"> ~/home</span>
              <span className="terminal-bracket">$ </span>
              <span className="terminal-command">cat about.txt</span>
            </div>
            
            <div className="text-2xl md:text-4xl font-bold leading-tight space-y-2">
              <div className="terminal-output">
                <span className="text-neon-green">Building</span> Digital Experiences That Matter
              </div>
            </div>

            <div className="mt-8">
              <span className="terminal-prompt">➜</span>
              <span className="terminal-path"> ~/home</span>
              <span className="terminal-bracket">$ </span>
              <span className="terminal-command">echo $MISSION</span>
            </div>
            <div className="terminal-output pl-6 text-slate-300 max-w-lg leading-relaxed">
              Passionate about transforming ideas into innovative solutions. 
              Specializing in full-stack development, machine learning, and crafting experiences 
              that push the boundaries of what's possible.
            </div>

            <div className="mt-12">
              <span className="terminal-prompt">➜</span>
              <span className="terminal-path"> ~/home</span>
              <span className="terminal-bracket">$ </span>
              <span className="terminal-command">cat stats.json</span>
            </div>
            <div className="bg-cyberpunk-darker/50 border border-neon-accent/20 p-4 rounded-none mt-4 font-mono text-xs space-y-2">
              <div><span className="text-neon-purple">"projects_completed"</span><span className="text-neon-accent">:</span> <span className="text-neon-green">50+</span><span className="text-slate-400">,</span></div>
              <div><span className="text-neon-purple">"happy_clients"</span><span className="text-neon-accent">:</span> <span className="text-neon-green">30+</span><span className="text-slate-400">,</span></div>
              <div><span className="text-neon-purple">"years_experience"</span><span className="text-neon-accent">:</span> <span className="text-neon-green">5+</span></div>
            </div>

            <div className="mt-12 pt-4 border-t border-neon-accent/20">
              <span className="terminal-prompt">➜</span>
              <span className="terminal-path"> ~/home</span>
              <span className="terminal-bracket">$</span>
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
