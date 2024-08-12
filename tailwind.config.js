/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,html,jsx}",
  ],
  theme: {
    screens: {
      sm : '480px',
      md : '768px',
    },
    extend: {
      width:{
      },
    },
  },
  plugins: [],
}

