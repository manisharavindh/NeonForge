/**
 * Achievements Section
 * Terminal-style achievement display
 */

import React from 'react'
import SectionHeader from '../components/SectionHeader'

const Achievements = () => {
  const achievements = [
    {
      cmd: 'awards-1.log',
      title: 'Tech Innovator Award',
      organization: 'Annual Tech Summit 2023',
      description: 'Recognized for innovative AI solutions that transformed industry practices.',
    },
    {
      cmd: 'awards-2.log',
      title: 'Open Source Contributor',
      organization: 'GitHub Community',
      description: 'Active contributor to 10+ popular open-source projects with 500+ stars.',
    },
    {
      cmd: 'awards-3.log',
      title: 'Published Author',
      organization: 'Medium & Dev.to',
      description: 'Written 50+ technical articles with 100K+ total reads on ML and web dev.',
    },
    {
      cmd: 'awards-4.log',
      title: 'Certified Cloud Architect',
      organization: 'AWS & Google Cloud',
      description: 'Professional certifications in cloud architecture and machine learning.',
    },
    {
      cmd: 'awards-5.log',
      title: 'Hackathon Winner',
      organization: 'International Tech Hackathon 2022',
      description: 'Led team to victory with innovative solution beating 500+ competitors.',
    },
    {
      cmd: 'awards-6.log',
      title: 'Speaker & Mentor',
      organization: 'Tech Conferences & Bootcamps',
      description: 'Speaker at 15+ conferences and mentor to 100+ aspiring developers.',
    },
  ]

  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          title="Achievements & Recognition"
          subtitle="Milestones and accomplishments"
        />

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="terminal-window terminal-scanlines group">
              {/* Terminal Header */}
              <div className="terminal-header">
                <div className="terminal-button terminal-button-red"></div>
                <div className="terminal-button terminal-button-yellow"></div>
                <div className="terminal-button terminal-button-green"></div>
                <span className="ml-3 text-xs text-neon-accent font-mono">{achievement.cmd}</span>
              </div>

              {/* Terminal Body */}
              <div className="terminal-body space-y-3">
                <div>
                  <span className="terminal-prompt">➜</span>
                  <span className="text-slate-400 ml-1">~</span>
                  <span className="terminal-bracket"> $</span>
                  <span className="terminal-command"> cat {achievement.cmd}</span>
                </div>

                <div className="pl-6 space-y-2">
                  <h3 className="text-sm font-bold text-neon-green mb-1">
                    ★ {achievement.title}
                  </h3>
                  <p className="text-neon-accent text-xs font-medium">{achievement.organization}</p>
                  <p className="text-slate-300 text-xs leading-relaxed mt-2">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="terminal-window terminal-scanlines">
          <div className="terminal-header">
            <div className="terminal-button terminal-button-red"></div>
            <div className="terminal-button terminal-button-yellow"></div>
            <div className="terminal-button terminal-button-green"></div>
            <span className="ml-3 text-xs text-neon-accent font-mono">stats.json</span>
          </div>
          <div className="terminal-body">
            <div>
              <span className="terminal-prompt">➜</span>
              <span className="text-slate-400 ml-1">~</span>
              <span className="terminal-bracket"> $</span>
              <span className="terminal-command"> cat stats.json</span>
            </div>
            <div className="pl-6 grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 font-mono text-xs">
              {[
                { number: '50+', label: 'Projects' },
                { number: '30+', label: 'Happy Clients' },
                { number: '100+', label: 'Articles' },
                { number: '15+', label: 'Talks' },
              ].map((stat, index) => (
                <div key={index} className="border border-neon-accent/40 p-3 rounded-none hover:border-neon-green/60 transition-all">
                  <div className="text-base md:text-lg font-bold text-neon-green mb-1">
                    {stat.number}
                  </div>
                  <div className="text-slate-400 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements
