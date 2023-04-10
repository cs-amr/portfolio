/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        "primary":"#2d2e32",
        "sec":"#147efb",
        "bg":"#f9f9f9",
        "text":"#8e8e8e",
      },
      fontFamily:{
        "poppins":['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

