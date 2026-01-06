/**
 * Skills Section
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
          {skillCategories.map((category, index) => {
            const colorClasses = {
              cyan: 'text-neon-cyan',
              green: 'text-neon-green',
              purple: 'text-neon-purple'
            };
            const categoryColors = ['cyan', 'green', 'purple'];
            const color = categoryColors[index % categoryColors.length];
            
            return (
            <div key={index} className="terminal-window terminal-scanlines">
              <div className="terminal-body">
                <div className="space-y-3">
                  <div>
                    <span className="terminal-prompt">➜</span>
                    <span className="text-slate-400 ml-1">~</span>
                    <span className={`terminal-bracket ${colorClasses[color]}`}> $</span>
                    <span className={`terminal-command ${colorClasses[color]}`}> {category.command}</span>
                  </div>
                  
                  <div className="pl-6">
                    <h3 className={`text-sm font-bold ${colorClasses[color]} mb-3`}># {category.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, idx) => {
                        const skillColors = ['cyan', 'green', 'purple'];
                        return (
                          <Badge key={idx} variant={skillColors[idx % skillColors.length]}>
                            {skill}
                          </Badge>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            );
          })}
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
                  { name: 'Frontend Development', level: 95, color: 'neon-cyan' },
                  { name: 'Backend Development', level: 90, color: 'neon-green' },
                  { name: 'Machine Learning', level: 88, color: 'neon-purple' },
                  { name: 'Cloud Architecture', level: 85, color: 'neon-cyan' },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-slate-300">{item.name}</span>
                      <span className={`text-${item.color}`}>[{item.level}%]</span>
                    </div>
                    <div className="w-full bg-cyberpunk-darker/50 rounded-none h-2 overflow-hidden border border-neon-cyan/20">
                      <div
                        className={`bg-${item.color} h-full rounded-none transition-all duration-700`}
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
                    { name: 'Problem Solving', color: 'text-neon-cyan border-neon-cyan/40 hover:border-neon-cyan/70' },
                    { name: 'Team Leadership', color: 'text-neon-green border-neon-green/40 hover:border-neon-green/70' },
                    { name: 'Communication', color: 'text-neon-purple border-neon-purple/40 hover:border-neon-purple/70' },
                    { name: 'Project Management', color: 'text-neon-cyan border-neon-cyan/40 hover:border-neon-cyan/70' },
                    { name: 'Mentoring', color: 'text-neon-green border-neon-green/40 hover:border-neon-green/70' },
                    { name: 'Agile/Scrum', color: 'text-neon-purple border-neon-purple/40 hover:border-neon-purple/70' },
                  ].map((skill, index) => (
                    <div
                      key={index}
                      className={`flex items-center py-2 border ${skill.color} px-3 transition-all`}
                    >
                      <span className={`mr-2`}>▸</span>
                      <span className="text-xs">{skill.name}</span>
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
