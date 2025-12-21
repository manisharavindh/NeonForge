/**
 * Main Application Component
 * Imports and renders all sections with navigation
 */

import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Achievements from './sections/Achievements'
import Contact from './sections/Contact'

function App() {
  // Add smooth scroll behavior and animations on load
  useEffect(() => {
    // Observe elements for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slideIn')
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    // Observe all sections
    const sections = document.querySelectorAll('section')
    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-cyberpunk-darker">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Experience Section */}
        <Experience />

        {/* Achievements Section */}
        <Achievements />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Background animation elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Animated background gradients */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl animate-float opacity-20" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-teal/5 rounded-full blur-3xl animate-float opacity-20" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  )
}

export default App
