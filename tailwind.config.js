/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        "brown":{
          100:'#ece0d1',
          300:'#dbc1ac',
          600:'#967259',
          900:'#634832'
        }
      },
      boxShadow:{
        "shadow-normal": "0px 1px 10px rgba(0,0,0,0.05)",
      },
      borderRadius:{
        "4xl": "2rem"
      },
      fontFamily:{
        "Sahel":"Sahel",
        "Morabba":"Morabba",
        "MorabbaBold":"Morabba Bold",
        "MorabbaHeavy":"Morabba Heavy",
      }
    },
  },
  plugins: [],
}

