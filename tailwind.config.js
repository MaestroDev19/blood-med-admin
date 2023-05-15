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
        "salmon-pink":"#F39A9D",
        "folly":"#E22837",
        "timberwolf":"#CED0CE",
        "platinum":"#F5F5F5"
      },
      fontFamily:{
        outfit:['Outfit','sans-serif'],
        hind:['Hind','sans-serif']
      },
      
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}