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
          green: '#34d399',      // Soft emerald green
          teal: '#2dd4bf',       // Soft teal-green
          purple: '#10b981',     // Medium emerald
          pink: '#6ee7b7',       // Light mint green
          accent: '#34d399',     // Soft emerald accent
          light: '#a7f3d0',      // Very light mint
          muted: '#059669',      // Dark emerald
        },
        cyberpunk: {
          dark: '#0a1a0a',       // Dark background
          darker: '#050d05',     // Very dark background
          card: '#0d1a0d',       // Dark card
          border: '#1a3a1a',     // Green border
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
