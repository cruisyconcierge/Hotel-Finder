/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#34a4b8',
          dark: '#267a8a',
        },
        luxury: {
          dark: '#0f172a',
          sand: '#fdfbf7',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        display: ['Russo One', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-glow': 'pulse-glow 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideUp: {
          'from': { opacity: '0', transform: 'translateY(40px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-glow': {
          '0%': { boxShadow: '0 0 0 0 rgba(52, 164, 184, 0.4)' },
          '70%': { boxShadow: '0 0 0 15px rgba(52, 164, 184, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(52, 164, 184, 0)' },
        }
      }
    },
  },
  plugins: [],
}
