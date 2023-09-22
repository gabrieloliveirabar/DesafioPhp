/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      screens: {
        'phone': '480px',
        'tablet': '768px',
        'desktop': '1024px',

      },
      colors: {
        background_button: "#54DB32"
      }
    },
  },
  plugins: [],
}

