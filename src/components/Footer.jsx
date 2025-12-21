/**
 * Footer Component
 * Social links and copyright information
 */

import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      label: 'GitHub',
      href: 'https://github.com',
      icon: '🔗',
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: '💼',
    },
    {
      label: 'Twitter',
      href: 'https://twitter.com',
      icon: '𝕏',
    },
    {
      label: 'Email',
      href: 'mailto:hello@example.com',
      icon: '✉️',
    },
  ]

  return (
    <footer className="bg-cyberpunk-dark/50 border-t border-neon-green/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-neon-green to-neon-teal rounded-lg flex items-center justify-center">
                <span className="text-cyberpunk-dark font-bold">N</span>
              </div>
              <span className="text-xl font-bold text-glow">NeonForge</span>
            </div>
            <p className="text-gray-400 text-sm max-w-sm">
              Building digital experiences that matter. Passionate AI/ML Engineer & Developer.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-start md:items-end gap-4">
            <p className="text-gray-400 text-sm font-medium">Connect with me</p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-neon-green/30 flex items-center justify-center text-neon-green hover:text-neon-teal hover:border-neon-teal/50 hover:bg-neon-teal/10 hover:shadow-glow-md transition-all duration-300"
                  title={link.label}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neon-green/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs md:text-sm">
            <p>
              © {currentYear} NeonForge Portfolio. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-neon-green transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-neon-green transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
