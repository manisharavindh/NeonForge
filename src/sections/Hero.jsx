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
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-neon-accent/5 rounded-full blur-3xl animate-float opacity-40" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-teal/5 rounded-full blur-3xl animate-float opacity-40" style={{ animationDelay: '1s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="animate-slideIn">
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

          {/* Right - Illustration */}
          <div className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Glowing frame */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon-accent/10 to-neon-teal/10 rounded-3xl blur-2xl" />

              {/* Illustration placeholder */}
              <div className="relative glass rounded-3xl border border-slate-700/50 p-8 aspect-square flex items-center justify-center overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 via-transparent to-slate-900/20 group-hover:from-slate-800/40 group-hover:to-slate-900/40 transition-all duration-500" />

                {/* Placeholder anime art */}
                <div className="relative z-10 text-center">
                  <div className="text-7xl mb-4 animate-float">✨</div>
                  <p className="text-slate-500 font-mono text-base">Anime Illustration</p>
                  <p className="text-slate-600 text-sm mt-2">Cyberpunk Style</p>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-neon-accent/10 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-neon-teal/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
