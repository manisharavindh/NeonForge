/**
 * Achievements Section
 * Showcase awards and recognitions
 */

import React from 'react'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'

const Achievements = () => {
  const achievements = [
    {
      icon: '🏆',
      title: 'Tech Innovator Award',
      organization: 'Annual Tech Summit 2023',
      description: 'Recognized for innovative AI solutions that transformed industry practices.',
    },
    {
      icon: '⭐',
      title: 'Open Source Contributor',
      organization: 'GitHub Community',
      description: 'Active contributor to 10+ popular open-source projects with 500+ stars.',
    },
    {
      icon: '📚',
      title: 'Published Author',
      organization: 'Medium & Dev.to',
      description: 'Written 50+ technical articles with 100K+ total reads on ML and web dev.',
    },
    {
      icon: '🎓',
      title: 'Certified Cloud Architect',
      organization: 'AWS & Google Cloud',
      description: 'Professional certifications in cloud architecture and machine learning.',
    },
    {
      icon: '🥇',
      title: 'Hackathon Winner',
      organization: 'International Tech Hackathon 2022',
      description: 'Led team to victory with innovative solution beating 500+ competitors.',
    },
    {
      icon: '🌟',
      title: 'Speaker & Mentor',
      organization: 'Tech Conferences & Bootcamps',
      description: 'Speaker at 15+ conferences and mentor to 100+ aspiring developers.',
    },
  ]

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          title="Achievements & Recognition"
          subtitle="Milestones and accomplishments"
        />

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              hoverable
              glowing={index % 2 === 0}
              className="group text-center md:text-left"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 inline-block md:block group-hover:scale-125 transition-transform">
                {achievement.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-neon-green mb-2">
                {achievement.title}
              </h3>
              <p className="text-neon-teal text-sm font-medium mb-3">
                {achievement.organization}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                {achievement.description}
              </p>

              {/* Hover effect line */}
              <div className="mt-4 h-1 bg-gradient-to-r from-neon-green to-neon-teal rounded-full w-0 group-hover:w-full transition-all duration-300" />
            </Card>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          {[
            { number: '50+', label: 'Projects' },
            { number: '30+', label: 'Happy Clients' },
            { number: '100+', label: 'Articles' },
            { number: '15+', label: 'Speaking Engagements' },
          ].map((stat, index) => (
            <div
              key={index}
              className="glass rounded-xl p-6 text-center border border-neon-green/30 hover:border-neon-teal/50 hover:shadow-glow-md transition-all"
            >
              <div className="text-3xl md:text-4xl font-bold text-neon-green mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
