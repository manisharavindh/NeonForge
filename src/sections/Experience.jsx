/**
 * Experience Section
 */

import React from 'react'
import SectionHeader from '../components/SectionHeader'
import Badge from '../components/Badge'

const Experience = () => {
  const experiences = [
    {
      role: 'Senior AI/ML Engineer',
      company: 'TechCorp AI Solutions',
      duration: '2022 - Present',
      description: 'Leading AI/ML projects, mentoring junior engineers, and architecting scalable machine learning systems.',
      highlights: ['Led 5+ AI projects', 'Improved model accuracy by 23%', 'Mentored 8 engineers'],
      cmd: 'experience-1.log',
    },
    {
      role: 'Full-Stack Developer',
      company: 'CloudNative Startup',
      duration: '2020 - 2022',
      description: 'Built cloud-native applications, implemented CI/CD pipelines, and optimized database performance.',
      highlights: ['Deployed 15+ microservices', 'Reduced latency by 40%', '99.9% uptime'],
      cmd: 'experience-2.log',
    },
    {
      role: 'Machine Learning Engineer',
      company: 'DataWave Analytics',
      duration: '2019 - 2020',
      description: 'Developed predictive models, created data pipelines, and built recommendation systems.',
      highlights: ['Built 8 ML models', 'Processed 10M+ records daily', 'Achieved 92% accuracy'],
      cmd: 'experience-3.log',
    },
    {
      role: 'Junior Developer',
      company: 'Digital Innovations Inc',
      duration: '2018 - 2019',
      description: 'Contributed to web applications, fixed bugs, and participated in code reviews.',
      highlights: ['Completed 20+ features', 'Reduced bug count by 50%', 'Earned Employee of Month'],
      cmd: 'experience-4.log',
    },
  ]

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          title="Professional Experience"
          subtitle="Career journey and achievements"
        />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="terminal-window terminal-scanlines group">
              {/* <div className="terminal-header">
                <span className="ml-3 text-xs text-neon-accent font-mono">{exp.cmd}</span>
              </div> */}

              <div className="terminal-body space-y-3">
                <div>
                  <span className="terminal-prompt">➜</span>
                  <span className="text-slate-400 ml-1">~</span>
                  <span className="terminal-bracket"> $</span>
                  <span className="terminal-command"> cat {exp.cmd}</span>
                </div>

                <div className="pl-6 space-y-2">
                  <h3 className="text-sm font-bold text-neon-green group-hover:text-neon-green transition-colors">
                    {exp.role}
                  </h3>
                  <div className="text-xs space-y-1">
                    <p className="text-neon-accent">{exp.company}</p>
                    <p className="text-slate-400">[{exp.duration}]</p>
                    <p className="text-slate-300 leading-relaxed mt-2">{exp.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-3 pt-2 border-t border-neon-accent/20">
                    {exp.highlights.map((highlight, idx) => (
                      <Badge key={idx} variant="green">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
