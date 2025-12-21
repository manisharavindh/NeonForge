/**
 * Projects Section
 * Grid layout with project cards
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
      image: '💬',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Real-time Data Analytics Dashboard',
      description: 'Interactive dashboard for visualizing real-time metrics with WebSocket integration and predictive analytics.',
      tags: ['React', 'Node.js', 'TensorFlow', 'AWS', 'D3.js'],
      image: '📊',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Computer Vision Content Moderation',
      description: 'Deep learning model for automated content moderation using CNNs, detecting inappropriate images in real-time.',
      tags: ['Python', 'PyTorch', 'YOLO', 'Docker', 'AWS SageMaker'],
      image: '🖼️',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'Blockchain Supply Chain Tracker',
      description: 'Decentralized application for supply chain transparency using smart contracts and real-time GPS tracking.',
      tags: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'Node.js'],
      image: '⛓️',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 5,
      title: 'Machine Learning Model Registry',
      description: 'Centralized platform for managing, versioning, and deploying ML models across teams and environments.',
      tags: ['MLflow', 'FastAPI', 'PostgreSQL', 'Docker', 'Kubernetes'],
      image: '🧠',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 6,
      title: 'E-Commerce Recommendation Engine',
      description: 'Collaborative filtering system delivering personalized product recommendations with 92% accuracy.',
      tags: ['Python', 'scikit-learn', 'PostgreSQL', 'Redis', 'FastAPI'],
      image: '🛍️',
      liveUrl: '#',
      githubUrl: '#',
    },
  ]

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          title="Featured Projects"
          subtitle="Showcasing my best work"
        />

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              hoverable
              className="group flex flex-col h-full"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image Placeholder */}
              <div className="w-full h-40 bg-gradient-to-br from-cyberpunk-card to-cyberpunk-darker rounded-lg mb-4 flex items-center justify-center relative overflow-hidden group-hover:shadow-glow-md transition-shadow">
                <div className="text-6xl opacity-50 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300">
                  {project.image}
                </div>
              </div>

              {/* Project Info */}
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-neon-green mb-2 group-hover:text-neon-teal transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <Badge key={index} variant={index % 2 === 0 ? 'green' : 'teal'}>
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-2 pt-4 border-t border-white/10">
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex-1 text-center"
                  onClick={() => window.open(project.liveUrl)}
                >
                  🔗 Demo
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex-1 text-center"
                  onClick={() => window.open(project.githubUrl)}
                >
                  💻 Code
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="secondary">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Projects
