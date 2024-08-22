/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        manrope:["Manrope"]
      },
     colors:{
        bbg:['rgb(247,247,247)']
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

