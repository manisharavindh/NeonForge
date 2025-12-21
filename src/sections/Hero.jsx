/**
 * Hero Section
 * Landing section with CTA buttons and cyberpunk design
 */

import React from 'react'
import Button from '../components/Button'

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-10 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-teal/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="animate-slideIn">
            <div className="inline-block mb-6">
              <div className="px-4 py-2 glass rounded-full border border-neon-green/50">
                <span className="text-neon-green text-sm font-medium">Welcome to NeonForge</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-glow">Building Digital</span>
              <br />
              <span className="text-white">Experiences That Matter</span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
              AI/ML Engineer & Full-Stack Developer passionate about creating innovative solutions. Let's transform ideas into reality.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" variant="primary">
                View My Work
              </Button>
              <Button size="lg" variant="secondary">
                Get in Touch
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-neon-green/20">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-neon-green mb-2">50+</div>
                <div className="text-gray-400 text-sm">Projects Completed</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-neon-teal mb-2">30+</div>
                <div className="text-gray-400 text-sm">Happy Clients</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-neon-purple mb-2">5+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right - Anime illustration placeholder */}
          <div className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Glowing frame */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon-green/20 to-neon-teal/20 rounded-3xl blur-2xl" />

              {/* Illustration placeholder */}
              <div className="relative bg-gradient-to-br from-cyberpunk-card to-cyberpunk-dark rounded-3xl border-2 border-neon-green/30 p-8 aspect-square flex items-center justify-center overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-neon-green/10 via-transparent to-neon-teal/10 group-hover:from-neon-green/20 group-hover:to-neon-teal/20 transition-all duration-500" />

                {/* Placeholder anime art */}
                <div className="relative z-10 text-center">
                  <div className="text-6xl mb-4 animate-float">✨</div>
                  <p className="text-gray-500 font-mono text-sm">Anime Illustration</p>
                  <p className="text-gray-600 text-xs mt-2">Cyberpunk Style</p>
                </div>

                {/* Animated border */}
                <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-neon-green to-neon-teal bg-clip-border opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500" />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-neon-teal/20 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-neon-green/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
