/**
 * Skills Section
 * Categorized skills with modern card design
 */

import React from 'react'
import SectionHeader from '../components/SectionHeader'
import Badge from '../components/Badge'
import Card from '../components/Card'

const Skills = () => {
  const skillCategories = [
    {
      name: 'Languages',
      skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'SQL'],
      color: 'green',
      icon: '💻',
    },
    {
      name: 'Frameworks',
      skills: ['React', 'Node.js', 'Django', 'FastAPI', 'TensorFlow', 'PyTorch'],
      color: 'teal',
      icon: '🛠️',
    },
    {
      name: 'Tools & Platforms',
      skills: ['Git', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP'],
      color: 'purple',
      icon: '🌐',
    },
    {
      name: 'AI/ML',
      skills: ['Deep Learning', 'NLP', 'Computer Vision', 'LLMs', 'RAG', 'MLOps'],
      color: 'green',
      icon: '🤖',
    },
  ]

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-neon-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          title="Skills & Expertise"
          subtitle="Technologies and competencies I excel with"
        />

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} hoverable glowing={index % 2 === 0} className="flex flex-col">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="text-2xl">{category.icon}</div>
                <h3 className="text-lg font-bold text-slate-100">{category.name}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <Badge key={idx} variant={category.color}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Proficiency Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Technical Proficiency */}
          <div className="animate-slideIn">
            <h3 className="text-2xl font-bold text-slate-100 mb-8">Technical Proficiency</h3>
            <div className="space-y-6">
              {[
                { name: 'Frontend Development', level: 95 },
                { name: 'Backend Development', level: 90 },
                { name: 'Machine Learning', level: 88 },
                { name: 'Cloud Architecture', level: 85 },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-slate-300 font-medium">{item.name}</span>
                    <span className="text-neon-accent font-bold text-sm">{item.level}%</span>
                  </div>
                  <div className="w-full bg-slate-800/40 rounded-full h-3 overflow-hidden border border-slate-700/30 backdrop-blur-sm">
                    <div
                      className="bg-gradient-to-r from-neon-green to-neon-accent h-full rounded-full transition-all duration-700"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="animate-fadeIn">
            <h3 className="text-2xl font-bold text-slate-100 mb-8">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Problem Solving',
                'Team Leadership',
                'Communication',
                'Project Management',
                'Mentoring',
                'Agile/Scrum',
              ].map((skill, index) => (
                <Card
                  key={index}
                  className="flex items-center justify-center py-6 text-center hover:bg-slate-800/50"
                >
                  <span className="text-slate-300 font-medium text-sm">{skill}</span>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
