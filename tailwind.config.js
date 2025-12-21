/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          green: '#00ff88',      // Bright terminal green
          teal: '#00ffdd',       // Bright cyan
          purple: '#cc00ff',     // Bright magenta
          pink: '#ff0099',       // Bright pink
          accent: '#00ff88',     // Terminal green
          light: '#00ffaa',      // Light green
          muted: '#aa00ff',      // Muted purple
        },
        cyberpunk: {
          dark: '#0a0a0a',       // Pure dark background
          darker: '#0a0a0a',     // Pure dark background
          card: '#1a1a2e',       // Dark card background
          border: '#16213e',     // Dark border color
        }
      },
      fontFamily: {
        mono: ['Courier New', 'Fira Code', 'Consolas', 'monospace'],
        sans: ['Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
      },
      boxShadow: {
        'none': 'none',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        fadeInUp: 'fadeInUp 0.6s ease-out',
      },
    },
  },
  plugins: [],
}
