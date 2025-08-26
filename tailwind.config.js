/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        primary: {
          50: '#eef8ff',
          100: '#d9efff',
          200: '#baddff',
          300: '#8ac4ff',
          400: '#56a3ff',
          500: '#2d80ff',
          600: '#1161ff',
          700: '#064de2',
          800: '#093fab',
          900: '#0d397f'
        },
        accent: {
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9'
        },
        neon: '#4ef3f7'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      keyframes: {
        'gradient-move': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        'float': {
          '0%,100%': { transform: 'translateY(-3px)' },
          '50%': { transform: 'translateY(3px)' }
        },
        'fade-in': { '0%': { opacity: 0 }, '100%': { opacity: 1 } }
      },
      animation: {
        'gradient-move': 'gradient-move 12s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fade-in 1s ease forwards'
      }
    }
  },
  plugins: []
}
