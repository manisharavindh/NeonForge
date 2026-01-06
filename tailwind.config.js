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
          green: '#00ff88',      // Primary accent
          cyan: '#00f0ff',       // Primary color
          purple: '#d946ef',     // Interactive accents
          pink: '#ff006e',       // Hover/emphasis
          accent: '#00f0ff',     // Alias for cyan
          light: '#e0ffff',      // Light text
          muted: '#4a5568',      // Muted gray
        },
        cyberpunk: {
          dark: '#0a0e27',       // Dark navy background
          darker: '#050812',     // Very dark navy
          card: '#0f1535',       // Dark blue card
          border: '#1a2a4a',     // Blue border
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
