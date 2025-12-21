/**
 * Footer Component
 * Terminal-style footer with social links
 */

import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com', cmd: 'gh' },
    { label: 'LinkedIn', href: 'https://linkedin.com', cmd: 'li' },
    { label: 'Twitter', href: 'https://twitter.com', cmd: 'tw' },
    { label: 'Email', href: 'mailto:hello@example.com', cmd: 'ml' },
  ]

  return (
    <footer className="bg-cyberpunk-dark/80 border-t border-neon-accent/20 mt-20 backdrop-blur-xl font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="text-neon-green text-sm">
              <span className="terminal-bracket">$</span> neonforge --version
            </div>
            <div className="text-slate-400 text-xs">
              <span className="text-neon-accent">v1.0.0</span>
              <br />
              <span className="text-slate-500"># Building digital experiences that matter</span>
              <br />
              <span className="text-slate-500"># Passionate AI/ML Engineer & Developer</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-start md:items-end gap-4">
            <div className="text-sm">
              <span className="terminal-bracket">$</span> open --socials
            </div>
            <div className="flex gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 border border-neon-accent/60 text-neon-accent hover:text-neon-green hover:border-neon-green/80 transition-all duration-300 text-xs rounded-none font-mono"
                  title={link.label}
                  aria-label={link.label}
                >
                  {link.cmd}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neon-accent/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs font-mono">
            <p>
              <span className="text-slate-600">#</span> © {currentYear} NeonForge. All rights reserved.
            </p>
            <div className="flex gap-4 text-xs">
              <a href="#" className="hover:text-neon-accent transition-colors">
                privacy_policy.txt
              </a>
              <span className="text-slate-700">|</span>
              <a href="#" className="hover:text-neon-accent transition-colors">
                terms.txt
              </a>
            </div>
          </div>
          
          {/* Terminal cursor at end */}
          {/* <div className="mt-4 text-slate-600 text-xs font-mono">
            <span className="terminal-prompt">➜</span>
            <span className="text-slate-600 ml-1">~</span>
            <span className="terminal-bracket"> $</span>
            <span className="terminal-cursor"></span>
          </div> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
