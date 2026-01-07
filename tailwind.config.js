/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1. Content: Points to all files where you use Tailwind classes
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      // 2. Colors: Defining the specific "Cruisy" brand palette
      colors: {
        cruisy: {
          50: '#f0fdfa',  // Very light background wash
          100: '#ccfbf1', // Light buttons/accents
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6', // Main Brand Color (The Logo Teal)
          600: '#0d9488', // Hover states
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a', // Deep text/footers
        },
        ocean: {
          DEFAULT: '#0ea5e9', // For secondary accents (sky blue)
        }
      },
      // 3. Fonts: Ensuring a modern, clean look
      fontFamily: {
        sans: [
          'Inter', 
          'ui-sans-serif', 
          'system-ui', 
          '-apple-system', 
          'BlinkMacSystemFont', 
          'Segoe UI', 
          'Roboto', 
          'sans-serif'
        ],
      },
      // 4. Border Radius: Making cards slightly rounder for that "soft/breezy" feel
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      }
    },
  },
  plugins: [
    // Add plugins here if needed (e.g., @tailwindcss/forms)
  ],
}
