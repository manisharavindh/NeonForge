/**
 * Experience Section
 * Timeline-style experience cards
 */

import React from 'react'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'

const Experience = () => {
  const experiences = [
    {
      role: 'Senior AI/ML Engineer',
      company: 'TechCorp AI Solutions',
      duration: '2022 - Present',
      description: 'Leading AI/ML projects, mentoring junior engineers, and architecting scalable machine learning systems.',
      highlights: ['Led 5+ AI projects', 'Improved model accuracy by 23%', 'Mentored 8 engineers'],
      icon: '🎯',
    },
    {
      role: 'Full-Stack Developer',
      company: 'CloudNative Startup',
      duration: '2020 - 2022',
      description: 'Built cloud-native applications, implemented CI/CD pipelines, and optimized database performance.',
      highlights: ['Deployed 15+ microservices', 'Reduced latency by 40%', '99.9% uptime'],
      icon: '🚀',
    },
    {
      role: 'Machine Learning Engineer',
      company: 'DataWave Analytics',
      duration: '2019 - 2020',
      description: 'Developed predictive models, created data pipelines, and built recommendation systems.',
      highlights: ['Built 8 ML models', 'Processed 10M+ records daily', 'Achieved 92% accuracy'],
      icon: '📊',
    },
    {
      role: 'Junior Developer',
      company: 'Digital Innovations Inc',
      duration: '2018 - 2019',
      description: 'Contributed to web applications, fixed bugs, and participated in code reviews.',
      highlights: ['Completed 20+ features', 'Reduced bug count by 50%', 'Earned Employee of Month'],
      icon: '💡',
    },
  ]

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          title="Professional Experience"
          subtitle="Journey and achievements"
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-green via-neon-teal to-transparent transform -translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex items-center justify-center">
                  <div className="relative w-full">
                    <div className="flex justify-center">
                      <div className="w-4 h-4 rounded-full bg-neon-green absolute z-10 left-1/2 transform -translate-x-1/2" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <Card hoverable glowing={index % 2 === 0}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl flex-shrink-0">{exp.icon}</div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-neon-green">{exp.role}</h3>
                      <p className="text-neon-teal font-medium">{exp.company}</p>
                      <p className="text-gray-500 text-sm">{exp.duration}</p>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="px-3 py-1 bg-neon-green/10 border border-neon-green/30 rounded-full text-xs text-neon-green font-medium"
                      >
                        {highlight}
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
