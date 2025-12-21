import React, { useState, useEffect, useRef } from 'react'

const Terminal = ({ isFullScreen = false, onClose }) => {
  const [output, setOutput] = useState([
    {
      type: 'system',
      text: '> NeonForge Terminal v1.0.0',
    },
    {
      type: 'system',
      text: '> Type "help" to see available commands',
    },
    {
      type: 'system',
      text: '',
    },
  ])
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const outputEndRef = useRef(null)
  const inputRef = useRef(null)

  // Auto-scroll to bottom
  useEffect(() => {
    outputEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [output])

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  // Prevent body scroll when terminal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  const commandHelp = {
    help: {
      description: 'Display all available commands',
      usage: 'help',
    },
    about: {
      description: 'Learn about me',
      usage: 'about',
    },
    skills: {
      description: 'View my technical skills',
      usage: 'skills',
    },
    projects: {
      description: 'Check out my projects',
      usage: 'projects',
    },
    experiences: {
      description: 'View my work experience',
      usage: 'experiences',
    },
    achievements: {
      description: 'See my achievements and awards',
      usage: 'achievements',
    },
    contact: {
      description: 'Get my contact information',
      usage: 'contact',
    },
    clear: {
      description: 'Clear the terminal',
      usage: 'clear',
    },
  }

  const commandResponses = {
    help: () => {
      const lines = [
        '╔════════════════════════════════════════╗',
        '║       AVAILABLE COMMANDS                ║',
        '╚════════════════════════════════════════╝',
        '',
      ]
      Object.entries(commandHelp).forEach(([cmd, info]) => {
        lines.push(`  ${cmd.padEnd(15)} - ${info.description}`)
      })
      lines.push('')
      return lines
    },

    about: () => {
      return [
        '╔════════════════════════════════════════╗',
        '║           ABOUT ME                      ║',
        '╚════════════════════════════════════════╝',
        '',
        'Hello! I\'m a passionate full-stack developer with expertise in',
        'modern web technologies. I love building beautiful, functional,',
        'and performant applications that solve real-world problems.',
        '',
        'I specialize in React, Node.js, and cloud technologies.',
        'Always eager to learn and explore new technologies.',
        '',
      ]
    },

    skills: () => {
      return [
        '╔════════════════════════════════════════╗',
        '║         TECHNICAL SKILLS                ║',
        '╚════════════════════════════════════════╝',
        '',
        '📌 FRONTEND:',
        '  • React.js, Vue.js, Angular',
        '  • JavaScript, TypeScript',
        '  • HTML5, CSS3, Tailwind CSS',
        '  • Responsive Design, Web Performance',
        '',
        '📌 BACKEND:',
        '  • Node.js, Express.js',
        '  • Python, Django',
        '  • RESTful APIs, GraphQL',
        '  • Database Design (SQL & NoSQL)',
        '',
        '📌 TOOLS & PLATFORMS:',
        '  • Git, GitHub, GitLab',
        '  • Docker, Kubernetes',
        '  • AWS, Azure, Google Cloud',
        '  • CI/CD Pipelines',
        '',
      ]
    },

    projects: () => {
      return [
        '╔════════════════════════════════════════╗',
        '║          MY PROJECTS                    ║',
        '╚════════════════════════════════════════╝',
        '',
        '🚀 PROJECT 1: E-Commerce Platform',
        '   • Built with React & Node.js',
        '   • Features: Payment integration, User dashboard',
        '   • Result: 50k+ monthly users',
        '',
        '🚀 PROJECT 2: Real-Time Chat Application',
        '   • WebSocket-based communication',
        '   • Built with Socket.io & React',
        '   • Result: Low latency messaging',
        '',
        '🚀 PROJECT 3: Portfolio Management System',
        '   • Full-stack application',
        '   • Advanced analytics dashboard',
        '   • Result: Enterprise-ready solution',
        '',
        '🚀 PROJECT 4: AI-Powered Chatbot',
        '   • Integration with OpenAI API',
        '   • Natural language processing',
        '   • Result: 99.5% uptime',
        '',
      ]
    },

    experiences: () => {
      return [
        '╔════════════════════════════════════════╗',
        '║        WORK EXPERIENCE                  ║',
        '╚════════════════════════════════════════╝',
        '',
        '💼 SENIOR DEVELOPER | Tech Company (2022 - Present)',
        '   • Led frontend architecture redesign',
        '   • Mentored junior developers',
        '   • Improved app performance by 40%',
        '',
        '💼 FULL-STACK DEVELOPER | Startup Inc (2020 - 2022)',
        '   • Built scalable web applications',
        '   • Implemented CI/CD pipelines',
        '   • Reduced load time by 60%',
        '',
        '💼 JUNIOR DEVELOPER | Web Solutions (2018 - 2020)',
        '   • Developed responsive websites',
        '   • Fixed bugs and optimized code',
        '   • Participated in code reviews',
        '',
      ]
    },

    achievements: () => {
      return [
        '╔════════════════════════════════════════╗',
        '║      ACHIEVEMENTS & AWARDS              ║',
        '╚════════════════════════════════════════╝',
        '',
        '🏆 Developer of the Year 2023',
        '   • Recognized for innovation and impact',
        '',
        '🏆 Best Open Source Contribution',
        '   • Contributed to major React library',
        '',
        '🏆 Cloud Architecture Certification',
        '   • AWS Solutions Architect Professional',
        '',
        '🏆 Speaker at International Tech Conference',
        '   • Talk on "Scaling React Applications"',
        '   • 500+ attendees',
        '',
        '🏆 GitHub Top Contributor',
        '   • Maintained 50+ repositories',
        '   • 10k+ stars across projects',
        '',
      ]
    },

    contact: () => {
      return [
        '╔════════════════════════════════════════╗',
        '║       CONTACT INFORMATION               ║',
        '╚════════════════════════════════════════╝',
        '',
        '📧 Email: hello@example.com',
        '📱 Phone: +1 (555) 123-4567',
        '🔗 LinkedIn: linkedin.com/in/yourprofile',
        '🐙 GitHub: github.com/yourprofile',
        '🌐 Website: yourwebsite.com',
        '📍 Location: San Francisco, CA',
        '',
        'Feel free to reach out for collaboration or inquiries!',
        '',
      ]
    },

    clear: () => {
      setOutput([])
      setInput('')
      return null
    },
  }

  const processCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase()

    if (trimmedCmd === '') {
      return
    }

    // Add command to history
    setHistory([...history, trimmedCmd])
    setHistoryIndex(-1)

    // Add user input to output
    setOutput((prev) => [
      ...prev,
      {
        type: 'input',
        text: `$ ${cmd}`,
      },
    ])

    // Special case for clear command
    if (trimmedCmd === 'clear') {
      commandResponses.clear()
      setInput('')
      return
    }

    // Execute command
    const response = commandResponses[trimmedCmd]

    if (response) {
      const lines = response()
      setOutput((prev) => [
        ...prev,
        ...lines.map((line) => ({
          type: 'output',
          text: line,
        })),
        {
          type: 'system',
          text: '',
        },
      ])
    } else {
      setOutput((prev) => [
        ...prev,
        {
          type: 'error',
          text: `Command not found: ${trimmedCmd}. Type "help" for available commands.`,
        },
        {
          type: 'system',
          text: '',
        },
      ])
    }

    setInput('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      e.preventDefault()
      onClose()
      return
    }
    if (e.key === 'Enter') {
      e.preventDefault()
      processCommand(input)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setInput(history[history.length - 1 - newIndex])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setInput(history[history.length - 1 - newIndex])
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setInput('')
      }
    }
  }

  // Always render fullscreen by default (desktop only)
  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/80 hidden md:block"
        onClick={onClose}
      />

      {/* Full-screen Terminal - Desktop Only */}
      <div
        className="fixed inset-0 z-50 flex flex-col bg-cyberpunk-darker border border-neon-green/50 overflow-hidden hidden md:flex"
        style={{
          backgroundColor: '#050d05',
        }}
      >
        {/* Terminal Header - macOS-style */}
        <div className="bg-cyberpunk-dark border-b border-neon-green/30 px-8 py-4 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-4">
            {/* <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-neon-muted" />
              <div className="w-3 h-3 rounded-full bg-neon-purple" />
              <div className="w-3 h-3 rounded-full bg-neon-green" />
            </div> */}
            <span className="text-sm text-neon-light font-bold ml-2">neonforge@localhost</span>
          </div>
          <button
            onClick={onClose}
            className="text-neon-light hover:text-neon-green transition-colors text-sm font-bold"
          >
            [-close-]
          </button>
        </div>

        {/* Output Area */}
        <div
          className="flex-1 overflow-y-auto px-8 py-6 space-y-1 font-mono text-sm"
          style={{
            background: `
              linear-gradient(to bottom, rgba(52, 211, 153, 0.05), transparent),
              repeating-linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.15) 0px,
                rgba(0, 0, 0, 0.15) 1px,
                transparent 1px,
                transparent 2px
              )
            `,
          }}
        >
          {output.length === 0 ? (
            <div className="text-neon-light/70 text-base h-full flex items-center justify-center font-mono">
              Welcome to NeonForge Terminal. Type "help" for available commands.
            </div>
          ) : (
            output.map((line, idx) => (
              <div
                key={idx}
                className={`${
                  line.type === 'input'
                    ? 'text-neon-green font-bold bg-neon-green/5 px-2 py-1 rounded border-l-2 border-neon-green ml-0 pl-2'
                    : line.type === 'error'
                    ? 'text-red-500'
                    : line.type === 'system'
                    ? 'text-neon-light/40'
                    : 'text-neon-light/90'
                } whitespace-pre-wrap break-words leading-relaxed`}
              >
                {line.text}
              </div>
            ))
          )}
          <div ref={outputEndRef} />
        </div>

        {/* Input Area - Inline Terminal Style */}
        <div className="border-t border-neon-green/30 bg-cyberpunk-dark/60 px-8 py-4 flex-shrink-0 backdrop-blur-sm">
          <div className="flex items-baseline gap-2 font-mono text-sm">
            <span className="text-neon-green font-bold flex-shrink-0">➜</span>
            {/* <span className="text-neon-green flex-shrink-0">~/portfolio</span> */}
            <span className="text-neon-light flex-shrink-0">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-neon-light outline-none font-mono text-sm caret-neon-green border-none"
              placeholder=""
              spellCheck="false"
              autoFocus
              style={{
                boxShadow: 'none',
                padding: 0,
              }}
            />
            <span className="text-neon-green animate-pulse flex-shrink-0">▮</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Terminal
