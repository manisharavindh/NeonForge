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
          green: '#00ff41',
          teal: '#00d9ff',
          purple: '#d946ef',
          pink: '#ec4899',
        },
        cyberpunk: {
          dark: '#0a0e27',
          darker: '#050812',
          card: '#0f1628',
        }
      },
      fontFamily: {
        sans: ['Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      boxShadow: {
        'neon-green': '0 0 20px rgba(0, 255, 65, 0.5), inset 0 0 20px rgba(0, 255, 65, 0.1)',
        'neon-teal': '0 0 20px rgba(0, 217, 255, 0.5), inset 0 0 20px rgba(0, 217, 255, 0.1)',
        'glow-sm': '0 0 10px rgba(0, 255, 65, 0.3)',
        'glow-md': '0 0 20px rgba(0, 217, 255, 0.3)',
        'glow-lg': '0 0 30px rgba(217, 70, 239, 0.3)',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 255, 65, 0.5), inset 0 0 20px rgba(0, 255, 65, 0.1)' },
          '50%': { boxShadow: '0 0 30px rgba(0, 255, 65, 0.8), inset 0 0 20px rgba(0, 255, 65, 0.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scanlines: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 10px' },
        },
      },
      animation: {
        glow: 'glow 3s ease-in-out infinite',
        float: 'float 3s ease-in-out infinite',
        scanlines: 'scanlines 8s linear infinite',
      },
    },
  },
  plugins: [],
}
