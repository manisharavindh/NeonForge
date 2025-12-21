/**
 * Hero Section
 * Modern landing with professional design
 */

import React from 'react'
import Button from '../components/Button'

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 pb-10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Left content */}
          <div>
            <div className="inline-block mb-8">
              <div className="px-5 py-3 glass rounded-full border border-neon-accent/40 backdrop-blur-xl">
                <span className="text-neon-accent text-sm font-semibold">Welcome to NeonForge</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="text-glow">Building Digital</span>
              <br />
              <span className="text-slate-200">Experiences That Matter</span>
            </h1>

            <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
              AI/ML Engineer & Full-Stack Developer passionate about creating innovative solutions. Let's transform ideas into reality.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 mb-12">
              <Button size="lg" variant="primary">
                View My Work
              </Button>
              <Button size="lg" variant="secondary">
                Get in Touch
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-700/30">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-neon-green mb-2">50+</div>
                <div className="text-slate-400 text-sm">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-neon-accent mb-2">30+</div>
                <div className="text-slate-400 text-sm">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-neon-purple mb-2">5+</div>
                <div className="text-slate-400 text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
