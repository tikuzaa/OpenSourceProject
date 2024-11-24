/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        NewAmsterdam:  ["New Amsterdam", "sans-serif"],
        Exo:  ["Exo", "sans-serif"],
      }
    },
    boxShadow: {
      'custom-shadow': '0 4px 15px rgba(0, 0, 0, 0.5)',
    },
    fontFamily:{
      oxanium: ['Oxanium', 'sans-serif'],
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    animation: {
      blink: 'blink 0.5s infinite', 
    },
    keyframes: {
      blink: {
        '0%, 100%': { color: '#002812', opacity: '1' },
        '25%': {color: 'white', opacity:'0.25'},
        '50%': { color: 'white', opacity:'1' },
        '75%' : {color:'#002812', opacity: '0.75'  }
      },
      
    },
  },
  plugins: [],
}
