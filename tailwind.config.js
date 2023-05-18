/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
    
    
  ],
  theme: {
    extend: {
      colors:{
        "munshell":"#DC2E45",
        "seasalt":"#f6f6f6",
        "rasin-black":"#28282A",
        "folly":"#F35361",
        "platinum":"#F5F5F5"
      },
      fontFamily:{
        outfit:['Outfit','sans-serif'],
        hind:['Hind','sans-serif'],
        rubik:['Rubik','sans-serif']

      },
      
    },
  },
  plugins: [
    
  ],
}