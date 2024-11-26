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
      'custom-shadow': '0 2px 6px rgba(0, 0, 0, 0.25)',
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
      ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
    },
    keyframes: {
      blink: {
        '0%, 100%': { color: '#002812', opacity: '1' },
        '25%': {color: 'white', opacity:'0.25'},
        '50%': { color: 'white', opacity:'1' },
        '75%' : {color:'#002812', opacity: '0.75'  }
      },
      ping: {
        '0%': { transform: 'scale(0.5)', opacity: '0' },
        '50%': { transform: 'scale(1)', opacity: '0.5' },
        '75%': { transform: 'scale(2)', opacity: '0.75' },
        '100%': { transform: 'scale(2)', opacity: '1' },
      },
    },
  },
  plugins: [],
}
