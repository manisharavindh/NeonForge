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
          green: '#4ade80',      // Soft mint green
          teal: '#22d3ee',       // Soft cyan
          purple: '#a78bfa',     // Soft purple
          pink: '#f472b6',       // Soft pink
          accent: '#06b6d4',     // Primary accent
        },
        cyberpunk: {
          dark: '#0f172a',       // Deep navy
          darker: '#020617',     // Almost black
          card: '#1e293b',       // Card gray
          border: '#334155',     // Border color
        }
      },
      fontFamily: {
        sans: ['Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      boxShadow: {
        'neon-green': '0 0 30px rgba(74, 222, 128, 0.2), inset 0 0 30px rgba(74, 222, 128, 0.05)',
        'neon-teal': '0 0 30px rgba(34, 211, 238, 0.2), inset 0 0 30px rgba(34, 211, 238, 0.05)',
        'glow-sm': '0 0 15px rgba(74, 222, 128, 0.15)',
        'glow-md': '0 0 25px rgba(34, 211, 238, 0.15)',
        'glow-lg': '0 0 40px rgba(167, 139, 250, 0.15)',
        'elevated': '0 20px 50px rgba(0, 0, 0, 0.3)',
        'card': '0 8px 32px rgba(0, 0, 0, 0.1)',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 30px rgba(74, 222, 128, 0.2), inset 0 0 30px rgba(74, 222, 128, 0.05)' },
          '50%': { boxShadow: '0 0 50px rgba(74, 222, 128, 0.35), inset 0 0 30px rgba(74, 222, 128, 0.1)' },
        },
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
        glow: 'glow 3s ease-in-out infinite',
        float: 'float 3s ease-in-out infinite',
        fadeInUp: 'fadeInUp 0.6s ease-out',
      },
    },
  },
  plugins: [],
}
