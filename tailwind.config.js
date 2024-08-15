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
      fontFamily:{
        arsenal: ['Arsenal SC', 'sans-serif'],
        greyQo: ['Grey Qo', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
        openSans: ['Open Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      width:{
      },
    },
  },
  plugins: [],
}

