/**
 * Projects Section
 */

import React, { useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'
import Badge from '../components/Badge'
import Button from '../components/Button'

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Chatbot Platform',
      description: 'An advanced conversational AI platform using LLMs and RAG technology for intelligent customer support.',
      tags: ['Python', 'FastAPI', 'React', 'OpenAI', 'Vector DB'],
      cmd: 'project-1.log',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Real-time Data Analytics Dashboard',
      description: 'Interactive dashboard for visualizing real-time metrics with WebSocket integration and predictive analytics.',
      tags: ['React', 'Node.js', 'TensorFlow', 'AWS', 'D3.js'],
      cmd: 'project-2.log',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Computer Vision Content Moderation',
      description: 'Deep learning model for automated content moderation using CNNs, detecting inappropriate images in real-time.',
      tags: ['Python', 'PyTorch', 'YOLO', 'Docker', 'AWS SageMaker'],
      cmd: 'project-3.log',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'Blockchain Supply Chain Tracker',
      description: 'Decentralized application for supply chain transparency using smart contracts and real-time GPS tracking.',
      tags: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'Node.js'],
      cmd: 'project-4.log',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 5,
      title: 'Machine Learning Model Registry',
      description: 'Centralized platform for managing, versioning, and deploying ML models across teams and environments.',
      tags: ['MLflow', 'FastAPI', 'PostgreSQL', 'Docker', 'Kubernetes'],
      cmd: 'project-5.log',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 6,
      title: 'E-Commerce Recommendation Engine',
      description: 'Collaborative filtering system delivering personalized product recommendations with 92% accuracy.',
      tags: ['Python', 'scikit-learn', 'PostgreSQL', 'Redis', 'FastAPI'],
      cmd: 'project-6.log',
      liveUrl: '#',
      githubUrl: '#',
    },
  ]

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          title="Featured Projects"
          subtitle="Showcasing my best work and innovations"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, idx) => {
            const colorClasses = {
              cyan: { border: 'border-neon-cyan/40 hover:border-neon-cyan/70', title: 'text-neon-cyan', button: 'border-neon-cyan/60 text-neon-cyan hover:border-neon-cyan/80 hover:bg-neon-cyan/10' },
              green: { border: 'border-neon-green/40 hover:border-neon-green/70', title: 'text-neon-green', button: 'border-neon-green/60 text-neon-green hover:border-neon-green/80 hover:bg-neon-green/10' },
              purple: { border: 'border-neon-purple/40 hover:border-neon-purple/70', title: 'text-neon-purple', button: 'border-neon-purple/60 text-neon-purple hover:border-neon-purple/80 hover:bg-neon-purple/10' }
            };
            const colors = ['cyan', 'green', 'purple'];
            const color = colors[idx % colors.length];
            const classes = colorClasses[color];
            
            return (
            <div
              key={project.id}
              className={`terminal-window terminal-scanlines group flex flex-col h-full transition-all duration-300 ${classes.border}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="terminal-body flex flex-col h-full">
                <div className="mb-3">
                  <span className="terminal-prompt">➜</span>
                  <span className="text-slate-400 ml-1">~</span>
                  <span className={`terminal-bracket ${classes.title}`}> $</span>
                  <span className={`terminal-command ${classes.title}`}> cat {project.cmd}</span>
                </div>

                <div className="flex-grow pl-6 space-y-2">
                  <h3 className={`text-sm font-bold ${classes.title} mb-2 group-hover:text-neon-green transition-colors duration-300`}>
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-xs mb-3 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-3 pl-6">
                  {project.tags.map((tag, index) => {
                    const badgeColors = ['cyan', 'green', 'purple'];
                    return (
                      <Badge key={index} variant={badgeColors[index % badgeColors.length]}>
                        {tag}
                      </Badge>
                    );
                  })}
                </div>

                <div className="flex gap-2 pt-3 border-t border-neon-cyan/20">
                  <button
                    onClick={() => window.open(project.liveUrl)}
                    className={`flex-1 px-3 py-2 text-xs border ${classes.button} transition-all font-mono rounded-none`}
                  >
                    &gt; Demo
                  </button>
                  <button
                    onClick={() => window.open(project.githubUrl)}
                    className={`flex-1 px-3 py-2 text-xs border ${classes.button} transition-all font-mono rounded-none`}
                  >
                    &gt; Code
                  </button>
                </div>
              </div>
            </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" variant="secondary">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Projects
