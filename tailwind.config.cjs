/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FFF9E6',
          100: '#FCE6A4',
          200: '#F7D46A',
          300: '#F0BD2E',
          400: '#D4A017',
          500: '#B8890E',
          600: '#9C7409',
          700: '#7F5D07',
          800: '#5F4605',
          900: '#3E2E03',
        },
        dark: {
          900: '#0B0B0E',
          800: '#111114',
          700: '#16161A',
          600: '#1E1E24',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(212, 160, 23, 0.5)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

