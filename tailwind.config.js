/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        burgandyLight: "#FCE5E8",
        burgandySemiDark: "#FF4C78",
        burgandyDark: "#990044",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
