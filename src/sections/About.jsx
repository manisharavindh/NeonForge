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
      command: 'ls --ai-ml/',
    },
    {
      title: 'Full-Stack Development',
      description: 'React, Node.js, Python, and cloud-native applications',
      command: 'ls --fullstack/',
    },
    {
      title: 'Problem Solver',
      description: 'Analytical mindset with focus on scalable solutions',
      command: 'ls --solutions/',
    },
    {
      title: 'Continuous Learner',
      description: 'Always exploring emerging technologies and best practices',
      command: 'ls --learn/',
    },
  ]

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          title="About Me"
          subtitle="Passionate developer transforming ideas into innovative solutions"
        />

        <div className="mb-16">
          <div className="terminal-window terminal-scanlines mb-12">
            <div className="terminal-header">
              <span className="ml-3 text-xs text-neon-accent font-mono">neonforge@localhost about ~</span>
            </div>

            <div className="terminal-body space-y-4">
              <div>
                <span className="terminal-prompt">➜</span>
                <span className="terminal-path"> ~/about</span>
                <span className="terminal-bracket">$ </span>
                <span className="terminal-command">cat profile.md</span>
              </div>

              <div className="space-y-4 text-slate-300 leading-relaxed pl-6">
                <p>
                  I'm a passionate <span className="text-neon-green">AI/ML engineer</span> and <span className="text-neon-green">full-stack developer</span> with expertise in building scalable applications and intelligent systems. My journey in tech has been marked by continuous learning and a drive to solve complex problems.
                </p>
                <p>
                  With a strong foundation in computer science and real-world experience across startups and established tech companies, I bring both technical excellence and business acumen to every project.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring emerging technologies, contributing to open source, or sharing knowledge with the developer community.
                </p>
              </div>

              <div className="mt-8">
                <span className="terminal-prompt">➜</span>
                <span className="terminal-path"> ~/about</span>
                <span className="terminal-bracket">$ </span>
                <span className="terminal-command">echo $EXPERTISE</span>
              </div>
              <div className="flex flex-wrap gap-3 pl-6">
                {highlights.map((highlight) => (
                  <Badge key={highlight} variant="green">
                    [{highlight}]
                  </Badge>
                ))}
              </div>

              <div className="mt-8">
                <span className="terminal-prompt">➜</span>
                <span className="terminal-path"> ~/about</span>
                <span className="terminal-bracket">$ </span>
                <span className="terminal-command">cat resume.pdf</span>
              </div>
              <div className="mt-4">
                <button className="px-8 py-3 rounded-none font-mono border border-neon-accent/60 text-neon-accent hover:bg-neon-accent/10 hover:border-neon-green/80 transition-all duration-300 text-sm">
                  &gt; Download My CV
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoCards.map((card, index) => (
            <div key={index} className="terminal-window terminal-scanlines">
              {/* <div className="terminal-header">
                <span className="ml-3 text-xs text-neon-accent font-mono">{card.command}</span>
              </div> */}
              <div className="terminal-body space-y-3">
                <div>
                  <span className="terminal-prompt">➜</span>
                  <span className="text-slate-400 ml-1">~</span>
                  <span className="terminal-bracket"> $</span>
                  <span className="terminal-command"> {card.command}</span>
                </div>
                <div className="pl-6 space-y-2">
                  <h3 className="text-sm font-bold text-neon-green">{card.title}</h3>
                  <p className="text-slate-400 text-xs">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
