/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        manrope:["Manrope"]
      },
     colors:{
           card_1:["rgb(231, 193, 211)"],
           card_2:['rgb(239, 218, 110)'],
           card_3:["rgb(164, 218, 195)"],
           card_4:['rgb(119, 170, 234)'],
           footerBg:['rgb(28, 28, 28)'],
           corruption:['rgb(231, 229, 230)'],
           accordion_1:['rgb(183, 48, 220)'],
           accordion_2:['rgb(164, 89, 237)'],
           accordion_3:['rgb(77, 69, 229)']
      },
      backgroundImage:{
        my_img:'url(./assets/bg.jpg)',
        ph_logo:'url(./assets/ph-logo.png)'
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

