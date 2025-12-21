/**
 * About Section
 * Professional bio with modern card layout
 */

import React from 'react'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'
import Badge from '../components/Badge'

const About = () => {
  const highlights = [
    'Full-Stack Development',
    'Machine Learning',
    'Cloud Architecture',
    'System Design',
    'Team Leadership',
  ]

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
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-neon-purple/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          title="About Me"
          subtitle="Passionate developer transforming ideas into innovative solutions"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="animate-slideIn">
            <Card className="aspect-square flex items-center justify-center bg-gradient-to-br from-slate-800/30 via-transparent to-slate-900/30 group hover:bg-slate-800/50">
              <div className="text-center">
                <div className="text-9xl mb-4">👨‍💻</div>
                <p className="text-slate-400 font-mono">Your Photo Here</p>
              </div>
            </Card>
          </div>

          {/* Content */}
          <div className="animate-fadeIn">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-100 mb-6">Who I Am</h3>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  I'm a passionate AI/ML engineer and full-stack developer with expertise in building scalable applications and intelligent systems. My journey in tech has been marked by continuous learning and a drive to solve complex problems.
                </p>
                <p>
                  With a strong foundation in computer science and real-world experience across startups and established tech companies, I bring both technical excellence and business acumen to every project.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring emerging technologies, contributing to open source, or sharing knowledge with the developer community.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div>
              <h3 className="text-lg font-bold text-slate-100 mb-4">What I Do Best</h3>
              <div className="flex flex-wrap gap-3">
                {highlights.map((highlight) => (
                  <Badge key={highlight} variant="green">
                    {highlight}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Download CV Button */}
            <div className="mt-10">
              <button className="px-8 py-3 rounded-xl font-semibold transition-all duration-300 border border-neon-accent/30 text-neon-accent hover:bg-neon-accent/10 hover:border-neon-accent/60 hover:shadow-glow-sm">
                Download My CV
              </button>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoCards.map((card, index) => (
            <Card key={index} hoverable glowing={index % 2 === 0}>
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-lg font-bold text-neon-accent mb-2">{card.title}</h3>
              <p className="text-slate-400 text-sm">{card.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
