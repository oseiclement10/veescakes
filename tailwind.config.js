/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        burgandyLight:"#FCE5E8",
        burgandyDark:"#990044",
      }
    },
  },
  plugins: [],
}

