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
          green: '#a78bfa',      // Soft purple - primary
          teal: '#c4b5fd',       // Light purple
          purple: '#8b5cf6',     // Medium purple
          pink: '#d8b4fe',       // Pale purple
          accent: '#a78bfa',     // Soft purple accent
          light: '#e9d5ff',      // Very light purple
          muted: '#7c3aed',      // Muted purple
        },
        cyberpunk: {
          dark: '#1f1f3d',       // Dark blue-purple
          darker: '#0f0f1e',     // Darker blue-purple
          card: '#1a1a2e',       // Dark card background
          border: '#2d1b4e',     // Dark purple border
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
