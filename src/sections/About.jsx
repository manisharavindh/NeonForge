/**
 * About Section
 * Professional bio with centered character image
 */

import React from 'react'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'

const About = () => {
  const infoCards = [
    {
      title: 'AI/ML Expertise',
      description: 'Deep learning, NLP, Computer Vision, and predictive analytics',
      icon: '🤖',
    },
    {
      title: 'Full-Stack Development',
      description: 'React, Node.js, Python, and cloud-native applications',
      icon: '🚀',
    },
    {
      title: 'Problem Solver',
      description: 'Analytical mindset with focus on scalable solutions',
      icon: '💡',
    },
    {
      title: 'Continuous Learner',
      description: 'Always exploring emerging technologies and best practices',
      icon: '📚',
    },
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          title="About Me"
          subtitle="Crafting solutions that matter"
          accent="center"
        />

        {/* Character Image */}
        <div className="flex justify-center mb-12 animate-slideIn">
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-neon-green/30 to-neon-teal/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Character placeholder */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-neon-green overflow-hidden bg-cyberpunk-card flex items-center justify-center group-hover:border-neon-teal transition-colors">
              <div className="text-center">
                <div className="text-8xl mb-4">🧑‍💻</div>
                <p className="text-gray-500 font-mono text-sm">Character</p>
              </div>
            </div>

            {/* Floating circles */}
            <div className="absolute top-0 right-0 w-16 h-16 border-2 border-neon-teal/50 rounded-full animate-spin" style={{ animationDuration: '8s' }} />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-2 border-neon-green/50 rounded-full animate-spin" style={{ animationDuration: '10s', animationDirection: 'reverse' }} />
          </div>
        </div>

        {/* Bio Text */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            I'm a passionate AI/ML Engineer and Full-Stack Developer with a mission to create digital experiences that are both beautiful and functional. With 5+ years of experience, I've worked with startups and enterprises to transform complex challenges into elegant solutions.
          </p>
          <p className="text-gray-400 text-base leading-relaxed">
            My expertise spans machine learning, web development, cloud architecture, and DevOps. I'm committed to writing clean, maintainable code and staying at the forefront of technology trends.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoCards.map((card, index) => (
            <Card key={index} hoverable glowing={index % 2 === 0}>
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-lg font-bold text-neon-green mb-2">{card.title}</h3>
              <p className="text-gray-400 text-sm">{card.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
