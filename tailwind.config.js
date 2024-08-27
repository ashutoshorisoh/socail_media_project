/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{js}"],
  theme: {
    extend: {
      fontFamily: {
        bungee: ['Bungee Tint', 'sans-serif'],
        matemasie: ['Matemasie', 'sans-serif'],
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-25%)' },
          '50%': { transform: 'translateY(0)' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        rotateClockwise: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        bounce: 'bounce 1s infinite',
        spin: 'spin 2s linear infinite',
        rotateClockwise: 'rotateClockwise 2s linear infinite',
      },
    },
  },
  plugins: [],
}
