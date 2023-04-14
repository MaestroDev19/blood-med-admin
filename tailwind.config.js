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
        "seasalt":"#F4F7F5",
        "rasin-black":"#23231A",
        "berkeley-blue":"#12355B",
        "salmon-pink":"#F39A9D",
        "timberwolf":"#CED0CE",
        "platinum":"#E7EEEA"
      },
      fontFamily:{
        opensans:['Opensans','sans-serif'],
        raleway:['Raleway','sans-serif'],
        poppins:['Poppins','sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}