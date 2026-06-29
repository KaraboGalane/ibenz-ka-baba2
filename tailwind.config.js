/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#c9a84c',
          light: '#e0c878',
          dark: '#a8893a',
        },
        ink: {
          DEFAULT: '#0d0d0d',
          900: '#0d0d0d',
          800: '#111111',
          700: '#1b1b1b',
          600: '#262626',
        },
        cloud: {
          DEFAULT: '#f8f8f8',
          dim: '#ededed',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        wordmark: ['"Italiana"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.35em',
      },
      backgroundImage: {
        'grille-lines':
          'repeating-linear-gradient(90deg, rgba(201,168,76,0.10) 0px, rgba(201,168,76,0.10) 2px, transparent 2px, transparent 22px)',
      },
      boxShadow: {
        gold: '0 10px 40px -10px rgba(201,168,76,0.35)',
        deep: '0 25px 60px -20px rgba(0,0,0,0.6)',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'fade-up': 'fadeUp 0.8s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
