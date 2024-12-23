/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgPrimary: '#FF5555',
        bgSecondary: '#FDE598'
      }
      ,
      fontFamily: {
        clash: ['"Clash Display"', 'sans-serif'], // Add your custom font
      },
      
    },
    
  },
  plugins: [],
}

