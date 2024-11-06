

/** @type {import('tailwindcss').Config} */



export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        prop: ['Kaisei Tokumin', 'serif'], // Define Kaisei Tokumin como la fuente predeterminada
      },
      colors:{
        pink: '#FFE5FA',
        white: '#FDFAED',
        pinkk: '#E494D5'
      },
    },
  },
  plugins: [],
}

