/**
 * Skills Section
 * Categorized skills with hover glow effects
 */

import React from 'react'
import SectionHeader from '../components/SectionHeader'
import Badge from '../components/Badge'

const Skills = () => {
  const skillCategories = [
    {
      name: 'Languages',
      skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'SQL'],
      color: 'green',
    },
    {
      name: 'Frameworks',
      skills: ['React', 'Node.js', 'Django', 'FastAPI', 'TensorFlow', 'PyTorch'],
      color: 'teal',
    },
    {
      name: 'Tools & Platforms',
      skills: ['Git', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP'],
      color: 'purple',
    },
    {
      name: 'AI/ML',
      skills: ['Deep Learning', 'NLP', 'Computer Vision', 'LLMs', 'RAG', 'MLOps'],
      color: 'green',
    },
  ]

  const colorMap = {
    green: 'green',
    teal: 'teal',
    purple: 'purple',
  }

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          title="Skills & Expertise"
          subtitle="Technologies I work with"
        />

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-8 border border-white/10 hover:border-neon-green/50 transition-all duration-300 group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-neon-green to-neon-teal rounded-full" />
                <h3 className="text-xl font-bold text-glow">{category.name}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <Badge
                    key={idx}
                    variant={colorMap[category.color]}
                    className="hover:shadow-glow-sm hover:scale-110"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              {/* Category Icon */}
              <div className="mt-6 text-4xl opacity-20 group-hover:opacity-40 transition-opacity">
                {index === 0 && '💻'}
                {index === 1 && '🛠️'}
                {index === 2 && '🌐'}
                {index === 3 && '🤖'}
              </div>
            </div>
          ))}
        </div>

        {/* Skills bar - Proficiency levels */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-bold text-neon-green mb-6">Technical Proficiency</h4>
            {[
              { name: 'Frontend Development', level: 95 },
              { name: 'Backend Development', level: 90 },
              { name: 'Machine Learning', level: 88 },
              { name: 'Cloud Architecture', level: 85 },
            ].map((item, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300 font-medium">{item.name}</span>
                  <span className="text-neon-green font-bold">{item.level}%</span>
                </div>
                <div className="w-full bg-cyberpunk-card rounded-full h-2 overflow-hidden border border-neon-green/20">
                  <div
                    className="bg-gradient-to-r from-neon-green to-neon-teal h-full rounded-full transition-all duration-700"
                    style={{ width: `${item.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div>
            <h4 className="text-lg font-bold text-neon-teal mb-6">Soft Skills</h4>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Problem Solving',
                'Team Leadership',
                'Communication',
                'Project Management',
                'Mentoring',
                'Agile/Scrum',
              ].map((skill, index) => (
                <div
                  key={index}
                  className="glass rounded-lg p-4 border border-neon-teal/30 hover:border-neon-teal/70 hover:shadow-glow-md transition-all text-center"
                >
                  <span className="text-gray-300 font-medium text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
