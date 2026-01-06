/**
 * Skills Section
 * Terminal-style skills display
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
      command: 'cat languages.txt',
    },
    {
      name: 'Frameworks',
      skills: ['React', 'Node.js', 'Django', 'FastAPI', 'TensorFlow', 'PyTorch'],
      command: 'cat frameworks.txt',
    },
    {
      name: 'Tools & Platforms',
      skills: ['Git', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP'],
      command: 'cat tools.txt',
    },
    {
      name: 'AI/ML',
      skills: ['Deep Learning', 'NLP', 'Computer Vision', 'LLMs', 'RAG', 'MLOps'],
      command: 'cat ai-ml.txt',
    },
  ]

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          title="Skills & Expertise"
          subtitle="Technologies and competencies I excel with"
        />

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="terminal-window terminal-scanlines">
              {/* <div className="terminal-header">
                <span className="ml-3 text-xs text-neon-accent font-mono">{category.command}</span>
              </div> */}
              <div className="terminal-body">
                <div className="space-y-3">
                  <div>
                    <span className="terminal-prompt">➜</span>
                    <span className="text-slate-400 ml-1">~</span>
                    <span className="terminal-bracket"> $</span>
                    <span className="terminal-command"> {category.command}</span>
                  </div>
                  
                  <div className="pl-6">
                    <h3 className="text-sm font-bold text-neon-green mb-3"># {category.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, idx) => (
                        <Badge key={idx} variant="green">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="terminal-window terminal-scanlines">
            {/* <div className="terminal-header">
              <span className="ml-3 text-xs text-neon-accent font-mono">proficiency.log</span>
            </div> */}
            <div className="terminal-body space-y-4">
              <div>
                <span className="terminal-prompt">➜</span>
                <span className="text-slate-400 ml-1">~</span>
                <span className="terminal-bracket"> $</span>
                <span className="terminal-command"> cat proficiency.log</span>
              </div>
              <div className="pl-6 space-y-4 font-mono text-xs">
                {[
                  { name: 'Frontend Development', level: 95 },
                  { name: 'Backend Development', level: 90 },
                  { name: 'Machine Learning', level: 88 },
                  { name: 'Cloud Architecture', level: 85 },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-slate-300">{item.name}</span>
                      <span className="text-neon-green">[{item.level}%]</span>
                    </div>
                    <div className="w-full bg-cyberpunk-darker/50 rounded-none h-2 overflow-hidden border border-neon-accent/20">
                      <div
                        className="bg-gradient-to-r from-neon-green to-neon-accent h-full rounded-none transition-all duration-700"
                        style={{ width: `${item.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="terminal-window terminal-scanlines">
            {/* <div className="terminal-header">
              <span className="ml-3 text-xs text-neon-accent font-mono">soft-skills.log</span>
            </div> */}
            <div className="terminal-body">
              <div className="space-y-3">
                <div>
                  <span className="terminal-prompt">➜</span>
                  <span className="text-slate-400 ml-1">~</span>
                  <span className="terminal-bracket"> $</span>
                  <span className="terminal-command"> cat soft-skills.log</span>
                </div>
                <div className="pl-6 grid grid-cols-2 gap-3 font-mono text-xs">
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
                      className="flex items-center py-2 text-neon-accent border border-neon-accent/40 px-3 hover:border-neon-green/60 hover:text-neon-green transition-all"
                    >
                      <span className="text-neon-green mr-2">▸</span>
                      <span className="text-xs">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
