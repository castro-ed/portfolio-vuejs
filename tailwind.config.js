/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        primary: '#F39C12',
        secundary: '#D35400'
      }
    },
  },
  plugins: [],
}

