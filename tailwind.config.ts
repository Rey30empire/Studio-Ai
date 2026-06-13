import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        nexus: {
          dark: '#0a0e27',
          darker: '#050710',
          purple: '#a855f7',
          'purple-bright': '#d946ef',
          blue: '#06b6d4',
          'blue-bright': '#0ea5e9',
          'neon-purple': '#c084fc',
          'neon-blue': '#38bdf8',
        },
        glass: {
          light: 'rgba(255, 255, 255, 0.05)',
          lighter: 'rgba(255, 255, 255, 0.08)',
          medium: 'rgba(255, 255, 255, 0.1)',
        },
      },
      backgroundColor: {
        'glass-sm': 'rgba(20, 24, 50, 0.4)',
        'glass-md': 'rgba(15, 18, 40, 0.6)',
        'glass-lg': 'rgba(10, 14, 39, 0.7)',
      },
      backdropFilter: {
        'glass': 'blur(10px)',
      },
      boxShadow: {
        'glow-purple': '0 0 20px rgba(168, 85, 247, 0.3)',
        'glow-blue': '0 0 20px rgba(6, 182, 212, 0.3)',
        'glow-purple-lg': '0 0 40px rgba(168, 85, 247, 0.4)',
        'glow-blue-lg': '0 0 40px rgba(6, 182, 212, 0.4)',
        'neon-purple': '0 0 30px rgba(212, 70, 239, 0.5)',
        'neon-blue': '0 0 30px rgba(6, 182, 212, 0.5)',
      },
      borderColor: {
        'glass': 'rgba(168, 85, 247, 0.3)',
        'glass-blue': 'rgba(6, 182, 212, 0.3)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'flicker': 'flicker 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'flicker': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}

export default config
