/**
 * Contact Section
 * Contact form with validation and modern design
 */

import React, { useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'
import Card from '../components/Card'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setLoading(false)

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    }, 1500)
  }

  const contactMethods = [
    {
      icon: '📧',
      label: 'Email',
      value: 'hello@neonforge.dev',
      href: 'mailto:hello@neonforge.dev',
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/neonforge',
      href: 'https://linkedin.com',
    },
    {
      icon: '💻',
      label: 'GitHub',
      value: 'github.com/neonforge',
      href: 'https://github.com',
    },
    {
      icon: '🐦',
      label: 'Twitter',
      value: '@neonforge_dev',
      href: 'https://twitter.com',
    },
  ]

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-neon-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          title="Get In Touch"
          subtitle="Let's build something amazing together"
        />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="animate-slideIn">
            <h3 className="text-2xl font-bold text-slate-100 mb-8">
              Reach Out
            </h3>

            {/* Contact Methods */}
            <div className="space-y-4 mb-12">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 glass rounded-lg border border-slate-700/50 hover:border-neon-accent/50 hover:shadow-glow-sm hover:bg-slate-800/40 transition-all group"
                >
                  <div className="text-3xl group-hover:scale-125 transition-transform duration-300">
                    {method.icon}
                  </div>
                  <div className="flex-grow">
                    <div className="text-slate-500 text-sm">{method.label}</div>
                    <div className="text-neon-accent font-medium group-hover:text-neon-green transition-colors">
                      {method.value}
                    </div>
                  </div>
                  <span className="text-neon-accent opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </a>
              ))}
            </div>

            {/* Follow up message */}
            <Card className="bg-gradient-to-r from-neon-accent/5 to-neon-teal/5">
              <p className="text-slate-400 text-sm leading-relaxed">
                I'm always interested in hearing about new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-slideIn" style={{ animationDelay: '0.1s' }}>
            {submitted && (
              <div className="mb-6 p-4 glass rounded-lg border border-neon-green/50 bg-neon-green/10 text-neon-green text-center font-medium animate-slideIn">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass rounded-lg border border-slate-700/30 focus:border-neon-accent focus:shadow-glow-sm text-slate-100 placeholder-slate-500 focus:outline-none transition-all bg-slate-900/20 backdrop-blur-xl"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass rounded-lg border border-slate-700/30 focus:border-neon-accent focus:shadow-glow-sm text-slate-100 placeholder-slate-500 focus:outline-none transition-all bg-slate-900/20 backdrop-blur-xl"
                  placeholder="john@example.com"
                />
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 glass rounded-lg border border-slate-700/30 focus:border-neon-accent focus:shadow-glow-sm text-slate-100 placeholder-slate-500 focus:outline-none transition-all resize-none bg-slate-900/20 backdrop-blur-xl"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                variant="primary"
                className="w-full"
                disabled={loading}
              >
                {loading ? '⌛ Sending...' : '📤 Send Message'}
              </Button>
            </form>

            {/* Privacy note */}
            <p className="text-slate-500 text-xs mt-4 text-center">
              I respect your privacy. Your information will never be shared.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
