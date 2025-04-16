/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        heading: '#080808',
        black: '#000000',
        white: '#ffffff',
        orange: '#ffb646',
        primary: '#ff9330',
        secondary: '#ffe9d9',
        paragraph: '#080808cc',
      },
      fontFamily: {
        Syne: ['Syne', 'sans-serif'],
      },
      keyframes: {
        moveUp: {
          '0%': {
            opacity: 1,
            transform: 'translateX(0px) translateY(0px) scale(1)',
          },
          '25%': {
            opacity: 0,
            transform: 'translateX(10px) translateY(-10px) scale(0.9)',
          },
          '26%': {
            opacity: 0,
            transform: 'translateX(-10px) translateY(10px) scale(0.9)',
          },
          '55%': {
            opacity: 1,
            transform: 'translateX(0px) translateY(0px) scale(1)',
          },
        },
        animateSpin: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
      },
      animation: {
        moveUp: 'moveUp 0.8s linear',
        animateSpin: 'animateSpin 7s linear infinite',
      },
    },
  },
  plugins: [],
}