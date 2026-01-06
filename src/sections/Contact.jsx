/**
 * Contact Section
 */

import React, { useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'

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
    { label: 'Email', value: 'hello@neonforge.dev', href: 'mailto:hello@neonforge.dev' },
    { label: 'LinkedIn', value: 'linkedin.com/in/neonforge', href: 'https://linkedin.com' },
    { label: 'GitHub', value: 'github.com/neonforge', href: 'https://github.com' },
    { label: 'Twitter', value: '@neonforge_dev', href: 'https://twitter.com' },
  ]

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          title="Get In Touch"
          subtitle="Let's build something amazing together"
        />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="terminal-window terminal-scanlines">
            <div className="terminal-header">
              <div className="terminal-button terminal-button-red"></div>
              <div className="terminal-button terminal-button-yellow"></div>
              <div className="terminal-button terminal-button-green"></div>
              <span className="ml-3 text-xs text-neon-accent font-mono">contact.log</span>
            </div>

            <div className="terminal-body space-y-4">
              <div>
                <span className="terminal-prompt">➜</span>
                <span className="text-slate-400 ml-1">~</span>
                <span className="terminal-bracket"> $</span>
                <span className="terminal-command"> cat contact.log</span>
              </div>

              <div className="pl-6 space-y-3">
                <p className="text-slate-300 text-xs leading-relaxed">
                  I'm always interested in hearing about new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out!
                </p>

                <div className="border-t border-neon-accent/20 pt-3 space-y-2">
                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-2 border border-neon-accent/30 rounded-none hover:border-neon-green/60 hover:bg-neon-green/5 transition-all text-xs group"
                    >
                      <div className="text-slate-400">{method.label}</div>
                      <div className="text-neon-accent group-hover:text-neon-green transition-colors font-mono">
                        &gt; {method.value}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="terminal-window terminal-scanlines">
            <div className="terminal-header">
              <div className="terminal-button terminal-button-red"></div>
              <div className="terminal-button terminal-button-yellow"></div>
              <div className="terminal-button terminal-button-green"></div>
              <span className="ml-3 text-xs text-neon-accent font-mono">send_message.sh</span>
            </div>

            <div className="terminal-body">
              {submitted && (
                <div className="mb-4 p-3 border border-neon-green/50 bg-neon-green/10 text-neon-green text-center font-mono text-xs rounded-none">
                  ✓ message_sent_successfully();
                </div>
              )}

              <div className="mb-4">
                <span className="terminal-prompt">➜</span>
                <span className="text-slate-400 ml-1">~</span>
                <span className="terminal-bracket"> $</span>
                <span className="terminal-command"> ./send_message.sh</span>
              </div>

              <form onSubmit={handleSubmit} className="pl-6 space-y-4 font-mono text-xs">
                <div>
                  <label htmlFor="name" className="block text-slate-400 mb-1">
                    $ name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-2 py-1 bg-cyberpunk-darker border border-neon-accent/40 text-neon-accent focus:border-neon-green outline-none rounded-none placeholder-slate-600 transition-all"
                    placeholder="john_doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-slate-400 mb-1">
                    $ email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-2 py-1 bg-cyberpunk-darker border border-neon-accent/40 text-neon-accent focus:border-neon-green outline-none rounded-none placeholder-slate-600 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-slate-400 mb-1">
                    $ message:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-2 py-1 bg-cyberpunk-darker border border-neon-accent/40 text-neon-accent focus:border-neon-green outline-none rounded-none resize-none placeholder-slate-600 transition-all"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  variant="primary"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? '▌▌ Sending...' : '→ Send Message'}
                </Button>
              </form>

              <p className="text-slate-600 text-xs mt-4 pl-6 font-mono">
                # Privacy: Your data will never be shared
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
